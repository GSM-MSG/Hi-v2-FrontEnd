import Head from 'next/head'

interface SEOProps {
  title: string
}

function SEO({ title }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default SEO
