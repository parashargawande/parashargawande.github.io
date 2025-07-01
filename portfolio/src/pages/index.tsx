import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <Heading as="h1" className="hero__title">
              Hi, I'm {siteConfig.title} 👋
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p className="hero__description">
            I build scalable web apps, smart IoT systems, and cloud-powered solutions — turning ideas into real-world impact through clean, efficient code.
            </p>
            <div className={styles.buttons}>
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
          <div className={styles.ctaButtons}>
            <Link
              className="button button--primary button--lg"
              href="mailto:parashargawande@gmail.com">
              Get In Touch 📧
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
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
