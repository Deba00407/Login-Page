import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const { loginStatus, userData } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <div className="container mx-auto p-4">
            {loginStatus ? (
                <div className="bg-white shadow-lg rounded-lg p-6 w-full min-w-[500px] max-w-md mx-auto space-y-4">
                    <h1 className="text-2xl font-semibold text-gray-800 text-center">
                        Profile
                    </h1>
                    <p className="text-gray-800">
                        <span>Welcome </span> {userData.username}
                    </p>
                    <button
                        onClick={handleLogout}
                        className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400"
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto space-y-4">
                    <h1 className="text-2xl font-semibold text-gray-800 text-center">
                        Not Logged In
                    </h1>
                    <p className="text-gray-800 text-center">
                        Please log in to view your profile.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
                    >
                        Login
                    </button>
                </div>
            )}
        </div>
    )
}

export default Profile