import React, { useEffect, useRef, useState } from "react"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setAmountBalnce, setTotalWthdrw, setWthdrwHistory } from "../../../features/userUtilsReducer";

import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import OrderStats from "../OrderStats/OrderStats"
import Modal from "../../utils/Modal/Modal"

import './WithDHistory.css'

import CashWithdraw from "../../../assets/images/cash withdraw.svg"
import Earning from "../../../assets/images/earning.svg"

const bankURL = 'https://raw.githubusercontent.com/Decryptus007/nigerian-banks/master/banks.json'

export default function WithDHistory() {
    const date = new Date()

    const wthdrwHistory = useSelector(state => state.userUtilsState.wthdrwHistory)

    const [showWithdrawDialog, setShowWithdrawDialog] = useState(false)
    const [successMssg, setSuccessMssg] = useState(false)
    const [banks, setBanks] = useState([{ name: 'Loading', id: '0' }])

    const withdrawBtn = useRef()

    const [selectBank, setSelectBank] = useState('')
    const [amount, setAmount] = useState('')
    const [accNo, setAccNo] = useState('')

    const [warning, setWarning] = useState(false)

    const clearAllFunc = () => {
        setSelectBank('')
        setAmount('')
        setAccNo('')
    }

    const dispatch = useDispatch()

    const balance = useSelector(state => state.userUtilsState.amountBalance)
    const totalTransact = useSelector(state => state.userUtilsState.totalTransact)
    const totalEarn = useSelector(state => state.userUtilsState.totalEarn)
    const totalWthdrw = useSelector(state => state.userUtilsState.totalWthdrw)
    const totalBonus = useSelector(state => state.userUtilsState.totalBonus)

    // FORM VALIDATION
    useEffect(() => {
        if (withdrawBtn.current) {
            if ((selectBank !== '') && (selectBank !== "Error in fetching Banks") && (!amount.includes('.')) && (amount > 99) && (amount <= balance) && (accNo.toString().length === 10)) {
                withdrawBtn.current.disabled = false
            } else {
                withdrawBtn.current.disabled = true
            }

            if (amount > balance) {
                setWarning(true)
            } else {
                setWarning(false)
            }
        }
    }, [selectBank, amount, accNo, balance])

    useEffect(() => {
        axios.get(bankURL).then((response) => {
            setBanks(response.data)
        }).catch(() => { setBanks([{ name: 'Error in fetching Banks', id: '00' }]) })
    }, [setBanks])


    return (
        <Layout>
            {/* THE WITHDRAW WINDOW */}
            {showWithdrawDialog && <Modal onClick={() => null}>
                <p>Select Bank</p>
                <select value={selectBank} onChange={e => setSelectBank(e.target.value)}>
                    <option value={''}>---</option>
                    {banks.map(el => (
                        <option key={el.id} value={el.name} >{el.name}</option>
                    ))}
                </select>
                {warning && <small style={{ color: 'red', fontWeight: '400', fontSize: 'x-small' }}>The amount is {'>'} than the balance</small>}
                <input value={amount} type={'number'} placeholder='Withdraw Amount'
                    onChange={e => setAmount(e.target.value)} />
                <input value={accNo} type={'number'} placeholder='Account Number'
                    onChange={e => setAccNo(e.target.value)} />
                <input type={'text'} placeholder='Account Name' disabled />
                <div className="confirmBtnHolder">
                    <button ref={withdrawBtn} className="confirmBtn" onClick={() => {
                        dispatch(setAmountBalnce(balance - amount))
                        dispatch(setTotalWthdrw(totalWthdrw + parseInt(amount)))
                        dispatch(setWthdrwHistory({ name: 'Withdrawal', price: amount, date: date.toLocaleDateString(), time: date.toLocaleTimeString() }))
                        setShowWithdrawDialog(false)
                        setSuccessMssg(true)
                        clearAllFunc()
                    }} disabled={!accNo}>Withdraw</button>
                    <button className="confirmBtn" onClick={() => {
                        setShowWithdrawDialog(false)
                        clearAllFunc()
                    }}>Cancel</button>
                </div>
            </Modal>}
            {/* END OF THE WITHDRAW WINDOW */}

            {/* THE SUCCESS WINDOW */}
            {successMssg && <Modal onClick={() => setSuccessMssg(false)}>
                <FontAwesomeIcon style={{ fontSize: '300%', margin: '5% auto' }} icon="fa-solid fa-circle-check" />
                <p>WITHDRAWAL SUCCESSFUL</p>
            </Modal>}
            {/*  END OF THE SUCCESS WINDOW */}

            <div className="withDHistory">
                <HomeHeader currentPage="Withdrawal History" />
                <OrderStats
                    cardTitle1="Total Transaction"
                    cardTitle2="Total Earning"
                    cardTitle3="Total Withdrawal"
                    cardTitle4="Bonus Earned"
                    cardAmount1={totalTransact}
                    cardAmount2={totalEarn}
                    cardAmount3={totalWthdrw}
                    cardAmount4={totalBonus}
                />
                <main>
                    <section>
                        <div className="withdrawAd"></div>
                        <div className="withdrawCard">
                            <p><span><FontAwesomeIcon style={{ fontSize: 'x-large', color: 'white', marginRight: '1%' }} icon="fa-solid fa-hand-holding-dollar" /></span>Earned</p>
                            <h1><b>₦{balance}.00</b></h1>
                            <div>
                                <button onClick={() => setShowWithdrawDialog(true)}>Withdraw Earning</button>
                            </div>
                        </div>
                    </section>
                    <div className="wHistoryHolder">
                        {wthdrwHistory.length !== 0 ? wthdrwHistory.map((item, id) => {
                            let imgSrc
                            let priceStyle
                            if (item.name === "Withdrawal") {
                                imgSrc = CashWithdraw
                                priceStyle = { color: 'red' }
                            } else {
                                imgSrc = Earning
                                priceStyle = { color: 'limegreen' }
                            }
                            return <div key={id} className="withdrawHistory">
                                <div className="withdrawDetails">
                                    <img src={imgSrc} alt="CashWithdraw" />
                                    <div className="wHead">
                                        <h3><b>{item.name}</b></h3>
                                        <div>
                                            <small>{item.date}</small>
                                            <small>{item.time}</small>
                                        </div>
                                    </div>
                                </div>
                                <p style={priceStyle}><b>{item.name === 'Withdrawal' && '-'}₦{item.price}</b></p>
                            </div>
                        }) : <div style={{ color: 'grey' }}>
                            <h2>No Transaction yet</h2>
                            <p>Withdaw balance to test :)</p>
                        </div>}
                    </div>
                </main>
            </div>
        </Layout>
    )
}
