import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Typewriter from "typewriter-effect";

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <Heading as="h1" className="hero__title">
              Hi, I'm {siteConfig.title} 👋
            </Heading>

            <p className="hero__subtitle">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Full-Stack Developer",
                    "RC & Electronics Hobbyist",
                    "Tech Creator"
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 60,
                }}
              />
            </p>

            <p className="hero__description">
              I build scalable web apps, smart IoT systems, and cloud-powered solutions —
              turning ideas into real-world impact through clean, efficient code.
            </p>

            <p className="hero__description" style={{ marginTop: "1rem", fontWeight: 500 }}>
              🎥 Check out my YouTube channel for in-depth project videos,
              RC builds, IoT tutorials, and behind-the-scenes tech breakdowns.
            </p>

            <div className={styles.buttons} style={{ display: "flex", gap: "12px", alignItems: "center" }}>

              <Link
                className="button button--secondary button--lg"
                to="/projects">
                View My Projects 🚀
              </Link>

              <Link
                className="button button--outline button--lg"
                to="/docs/intro">
                Learn More About Me 📖
              </Link>

              <Link
                className="button button--outline button--lg"
                href="https://www.youtube.com/@parashargawande"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.186a2.998 2.998 0 00-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.387.566a2.998 2.998 0 00-2.11 2.12A31.26 31.26 0 000 12a31.26 31.26 0 00.502 5.814 2.998 2.998 0 002.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.387-.566a2.998 2.998 0 002.11-2.12A31.26 31.26 0 0024 12a31.26 31.26 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
                YouTube
              </Link>

            </div>
          </div>
        </div>
      </div>
    </header>


  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="text--center">
          <Heading as="h2">Let's Work Together</Heading>

          <p className="margin-bottom--lg">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>


          {/* Social Icons */}
          <div style={{ marginTop: "2rem" }}>
            <a href="mailto:parashargawande@gmail.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                alt="Email"
                style={{ margin: "5px" }}
              />
            </a>

            <a href="https://linkedin.com/in/parashargawande" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="LinkedIn"
                style={{ margin: "5px" }}
              />
            </a>

            <a href="https://github.com/parashargawande" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
                style={{ margin: "5px" }}
              />
            </a>

            <a href="https://www.instagram.com/parashargawande" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                alt="Instagram"
                style={{ margin: "5px" }}
              />
            </a>
          </div>

        </div>
      </div>
    </section>

  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome | नमस्ते `}
      description="Personal website of Parashar Gawande - Software Engineer | Tech Enthusiast">
      <HomepageHeader />
      <main>
        <CTASection />
      </main>
    </Layout>
  );
}
