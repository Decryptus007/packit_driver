import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../Layout";
import HomeHeader from "../HeaderTitle/HeaderTitle";

import './Chat.css'

import ClientImg from '../../../assets/images/profileImg.png'

export default function Chat() {

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
                        <section>
                            <textarea placeholder='Type your message' ></textarea>
                            <div className="chatMedia">
                                <label>
                                    <input type={'file'} />
                                    <FontAwesomeIcon className="clientStatus" icon="fa-solid fa-paperclip" />
                                </label>
                                <label>
                                    <input type={'file'} accept="image/*" />
                                    <FontAwesomeIcon className="clientStatus" icon="fa-solid fa-image" />
                                </label>
                                <button>
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