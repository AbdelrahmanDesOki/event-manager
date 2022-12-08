import React, { useState } from "react"
import Axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import './Auth.css'
import { useNavigate, Navigate } from "react-router-dom";
import UserForm from "../UserProfile/User";

export default function (props) {
    //const navigate = useNavigate()
    let [authMode, setAuthMode] = useState("signin")

    const nav = useNavigate()
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const [userNameReg, setUserNameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [emailLog, setEmailLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("")
    const [loginState, setLoginState] = useState("Enter credentials")

    const register = () => {
        Axios.post("http://localhost:5000/register", {
            userName: userNameReg,
            email: emailReg,
            password: passwordReg
        }).then((response) => {
            console.log(response)
        })
    }

    const login = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:5000/login", {
            email: emailLog,
            password: passwordLog
        }).then((response) => {
            if (response.data.message) {
                setLoginState(response.data.message)
            }
            else {
                setLoginState("Welcome!")
                nav('/user')
                UserForm.setWelcom("Welcome here!")
                UserForm.setEmail(emailLog)
            }
        })
    }

    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                onChange={(e) => {
                                    setEmailLog(e.target.value)
                                }}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e) => {
                                    setPasswordLog(e.target.value)
                                }}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" onClick={login}>
                                Login
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                        <h1>
                            {loginState}
                        </h1>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            onChange={(e) => {
                                setUserNameReg(e.target.value)
                            }}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            onChange={(e) => {
                                setEmailReg(e.target.value)
                            }}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            onChange={(e) => {
                                setPasswordReg(e.target.value)
                            }}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={register}>
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                    <h1>
                        {loginState}
                    </h1>
                </div>
            </form>
        </div>
    )
}