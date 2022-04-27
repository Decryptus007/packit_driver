import React, { useState } from "react";

import FirstStage from "./FirstStage";
import SecondStage from "./SecondStage";
import VerifyPg from "../Verification/Verification"
import FourthStage from "./FourthStage";
import FifthStage from "./FifthStage";

import './Signup.css'
import './OtherStages.css'

import packitLogo from '../../../assets/images/pack it.png'
import ID from '../../../assets/images/defaultId.png'
import profileImg from '../../../assets/images/profileImg.png'

export default function Signup() {
    const [pgValue, setPgvalue] = useState('stage1')

    //Form state handling [STAGE ONE]
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [cpwd, setCpwd] = useState('')

    // [STAGE TWO]
    const [country, setCountry] = useState('')
    const [marital, setMarital] = useState('')
    const [gender, setGender] = useState('')
    const [altPhone, setAltphone] = useState('')
    const [address, setAddress] = useState('')

    // [STAGE FOUR]
    const [value, setValue] = useState('')
    const [idVal, setIdval] = useState(ID)
    const [idVal2, setIdval2] = useState(ID)

    //STAGE FIVE [PROFILE PIC]
    const [profilePic, setProfpic] = useState(profileImg)

    let output
    function nextForm(param) {
        switch (param) {
            case 'stage1':
                output = (<FirstStage
                    fname={fname}
                    setFname={(e) => setFname(e)}
                    lname={lname}
                    setLname={(e) => setLname(e)}
                    phone={phone}
                    setPhone={(e) => setPhone(e)}
                    email={email}
                    setEmail={(e) => setEmail(e)}
                    pwd={pwd}
                    setPwd={(e) => setPwd(e)}
                    cpwd={cpwd}
                    setCpwd={(e) => setCpwd(e)}
                    setNxtPg={(e) => setPgvalue(e)}
                />)
                break;

            case 'stage2':
                output = (<SecondStage
                    imgSLogo={packitLogo}
                    country={country}
                    setCountry={(e) => setCountry(e)}
                    marital={marital}
                    setMarital={(e) => setMarital(e)}
                    gender={gender}
                    setGender={(e) => setGender(e)}
                    altPhone={altPhone}
                    setAltphone={(e) => setAltphone(e)}
                    address={address}
                    setAddress={(e) => setAddress(e)}
                    setTNxtPg={(e) => setPgvalue(e)}
                />)
                break;

            case 'stage3':
                output = <VerifyPg setVNxtPg={(e) => setPgvalue(e)} email={email} />
                break;

            case 'stage4':
                output = (<FourthStage
                    imgFLogo={packitLogo}
                    idVal={idVal}
                    setIdval={e => setIdval(e)}
                    idVal2={idVal2}
                    setIdval2={e => setIdval2(e)}
                    value={value}
                    setValue={e => setValue(e)}
                    setFNxtPg={(e) => setPgvalue(e)}
                />)
                break;

            case 'stage5':
                output = <FifthStage
                    imgFiLogo={packitLogo}
                    profilePic={profilePic}
                    setProfpic={e => setProfpic(e)}
                    setFiNxtPg={e => setPgvalue(e)}
                />
                break;

            default:
                break;
        }
    }
    nextForm(pgValue)


    return output
}