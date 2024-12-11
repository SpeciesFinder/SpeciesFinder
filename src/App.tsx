import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  {/* 
    All of the tsx code will come together here in the return function. Logic placed here above the return.
    If you have a decently large component, remember to split it up into multiple files in its respective folder.
  */}

  return (
    <>
      <div className='flex bg-slate-200 w-[100%] h-[10%] p-5'>
        <h1 className='flex justify-start text-3xl font-bold'>Species Finder</h1>
      </div>
    </>
  )
}

export default App
