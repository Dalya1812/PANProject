import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import errorImg from "../assets/images/error.png"

const Login = () => {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const onLogin = async (e) => {
        e.preventDefault()
        try {
            setError('')
            await login(email, password)
            setLoading(true)
            navigate("/updates")
        } catch (err) {
            console.log('Failed to Sign In', err.message)
            setError(err.message, 'try again')
        }
        setLoading(false)
    }


    return (
        <>
            <main >
                <section>
                    <div className='login'>
                        <img className="logo-in-admin" src="https://pan-il.org/wp-content/uploads/PAN_Logo_without-text.png" alt="logo-in-admin"/>
                        {error.length>0&&<span className="error">
                            <img className="error-img" src={errorImg} alt="error-img"/>
                            <span>{error}</span>
                        </span>}
                        <form>
                            <div>
                                <label htmlFor="email-address">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <button
                                    onClick={onLogin}
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="text-sm text-white text-center">
                            <NavLink to="/forgot-password">
                                Forgot Password?
                            </NavLink>
                        </p>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Login