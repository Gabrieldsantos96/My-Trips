import { MapProps } from 'modules/Home/components/Map'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { NextSeo } from 'next-seo'
import LinkWrapper from 'modules/shared/LinkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('modules/Home/components/Map'), { ssr: false })

export default function Home({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show more informations and photos when clicked."
        canonical="https://my-trips.willianjusten.com.br"
        openGraph={{
          url: 'https://my-trips.willianjusten.com.br',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: 'https://my-trips.willianjusten.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 60,
    props: {
      places
    }
  }
}
