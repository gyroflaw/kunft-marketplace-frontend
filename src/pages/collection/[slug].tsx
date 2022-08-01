import { gql } from '@apollo/client'
import { GetStaticProps, GetStaticPaths } from 'next'
import Collection from '@/views/Collection'
import { client } from '../../Providers'

export default Collection

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params === undefined) return { props: {} }
  const { slug } = params

  const { data } = await client.query({
    query: gql`
      query getCollections($query: String!, $page: Int!, $limit: Int!) {
        getCollections(query: $query, page: $page, limit: $limit) {
          collections {
            contractPackageHash
            contractHash
            name
            description
            symbol
            slug
            image
            verified
            promoted
          }
        }
      }
    `,
    variables: {
      query: slug,
      page: 1,
      limit: 20,
    },
  })

  return { props: { collection: data?.getCollections?.collections[0] } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      {
        getCollectionSlugs {
          slugs {
            slug
          }
        }
      }
    `,
  })
  const paths = data.getCollectionSlugs.slugs.map((slug: { slug: string }) => {
    return { params: slug }
  })
  return {
    paths,
    fallback: false,
  }
}
