import odaLogo from "./assets/Oda-logo.svg";
import odaIcon from "./assets/Oda-whatsapp-icon.png";

import PrivacyPolicy from "./pages/PrivacyPolicy";

import "./App.css";

function App() {
  if (window.location.pathname === "/privacy-policy") {
    return <PrivacyPolicy />;
  }

  return (
    <main className="oda-page">

      {/* NAVBAR */}
      <header className="oda-nav">
        <a href="/" className="oda-brand">
          <img src={odaLogo} alt="ODA" />
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Get started
        </a>
      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-copy">

          <div className="eyebrow">
            <span></span>
            COMMERCE ON WHATSAPP
          </div>

          <h1>Your Business,
            <br />
            <span>in conversation.</span>
          </h1>

          <p>
            ODA connects businesses and customers through
            conversations, orders and payments on WhatsApp.
          </p>

          <div className="hero-actions">

            <a href="#contact" className="primary-btn">
              Get started
            </a>

            <a href="#about" className="text-btn">
              Learn about ODA
              <span>→</span>
            </a>

          </div>

        </div>

        {/* WHATSAPP PHONE */}
        <div className="phone-area">

          <div className="phone">

            <div className="phone-screen">

              {/* WHATSAPP HEADER */}
              <div className="wa-header">

                <div className="wa-back">
                  <span>‹</span>
                </div>

                <div className="wa-profile">

                  <div className="wa-avatar">
                    <img src={odaIcon} alt="Oda" />
                  </div>

                  <div className="wa-name">
                    <strong>Oda</strong>
                    <small>Oda by 585</small>
                  </div>

                </div>

                <div className="wa-actions">
                  <span>⌕</span>
                  <span>⋮</span>
                </div>

              </div>

              {/* CHAT */}
              <div className="wa-chat">

                <div className="chat-date">
                  <span>TODAY</span>
                </div>

                <div className="message incoming">
                  Hi 👋

                  <span className="message-time">
                    3:56 PM
                  </span>
                </div>

                <div className="message outgoing">
                  Naomba nilipe Kwa Lipa
                  <br />
                  M-Pesa 456111 - Asenga Shop

                  <span className="message-time">
                    3:56 PM ✓✓
                  </span>
                </div>

                <div className="message incoming">
                  Sawa. Nimepokea ombi lako la malipo.
                  <br />
                  <br />
                  Lipa
                  <br />
                  <strong>M-Pesa 456111</strong>
                  <br />
                  Asenga Shop

                  <span className="message-time">
                    3:57 PM
                  </span>
                </div>

                <div className="message outgoing">
                  Nimetuma.

                  <span className="message-time">
                    3:57 PM ✓✓
                  </span>
                </div>

                <div className="message incoming">
                  DHLGO2037Z Imethibitishwa umetuma
                  Tsh50,000.00 Kwa ASENGA SHOP saa
                  3:57 PM Tarehe 21/8/26.
                  <br />
                  <br />
                  Salio lako jipya la akaunti ya M-Pesa ni
                  Tsh

                  <span className="message-time">
                    3:57 PM
                  </span>
                </div>

                <div className="message incoming final-message">
                  Malipo yako yamekamilika ✓

                  <span className="message-time">
                    3:58 PM
                  </span>
                </div>

              </div>

              {/* INPUT */}
              <div className="wa-input-area">

                <div className="wa-input">

                  <span className="emoji">
                    ☺
                  </span>

                  <span className="placeholder">
                    Message
                  </span>

                  <span className="camera">
                    ⌾
                  </span>

                </div>

                <div className="mic">
                  ↑
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
{/* FEATURES */}
<section className="features">

  <div className="features-header">

    <div className="features-label">
      WHAT ODA DOES
    </div>

    <h2>
      Everything happens
      <span>in conversation.</span>
    </h2>

    <p>
      ODA brings business, orders and payments together
      inside WhatsApp, making everyday transactions simpler.
    </p>

  </div>


  <div className="features-grid">

    <article className="feature-card">

      <div className="feature-icon">
        ◉
      </div>

      <h3>
        Sell on WhatsApp
      </h3>

      <p>
        Businesses can present products and receive
        customer requests directly through WhatsApp.
      </p>

    </article>


    <article className="feature-card">

      <div className="feature-icon">
        →
      </div>

      <h3>
        Orders in conversation
      </h3>

      <p>
        Customers can request products, confirm orders
        and continue the entire process without leaving
        the conversation.
      </p>

    </article>


    <article className="feature-card">

      <div className="feature-icon">
        ₵
      </div>

      <h3>
        Payments made simple
      </h3>

      <p>
        ODA connects the customer conversation with
        payment instructions and confirmation.
      </p>

    </article>

  </div>

</section>
      {/* ABOUT */}
      <section className="about" id="about">

        <div className="about-label">
          ODA
        </div>

        <div className="about-content">

          <h2>
            A simpler way to
            <span>do business on WhatsApp.</span>
          </h2>

          <p>
            ODA helps businesses receive customer requests,
            manage orders and connect payments without taking
            customers out of the conversation.
          </p>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features" id="features">

        <div className="features-heading">

          <div className="about-label">
            WHAT ODA DOES
          </div>

          <h2>
            Everything happens 
            <span> inside the conversation.</span>
          </h2>

        </div>

        <div className="features-grid">

          <article className="feature-card">

            <div className="feature-number">
              01
            </div>

            <div className="feature-icon">
              ↗
            </div>

            <h3>
              Conversations
            </h3>

            <p>
              Customers talk directly with businesses
              through WhatsApp, just like a normal
              conversation.
            </p>

          </article>

          <article className="feature-card">

            <div className="feature-number">
              02
            </div>

            <div className="feature-icon">
              +
            </div>

            <h3>
              Orders
            </h3>

            <p>
              Turn customer requests into clear orders
              without forcing customers to leave
              WhatsApp.
            </p>

          </article>

          <article className="feature-card">

            <div className="feature-number">
              03
            </div>

            <div className="feature-icon">
              ✓
            </div>

            <h3>
              Payments
            </h3>

            <p>
              Connect payment experiences to the
              conversation and keep the customer
              informed from request to completion.
            </p>

          </article>

        </div>

      </section>

      {/* CTA */}
      <section className="oda-cta">

        <div className="oda-cta-content">

          <div className="about-label">
            ODA
          </div>

          <h2>
            Ready to put your
            <span>business on WhatsApp?</span>
          </h2>

          <p>
                         Start building a simpler customer experience
                     with ODA. Easy to set up, easy to use.You just need your TIN number and a WhatsApp registered number
          </p>

          <a href="#contact" className="primary-btn">
            Get started
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">

        <div className="footer-brand">

          <img src={odaLogo} alt="ODA" />

          <span>
            Oda by 585 Media
          </span>

        </div>

        <div className="footer-right">

  <span>
    Dar es Salaam, Tanzania
  </span>

  <a href="mailto:hello@585media.co.tz">
    hello@585media.co.tz
  </a>

  <a href="/privacy-policy" className="footer-privacy">
    Privacy Policy
  </a>

</div>

      </footer>

    </main>
  );
}

export default App;