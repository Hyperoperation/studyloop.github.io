import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
.footer-back-to-top {
  transition: opacity var(--animation-duration-fast);
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-studyloop" className="footer-main">
        <div className="footer-gradient-backdrop"></div>
        <div className="footer-container">
          <div className="footer-top-section">
            <div className="footer-brand-area">
              <div className="footer-logo-wrapper">
                <div className="footer-logo-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <span className="footer-logo-text">StudyLoop</span>
              </div>
              <p className="footer-brand-tagline">Share. Swap. Succeed.</p>
              <p className="footer-brand-description">
                {' '}
                Empowering students to trade and donate study materials,
                building a sustainable community of knowledge sharing.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="footer-newsletter-area">
              <h3 className="footer-newsletter-title">Stay Connected</h3>
              <p className="footer-newsletter-description">
                {' '}
                Join our community and get updates on new resources and
                features.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <form
                onsubmit="event.preventDefault();"
                data-form-id="8ffe65ff-3754-4ff4-a84e-34d27883d5b0"
                className="footer-newsletter-form"
              >
                <div className="footer-input-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-input-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <input
                    type="email"
                    id="thq_textinput_b_mz"
                    name="textinput"
                    required="true"
                    placeholder="Enter your email"
                    data-form-field-id="thq_textinput_b_mz"
                    className="footer-newsletter-input"
                  />
                </div>
                <button
                  id="thq_button_sgbA"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_sgbA"
                  className="btn footer-newsletter-btn btn-primary"
                >
                  {' '}
                  Subscribe
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="footer-nav-section">
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">Platform</h4>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>How It Works</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Browse Resources</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Post Materials</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Success Stories</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">Community</h4>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Join Now</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Student Guidelines</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Donation Program</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Sustainability</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">Support</h4>
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Help Center</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Contact Us</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Safety Tips</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Report Issue</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-nav-column">
              <h4 className="footer-nav-title">Contact Info</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </g>
                  </svg>
                  <a href="mailto:hello@studyloop.org?subject=">
                    <div className="footer-contact-link">
                      <span>
                        {' '}
                        hello@studyloop.org
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-contact-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <a href="tel:+15551234567">
                    <div className="footer-contact-link">
                      <span>
                        {' '}
                        +1 (555) 123-4567
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="footer-contact-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="footer-contact-icon"
                  >
                    <path
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="footer-contact-text">
                    {' '}
                    123 Campus Drive, Education City
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom-section">
            <div className="footer-legal-area">
              <p className="footer-copyright">
                © 2025 StudyLoop. All rights reserved.
              </p>
              <ul className="footer-legal-links">
                <li className="footer-legal-item">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                </li>
                <li className="footer-legal-item">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </li>
                <li className="footer-legal-item">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Cookie Policy</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-social-area">
              <span className="footer-social-label">Follow Us</span>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Twitter" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-link">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle r="2" cx="4" cy="4"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <button
            onclick="window.scrollTo(&#123;top: 0, behavior: 'smooth'&#125;)"
            aria-label="Back to top"
            className="footer-back-to-top"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="m5 12l7-7l7 7m-7 7V5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </footer>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
        @keyframes footer-divider-shimmer {0% {left: -100%;}
100% {left: 200%;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer-studyloop">
(function(){
  // Back to top button visibility toggle
  const backToTopButton = document.querySelector(".footer-back-to-top")

  function toggleBackToTopButton() {
    if (window.scrollY > 400) {
      backToTopButton.classList.add("visible")
    } else {
      backToTopButton.classList.remove("visible")
    }
  }

  // Initial check
  toggleBackToTopButton()

  // Listen to scroll events with throttling for performance
  let ticking = false

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        toggleBackToTopButton()
        ticking = false
      })
      ticking = true
    }
  })

  // Newsletter form submission handler
  const newsletterForm = document.querySelector(".footer-newsletter-form")
  const newsletterInput = document.querySelector(".footer-newsletter-input")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const email = newsletterInput.value.trim()

      if (email) {
        // Simulate successful subscription
        const originalBtnText = newsletterForm.querySelector(
          ".footer-newsletter-btn"
        ).textContent
        newsletterForm.querySelector(".footer-newsletter-btn").textContent =
          "Subscribed!"
        newsletterForm.querySelector(
          ".footer-newsletter-btn"
        ).style.background = "var(--color-secondary)"

        // Reset after 2 seconds
        setTimeout(function () {
          newsletterForm.querySelector(".footer-newsletter-btn").textContent =
            originalBtnText
          newsletterForm.querySelector(
            ".footer-newsletter-btn"
          ).style.background = ""
          newsletterInput.value = ""
        }, 2000)
      }
    })
  }

  // Add subtle parallax effect to gradient backdrop on scroll
  const gradientBackdrop = document.querySelector(".footer-gradient-backdrop")

  if (gradientBackdrop) {
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          const footer = document.querySelector(".footer-main")
          const footerRect = footer.getBoundingClientRect()

          if (footerRect.top < window.innerHeight && footerRect.bottom > 0) {
            const scrollPercent =
              (window.innerHeight - footerRect.top) /
              (window.innerHeight + footerRect.height)
            const opacity = Math.min(scrollPercent * 1.5, 1)
            gradientBackdrop.style.opacity = opacity
          }

          ticking = false
        })
        ticking = true
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
