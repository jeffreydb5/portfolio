import { About, Contact, Home, Portfolio, Skills } from './Pages'
import { Navbar, Sidebar, TopMenuBar } from './components'

const App = () => {
  return (
    <div className='app'>
      <TopMenuBar />
      <Sidebar />
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}
export default App
