import React from 'react'

export default function Contact(props) {
    let mystyle = {
        color:'#fff'
    }
    let mystyle2 = {
        color:'#000'
    }
    return (
        <div className="main">
            <div className="container my-5">
                    <h1 className="text-center" style={props.mode==='dark'?mystyle:mystyle2}>Contact Me</h1>
                    <div className="info text-center">
                        <p style={props.mode==='dark'?mystyle:mystyle2}>
                        Created by : Ankit Kumar<br/>
                        Email Address : ankitjaiswalnick@gmail.com<br/>
                        Github link : https://github.com/AnkitKumar1303
                        </p>
                    </div>
            </div>
        </div>
    )
}