import { useState } from 'react'


function App() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center">
        <img
          src="7B589969-0E29-4224-9A4E-5746D7B686E9.jpg"
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-2 border-gray-300 mr-4 object-cover"
        />
        <div>
          <h1 className="text-xl font-bold">Сулейманов Ринат</h1>
          <h2 className="text-gray-500 text-lg">Frontend Developer</h2>
        </div>
      </div>
      <p className="text-black-600 mt-4">
        Мне нравится фронт и хочу продолжать на нем работать)
      </p>
      <div className="mt-4 flex justify-center space-x-2">
        <button className="bg-blue-500 text-white px-13 py-2 rounded-lg hover:bg-blue-700 transition">
          Add Friend
        </button>
        <button className="border border-green-500 text-green-500 px-11 py-2 rounded-lg hover:bg-green-500 transition hover:text-white">
          Send Message
        </button>
      </div>
    </div>
  );
}



export default App
