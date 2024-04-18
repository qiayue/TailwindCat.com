import Head from 'next/head'

interface Props {
  isDark: boolean
}

const SEO = ({ isDark }: Props): JSX.Element => {
  const description =
    'A tailwind multi-tool to convert and visualize your classes properties.'
  const name = 'TailwindCat'
  const title = ': Tailwind CSS Width,Height,Flex,Border,Grid,Colors,Components'
  return (
    <Head>
      <>
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/icons/android-chrome-192x192.png'
        />
        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
      </>
      <link rel='canonical' href='https://tailwindcat.com/' />
      <meta
        name='viewport'
        content='initial-scale=1, viewport-fit=cover, user-scalable=no'
      />
      <meta name='theme-color' content={isDark ? '#0f172a' : '#e5e7eb'} />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />

      <title>{name}{title}</title>
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://tailwindcat.com' />
      <meta property='og:title' content={name} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/og-image.png' />

      <meta property='twitter:card' content='summary' />
      <meta property='twitter:url' content='https://tailwindcat.com/' />
      <meta property='twitter:title' content={name} />
      <meta property='twitter:creator' content='Seb Graf' />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content='/og-image.png' />

      <meta name='application-name' content={name} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={name} />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='format-detection' content='telephone=no' />
    </Head>
  )
}

export default SEO
