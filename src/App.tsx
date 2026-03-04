import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <Layout>
      <Header />
      <main className="container mx-auto px-4 mt-32 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </Layout>
  )
}

export default App
