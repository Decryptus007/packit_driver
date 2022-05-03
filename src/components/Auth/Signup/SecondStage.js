import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    setSignupStage,
    setCountry,
    setMarital,
    setGender,
    setAltphone,
    setAddress,
} from "../../../features/userDetailsReducer";

const baseURL = 'https://restcountries.com/v2/regionalbloc/au'

export default function SecondStage(props) {
    const [countries, setCountries] = useState([{ name: 'Loading', flag: null }])

    const dispatch = useDispatch()
    const country = useSelector(state => state.userDetails.country)
    const marital = useSelector(state => state.userDetails.marital)
    const gender = useSelector(state => state.userDetails.gender)
    const altPhone = useSelector(state => state.userDetails.altPhone)
    const address = useSelector(state => state.userDetails.address)

    const btnRef = useRef()

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setCountries(response.data)
        })

        if ((country !== '') && (marital !== '') && (gender !== '') && (altPhone !== '' && altPhone.length >= 8) && (address !== '' && address.length >= 5)) {
            btnRef.current.disabled = false
        } else {
            btnRef.current.disabled = true
        }
    })


    return (
        <div className="sndStage">
            <img src={props.imgSLogo} alt="Packit" />
            <form onSubmit={e => e.preventDefault()}>
                <h3>Fill all form <span>(compulsory)</span></h3>
                <select value={country} onChange={e => dispatch(setCountry(e.target.value))}>
                    <option value={''}>Nationality</option>
                    {countries.map((country, id) => (
                        <option key={id} value={country.name}>{country.name}</option>
                    ))}
                </select>
                <select value={marital} onChange={e => dispatch(setMarital(e.target.value))}>
                    <option value={''}>Marital Status</option>
                    <option value={'Single'}>Single</option>
                    <option value={'Married'}>Married</option>
                    <option value={'Divorced'}>Divorced</option>
                </select>
                <select value={gender} onChange={e => dispatch(setGender(e.target.value))}>
                    <option value={''}>Gender</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Male'}>Male</option>
                </select>
                <input type={"tel"} placeholder="Other Phone No" value={altPhone} onChange={e => dispatch(setAltphone(e.target.value))} />
                <textarea placeholder="Permanent Home Addresss" value={address} onChange={e => dispatch(setAddress(e.target.value))} ></textarea>
                <button type="submit" ref={btnRef} onClick={() => dispatch(setSignupStage('stage3'))} >Next</button>
            </form>
            <FontAwesomeIcon className="backIcon" icon="fa-solid fa-chevron-left" onClick={() => dispatch(setSignupStage('stage1'))} />
        </div>
    )
}