import './App.css'
import Footer from './components/sections/Footer'
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
      <Footer/>
    </main>
    </>
  )
}

export default App
