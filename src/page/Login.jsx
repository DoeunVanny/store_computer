import React, { useState } from 'react'
export default function Login() {
   
    const [userName, setUsername ] = useState("")
    const [password , setPassword] = useState("") 

    const onChangeUsername = (e) =>  {
        setUsername(e.target.value)
    }
    const onChangePassword = (e) =>  {
        setPassword(e.target.value)  
    }
    const onLogin = () => {
        alert(userName +" " + password)
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form  className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">User</label>
          <input
           onChange={onChangeUsername}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email"
            // required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            onChange={onChangePassword}
            type="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
            // required
          />
        </div>
        <div>
          <button
            onClick={onLogin}
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <button  className="text-indigo-600 hover:text-indigo-500 text-sm">Forgot password?</button>
      </div>
    </div>
  </div>
  )
}
