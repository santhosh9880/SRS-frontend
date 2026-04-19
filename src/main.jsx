import React from 'react'
import ReactDOM from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Droplets,
  Landmark,
  ShoppingBasket,
  MessageCircle,
  ShieldCheck,
  Clock3,
  Star
} from 'lucide-react'
import './styles.css'

const services = [
  {
    title: 'MP Shashank Water Supply',
    description:
      'Fast and reliable 6000L water tanker delivery for homes, apartments, construction sites, and commercial spaces across JP Nagar.',
    icon: Droplets,
    accent: 'from-cyan-400 via-sky-500 to-blue-600',
    image: '/images/image_watertank.png', // ✅ fixed path
    cta: 'Book on WhatsApp',
    link: 'https://wa.me/919900482068'
  },
  {
    title: 'SRS Finance Pvt Ltd',
    description:
      'Support for personal and business loan enquiries with a more professional, trust-driven service presentation and consultation flow.',
    icon: Landmark,
    accent: 'from-violet-500 via-fuchsia-500 to-pink-500',
    image:
      '/images/finance.jpg', // ✅ fixed path
    cta: 'Know More',
    link: '#contact'
  },
  {
    title: 'Gayathri Stores',
    description:
      'Daily essentials, household products, and groceries with a friendly neighborhood service experience.',
    icon: ShoppingBasket,
    accent: 'from-emerald-400 via-teal-500 to-green-600',
    image:
      '/images/store.jpeg', // ✅ fixed path
    cta: 'Visit Store',
    link: '#contact'
  }
];

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Trusted local service',
    text: 'A business presence built for reliability and quick response.'
  },
  {
    icon: Clock3,
    title: 'Fast communication',
    text: 'Direct phone and WhatsApp contact for quick customer support.'
  },
  {
    icon: Star,
    title: 'Multi-service convenience',
    text: 'Water supply, finance help, and grocery needs in one brand.'
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="section-heading"
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  )
}

function App() {
  const [open, setOpen] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const url = `https://wa.me/9900482068?text=${encodeURIComponent(
      `Hello SRS Enterprises,\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="header">
        <nav className="nav container">
          <a href="#home" className="brand" aria-label="SRS Enterprises home">
            <span className="brand-mark">SRS</span>
            <span className="brand-text">SRS Enterprises</span>
          </a>

          <div className="desktop-nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a
              href="https://wa.me/919900482068"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              WhatsApp
            </a>
          </div>

          <button
            className="menu-btn"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mobile-menu container"
          >
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="https://wa.me/919900482068"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </motion.div>
        )}
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-bg" />
          <div className="container hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-copy"
            >
              <span className="eyebrow">Trusted services in thalaghattapura and JP Nagar, Bangalore</span>
              <h1>Our Services are water supply, finance, and daily essentials.</h1>
              <p>
                SRS Enterprises brings multiple essential services into one modern,
                trustworthy business presence with faster contact, better presentation,
                and stronger customer confidence.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Contact Now <ArrowRight size={18} />
                </a>
                <a
                  href="https://wa.me/919900482068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>

              <div className="hero-meta">
                <div><Phone size={16} /> +91 9900482068</div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=MP+Shashank+water+supply+JP+Nagar+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={16} /> JP Nagar, Bangalore
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="hero-panel"
            >
              <div className="panel-glow" />
              <div className="hero-card top-card">
                <span className="chip">16h/day × 7 Water Support</span>
                <h3>Fast and reliable local service.</h3>
                <p>
                  We focus on delivering quality service with quick response and easy communication.
                </p>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <strong>3</strong>
                  <span>Core services</span>
                </div>
                <div className="stat-card">
                  <strong>1</strong>
                  <span>Trusted local brand</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="highlights container">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="highlight-card"
              >
                <div className="icon-wrap"><Icon size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            )
          })}
        </section>

        <section id="about" className="section container">
          <SectionTitle
            eyebrow="About us"
            
            
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="about-panel"
          >
            <div>
              <p>
                SRS Enterprises supplies water tankers in JP Nagar 2nd Phase and surrounding areas. Finance assistance and provision store services are available at our Bhovi Colony, Thalaghattapura Bengaluru office.
              </p>
            </div>
            <div className="about-badges">
              <span>Trust</span>
              <span>Quality Assurance</span>
              <span>Smooth transitions</span>
              <span>Fast Service</span>
            </div>
          </motion.div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <SectionTitle
              eyebrow="Services"
              title="Highlighted service sections with stronger visual storytelling"
              text="Each service is upgraded into an engaging card layout with layered gradients, hover transitions, image focus, and clear actions."
            />

            <div className="services-list">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.article
                    key={service.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className={`service-card ${index % 2 === 1 ? 'reverse' : ''}`}
                  >
                    <div className="service-image-wrap">
                      <div className={`image-tint bg-gradient-to-br ${service.accent}`} />
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        width="1200"
                        height="800"
                        className="service-image"
                      />
                    </div>

                    <div className="service-content">
                      <div className={`service-icon bg-gradient-to-br ${service.accent}`}>
                        <Icon size={22} />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <a
                        href={service.link}
                        target={service.link.startsWith('http') ? '_blank' : undefined}
                        rel={service.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="btn btn-primary inline-flex"
                      >
                        {service.cta} <ArrowRight size={18} />
                      </a>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section container">
          <SectionTitle
            eyebrow="Contact"
            title="A cleaner contact experience with direct WhatsApp submission"
            text="The contact section is redesigned with a premium card layout, direct business details, and a fast inquiry flow."
          />

          <div className="contact-grid">
            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="contact-card"
              onSubmit={handleSubmit}
            >
              <label>
                Your Name
                <input name="name" type="text" placeholder="Enter your name" required />
              </label>
              <label>
                Your Email
                <input name="email" type="email" placeholder="Enter your email" required />
              </label>
              <label>
                Your Message
                <textarea name="message" rows="5" placeholder="Tell us what service you need" required />
              </label>
              <button type="submit" className="btn btn-primary full">
                Send via WhatsApp
              </button>
            </motion.form>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="contact-info-card"
            >
              <h3>Get in touch</h3>
              <p>
                Reach SRS Enterprises directly for quick support and service enquiries
                in JP Nagar.
              </p>

              <div className="info-list">
                <a href="tel:+919880263931">
                  <Phone size={18} /> +91 99004 82068
                </a>
                <a href="mailto:srsenterprises@gmail.com">
                  <Mail size={18} /> srsenterprises@gmail.com
                </a>
                
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>SRS Enterprises</h3>
            <p>We manage a range of businesses, each focused on providing reliable and top-quality service to our customers.</p>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a
                  href="https://www.google.com/maps/search/?api=1&query=MP+Shashank+water+supply+JP+Nagar+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={18} /> thalaghattapura, Bangalore-560109
                </a>
          </div>
        </div>
        <div className="footer-bottom">© 2026 SRS Enterprises. All rights reserved.</div>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)