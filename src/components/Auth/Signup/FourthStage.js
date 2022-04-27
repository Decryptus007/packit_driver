import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FourthStage(props) {
    
    const oneImg = (<>
        <div>
            <img src={props.idVal} alt="ID" />
            <label className="uploadIcon">
                <input style={{ height: "0", width: "0", opacity: "0" }} accept="image/*" type={"file"} onChange={e => props.setIdval(URL.createObjectURL(e.target.files[0]))} />
                <FontAwesomeIcon icon="fa-solid fa-file-circle-plus" />
            </label>
        </div>
        <small>Upload ID</small>
    </>)

    const twoImg = (<>
        <section>
            <div>
                <img src={props.idVal} alt="ID" />
                <label className="uploadIcon">
                    <input style={{ height: "0", width: "0", opacity: "0" }} accept="image/*" type={"file"} onChange={e => props.setIdval(URL.createObjectURL(e.target.files[0]))} />
                    <FontAwesomeIcon icon="fa-solid fa-file-circle-plus" />
                </label>
                <small>Front</small>
            </div>
            <div>
                <img src={props.idVal2} alt="ID" />
                <label className="uploadIcon">
                    <input style={{ height: "0", width: "0", opacity: "0" }} accept="image/*" type={"file"} onChange={e => props.setIdval2(URL.createObjectURL(e.target.files[0]))} />
                    <FontAwesomeIcon icon="fa-solid fa-file-circle-plus" />
                </label>
                <small>Back</small>
            </div>
        </section>
    </>)

    let output
    switch (props.value) {
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
                <select value={props.value} onChange={e => props.setValue(e.target.value)}>
                    <option value='' >Choose ID Type</option>
                    <option value='NatID' >National ID</option>
                    <option value='Vcard' >Voter's Card</option>
                    <option value='IntPass' >International Passport</option>
                    <option value='NIN'>NIN Slip</option>
                </select>
                {output}
                <button type="submit"onClick={() => props.setFNxtPg('stage5')}>Next</button>
            </form>
            <FontAwesomeIcon className="backIcon" icon="fa-solid fa-chevron-left" onClick={() => props.setFNxtPg('stage2')} />
        </div>
    )
}