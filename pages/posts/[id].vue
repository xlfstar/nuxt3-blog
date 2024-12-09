<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Loading 状态 -->
    <div v-if="blogStore.loading" class="text-center py-8">
      <p class="text-gray-600">加载中...</p>
    </div>

    <!-- Error 状态 -->
    <div v-else-if="blogStore.error" class="text-center py-8">
      <p class="text-red-600">{{ blogStore.error }}</p>
    </div>

    <article v-else-if="post" class="max-w-3xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
        
        <div class="flex items-center text-gray-500 space-x-4">
          <div class="flex items-center">
            <UserIcon class="h-5 w-5 mr-1" />
            <span>{{ post.author }}</span>
          </div>
          <div class="flex items-center">
            <CalendarIcon class="h-5 w-5 mr-1" />
            <span>{{ formatDate(post.createdAt) }}</span>
          </div>
          <div class="flex items-center">
            <ClockIcon class="h-5 w-5 mr-1" />
            <span>{{ post.readingTime }} 分钟阅读</span>
          </div>
        </div>
      </div>

      <!-- 文章内容 -->
      <div class="prose prose-lg max-w-none">
        {{ post.content }}
      </div>

      <!-- 标签 -->
      <div class="mt-8 flex items-center">
        <TagIcon class="h-5 w-5 text-gray-400 mr-2" />
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in post.tags" 
                :key="tag" 
                class="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors">
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- 分享按钮 -->
      <div class="mt-8 pt-8 border-t">
        <div class="flex items-center justify-between">
          <div class="text-gray-600">分享这篇文章：</div>
          <div class="flex space-x-4">
            <button class="text-gray-400 hover:text-blue-500 transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </button>
            <button class="text-gray-400 hover:text-blue-600 transition-colors">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog'
import { formatDate } from '~/utils/date'
import { 
  UserIcon, 
  CalendarIcon, 
  ClockIcon,
  TagIcon
} from '@heroicons/vue/24/outline'
import type { Post } from '~/types/blog'

const route = useRoute()
const blogStore = useBlogStore()
const post = ref<Post | null>(null)

onMounted(async () => {
  const postId = parseInt(route.params.id as string)
  const fetchedPost = await blogStore.fetchPostById(postId)
  if (fetchedPost) {
    post.value = fetchedPost
  }
})
</script>

<style>
.prose {
  @apply text-gray-800;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4;
}

.prose p {
  @apply mb-4;
}

.prose a {
  @apply text-blue-600 hover:text-blue-800;
}

.prose pre {
  @apply bg-gray-100 p-4 rounded-lg my-4;
}

.prose code {
  @apply bg-gray-100 px-1 py-0.5 rounded;
}

.prose blockquote {
  @apply border-l-4 border-gray-200 pl-4 italic my-4;
}

.prose ul {
  @apply list-disc list-inside my-4;
}

.prose ol {
  @apply list-decimal list-inside my-4;
}
</style> 