export const GET_LEGISLATION = `
  query GetLegislation($first: Int = 100) {
    legislations(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        databaseId
        title
        excerpt
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        legislationTypes {
          nodes {
            id
            name
            slug
          }
        }
        legislationCategories {
          nodes {
            id
            name
            slug
          }
        }
      }
    }
  }
`

export const GET_LEGISLATION_BY_SLUG = `
  query GetLegislationBySlug($slug: ID!) {
    legislation(id: $slug, idType: URI) {
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
      legislationNumber
      articleNumber
      chapterNumber
      sectionNumber
      paragraphNumbers
      legislationStatus
      legislationDate
      officialSource
      lastModifiedDate
      originalText
      simplifiedText
      practicalExamples {
        exampleTitle
        exampleScenario
        exampleSolution
      }
      keyPoints {
        keyPointText
      }
      commonMistakes {
        mistakeText
      }
      modifications {
        modificationLaw
        modificationDate
        modificationDescription
      }
      relatedLegislation {
        ... on Legislation {
          id
          title
          slug
          articleNumber
        }
      }
      targetAudience
      difficultyLevel
      readingTimeLegislation
      seoKeywords
      isImportant
      complianceChecklist {
        checklistItem
      }
    }
  }
`

export const GET_IMPORTANT_LEGISLATION = `
  query GetImportantLegislation {
    legislations(where: { 
      metaQuery: {
        metaArray: [
          {
            key: "is_important"
            value: "1"
            compare: EQUAL_TO
          }
        ]
      }
    }, first: 10) {
      nodes {
        id
        title
        slug
        articleNumber
        legislationNumber
        difficultyLevel
        readingTimeLegislation
      }
    }
  }
`

export const GET_LEGISLATION_TYPES = `
  query GetLegislationTypes {
    legislationTypes {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`

export const GET_LEGISLATION_CATEGORIES = `
  query GetLegislationCategories {
    legislationCategories {
      nodes {
        id
        name
        slug
        count
      }
    }
  }
`
