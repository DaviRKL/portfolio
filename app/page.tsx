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
      <SectionReveal>
        <Hero />
      </SectionReveal>

      <SectionReveal>
        <Experience />
      </SectionReveal>

      <SectionReveal>
        <Education />
      </SectionReveal>

      <SectionReveal>
        <Languages />
      </SectionReveal>

      <SectionReveal>
        <Certifications />
      </SectionReveal>

      <SectionReveal>
        <Showcase />
      </SectionReveal>

      <SectionReveal>
        <Contact />  
      </SectionReveal>  
    </main>
  )
}
