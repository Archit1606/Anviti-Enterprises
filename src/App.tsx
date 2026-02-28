import { useEffect, useState } from 'react'
import anvitiLogo from './assets/logo.jpeg'
import directorImg from './assets/director.jpeg'
import consultantImg from './assets/manager.jpeg'
import emp1Img from './assets/emp2.jpeg'
import emp2Img from './assets/emp1.jpeg'
import emp3Img from './assets/emp3.jpeg'
import ncrLogo from './assets/NATL_BIG.svg'
import airtelLogo from './assets/BHARTIARTL.NS_BIG.svg'
import ceragonLogo from './assets/CRNT_BIG.svg'
import indusTowersLogo from './assets/INDUSTOWER.NS_BIG.svg'
import ericssonLogo from './assets/ERIC_BIG.svg'
import bsnlLogo from './assets/bsnl.png'
import nokiaLogo from './assets/NOK_BIG.D.svg'
import ustLogo from './assets/ust-global-seeklogo.svg'
import indianRailwaysLogo from './assets/indian-railways-seeklogo.png'
import telecomServiceImg from './assets/telecomservice.jpg'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [queryForm, setQueryForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleTheme = () => setDarkMode(prev => !prev)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleQueryInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setQueryForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleQuerySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const recipientEmail = 'anvitiinfrasolutions@gmail.com'
    const name = queryForm.name.trim()
    const email = queryForm.email.trim()
    const message = queryForm.message.trim()
    const subject = encodeURIComponent(`New Query from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nQuery:\n${message}`
    )
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`
    const popup = window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer')

    if (!popup) {
      window.location.href = gmailComposeUrl
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(targetId)
      if (element) {
        const navHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!elements.length) return undefined

    document.body.classList.add('js-enabled')

    const revealIfVisible = (el: Element) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        el.classList.add('in-view')
      }
    }

    elements.forEach(revealIfVisible)

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`page ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu} />
      )}
      <header className="nav" id="home">
        <div className="nav-inner">
          <div className="brand">
            <span className="brand-mark">
              <img src={anvitiLogo} alt="Anviti Enterprises logo" />
            </span>
            <div className="brand-text">
              <span className="brand-name">Anviti Enterprises</span>
              <span className="brand-sub">Telecom, Electrical, Railway Services</span>
            </div>
          </div>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <nav className={`nav-links ${mobileMenuOpen ? 'nav-links--open' : ''}`}>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
            <a href="#vision" onClick={(e) => handleNavClick(e, '#vision')}>Vision & Mission</a>
            <a href="#team" onClick={(e) => handleNavClick(e, '#team')}>Leadership</a>
            <a href="#clients" onClick={(e) => handleNavClick(e, '#clients')}>Clients</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode" title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <a className="nav-cta" href="#contact">Partner With Us</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-copy reveal">
              <span className="hero-kicker animate-fade-in">Connecting Tomorrow</span>
              <h1 className="animate-slide-up">Powering Today, Energizing the Future.</h1>
              <p className="animate-fade-in-delay">
                Anviti Enterprises delivers expert telecom, electrical, and railway services that
                connect, power, and sustain businesses and communities with uncompromised
                compliance and safety.
              </p>
              <div className="hero-actions animate-slide-up-delay">
                <a className="button primary" href="#services">Explore Services</a>
                <a className="button ghost" href="#contact">Talk To Us</a>
              </div>
            </div>
            <div className="hero-panel">
              <div className="panel-card reveal delay-1">
                <h2>Connecting Businesses. Empowering Communities.</h2>
                <p>
                  We are a trusted telecom service provider and system integrator, offering skilled
                  labor and professional services for telecom tower installations, maintenance,
                  electrical works, and railway signal & telecommunications projects.
                </p>
                <div className="panel-grid">
                  <div>
                    <h3>Compliance First</h3>
                    <p>Client specifications, safety protocols, and regulatory norms built in.</p>
                  </div>
                  <div>
                    <h3>Operational Excellence</h3>
                    <p>Network reliability, uptime, and quality delivery for every project.</p>
                  </div>
                  <div>
                    <h3>Scalable Delivery</h3>
                    <p>Strong infrastructure that powers India through reliable execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="statement reveal" aria-label="Compliance and safety statement">
          <p>Delivering telecom, electrical, and railway solutions with uncompromised compliance and safety.</p>
        </section>

        <section className="services-showcase" id="services" aria-label="Our services showcase">
          <div className="section-inner">
            <div className="services-showcase-inner">
              <div className="services-showcase-left reveal">
                <div className="services-header reveal">
                  <div className="services-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <path d="M4 7h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M7 12h10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M10 17h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h2>Our Services</h2>
                  <span className="services-line" aria-hidden="true" />
                  <span className="services-dot" aria-hidden="true" />
                </div>
                <div className="services-showcase-items">
                  <div className="services-showcase-item">
                    <div className="services-showcase-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" focusable="false">
                        <path d="M12 3v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M7.5 9.5a6 6 0 0 1 9 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M5 12a9 9 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 15a12 12 0 0 1 18 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 13v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p>
                      Telecom solutions, including tower works, that ensure seamless connectivity for
                      businesses and communities in full compliance with standards
                    </p>
                  </div>
                  <div className="services-showcase-item">
                    <div className="services-showcase-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" focusable="false">
                        <path d="M12 2l7 4v4l-7 4-7-4V6l7-4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M5 12l7 4 7-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M12 16v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p>
                      Reliable electrical works that power operations with efficiency, safety, and
                      precision as per client requirements
                    </p>
                  </div>
                  <div className="services-showcase-item">
                    <div className="services-showcase-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="img" focusable="false">
                        <path d="M3 17h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M6 17v-6l6-4 6 4v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M9 17v-4h6v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p>
                      Railway signal and telecommunications expertise for robust, scalable
                      infrastructure meeting all regulatory and safety norms. Powering Networks and
                      Connecting India Through Strong, Scalable Infrastructure
                    </p>
                  </div>
                </div>
              </div>
              <div className="services-showcase-right reveal">
                <div className="services-showcase-image">
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                    alt="Digital infrastructure and city network"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="telecom-detail" id="telecom-services">
          <div className="section-inner">
            <div className="telecom-header reveal">
              <div className="telecom-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M12 2v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 6v2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 10a4 4 0 0 1 8 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5 13a8 8 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M2 16a12 12 0 0 1 20 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 10v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h2>TELECOM SERVICES</h2>
              <span className="telecom-line" aria-hidden="true" />
              <span className="telecom-dot" aria-hidden="true" />
            </div>

            <div className="telecom-content">
              <div className="telecom-left reveal">
                <h3>SURVEYS</h3>
                <ul>
                  <li>
                    <span className="arrow">&gt;</span>
                    <div>
                      <strong>RF Surveys:</strong> It is collection of database from the field (according to the customer planned region that is nominal point/reference the area) for checking the feasibility of cell site &amp; for deciding coverage region of cell site.
                    </div>
                  </li>
                  <li>
                    <span className="arrow">&gt;</span>
                    <div>
                      <strong>EMF Surveys:</strong> This survey is performed to check the harmful effect cause due the high power radiation of the EMF from the tower.
                    </div>
                  </li>
                  <li>
                    <span className="arrow">&gt;</span>
                    <div>
                      <strong>LOS/MW Surveys (Line Of Sight):</strong> MW survey is carried out to have MW connectivity between the two sites to ascertain the Line of Sight clearance.
                    </div>
                  </li>
                </ul>
                <div className="telecom-images">
                  <div className="telecom-img">
                    <img
                      src={telecomServiceImg}
                      alt="Telecom tower with network connections"
                    />
                  </div>
                  <div className="telecom-img">
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                      alt="Global network connectivity"
                    />
                  </div>
                </div>
              </div>

              <div className="telecom-right reveal">
                <h3>INSTALLATION, COMMISSIONING AND R&amp;D</h3>
                <ul>
                  <li>
                    <span className="arrow">&gt;</span>
                    <div>
                      <strong>MW Installation &amp; Commissioning:</strong> Maximizing the Value of Existing Network Transmission Resources, are challenging task and our Transmission Network Planning is crucial services for designing any network access requirement.
                    </div>
                  </li>
                  <li>
                    <span className="arrow">&gt;</span>
                    <div>
                      <strong>Antenna &amp; BTS Swapping:</strong> The prerequisite for network swapping is that the coverage quality should be higher than that of the original network.
                    </div>
                  </li>
                  <li>
                    <span className="arrow">&gt;</span>
                    <div>
                      <strong>In-Building &amp; GBM Solution:</strong> We offer In-building solutions with 4G &amp; 5G technologies.
                    </div>
                  </li>
                  <li>
                    <span className="arrow">&gt;</span>
                    <div>
                      <strong>Installation &amp; Commissioning EnB:</strong> Installation of rack/DDF as per floor plan, couple, anchor, grounding, proper cable routine and labeling. Supply and assembling of cable (RF, VF, Power and E1 cables etc.)
                    </div>
                  </li>
                  <li>
                    <span className="arrow">&gt;</span>
                    <div>
                      <strong>Drive Test:</strong> Test will ensure the network performance and it is directly related to the QoS of the network. This is done for network optimization, changing antenna azimuths and tilts, to identify network performance of area, to troubleshoot customer complaints, and to check network coverage.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="electrical-detail" id="electrical-services">
          <div className="section-inner">
            <div className="electrical-header reveal">
              <div className="electrical-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M8 2v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 2v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 2v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 8h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 8v6l6 8 6-8V8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M8 8v4l4 6 4-6V8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <h2>ELECTRICAL SERVICES</h2>
              <span className="electrical-line" aria-hidden="true" />
              <span className="electrical-dot" aria-hidden="true" />
            </div>

            <div className="electrical-content reveal">
              <ul>
                <li>
                  <span className="arrow">&gt;</span>
                  <div>
                    Strengthening of Sub-transmission &amp; distribution system including provision of Solar panels, metering of distribution transformers/feeders/consumers &amp; IT enablement of distribution sector.
                  </div>
                </li>
                <li>
                  <span className="arrow">&gt;</span>
                  <div>
                    Erections of PSC/STP poles for LT overhead line by providing &amp; installing danger plate, anti-climbing devices(barbed wire), earthing material (coil &amp; 8SWG GI wire).
                  </div>
                </li>
                <li>
                  <span className="arrow">&gt;</span>
                  <div>
                    Pole numbering including Excavation of Pole Pit with shifting &amp; connection of all consumer service connections.
                  </div>
                </li>
                <li>
                  <span className="arrow">&gt;</span>
                  <div>
                    Erection, Testing &amp; Commissioning of Distribution Transformer with all accessories
                  </div>
                </li>
              </ul>
            </div>

            <div className="electrical-images reveal">
              <div className="electrical-img">
                <img
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
                  alt="Electrical transmission tower workers"
                />
              </div>
              <div className="electrical-img">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
                  alt="Engineer with laptop at power station"
                />
              </div>
              <div className="electrical-img">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"
                  alt="Electrical worker on transmission line"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="vision-hero reveal" id="vision" aria-label="Company culture and values showcase">
          <div className="vision-hero-bg" aria-hidden="true" />
          <div className="vision-hero-inner">
            <div className="vision-hero-left">
              <div className="vision-label-block">
                <h3>Vision</h3>
                <p>To be a leading infrastructure services partner, strengthening connectivity and mobility across India through safe, compliant and reliable telecom tower works, railway signaling & telecommunications and electrical works for industries and communities.</p>
              </div>
            </div>
            <div className="vision-hero-center">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                alt="Professional team member"
              />
            </div>
            <div className="vision-hero-right">
              <div className="vision-label-block">
                <h3>Mission</h3>
                <p>To deliver high-quality operations and maintenance, electrical works, and signal & telecommunications services that meet client specifications, uphold stringent safety standards, enhance network reliability, improve public safety, and support seamless mobility and information flow.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="clients blend-edge" id="clients" aria-label="Our clients">
          <div className="section-inner">
            <div className="clients-header reveal">
              <div className="clients-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M6 10a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm6 0a3 3 0 1 1 6 0a3 3 0 0 1-6 0ZM3 19a5 5 0 0 1 10 0H3Zm8 0a5 5 0 0 1 10 0H11Z" fill="currentColor" />
                </svg>
              </div>
              <h2>Our Client</h2>
              <span className="clients-line" aria-hidden="true" />
              <span className="clients-dot" aria-hidden="true" />
            </div>

            <div className="clients-grid">
              <div className="client-card reveal delay-1">
                <img src={ncrLogo} alt="NCR Atleos" className="client-logo-img ncr-dark" />
              </div>
              <div className="client-card reveal delay-2">
                <img src={airtelLogo} alt="Airtel" className="client-logo-img" />
              </div>
              <div className="client-card reveal delay-3">
                <img src={ceragonLogo} alt="Ceragon" className="client-logo-img" />
              </div>
              <div className="client-card reveal delay-4">
                <img src={indianRailwaysLogo} alt="Indian Railways" className="client-logo-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="partners-grid blend-edge" aria-label="Eager to partner">
          <div className="section-inner">
            <div className="partners-header reveal">
              <div className="partners-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M6 10a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm6 0a3 3 0 1 1 6 0a3 3 0 0 1-6 0ZM3 19a5 5 0 0 1 10 0H3Zm8 0a5 5 0 0 1 10 0H11Z" fill="currentColor" />
                </svg>
              </div>
              <h2>Eager to Partner with</h2>
              <span className="partners-line" aria-hidden="true" />
              <span className="partners-dot" aria-hidden="true" />
            </div>

            <div className="partners-logos">
              <div className="partner-card reveal delay-1">
                <img src={indusTowersLogo} alt="Indus Towers" className="partner-logo-img" />
              </div>
              <div className="partner-card reveal delay-2">
                <img src={ericssonLogo} alt="Ericsson" className="partner-logo-img ericsson-dark" />
              </div>
              <div className="partner-card reveal delay-3">
                <img src={bsnlLogo} alt="BSNL" className="partner-logo-img" />
              </div>
              <div className="partner-card reveal delay-4">
                <img src={nokiaLogo} alt="Nokia" className="partner-logo-img invert-light" />
              </div>
              <div className="partner-card reveal delay-5">
                <img src={ustLogo} alt="UST Global" className="partner-logo-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="team blend-edge" id="team">
          <div className="section-inner">
            <div className="team-header reveal">
              <div className="team-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h2>OUR TEAM</h2>
              <span className="team-line" aria-hidden="true" />
              <span className="team-dot" aria-hidden="true" />
            </div>
            <div className="team-grid">
              <article className="team-card reveal delay-1">
                <div className="team-photo">
                  <img
                    src={emp1Img}
                    alt="Portrait of Reena Tripathi"
                  />
                </div>
              </article>
              <article className="team-card reveal delay-2">
                <div className="team-photo">
                  <img
                    src={emp2Img}
                    alt="Portrait of Vishwa Deepak Tripathi"
                  />
                </div>
              </article>
              <article className="team-card reveal delay-3">
                <div className="team-photo">
                  <img
                    src={emp3Img}
                    alt="Portrait of Priya Sharma"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="director-message reveal" id="director-message">
          <div className="section-inner">
            <div className="director-header reveal">
              <div className="director-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h2>REENA TRIPATHI (DIRECTOR)</h2>
              <span className="director-line" aria-hidden="true" />
              <span className="director-dot" aria-hidden="true" />
            </div>

            <div className="director-content">
              <div className="director-photo-wrap reveal">
                <div className="director-decoration" aria-hidden="true" />
                <div className="director-photo">
                  <img
                    src={directorImg}
                    alt="Reena Tripathi, Director"
                  />
                </div>
              </div>
              <div className="director-text reveal">
                <p>
                  <strong>Director&apos;s Message</strong> - Dear team and valued stakeholders, at Anviti Enterprises, our expertise
                  centers on the telecom sector, where we specialize in advanced network infrastructure, optical fiber solutions
                  and cutting-edge communication technologies to power India&apos;s digital future. We prioritize society&apos;s
                  well-being by advancing digital inclusion in underserved regions, implementing sustainable telecom practices
                  that minimize environmental impact and enforcing stringent safety measures in every project. These
                  commitments reflect our vision of leading innovative telecom advancements and our mission to build secure,
                  inclusive connectivity that serves communities nationwide.
                </p>
                <p>Thank you for your continued trust and partnership.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="consultant-message reveal" id="consultant-message">
          <div className="section-inner">
            <div className="consultant-header reveal">
              <div className="consultant-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h2>VISHWA DEEPAK TRIPATHI (CONSULTANT)</h2>
              <span className="consultant-line" aria-hidden="true" />
              <span className="consultant-dot" aria-hidden="true" />
            </div>

            <div className="consultant-content">
              <div className="consultant-text reveal">
                <p>
                  <strong>Consultant&apos;s Message</strong> - With a B.Tech in Mechanical Engineering and over 20 years of experience
                  across construction, mining, and automobile OEM sectors, I bring deep expertise in project planning, service delivery
                  optimization, and operational efficiency. My career has been marked by successful delivery of large-scale infrastructure
                  projects and leading cross-functional teams in demanding, complex environments.
                </p>
                <p>
                  <strong>Role at Anviti Enterprises</strong> - As a Consultant, I provide strategic guidance on project economics,
                  implementation roadmaps, and capability building. My focus is on strengthening Anviti&apos;s positioning in telecom
                  infrastructure, construction-linked works, and public-mobility initiatives. I work closely with the leadership team
                  to identify market opportunities, optimize resource allocation, and ensure that every project delivers exceptional
                  value to our stakeholders while maintaining the highest standards of safety and quality.
                </p>
              </div>
              <div className="consultant-photo-wrap reveal">
                <div className="consultant-decoration" aria-hidden="true" />
                <div className="consultant-photo">
                  <img
                    src={consultantImg}
                    alt="Vishwa Deepak Tripathi, Consultant"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={anvitiLogo} alt="Anviti Enterprises logo" />
            </div>
            <div>
              <p className="footer-title">Anviti Enterprises</p>
              <p className="footer-text">
                Trusted partner for telecom, electrical, and railway
                infrastructure services across India.
              </p>
            </div>
          </div>

          <div className="footer-links">
            <p className="footer-heading">Quick Links</p>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#vision">Vision & Mission</a>
            <a href="#team">Leadership</a>
            <a href="#clients">Clients</a>
          </div>

          <div className="footer-contact">
            <p className="footer-heading">Contact</p>
            <p>Lucknow, India</p>
            <p>9501023111</p>
            <p>reena@anvitiinfrasolutions.com</p>
            <p>anvitiinfrasolutions@gmail.com</p>
          </div>

          <div className="footer-form">
            <p className="footer-heading">Send Your Query</p>
            <form className="query-form" onSubmit={handleQuerySubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={queryForm.name}
                onChange={handleQueryInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={queryForm.email}
                onChange={handleQueryInputChange}
                required
              />
              <textarea
                name="message"
                placeholder="Write your query"
                rows={4}
                value={queryForm.message}
                onChange={handleQueryInputChange}
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Anviti Enterprises. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919501023111"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#fff" width="28" height="28">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.907 15.907 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.35 22.606c-.392 1.106-1.942 2.022-3.192 2.29-.856.182-1.974.326-5.738-1.234-4.818-1.996-7.918-6.882-8.16-7.2-.232-.318-1.952-2.6-1.952-4.96s1.234-3.518 1.672-3.998c.438-.48.958-.6 1.278-.6.318 0 .638.002.916.016.294.016.688-.112 1.078.822.392.94 1.332 3.258 1.45 3.496.118.238.196.516.04.832-.158.318-.238.516-.476.796-.238.278-.5.622-.714.834-.238.238-.486.496-.21.974.278.48 1.234 2.036 2.65 3.298 1.82 1.622 3.354 2.124 3.832 2.362.478.238.758.198 1.036-.118.278-.318 1.194-1.392 1.512-1.872.318-.478.636-.398 1.074-.238.438.16 2.756 1.3 3.234 1.538.478.238.796.358.914.556.118.196.118 1.146-.274 2.252z"/>
        </svg>
        <span className="whatsapp-label">Talk to us</span>
      </a>
    </div>
  )
}

export default App
