import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import errorImg from "../assets/images/error.png"

const ForgotPassword = () => {

    const navigate = useNavigate()
    const { resetPassword } = useAuth()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const onResetPassword = async (e) => {
        e.preventDefault()
        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(email)
            setMessage('Check your inbox for further instructions')
        } catch (err) {
            console.log('Failed to reset password', err.message)
            setError(err.message, 'try again')
        }
        setLoading(false)
    }


    return (
        <>
            <main >
                <section>

                    <div className='login'>
                        <img className="logo-in-admin" src="https://pan-il.org/wp-content/uploads/PAN_Logo_without-text.png" />
                        {error.length > 0 && <span className="error">
                            <img className="error-img" src={errorImg} />
                            <span>{error}</span>
                        </span>}
                        {message.length>0&&<span className="message">{message}</span>}
                        <h1>Password Reset</h1>
                        <form>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
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
                                <button onClick={onResetPassword}>
                                    Reset Password
                                </button>
                            </div>
                        </form>


                        <p className="text-sm text-white text-center">
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </p>

                    </div>
                </section>
            </main>
        </>
    )
}


export default ForgotPassword;