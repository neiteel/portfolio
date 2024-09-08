import { Project } from '@/types'
const SPACE = process.env.CONTENTFUL_SPACE_ID
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

async function apiCall(query: string) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query }),
  }
  return await fetch(fetchUrl, options)
}

export async function getProjects() {
  const query = /* GraphQL */ `
    {
      projectCollection {
        items {
          _id
          role
          stack
          title
          url
          videoMp4 {
            url
          }
          year
        }
      }
    }
  `

  const response = await apiCall(query)
  const json = await response.json()
  const formattedData = json.data.projectCollection.items.map(
    (project: Project) => {
      const { _id, title, role, stack, url, videoMp4, year } = project
      return {
        id: _id,
        title,
        role,
        stack,
        url,
        video: videoMp4.url,
        year,
      }
    },
  )

  return formattedData
}
