import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

// pages/404.js
export default function Custom404() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <h1>404 - Page Not Found</h1>
      </section>
    </Layout>
  )
}
