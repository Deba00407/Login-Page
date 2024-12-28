import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return
        }

        if (!username || !password || !confirmPassword) {
            setError('Please fill out all fields')
            return
        }

        const userData = {
            username: username,
            password: password
        }

        dispatch(login(userData))
        setUsername('')
        setPassword('')
        setConfirmPassword('')
        navigate('/profile')
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto space-y-4"
        >
            <h1 className="text-2xl font-semibold text-gray-800 text-center">Login</h1>
            <input
                type="text"
                value={username}
                required
                onChange={(e) => {
                    setUsername(e.target.value)
                    setError('')
                }}
                placeholder="Enter your username:"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-500"
            />
            <input
                type="password"
                value={password}
                required
                onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                }}
                placeholder="Enter your password:"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-500"
            />
            <input
                type="password"
                value={confirmPassword}
                required
                onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    setError('')
                }}
                placeholder="Re-enter your password:"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-500"
            />
            <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
                Sign Up
            </button>

            {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
            )}
        </form>
    )
}

export default Login
