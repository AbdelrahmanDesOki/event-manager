import React, { useState } from "react"
import Axios from "axios"
import { useNavigate, Navigate } from "react-router-dom";

export default function (props) {
    const nav = useNavigate()
    const [emailLog, setEmailLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")
    const [loginState, setLoginState] = useState("Enter credentials")

    const login = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:5000/login", {
            email: emailLog,
            password: passwordLog
        }).then((response) => {
            if (response.data.message) {
                setLoginState(response.data.message)
                return <Navigate replace to="/" />
            }
            else {
                setLoginState("Welcome!")
                nav('/user')
            }
        })
    }
    return (<div className="Auth-form-container">
        <form className="Auth-form">
            <div className="Auth-form-content">
                <div>
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Email Address"
                        onChange={(e) => {
                            setEmailLog(e.target.value)
                        }}
                    />
                    <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Password"
                        onChange={(e) => {
                            setPasswordLog(e.target.value)
                        }}
                    />
                    <button type="submit" className="btn btn-primary" onClick={login}>
                        Submit
                    </button>
                </div>
                <h1>
                    {loginState}
                </h1>
            </div>
        </form>
    </div>)


}