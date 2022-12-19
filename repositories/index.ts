import blog, { RepoBlogProps } from './blog'

export type RepositoryProps = {
  blog: RepoBlogProps
}

const repositories: RepositoryProps = {
  blog,
}

export default repositories
