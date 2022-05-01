import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    setSignupStage,
    setSelectId,
    setIdval,
    setIdvalState,
    setIdval2,
    setIdval2State
} from "../../../features/signupReducer";

export default function FourthStage(props) {

    const dispatch = useDispatch()

    const defaultId = useSelector(state => state.signupState.idVal)
    const defaultId2 = useSelector(state => state.signupState.idVal2)
    const selectId = useSelector(state => state.signupState.selectId)

    const btnRef = useRef()

    useEffect(() => {
        if (selectId === 'NIN' && defaultId.imgState === true) {
            btnRef.current.disabled = false
        } else if (((selectId === 'NatID') || (selectId === 'Vcard') || (selectId === 'IntPass')) && ((defaultId.imgState === true) && (defaultId2.imgState === true))) {
            btnRef.current.disabled = false
        } else {
            btnRef.current.disabled = true
        }
    })

    const oneImg = (<>
        <div>
            <img src={defaultId.imgDefault} alt="ID" />
            <label className="uploadIcon">
                <input style={{ height: "0", width: "0", opacity: "0" }} accept="image/*" type={"file"}
                    onChange={e => {
                        dispatch(setIdval(URL.createObjectURL(e.target.files[0])))
                        dispatch(setIdvalState(true))
                    }}
                />
                <FontAwesomeIcon icon="fa-solid fa-file-circle-plus" />
            </label>
        </div>
        <small>Upload ID</small>
    </>)

    const twoImg = (<>
        <section>
            <div>
                <img src={defaultId.imgDefault} alt="ID" />
                <label className="uploadIcon">
                    <input style={{ height: "0", width: "0", opacity: "0" }} accept="image/*" type={"file"}
                        onChange={e => {
                            dispatch(setIdval(URL.createObjectURL(e.target.files[0])))
                            dispatch(setIdvalState(true))
                        }}
                    />
                    <FontAwesomeIcon icon="fa-solid fa-file-circle-plus" />
                </label>
                <small>Front</small>
            </div>
            <div>
                <img src={defaultId2.imgDefault} alt="ID" />
                <label className="uploadIcon">
                    <input style={{ height: "0", width: "0", opacity: "0" }} accept="image/*" type={"file"}
                        onChange={e => {
                            dispatch(setIdval2(URL.createObjectURL(e.target.files[0])))
                            dispatch(setIdval2State(true))
                        }}
                    />
                    <FontAwesomeIcon icon="fa-solid fa-file-circle-plus" />
                </label>
                <small>Back</small>
            </div>
        </section>
    </>)

    let output = <main className="loader">Loading...</main>
    switch (selectId) {
        case 'NatID':
            output = twoImg
            break;
        case 'Vcard':
            output = twoImg
            break;
        case 'IntPass':
            output = twoImg
            break;
        case 'NIN':
            output = oneImg
            break;
        default:
            break;
    }


    return (
        <div className="frthStage">
            <img src={props.imgFLogo} alt="Packit" />
            <form onSubmit={e => e.preventDefault()}>
                <h3 style={{ fontWeight: "500" }}>Upload Mode Of Identification</h3>
                <select value={selectId} onChange={e => dispatch(setSelectId(e.target.value))}>
                    <option value='' >Choose ID Type</option>
                    <option value='NatID' >National ID</option>
                    <option value='Vcard' >Voter's Card</option>
                    <option value='IntPass' >International Passport</option>
                    <option value='NIN'>NIN Slip</option>
                </select>
                {output}
                <button ref={btnRef} type="submit" onClick={() => dispatch(setSignupStage('stage5'))}>Next</button>
            </form>
            <FontAwesomeIcon className="backIcon" icon="fa-solid fa-chevron-left" onClick={() => dispatch(setSignupStage('stage2'))} />
        </div>
    )
}