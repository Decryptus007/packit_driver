import React, { useState } from "react";

import FirstStage from "./FirstStage";
import SecondStage from "./SecondStage";
import VerifyPg from "../Verification/Verification"

import './Signup.css'
import './OtherStages.css'

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
                output = <VerifyPg setVNxtPg={(e) => setPgvalue(e)} />
                break;

            default:
                break;
        }
    }
    nextForm(pgValue)


    return output
}