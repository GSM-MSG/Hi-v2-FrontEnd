import { SeoPropsType } from '@/types/components'
import Head from 'next/head'

function SEO({ title }: SeoPropsType) {
  return (
    <Head>
      <title>{`Hi ${title ?? ''}`}</title>
    </Head>
  )
}

export default SEO
