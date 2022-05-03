import React from "react";
import { useSelector, useDispatch } from "react-redux"

import FirstStage from "./FirstStage";
import SecondStage from "./SecondStage";
import VerifyPg from "../Verification/Verification"
import FourthStage from "./FourthStage";
import FifthStage from "./FifthStage";

import './Signup.css'
import './OtherStages.css'

import packitLogo from '../../../assets/images/pack it.png'
import { setSignupStage } from "../../../features/userDetailsReducer";

export default function Signup() {

    const dispatch = useDispatch()
    const signupPgState = useSelector(state => state.userDetails.signupStage)
    const email = useSelector(state => state.userDetails.email)

    let output
    switch (signupPgState) {
        case 'stage1':
            output = <FirstStage />
            break;

        case 'stage2':
            output = <SecondStage imgSLogo={packitLogo} />
            break;

        case 'stage3':
            output = <VerifyPg
                email={email}
                backPg={() => dispatch(setSignupStage('stage2'))}
                fwdPg={() => dispatch(setSignupStage('stage4'))}
            />
            break;

        case 'stage4':
            output = (<FourthStage imgFLogo={packitLogo} />)
            break;

        case 'stage5':
            output = <FifthStage imgFiLogo={packitLogo} />
            break;

        default:
            break;
    }


    return output
}