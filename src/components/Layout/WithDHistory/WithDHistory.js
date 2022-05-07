import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../Layout"
import HomeHeader from "../HeaderTitle/HeaderTitle"
import OrderStats from "../OrderStats/OrderStats"
import { WithdrawWindow, ConfirmWindow, SuccessWindow } from "./WithDialog/WithDialog"

import './WithDHistory.css'

import CashWithdraw from "../../../assets/images/cash withdraw.svg"
import Earning from "../../../assets/images/earning.svg"


export default function WithDHistory() {

    const totalTransact = useSelector(state => state.userUtilsState.totalTransact)
    const totalEarn = useSelector(state => state.userUtilsState.totalEarn)
    const totalWthdrw = useSelector(state => state.userUtilsState.totalWthdrw)
    const totalBonus = useSelector(state => state.userUtilsState.totalBonus)

    const balance = useSelector(state => state.userUtilsState.amountBalance)
    const wthdrwHistory = useSelector(state => state.userUtilsState.wthdrwHistory)

    const [showWithdrawDialog, setShowWithdrawDialog] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [successMssg, setSuccessMssg] = useState(false)

    const [selectBank, setSelectBank] = useState('')
    const [amount, setAmount] = useState('')
    const [accNo, setAccNo] = useState('')
    const [btnValidate, setBtnValidate] = useState(true)

    // FORM VALIDATION
    useEffect(() => {
        if ((selectBank !== '') && (selectBank !== "Error in fetching Banks") && (!amount.includes('.')) && (amount > 99) && (amount <= balance) && (accNo.toString().length === 10)) {
            setBtnValidate(false)
        } else {
            setBtnValidate(true)
        }
    }, [selectBank, amount, balance, accNo])


    return (
        <Layout>
            {showWithdrawDialog && <WithdrawWindow
                balance={balance} btnValidate={btnValidate}
                showConfirm={() => setShowConfirm(true)}
                closeWithdraw={() => setShowWithdrawDialog(false)}
                bank={selectBank} changeBank={(val) => setSelectBank(val)}
                amount={amount} changeAmount={(val) => setAmount(val)}
                accNo={accNo} changeAccNo={(val) => setAccNo(val)}
            />}
            {showConfirm && <ConfirmWindow
                balanceConfirm={balance} changeAccNo={(val) => setAccNo(val)}
                amountConfirm={amount} changeAmount={(val) => setAmount(val)}
                totalWthdrw={totalWthdrw} changeBank={(val) => setSelectBank(val)}
                closeConfirm={() => setShowConfirm(false)}
                showSuccess={() => setSuccessMssg(true)}
            />}
            {successMssg && <SuccessWindow closeSuccess={() => setSuccessMssg(false)} />}

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
