import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <h2 className="font-bold text-xl mb-2">Card Title</h2>
      <p className="text-gray-700 text-base">
        This is a sample card using Tailwind CSS.
      </p>
    </div>
  )
}

export default App
