export const GET_RESOURCES = `
  query GetResources($first: Int = 100) {
    posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        databaseId
        title
        excerpt
        content
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            id
            name
            slug
            count
          }
        }
        tags {
          nodes {
            id
            name
            slug
            count
          }
        }
      }
    }
  }
`

export const GET_RESOURCE_BY_SLUG = `
  query GetResourceBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      content
      excerpt
      date
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          id
          name
          slug
        }
      }
      tags {
        nodes {
          id
          name
          slug
        }
      }
    }
  }
`

export const GET_ALL_CATEGORIES = `
  query GetAllCategories {
    categories(first: 100) {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`

export const GET_ALL_TAGS = `
  query GetAllTags {
    tags(first: 100) {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`

export const GET_FEATURED_RESOURCES = `
  query GetFeaturedResources {
    posts(where: { 
      metaQuery: {
        metaArray: [
          {
            key: "is_featured"
            value: "1"
            compare: EQUAL_TO
          }
        ]
      }
    }) {
      nodes {
        id
        title
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  }
`
