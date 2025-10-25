import React from "react";
import '../styles/contact.css';

const IconEmail = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 7.2l8.8 6.05a2 2 0 0 0 2.4 0L22 7.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5v13H0v-13zM8.5 8.5h4.8v1.8h.1c.7-1.3 2.4-2.6 4.9-2.6 5.3 0 6.3 3.5 6.3 8v9.8h-5V15.6c0-2.3 0-5.3-3.2-5.3-3.2 0-3.7 2.5-3.7 5.1v8.1h-5v-13z" fill="currentColor"/>
  </svg>
);

const IconGithub = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.73 3.07 8.74 7.33 10.16.54.1.74-.24.74-.52 0-.26-.01-.95-.01-1.86-2.98.65-3.61-1.44-3.61-1.44-.48-1.22-1.18-1.55-1.18-1.55-.97-.66.07-.65.07-.65 1.07.08 1.63 1.1 1.63 1.1.95 1.62 2.5 1.15 3.11.88.1-.69.37-1.15.67-1.41-2.38-.27-4.88-1.19-4.88-5.29 0-1.17.42-2.13 1.1-2.88-.11-.27-.48-1.36.1-2.84 0 0 .9-.29 2.95 1.1.86-.24 1.78-.36 2.7-.36.92 0 1.84.12 2.7.36 2.05-1.39 2.95-1.1 2.95-1.1.58 1.48.21 2.57.1 2.84.69.75 1.1 1.71 1.1 2.88 0 4.11-2.51 5.02-4.9 5.28.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.63.75.52C19 20.34 22.1 16.33 22.1 11.6 22.1 5.33 17.27.5 12 .5z" fill="currentColor"/>
  </svg>
);

const Contact = () => {
  const email = "shreyalakhera922@gmail.com";
  const linkedin = "https://www.linkedin.com/in/shreya-lakhera-7895ab28b/";
  const github = "https://github.com/Shreya9808";

  return (
    <main className="contact-page" role="main">
      <section className="contact-card-wrapper">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-sub">I'd love to hear from you — reach out via any of the links below.</p>

        <div className="contact-grid">

          <div className="contact-card" aria-label="Email">
            <div className="icon-wrap" aria-hidden="true"><IconEmail/></div>
            <h3>Email</h3>
            <a className="contact-link" href={`mailto:${email}`} aria-label={`Send email to ${email}`}>{email}</a>
            <p className="contact-small">I usually reply within 24–48 hours.</p>
          </div>

          <div className="contact-card" aria-label="LinkedIn">
            <div className="icon-wrap" aria-hidden="true"><IconLinkedIn/></div>
            <h3>LinkedIn</h3>
            <a className="contact-link" href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="Open my LinkedIn profile">
              linkedin.com/in/your-linkedin
            </a>
            <p className="contact-small">Connect with me for professional updates.</p>
          </div>

          <div className="contact-card" aria-label="GitHub">
            <div className="icon-wrap" aria-hidden="true"><IconGithub/></div>
            <h3>GitHub</h3>
            <a className="contact-link" href={github} target="_blank" rel="noopener noreferrer" aria-label="Open my GitHub profile">
              github.com/yourgithub
            </a>
            <p className="contact-small">Check my projects and code samples.</p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;
