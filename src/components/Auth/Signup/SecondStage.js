import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import packitLogo from '../../../assets/images/pack it.png'

export default function SecondStage(props) {

    return (
        <div className="sndStage">
            <img src={packitLogo} alt="Packit" />
            <form onSubmit={e => e.preventDefault()}>
                <h3>Fill all form <span>(compulsory)</span></h3>
                <select value={props.country} onChange={e => props.setCountry(e.target.value)}>
                    <option value={''}>Nationality</option>
                    <option value={'Nigeria'}>Nigeria</option>
                    <option value={'Ghana'}>Ghana</option>
                </select>
                <select value={props.marital} onChange={e => props.setMarital(e.target.value)}>
                    <option value={''}>Marital Status</option>
                    <option value={'Single'}>Single</option>
                    <option value={'Married'}>Married</option>
                </select>
                <select value={props.gender} onChange={e => props.setGender(e.target.value)}>
                    <option value={''}>Gender</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Male'}>Male</option>
                </select>
                <input type={"tel"} placeholder="Other Phone No" value={props.altPhone} onChange={e => props.setAltphone(e.target.value)} />
                <textarea placeholder="Permanent Home Addresss" value={props.address} onChange={e => props.setAddress(e.target.value)} ></textarea>
                <button type="submit" onClick={() => props.setTNxtPg('stage3')} >Next</button>
            </form>
            <FontAwesomeIcon className="backIcon" icon="fa-solid fa-chevron-left" onClick={() => props.setTNxtPg('stage1')} />
        </div>
    )
}