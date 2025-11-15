import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: no-preference) {
.navigation {
  scroll-behavior: smooth;
}
}
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation__logo, .navigation__link, .navigation__toggle, .navigation__menu, .navigation__toggle-icon {
  transition: none;
  animation: none;
}
.navigation__logo-symbol svg {
  animation: none;
}
.navigation__logo-text {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav
        id="mainNavigation"
        role="navigation"
        aria-label="Main navigation"
        className="navigation"
      >
        <div className="navigation__container">
          <a href="#">
            <div aria-label="StudyLoop Home" className="navigation__logo">
              <div aria-hidden="true" className="navigation__logo-symbol">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                  <path
                    d="M20 5 C30 5, 35 10, 35 20 C35 30, 30 35, 20 35 C10 35, 5 30, 5 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M20 35 C10 35, 5 30, 5 20 C5 10, 10 5, 20 5"
                    fill="none"
                    stroke="currentColor"
                    opacity="0.5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <circle r="2.5" cx="20" cy="10" fill="currentColor"></circle>
                  <circle r="2.5" cx="30" cy="20" fill="currentColor"></circle>
                  <circle r="2.5" cx="20" cy="30" fill="currentColor"></circle>
                  <circle r="2.5" cx="10" cy="20" fill="currentColor"></circle>
                </svg>
              </div>
              <span className="navigation__logo-text">StudyLoop</span>
            </div>
          </a>
          <button
            id="navigationToggle"
            aria-label="Toggle navigation menu"
            aria-controls="navigationMenu"
            aria-expanded="false"
            className="navigation__toggle"
          >
            <span className="navigation-navigationtoggle-icon1">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigationtoggle-icon2">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
          <div id="navigationMenu" role="menu" className="navigation__menu">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#">
                  <div role="menuitem" className="navigation__link">
                    <span>How It Works</span>
                  </div>
                </a>
              </li>
              <li className="navigation__item">
                <a href="#">
                  <div role="menuitem" className="navigation__link">
                    <span>
                      {' '}
                      Browse Materials
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </li>
              <li className="navigation__item">
                <a href="#">
                  <div role="menuitem" className="navigation__link">
                    <span>Community</span>
                  </div>
                </a>
              </li>
              <li className="navigation__item">
                <a href="#">
                  <div role="menuitem" className="navigation__link">
                    <span>About Us</span>
                  </div>
                </a>
              </li>
              <li className="navigation__item--cta navigation__item">
                <a href="#">
                  <div
                    role="menuitem"
                    className="btn navigation__cta btn-primary"
                  >
                    <span>
                      {' '}
                      Get Started
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div aria-hidden="true" className="navigation__progress"></div>
      </nav>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes navigation-loop-rotate {0% {transform: rotate(0deg);}
100% {transform: rotate(360deg);}}@keyframes navigation-gradient-shift {0%,100% {background-position: 0% 50%;}
50% {background-position: 100% 50%;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  // Navigation Toggle Management
  const navigationToggle = document.getElementById("navigationToggle")
  const navigationMenu = document.getElementById("navigationMenu")
  const navigation = document.getElementById("mainNavigation")
  let lastScrollY = window.scrollY

  // Toggle Mobile Menu
  if (navigationToggle && navigationMenu) {
    navigationToggle.addEventListener("click", function () {
      const isOpen = this.getAttribute("aria-expanded") === "true"

      this.setAttribute("aria-expanded", !isOpen)
      navigationMenu.classList.toggle("navigation__menu--open")

      // Prevent body scroll when menu is open
      if (!isOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    })

    // Close menu when clicking backdrop (on mobile)
    navigationMenu.addEventListener("click", function (e) {
      if (e.target === this) {
        navigationToggle.setAttribute("aria-expanded", "false")
        this.classList.remove("navigation__menu--open")
        document.body.style.overflow = ""
      }
    })

    // Close menu on escape key
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        navigationMenu.classList.contains("navigation__menu--open")
      ) {
        navigationToggle.setAttribute("aria-expanded", "false")
        navigationMenu.classList.remove("navigation__menu--open")
        document.body.style.overflow = ""
        navigationToggle.focus()
      }
    })

    // Close menu when clicking on navigation links
    const navLinks = navigationMenu.querySelectorAll(".navigation__link")
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 991) {
          navigationToggle.setAttribute("aria-expanded", "false")
          navigationMenu.classList.remove("navigation__menu--open")
          document.body.style.overflow = ""
        }
      })
    })
  }

  // Scroll Progress Indicator
  const progressBar = document.querySelector(".navigation__progress")
  function updateScrollProgress() {
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = window.scrollY
    const progress = (scrolled / scrollHeight) * 100

    if (progressBar) {
      progressBar.style.width = progress + "%"
    }
  }

  // Hide/Show Navigation on Scroll
  function handleNavigationScroll() {
    const currentScrollY = window.scrollY

    // Add shadow when scrolled
    if (currentScrollY > 50) {
      navigation.classList.add("navigation--scrolled")
    } else {
      navigation.classList.remove("navigation--scrolled")
    }

    // Hide on scroll down, show on scroll up (after 100px)
    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY) {
        navigation.classList.add("navigation--hidden")
      } else {
        navigation.classList.remove("navigation--hidden")
      }
    } else {
      navigation.classList.remove("navigation--hidden")
    }

    lastScrollY = currentScrollY
  }

  // Throttle scroll events for performance
  let scrollTimeout
  window.addEventListener("scroll", function () {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function () {
        updateScrollProgress()
        handleNavigationScroll()
        scrollTimeout = null
      }, 10)
    }
  })

  // Initial progress update
  updateScrollProgress()

  // Handle window resize
  let resizeTimeout
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(function () {
      // Close mobile menu if resized to desktop
      if (
        window.innerWidth > 991 &&
        navigationMenu.classList.contains("navigation__menu--open")
      ) {
        navigationToggle.setAttribute("aria-expanded", "false")
        navigationMenu.classList.remove("navigation__menu--open")
        document.body.style.overflow = ""
      }
    }, 250)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
