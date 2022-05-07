import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setAmountBalnce, setTotalWthdrw, setWthdrwHistory } from "../../../../features/userUtilsReducer";

import Modal from "../../../utils/Modal/Modal"

const date = new Date()
const bankURL = 'https://raw.githubusercontent.com/Decryptus007/nigerian-banks/master/banks.json'

export const WithdrawWindow = (props) => {
    const [banks, setBanks] = useState([{ name: 'Loading', id: '0' }])
    const [warning, setWarning] = useState(false)

    useEffect(() => {
        axios.get(bankURL).then((response) => {
            setBanks(response.data)
        }).catch(() => { setBanks([{ name: 'Error in fetching Banks', id: '00' }]) })
    }, [setBanks])

    useEffect(() => {
        if (props.amount > props.balance) {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }, [props.amount, props.balance])

    const clearAllFunc = () => {
        props.changeBank('')
        props.changeAmount('')
        props.changeAccNo('')
    }


    return (
        <Modal onClick={() => null}>
            <p>Select Bank</p>
            <select value={props.bank} onChange={e => props.changeBank(e.target.value)}>
                <option value={''}>---</option>
                {banks.map(el => (
                    <option key={el.id} value={el.name} >{el.name}</option>
                ))}
            </select>
            {warning && <small style={{ color: 'red', fontWeight: '400', fontSize: 'x-small' }}>The amount is {'>'} than the balance</small>}
            <input value={props.amount} type={'number'} placeholder='Withdraw Amount'
                onChange={e => props.changeAmount(e.target.value)} />
            <input value={props.accNo} type={'number'} placeholder='Account Number'
                onChange={e => props.changeAccNo(e.target.value)} />
            <input type={'text'} placeholder='Account Name' disabled />
            <div className="confirmBtnHolder">
                <button className="confirmBtn" onClick={() => {
                    props.closeWithdraw()
                    props.showConfirm()
                }} disabled={props.btnValidate}>Withdraw</button>
                <button className="confirmBtn" onClick={() => {
                    props.closeWithdraw()
                    clearAllFunc()
                }}>Cancel</button>
            </div>
        </Modal>
    )
}

export const ConfirmWindow = (props) => {
    const [pwd, setPwd] = useState('')

    const dispatch = useDispatch()

    const confirmPwd = useRef()
    const inputPwd = useRef()

    useEffect(() => {
        if (confirmPwd.current) {
            inputPwd.current.focus()
            
            if ((pwd === '12345678')) {
                confirmPwd.current.disabled = false
            } else {
                confirmPwd.current.disabled = true
            }
        }
    }, [pwd])

    const clearAllFunc = () => {
        props.changeBank('')
        props.changeAmount('')
        props.changeAccNo('')
    }

    return (
        <Modal onClick={() => null}>
            <small>Enter your password to confirm withdraw</small>
            <input ref={inputPwd} placeholder="Password" type={'password'} value={pwd} onChange={e => setPwd(e.target.value)} />
            <div className="confirmBtnHolder">
                <button ref={confirmPwd} className="confirmBtn" onClick={() => {
                    dispatch(setAmountBalnce(props.balanceConfirm - props.amountConfirm))
                    dispatch(setTotalWthdrw(props.totalWthdrw + parseInt(props.amountConfirm)))
                    dispatch(setWthdrwHistory({ name: 'Withdrawal', price: props.amountConfirm, date: date.toLocaleDateString(), time: date.toLocaleTimeString() }))
                    props.closeConfirm()
                    props.showSuccess()
                    clearAllFunc()
                }} disabled={!pwd}>Confirm</button>
                <button className="confirmBtn" onClick={() => {
                    props.closeConfirm()
                    clearAllFunc()
                }}>Cancel</button></div>
        </Modal>
    )
}

export const SuccessWindow = (props) => {

    return (
        <Modal onClick={() => props.closeSuccess()}>
            <FontAwesomeIcon style={{ fontSize: '300%', margin: '5% auto' }} icon="fa-solid fa-circle-check" />
            <p>WITHDRAWAL SUCCESSFUL</p>
        </Modal>
    )
}