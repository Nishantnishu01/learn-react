import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "Nishant",
    age: 25
  }
  let newArr = [1, 2, 3]

  return (
    <>
<h1 className='bg-blue-400 text-white p-4 rounded-xl mb-4'>
  my react tailwind
</h1>
<Card username="Chaiaurcode" btnText="click me" />
<Card username="Nishant" btnText="Vist me"/>
    </>
  )
}

export default App
