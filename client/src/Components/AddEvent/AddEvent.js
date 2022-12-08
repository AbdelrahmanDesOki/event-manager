import React, { useState } from "react";
import Axios from "axios"
import './AddEvent.css'
function UserForm() {
    const [topLine, setTopLine] = useState("Add new event:")
    const [stitle, setTitle] = useState("")
    const [ssport, setSport] = useState("")
    const [sprice, setPrice] = useState("")
    const [sevDate, setEvDate] = useState("")
    const [slocation, setLocation] = useState("")

    const add = () => {
        Axios.post("http://localhost:5000/new", {
            title: stitle,
            sport: ssport,
            price: sprice,
            date: sevDate,
            location: slocation
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <div>
                        <h1>{topLine}</h1>
                    </div>
                    <label className="form__label" for="fullName">
                        Event Title{" "}
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        id="fullName"
                        placeholder="Full Name"
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                </div>
                <div className="gender">
                    <label className="form__label" for="gender">
                        Attendance Gender{" "}
                    </label>
                    Male
                    <input
                        type="radio"
                        name="male"
                        id="male"
                        className="form__input"
                        placeholder="male"
                    />
                    Female
                    <input
                        type="radio"
                        name="male"
                        id="male"
                        className="form__input"
                        placeholder="male"
                    />
                    Mixed
                    <input
                        type="radio"
                        name="male"
                        id="male"
                        className="form__input"
                        placeholder="male"
                    />
                </div>
                <div className="game">
                    <label className="form__label" for="game">
                        Sport{" "}
                    </label>
                    <input
                        type="text"
                        name=""
                        id="game"
                        className="form__input"
                        placeholder="--enter your sport--"
                        onChange={(e) => {
                            setSport(e.target.value)
                        }}
                    />
                </div>
                <div className="price">
                    <label className="form__label" for="game">
                        Price
                    </label>
                    <input
                        type="number"
                        placeholder="0.0$"
                    />
                </div>
                <div className="date">
                    <label className="form__label" for="email">
                        Date
                    </label>
                    <input
                        type="date"
                        className="form__input"
                        onChange={(e) => {
                            setEvDate(e.target.value)
                        }}
                    />
                </div>
                <div className="locationn">
                    <label className="form__label" for="password">
                        Location (Google maps link)
                    </label>
                    <input
                        className="form__input"
                        type="url"
                        id="location"
                        onChange={(e) => {
                            setLocation(e.target.value)
                        }}
                    />
                </div>
            </div>
            <div class="footer">
                <button type="submit" className="btn btn-primary" onClick={add}>
                    Save
                </button>
            </div>
        </div>
    )
}
export default UserForm;