
import React from "react"

import Img from "../../../../assets/images/pack it.png"

import "./About.css"

export default function About () {

    const members = [
        {name: "Dr. Abdullahi AbdulRahman", title: "Head Of Project"}
    ]

    return (
        <div className="aboutUI">
            <img src={Img} alt="IMG" />
            <h2>About</h2>
            {members.map((member, id) => (
                <div className="member" key={id}>
                    <h3>{member.title}</h3>
                    <p>{member.name}</p>
                </div>
            ))}
        </div>
    )
}