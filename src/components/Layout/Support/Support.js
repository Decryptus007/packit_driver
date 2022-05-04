
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../Layout'
import HomeHeader from '../HeaderTitle/HeaderTitle'

import './Support.css'
import './SupportMobile.css'

export default function Support() {

    const [ticketsLog, setTicketsLog] = useState([])
    const [issueImg, setIssueImg] = useState('')

    let bgImg = {
        backgroundColor: 'transparent',
        backgroundImage: `url(${issueImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    useEffect(() => {
        setTicketsLog(e => [...e, {
            subject: "Transaction not going through",
            desc: "My card is declined and I can't view my balance",
            status: "PENDING"
        },
        {
            subject: "Account Error Setup",
            desc: "I got error with my account setup",
            status: "RESOLVED"
        },
        {
            subject: "Password Mutation Error",
            desc: "I'm unable to change my password.",
            status: "PENDING"
        }])
    }, [])

    return (
        <Layout>
            <div className="support">
                <HomeHeader currentPage="Support" />
                <div className='supportUI'>
                    <h2>What do you need help with?</h2>
                    <form className='supportForm' onSubmit={e => e.preventDefault()}>
                        <div className='reportText'>
                            <label><span>Subject:</span>
                                <input type={'text'} />
                            </label>
                            <label id='describeForm'><span>Description: <br />
                                <small>Describe your request <br />
                                    Our support team will attend to you soon
                                </small></span>
                                <textarea />
                            </label>
                            <button type='submit' >SEND</button>
                        </div>
                        <div className='reportDoc'>
                            <p>Attachment (optional)</p>
                            <label className='reportAttach' style={bgImg}>
                                <input type={"file"} accept="image/*"
                                    onChange={e => setIssueImg(URL.createObjectURL(e.target.files[0]))}
                                />
                                <FontAwesomeIcon icon="fa-solid fa-file-arrow-up" />
                            </label>
                            <span>Attach a document</span>
                        </div>
                    </form>
                    <div className='ticketsUI'>
                        <h3>Tickets</h3>
                        <section id='supportHistory' style={{maxHeight: '600px', overflowY: 'auto'}}>
                            {ticketsLog.map((ticket, id) => {
                                let output
                                if (ticket.status === "RESOLVED") {
                                    output = (
                                        <div className='tickets' key={id}>
                                            <div className='ticketDetails'>
                                                <h3>{ticket.subject}</h3>
                                                <p>{ticket.desc}</p>
                                            </div>
                                            <div className='ticketStatus'>
                                                <p className='resolved'>{ticket.status}</p>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    output = (
                                        <div className='tickets' key={id}>
                                            <div className='ticketDetails'>
                                                <h3>{ticket.subject}</h3>
                                                <p>{ticket.desc}</p>
                                            </div>
                                            <div className='ticketStatus'>
                                                <p>{ticket.status}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                return output
                            })}
                        </section>
                    </div>
                </div>
            </div>
        </Layout >
    )
}