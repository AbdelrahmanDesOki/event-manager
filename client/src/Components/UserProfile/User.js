import React, { useState } from "react";
import './UserStyle.css'
function UserForm(recName, recEmail) {
    const [welcomeSen, setWelcomeSen] = useState("User Profile")
    const [name, setName] = useState("Username")
    const [email, setEmail] = useState("User email address")
    const [password, setPassword] = useState("Enter new password")
    return (
        <div className="form">
            <div className="form-body">
                <div>
                    <h1>{welcomeSen}</h1>
                </div>
                <div className="username">
                    <label className="form__label" for="fullName">
                        Full Name{" "}
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        id="fullName"
                        placeholder={name}
                    />
                </div>
                <div className="gender">
                    <label className="form__label" for="gender">
                        gender{" "}
                    </label>
                    male
                    <input
                        type="radio"
                        name="male"
                        id="male"
                        className="form__input"
                        placeholder="male"
                    />
                    female
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
                        Favorite Sport{" "}
                    </label>
                    <input
                        type="text"
                        name=""
                        id="game"
                        className="form__input"
                        placeholder="--enter your sport--"
                    />
                </div>
                <div className="question">
                    <label className="form__label" for="gender">
                        Do you want to host events{" "}
                    </label>
                    yes
                    <input
                        type="radio"
                        name="male"
                        id="male"
                        className="form__input"
                        placeholder="male"
                    />{" "}
                    no
                    <input
                        type="radio"
                        name="male"
                        id="male"
                        className="form__input"
                        placeholder="male"
                    />
                </div>
                <div className="email">
                    <label className="form__label" for="email">
                        Change Email{" "}
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form__input"
                        placeholder={email}
                    />
                </div>
                <div className="password">
                    <label className="form__label" for="password">
                        Change Password{" "}
                    </label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        placeholder={password}
                    />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">
                        Confirm Password{" "}
                    </label>
                    <input
                        className="form__input"
                        type="password"
                        id="confirmPassword"
                        placeholder={password}
                    />
                </div>
            </div>
            <div class="footer">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </div>
        </div>
    );
}
export default UserForm;
