import { SeoPropsType } from '@/types/SeoPropsType'
import Head from 'next/head'

function SEO({ title }: SeoPropsType) {
  return (
    <Head>
      <title>{`Hi ${title ?? ''}`}</title>
    </Head>
  )
}

export default SEO
