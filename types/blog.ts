export interface Post {
  id: number
  title: string
  content: string
  summary: string
  createdAt: string
  updatedAt: string
  categoryId: number
  tags: string[]
  author: string
  readingTime: number
  featured: boolean
}

export interface Category {
  id: number
  name: string
  slug: string
  count: number
}

export interface PostsState {
  posts: Post[]
  featuredPosts: Post[]
  categories: Category[]
  loading: boolean
  error: string | null
  searchQuery: string
  searchResults: Post[]
} 