
const inputBase =
  " w-120 h-14 border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-700  focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all duration-200";

const Footer = () => {
  return (
    <footer className="w-full h-dvh  text-white flex items-center justify-center">
          <div className="footer w-200 h-50 m-auto flex flex-col items-center gap-8 text-center">
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2.5rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>
            Join Our <span style={{ color: "#16a34a" }}>Newsletter</span>
            <br />
            <span style={{ color: "#16a34a" }}>Stay Up To</span> Date
          </h2>
           <div className="flex flex-col sm:flex-row gap-4">
            <input className={`${inputBase} rounded-full`}
              type="text"
              name="Email Address"
              placeholder="Email Address..."/>
              <button className="btn-contact-f">Get a Quote! 
              <img src="/public/icons/flecha.svg" alt="icono" width={24} height={24} />
              </button>
        </div>
          </div>

          <div style={{display: "flex", flexWrap: "wrap", gap: "3rem", justifyContent: "space-between"}}>

        {/* Col 1 — Logo + descripción */}
        <div style={{ maxWidth: 280, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg style={{ width: 32, height: 32, color: "#16a34a" }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
            </svg>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "1.5rem" }}>cetro</span>
          </div>
          <p style={{ fontSize: "1.3rem", color: "#d1d5db", lineHeight: 1.7, margin: 0 }}>
            We work with a passion of taking challenges and creating new ones in advertising sector.
          </p>
        </div>

        {/* Col 2 — Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {["About Us", "Services", "Pricing", "Blog", "Contact Us"].map((link) => (
            <a
              key={link}
              href="#"
              style={{ color: "white", textDecoration: "none", fontWeight: 600, fontSize: "1.3rem" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Col 3 — Working Time */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "1.3rem", margin: 0 }}>
            Working Time
          </h3>
          <p style={{ margin: 0, color: "#d1d5db", fontSize: "1.3rem" }}>Mon - Fri: 9.00am - 5.00pm</p>
          <p style={{ margin: 0, color: "#d1d5db", fontSize: "1.3rem" }}>Saturday: 10.00am - 6.00pm</p>
          <p style={{ margin: 0, color: "#d1d5db", fontSize: "1.3rem" }}>Sunday Closed</p>
        </div>

        {/* Col 4 — Contacto */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <a href="tel:+084456789" style={{ color: "#16a34a", fontWeight: 700, fontSize: "1.1rem" }}>
            +(084) 456-0789
          </a>
          <a href="mailto:support@example.com" style={{ color: "white", fontWeight: 700, fontSize: "1rem", textDecoration: "none" }}>
            support@example.com
          </a>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
            <svg style={{ width: 18, height: 18, color: "#16a34a", marginTop: 2, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 1 0-16 0c0 3.63 1.556 6.326 3.5 8.327a19.583 19.583 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
            </svg>
            <p style={{ margin: 0, color: "#d1d5db", fontSize: "1.3rem", lineHeight: 1.5 }}>
              5609 E Sprague Ave, Spokane Valley,<br />WA 99212, USA
            </p>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }} />

      {/* Bottom — Copyright */}
      <div className="w-full font-semibold"style={{ textAlign: "center", padding: "1.25rem 0", fontSize: "1rem", color: "#fff" }}>
        © Copyright 2025 Cetro. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
