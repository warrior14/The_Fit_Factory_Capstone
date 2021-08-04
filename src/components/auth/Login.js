import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import "./Login.css"


export const Login = () => {
    //useState hook/function returns an array of 2 things: loginUser is the variable/state whose initial value is an object with email as the
    //key and "" as the initial value and the setLoginUser is a function that updates/modifies the loginUser state variable
    const [loginUser, setLoginUser] = useState({ 
        email: "",
        password: "" 
    })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory() // useHistory is a hook/function that returns array of the paths React has been to and routes the view to what you
    //specify

    const handleInputChange = (event) => {
        const newUser = { ...loginUser } //making a coy of loginUser state
        newUser[event.target.id] = event.target.value //creating a property of an id (email and password properties) on the newUser object as the
        //target id and it's event.target.value is whatever the user types as the email or password value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${loginUser.email}&?password=${loginUser.password}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (event) => {
        event.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                    sessionStorage.setItem("fitfactory_user", exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <div className="loginDiv">
            <main className="container--login">
                <dialog className="dialog dialog--auth" open={existDialog}>
                    <div>User Does Not Exist</div>
                    <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
                </dialog>
                <section>
                    <form className="form--login" onSubmit={handleLogin}>
                        <img className="logoLogin" src="./images/logo2.PNG" alt=""></img>
                        <h1>"We Are The Sheep And Joe Is Our Shepherd! - Luke Madrazo"</h1>
                        <h2>Please Sign In To The Fit Factory</h2>
                        <fieldset>
                            <label htmlFor="inputEmail"> Email Address </label>
                            <input type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email address"
                                required autoFocus
                                value={loginUser.email}
                                onChange={handleInputChange} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputPassword"> Password </label>
                            <input type="password"
                                id="password"
                                className="form-control"
                                placeholder="Password"
                                required autoFocus
                                value={loginUser.password}
                                onChange={handleInputChange} />
                        </fieldset>
                        <fieldset>
                            <button className="button is-rounded loginButton" type="submit">
                                Sign In
                            </button>
                        </fieldset>
                    </form>
                </section>
                <section className="link--register">
                    <Link to="/register">Register For An Account</Link>
                </section>
            </main>
        </div>
    )
}
