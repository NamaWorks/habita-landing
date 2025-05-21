import './App.css'
import Hero from './components/sections/Hero'
import Inspiration from './components/sections/Inspiration'
import Mission from './components/sections/Mission'

function App() {
  return (
    <>
    <main className='flex flex-col'>
      <Hero/>
      <Mission/>
      <Inspiration/>
    </main>
    </>
  )
}

export default App
