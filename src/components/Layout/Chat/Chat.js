import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setChatValue } from "../../../features/chatReducer";

import Layout from "../Layout";
import HomeHeader from "../HeaderTitle/HeaderTitle";

import './Chat.css'

import ClientImg from '../../../assets/images/profileImg.png'

export default function Chat() {
    const dispatch = useDispatch()

    const chatMssg = useSelector(state => state.chats.chatValue)

    const [mssgVal, setMssgVal] = useState('')

    const inView = useRef()
    const inputActive = useRef()

    const sendMssgFunc = (val) => {
        if(!val) return
        dispatch(setChatValue({mssg: val, style: 'sender'}))
        setMssgVal('')
        inputActive.current.focus()
        inView.current.scrollIntoView()
        recieveMssg()
    }

    const recieveMssg = () => {
        setTimeout(() => {
            dispatch(setChatValue({mssg: 'This is a dummy message that keeps replying you :)', style: 'reciever'}))
            inView.current.scrollIntoView()
        }, 2000)
    }

    return (
        <Layout>
            <div className="chat">
                <HomeHeader currentPage="Chat" />
                <div className="chatUI">
                    <div className="chatHeader">
                        <div className="clientDetails">
                            <div className="clientImgHolder">
                                <img src={ClientImg} className="clientImg" alt="ClientImg" />
                                <FontAwesomeIcon className="clientStatus" icon="fa-solid fa-circle" />
                            </div>
                            <p>Client Name</p>
                        </div>
                        <div className="chatIntro">
                            <h2 style={{ color: '#6df5b1' }}>Hi there!</h2>
                            <small>Here you can chat with your current sender.</small>
                        </div>
                    </div>
                    <main>
                        <div className="convo">
                            {chatMssg.map((el, id) => (
                                <div key={id} className={el.style}>
                                    <small>{el.mssg}</small>
                                </div>
                            ))}
                            <div ref={inView} id="dummy" style={{padding: '1% 0'}}></div>
                        </div>
                        <section>
                            <textarea ref={inputActive} value={mssgVal}
                                onChange={(e) => setMssgVal(e.target.value)} placeholder='Type your message'>
                            </textarea>
                            <div className="chatMedia">
                                <label>
                                    <input type={'file'} />
                                    <FontAwesomeIcon className="clientStatus" icon="fa-solid fa-paperclip" />
                                </label>
                                <label>
                                    <input type={'file'} accept="image/*" />
                                    <FontAwesomeIcon className="clientStatus" icon="fa-solid fa-image" />
                                </label>
                                <button onClick={() => sendMssgFunc(mssgVal)}>
                                    <FontAwesomeIcon className="clientStatus" icon="fa-solid fa-paper-plane" />
                                </button>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </Layout>
    )
}
