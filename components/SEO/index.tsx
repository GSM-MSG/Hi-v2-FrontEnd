import { SeoProps } from '@/types/components'
import Head from 'next/head'

function SEO({ title }: SeoProps) {
  return (
    <Head>
      <title>{`Hi ${title ?? ''}`}</title>
    </Head>
  )
}

export default SEO
