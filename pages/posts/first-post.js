import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1 className={utilStyles.headingXl}>First Post</h1>
            <div className={utilStyles.lightText}>
                <time>January 2, 2020</time>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Magnam ab nam ratione excepturi, aut voluptatibus vitae, ut, ducimus delectus a ad ipsum placeat! Repellendus deleniti, molestiae quia eveniet ipsum facere.</p>
        </Layout>
    )
}
