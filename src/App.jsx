import ScrollAnimations from './components/ScrollAnimations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <footer className="footer">
        <div className="container">
          <p>© 2026 清云智矩. All rights reserved. 高端网页定制 · AI 赋能未来</p>
        </div>
      </footer>
    </>
  )
}
