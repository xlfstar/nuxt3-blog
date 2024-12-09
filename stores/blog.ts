import { defineStore } from 'pinia'
import type { Post, Category, PostsState } from '~/types/blog'

export const useBlogStore = defineStore('blog', {
  state: (): PostsState => ({
    posts: [],
    featuredPosts: [],
    categories: [],
    loading: false,
    error: null,
    searchQuery: '',
    searchResults: []
  }),

  getters: {
    getPostById: (state) => (id: number) => {
      return state.posts.find(post => post.id === id)
    },
    
    getLatestPosts: (state) => {
      return [...state.posts]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5)
    },

    getPostsByCategory: (state) => (categoryId: number) => {
      return state.posts.filter(post => post.categoryId === categoryId)
    }
  },

  actions: {
    // 模拟API调用加载数据
    async fetchPosts() {
      this.loading = true
      this.error = null
      
      try {
        // 模拟API延迟
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // 模拟数据
        this.posts = [
          {
            id: 1,
            title: 'Vue 3 组合式 API 最佳实践',
            content: '详细内容...',
            summary: 'Vue 3 组合式 API 带来了更好的代码组织方式和更强的类型推导能力...',
            createdAt: '2024-03-20T10:00:00Z',
            updatedAt: '2024-03-20T10:00:00Z',
            categoryId: 1,
            tags: ['Vue', 'JavaScript', 'Frontend'],
            author: 'Admin',
            readingTime: 5,
            featured: true
          },
          {
            id: 2,
            title: 'Nuxt 3 全栈开发指南',
            content: '详细内容...',
            summary: 'Nuxt 3 是一个强大的 Vue.js 框架，让全栈开发变得更简单...',
            createdAt: '2024-03-19T10:00:00Z',
            updatedAt: '2024-03-19T10:00:00Z',
            categoryId: 1,
            tags: ['Nuxt', 'Vue', 'Full Stack'],
            author: 'Admin',
            readingTime: 8,
            featured: true
          },
          // 添加更多模拟文章...
        ]

        this.categories = [
          { id: 1, name: '技术', slug: 'tech', count: 12 },
          { id: 2, name: '生活', slug: 'life', count: 8 },
          { id: 3, name: '随笔', slug: 'notes', count: 5 },
          { id: 4, name: '教程', slug: 'tutorials', count: 15 }
        ]

        this.featuredPosts = this.posts.filter(post => post.featured)
      } catch (error) {
        this.error = '加载文章失败'
        console.error('Failed to fetch posts:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchPostById(id: number) {
      this.loading = true
      this.error = null
      
      try {
        await new Promise(resolve => setTimeout(resolve, 500))
        const post = this.getPostById(id)
        if (!post) {
          throw new Error('Post not found')
        }
        return post
      } catch (error) {
        this.error = '加载文章失败'
        console.error('Failed to fetch post:', error)
      } finally {
        this.loading = false
      }
    },

    setSearchQuery(query: string) {
      this.searchQuery = query
      this.searchResults = this.posts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      )
    }
  }
}) 