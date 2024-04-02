import { SeoProps } from '@/types/components'
import Head from 'next/head'

export default function SEO({ title }: SeoProps) {
  return (
    <Head>
      <title>{`Hi ${title ?? ''}`}</title>
    </Head>
  )
}
