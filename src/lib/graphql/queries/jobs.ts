export const GET_JOBS = `
  query GetJobs {
    jobs(where: { orderby: { field: DATE, order: DESC } }) {
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
        jobFields {
          jobTitle
          jobLocation
          jobType
          jobDepartment
          jobExperience
          jobSalaryMin
          jobSalaryMax
          jobSalaryCurrency
          jobDeadline
          jobEmail
          jobStatus
          jobFeatured
          jobResponsibilities {
            item
          }
          jobRequirements {
            item
          }
          jobBenefits {
            item
          }
        }
      }
    }
  }
`

export const GET_JOB_BY_SLUG = `
  query GetJobBySlug($slug: ID!) {
    job(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      content
      date
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      jobFields {
        jobTitle
        jobLocation
        jobType
        jobDepartment
        jobExperience
        jobSalaryMin
        jobSalaryMax
        jobSalaryCurrency
        jobDeadline
        jobEmail
        jobStatus
        jobFeatured
        jobResponsibilities {
          item
        }
        jobRequirements {
          item
        }
        jobBenefits {
          item
        }
      }
    }
  }
`

export const GET_FEATURED_JOBS = `
  query GetFeaturedJobs {
    jobs(where: { 
      metaQuery: {
        metaArray: [
          {
            key: "job_featured"
            value: "1"
            compare: EQUAL_TO
          }
        ]
      }
    }) {
      nodes {
        id
        databaseId
        title
        excerpt
        slug
        jobFields {
          jobTitle
          jobLocation
          jobType
          jobDepartment
        }
      }
    }
  }
`
