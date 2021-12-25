import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
  return (
      <Layout>
    <Head>
        <title>Amazon Clone</title>
      </Head>
      <main>
        <div className='flex-grow mt-1'>
          <p>this is the main section</p>
          <p>this is the another section</p>
        </div>
      </main>
    </Layout>
  )
}
