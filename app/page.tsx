import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Showcase from '../components/Showcase'
import Languages from '../components/Languages'
import Education from '../components/Education'
import SectionReveal from '../components/SectionReveal'
import Certifications from '../components/Certifications'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Page() {
  return (
    <main>
      <Navbar />
      <SectionReveal dir="left">
        <Hero />
      </SectionReveal>

      <SectionReveal dir="right">
        <Experience />
      </SectionReveal>

      <SectionReveal dir="right">
        <Education />
      </SectionReveal>

      <SectionReveal dir="left">
        <Languages />
      </SectionReveal>

      <SectionReveal dir="right">
        <Certifications />
      </SectionReveal>

      <SectionReveal dir="right">
        <Showcase />
      </SectionReveal>

      <SectionReveal dir="left">
        <Contact />  
      </SectionReveal>  
    </main>
  )
}
