import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Spherical Grown Alligator</title>
        <meta property="og:title" content="Spherical Grown Alligator" />
        <link
          rel="canonical"
          href="https://spherical-grown-alligator-4qdld7.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section id="hero-section" className="hero">
        <div className="hero-copy">
          <h1 className="hero-title home-hero-title">Share. Swap. Succeed.</h1>
          <p className="hero-description">
            {' '}
            StudyLoop connects campuses and classrooms with a secure,
            sustainable marketplace for textbooks, notes, and study aids—built
            for scale, trusted by students.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="hero-cta-cluster">
            <button
              aria-label="Join StudyLoop now"
              className="btn-lg btn btn-primary"
            >
              {' '}
              Join Now
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </button>
            <a href="#how-it-works">
              <div className="hero-link">
                <span>See StudyLoop in action</span>
              </div>
            </a>
          </div>
          <div className="hero-trust-cues">
            <div className="trust-badge">
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Verified Secure</span>
            </div>
            <div className="trust-badge">
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle r="4" cx="9" cy="7"></circle>
                </g>
              </svg>
              <span>10K+ Students</span>
            </div>
            <div className="trust-badge">
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Trusted Exchange</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <video
            src="https://videos.pexels.com/video-files/34645680/14684148_640_360_30fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="hero-video"
          ></video>
          <div className="hero-visual-overlay"></div>
          <div className="hero-visual-content">
            <div className="visual-badge">
              <span className="badge-number">24/7</span>
              <span className="badge-label">Active Platform</span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="how-it-works"
        aria-labelledby="how-works-title"
        className="how-it-works"
      >
        <div className="works-intro">
          <h2 id="how-works-title" className="section-title">
            How It Works
          </h2>
          <p className="section-content">
            {' '}
            Simple, secure, and student-focused. From listing to exchange, every
            step is designed for clarity, trust, and sustainability.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="intro-metrics">
            <div className="metric-item">
              <span className="metric-value">2 min</span>
              <span className="metric-label">Average listing time</span>
            </div>
            <div className="metric-item">
              <span className="metric-value">98%</span>
              <span className="metric-label">Success rate</span>
            </div>
          </div>
        </div>
        <div className="works-steps">
          <article className="step-card">
            <div className="step-number">
              <span>1</span>
            </div>
            <div className="step-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="step-title">List or Donate</h3>
            <p className="step-description">
              {' '}
              Create a listing in minutes. Upload photos, course details, and
              condition. Opt to donate to campus partners for sustainability.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </article>
          <article className="step-card">
            <div className="step-number">
              <span>2</span>
            </div>
            <div className="step-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m21 21l-4.34-4.34"></path>
                  <circle r="8" cx="11" cy="11"></circle>
                </g>
              </svg>
            </div>
            <h3 className="step-title">Match &amp; Request</h3>
            <p className="step-description">
              {' '}
              Intelligent search and filters surface the best matches. Built-in
              verification ensures secure exchanges.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </article>
          <article className="step-card">
            <div className="step-number">
              <span>3</span>
            </div>
            <div className="step-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m11 17l2 2a1 1 0 1 0 3-3"></path>
                  <path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                  <path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path>
                </g>
              </svg>
            </div>
            <h3 className="step-title">Coordinate Pickup</h3>
            <p className="step-description">
              {' '}
              Choose contactless campus pickup or arrange affordable shipping.
              Schedule and track exchanges through StudyLoop.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </article>
          <article className="step-card">
            <div className="step-number">
              <span>4</span>
            </div>
            <div className="step-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="step-title">Confirm &amp; Rate</h3>
            <p className="step-description">
              {' '}
              Confirm receipt and leave a short rating to build community trust.
              Feedback powers safer future trades.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </article>
          <article className="step-card">
            <div className="step-number">
              <span>5</span>
            </div>
            <div className="step-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 className="step-title">Keep Resources Circulating</h3>
            <p className="step-description">
              {' '}
              Your trade contributes to campus sustainability. Watch your impact
              grow with every successful exchange.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </article>
          <article className="step-card step-card--highlight">
            <h3 className="step-title">Why it Works</h3>
            <p className="step-description">
              {' '}
              Fast, transparent workflows and verification features reduce
              friction. Designed for scale, StudyLoop blends smart matching and
              secure logistics.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <button className="btn btn-primary btn-sm">
              Start Your First Exchange
            </button>
          </article>
        </div>
        <aside className="works-benefits">
          <h3 className="benefits-title">The Benefits</h3>
          <ul className="benefits-list">
            <li className="benefit-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Verified users only</span>
            </li>
            <li className="benefit-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Save up to 70%</span>
            </li>
            <li className="benefit-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Sustainable impact</span>
            </li>
            <li className="benefit-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Built-in messaging</span>
            </li>
          </ul>
          <div className="benefit-cta">
            <p>Ready to get started?</p>
            <button className="btn btn-secondary btn-sm">Join StudyLoop</button>
          </div>
        </aside>
      </section>
      <section
        id="testimonials-section"
        aria-labelledby="testimonials-title"
        className="testimonials"
      >
        <h2 id="testimonials-title" className="section-title">
          {' '}
          Trusted by Students, Validated by Results
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h2>
        <ul className="testimonials-grid">
          <li
            role="article"
            aria-label="Testimonial from Maya R."
            className="testimonial-card--featured testimonial-card"
          >
            <div className="testimonial-image">
              <img
                alt="Students studying together in university library"
                src="https://images.pexels.com/photos/8199602/pexels-photo-8199602.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="testimonial-content">
              <blockquote className="testimonial-quote">
                <span>
                  {' '}
                  &quot;StudyLoop made finals week manageable—I swapped three
                  textbooks and found exactly the lab manual I needed within
                  hours. The platform feels secure, transactions are clear, and
                  the community is genuinely supportive.&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </blockquote>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Maya R.</span>
                  <span className="author-role">Biomedical Engineering</span>
                </div>
                <span className="author-badge">Student</span>
              </div>
            </div>
          </li>
          <li
            role="article"
            aria-label="Testimonial from Jordan K."
            className="testimonial-card"
          >
            <blockquote className="testimonial-quote">
              <span>
                {' '}
                &quot;As a student leader, I trust StudyLoop for bulk donations.
                Their verification tools and clear pick-up scheduling saved our
                club time and ensured materials reached students who needed them
                most.&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </blockquote>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Jordan K.</span>
                <span className="author-role">
                  Student Activities Coordinator
                </span>
              </div>
              <span className="author-badge">Organizer</span>
            </div>
          </li>
          <li
            role="article"
            aria-label="Testimonial from Priya S."
            className="testimonial-card"
          >
            <blockquote className="testimonial-quote">
              <span>
                {' '}
                &quot;I sold old course packs and used the credit toward exam
                prep guides. The process was fast, transparent, and the buyer
                rating system gave me confidence every step of the way.&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </blockquote>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Priya S.</span>
                <span className="author-role">Economics</span>
              </div>
              <span className="author-badge">Student</span>
            </div>
          </li>
          <li
            role="article"
            aria-label="Testimonial from Daniel R."
            className="testimonial-card"
          >
            <blockquote className="testimonial-quote">
              <span>
                {' '}
                &quot;StudyLoop&apos;s sustainability-first approach is a game
                changer. Donating materials felt purposeful, and the
                neighborhood map made local exchanges effortless.&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </blockquote>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Daniel R.</span>
                <span className="author-role">Environmental Science</span>
              </div>
              <span className="author-badge">Student</span>
            </div>
          </li>
          <li
            role="article"
            aria-label="Testimonial from Dr. Elena V."
            className="testimonial-card"
          >
            <blockquote className="testimonial-quote">
              <span>
                {' '}
                &quot;From secure messaging to verified profiles, StudyLoop
                balances startup innovation with professional reliability.
                It&apos;s become our department&apos;s go-to resource for
                sharing textbooks and study materials.&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </blockquote>
            <div className="testimonial-author">
              <div className="author-info">
                <span className="author-name">Dr. Elena V.</span>
                <span className="author-role">Academic Advisor</span>
              </div>
              <span className="author-badge">Faculty</span>
            </div>
          </li>
        </ul>
      </section>
      <section
        id="quick-actions"
        role="region"
        aria-labelledby="qa-title"
        className="quick-actions"
      >
        <div className="qa-header">
          <h2 id="qa-title" className="section-title">
            Quick Actions
          </h2>
          <p className="section-subtitle">Get started in seconds</p>
        </div>
        <div className="qa-grid">
          <article
            aria-label="Browse Materials"
            className="card card--featured"
          >
            <div className="card-image">
              <img
                alt="Students in modern library"
                src="https://images.pexels.com/photos/6550407/pexels-photo-6550407.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">Browse Materials</h3>
              <p className="card-description">
                {' '}
                Explore curated study sets, textbooks, and notes vetted by
                peers. Filter by subject, format, and condition.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button
                aria-label="Browse all materials"
                className="btn btn-primary"
              >
                {' '}
                Browse Now
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </article>
          <article aria-label="Post Item" className="card card--cta">
            <div className="card-icon">
              <svg
                width="48"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">Post Item</h3>
              <p className="card-description">
                {' '}
                List materials in two minutes with guided fields, photo upload,
                and condition tagging.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button aria-label="Post a new item" className="btn-outline btn">
                {' '}
                Post Now
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </article>
          <article aria-label="Donate Materials" className="card card--utility">
            <div className="card-icon">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="8" rx="1" width="18" height="4"></rect>
                  <path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path>
                </g>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">Donate Materials</h3>
              <p className="card-description">
                {' '}
                Give back to the community. Schedule pickup and receive
                tax-deduction documentation.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button aria-label="Donate materials" className="btn btn-link">
                {' '}
                Donate
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </article>
          <article aria-label="Create Swap" className="card card--utility">
            <div className="card-icon">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m17 2l4 4l-4 4"></path>
                  <path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4"></path>
                  <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                </g>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">Create Swap</h3>
              <p className="card-description">
                {' '}
                Propose secure exchanges and let our matching algorithm suggest
                ideal partners.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button aria-label="Create a swap" className="btn btn-link">
                {' '}
                Start Swap
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </article>
          <article aria-label="View Marketplace" className="card card--utility">
            <div className="card-icon">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </g>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">View Marketplace</h3>
              <p className="card-description">
                {' '}
                See trending items, verified listers, and real-time availability
                across campuses.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button aria-label="View marketplace" className="btn btn-link">
                {' '}
                Explore
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </article>
          <article aria-label="Need Help" className="card card--utility">
            <div className="card-icon">
              <svg
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path>
                </g>
              </svg>
            </div>
            <div className="card-content">
              <h3 className="card-title">Need Help?</h3>
              <p className="card-description">
                {' '}
                Access fast support, safety tips, and local pickup guidelines
                for reliable exchanges.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button aria-label="Get help" className="btn btn-link">
                Get Support
              </button>
            </div>
          </article>
        </div>
      </section>
      <section
        id="community-resources"
        aria-labelledby="community-resources-title"
        className="community-resources"
      >
        <div className="resources-main">
          <h2 id="community-resources-title" className="section-title">
            {' '}
            Community &amp; Resources
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <p className="section-content">
            {' '}
            Trusted guidance, at every step. Find clear policies, practical
            guides, and responsive support to keep StudyLoop safe, sustainable,
            and reliable for students and partners.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="resource-featured">
            <img
              alt="Students collaborating in library"
              src="https://images.pexels.com/photos/8199619/pexels-photo-8199619.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              loading="lazy"
            />
            <div className="featured-overlay">
              <h3>Comprehensive Safety Guide</h3>
              <p>
                {' '}
                Everything you need to know about secure exchanges, verified
                profiles, and trusted transactions.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <button className="btn btn-primary">Read the Guide</button>
            </div>
          </div>
          <ul className="resources-list">
            <li className="resource-link-item">
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
              <a href="#guides">
                <div>
                  <span>Guides &amp; Best Practices</span>
                </div>
              </a>
            </li>
            <li className="resource-link-item">
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
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                </g>
              </svg>
              <a href="#playbook">
                <div>
                  <span>Campus &amp; Partner Playbook</span>
                </div>
              </a>
            </li>
            <li className="resource-link-item">
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
                    x="3"
                    y="11"
                    rx="2"
                    ry="2"
                    width="18"
                    height="11"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </g>
              </svg>
              <a href="#security">
                <div>
                  <span>Technical &amp; Security Docs</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <aside className="resources-sidebar">
          <article
            role="region"
            aria-labelledby="safety-title"
            className="resource-card"
          >
            <div className="resource-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 id="safety-title" className="resource-card-title">
              Safety &amp; Policies
            </h3>
            <p className="resource-card-description">
              {' '}
              Comprehensive rules and privacy standards that protect users and
              transactions. Clear dispute resolution and verified listings.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <a href="#safety">
              <div aria-label="View safety policies" className="resource-link">
                <span>
                  {' '}
                  Learn More
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </article>
          <article
            role="region"
            aria-labelledby="report-title"
            className="resource-card"
          >
            <div className="resource-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 13h.01M12 6v3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <h3 id="report-title" className="resource-card-title">
              Report an Issue
            </h3>
            <p className="resource-card-description">
              {' '}
              Dedicated support channels for safety concerns, listing disputes,
              and urgent requests. Fast response and clear escalation.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <button
              aria-label="Report an issue"
              className="btn btn-accent btn-sm"
            >
              {' '}
              Report Issue
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </button>
          </article>
          <article
            role="region"
            aria-labelledby="faq-title"
            className="resource-card"
          >
            <div className="resource-icon">
              <svg
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path>
                </g>
              </svg>
            </div>
            <h3 id="faq-title" className="resource-card-title">
              FAQ
            </h3>
            <p className="resource-card-description">
              {' '}
              Concise answers to common questions about accounts, listings,
              verification, payments, and pickup.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <a href="#faq">
              <div
                aria-label="View frequently asked questions"
                className="resource-link"
              >
                <span>
                  {' '}
                  View FAQ
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </article>
          <div className="resource-cta">
            <h4>Resource Hub</h4>
            <p>
              {' '}
              Get started with our curated starter pack: quick-read guide,
              policy highlights, and contact options.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <button
              aria-label="Access resource hub"
              className="btn btn-secondary"
            >
              {' '}
              Get Started
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </button>
          </div>
        </aside>
      </section>
      <section id="newsletter-section" className="newsletter">
        <div className="subscribe">
          <h2 id="newsletter-heading" className="newsletter-title">
            {' '}
            Stay informed. Stay ahead.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h2>
          <p className="newsletter-subtitle">
            {' '}
            Subscribe for curated alerts on newly listed study materials, campus
            events, and verified success stories from the StudyLoop community.
            Delivered monthly—concise, relevant, and actionable.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <form
            aria-labelledby="newsletter-heading"
            data-form-id="a9e369e4-ae5c-4b87-bc5b-3b1c3e0d64c0"
            className="newsletter-form"
          >
            <div className="form-row">
              <input
                type="email"
                id="email-input"
                name="textinput"
                required="true"
                aria-label="Email address"
                placeholder="Enter your email address"
                aria-required="true"
                data-form-field-id="email-input"
              />
              <button
                id="thq_button_4b0R"
                name="button"
                type="submit"
                aria-pressed="false"
                data-form-field-id="thq_button_4b0R"
                className="btn btn-primary"
              >
                {' '}
                Sign Up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
            <p className="form-legal">
              {' '}
              We respect your time and privacy. No spam. Unsubscribe anytime.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </form>
        </div>
        <aside
          role="region"
          aria-label="Trust and privacy information"
          className="trust"
        >
          <div className="trust-badges">
            <div className="trust-badge-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Privacy Protected</span>
            </div>
            <div className="trust-badge-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>GDPR Compliant</span>
            </div>
          </div>
          <div className="trust-links">
            <p className="trust-note">
              {' '}
              Your information is secure and will never be shared.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <nav aria-label="Privacy links">
              <a href="#privacy">
                <div>
                  <span>Privacy Policy</span>
                </div>
              </a>
              <a href="#terms">
                <div>
                  <span>Terms of Service</span>
                </div>
              </a>
            </nav>
          </div>
        </aside>
      </section>
      <div className="home-container19">
        <div className="home-container20">
          <Script
            html={`<style>
        @keyframes heroFadeIn {from {opacity: 0;
transform: translateY(8px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes ctaFadeIn {from {opacity: 0;
transform: translateY(8px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes trustFadeIn {from {opacity: 0;}
to {opacity: 1;}}@keyframes fadeInScale {from {opacity: 0;
transform: scale(0.98);}
to {opacity: 1;
transform: scale(1);}}@keyframes testimonialFadeIn {from {opacity: 0;
transform: translateY(6px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes cardFadeIn {from {opacity: 0;
transform: translateY(8px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes newsletterFadeIn {from {opacity: 0;
transform: translateY(6px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container21">
        <div className="home-container22">
          <Script
            html={`<script defer data-name="studyloop-homepage">
(function(){
  // Hero video fallback handling
  const heroVideo = document.querySelector(".hero-video")
  if (heroVideo) {
    heroVideo.addEventListener("error", function () {
      const heroVisual = document.querySelector(".hero-visual")
      if (heroVisual) {
        heroVisual.style.background =
          "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
      }
    })
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const emailInput = document.getElementById("email-input")

      if (emailInput && emailInput.value) {
        // Show success message (in production, this would actually submit to a backend)
        const formRow = newsletterForm.querySelector(".form-row")
        const successMessage = document.createElement("div")
        successMessage.textContent =
          "Thank you for subscribing! Check your email to confirm."
        successMessage.style.cssText = \`
        color: var(--color-on-surface);
        background: var(--color-secondary);
        padding: var(--spacing-sm);
        border-radius: var(--border-radius-sm);
        margin-top: var(--spacing-sm);
        font-size: var(--font-size-sm);
        text-align: center;
      \`

        // Replace form with success message
        if (formRow) {
          formRow.style.display = "none"
        }
        newsletterForm.appendChild(successMessage)
      }
    })
  }

  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe animated elements
  const animatedElements = document.querySelectorAll(
    ".step-card, .testimonial-card, .card"
  )
  animatedElements.forEach(function (element) {
    observer.observe(element)
  })

  // Smooth scroll for hero link
  const heroLink = document.querySelector(".hero-link")
  if (heroLink) {
    heroLink.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  }

  // Card click handlers for utility cards
  const utilityCards = document.querySelectorAll(".card--utility")
  utilityCards.forEach(function (card) {
    card.addEventListener("click", function (e) {
      // Don't trigger if clicking on the button itself
      if (e.target.tagName !== "BUTTON") {
        const button = card.querySelector(".btn")
        if (button) {
          button.click()
        }
      }
    })

    // Make cards keyboard accessible
    card.setAttribute("tabindex", "0")
    card.setAttribute("role", "button")

    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        const button = card.querySelector(".btn")
        if (button) {
          button.click()
        }
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container23">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon82"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text42">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
