import './App.css'
import Hero from './components/sections/Hero'
import Inspiration from './components/sections/Inspiration'
import Mission from './components/sections/Mission'
import Prefooter from './components/sections/Prefooter'

function App() {
  return (
    <>
    <main className='flex flex-col'>
      <Hero/>
      <Mission/>
      <Inspiration/>
      <Prefooter/>
    </main>
    </>
  )
}

export default App
