<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">我的博客</h1>
    
    <!-- Loading 状态 -->
    <div v-if="blogStore.loading" class="text-center py-8">
      <p class="text-gray-600">加载中...</p>
    </div>

    <!-- Error 状态 -->
    <div v-else-if="blogStore.error" class="text-center py-8">
      <p class="text-red-600">{{ blogStore.error }}</p>
    </div>

    <template v-else>
      <!-- 特色文章 -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-4">特色文章</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="post in blogStore.featuredPosts" 
               :key="post.id" 
               class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
            <p class="text-gray-600 mb-4">{{ post.summary }}</p>
            <NuxtLink :to="`/posts/${post.id}`" 
                     class="text-blue-500 hover:text-blue-700">
              阅读更多 →
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- 最新文章 -->
      <section>
        <h2 class="text-2xl font-semibold mb-4">最新文章</h2>
        <div class="space-y-6">
          <article v-for="post in blogStore.getLatestPosts" 
                   :key="post.id" 
                   class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
            <div class="text-sm text-gray-500 mb-2">
              发布于 {{ new Date(post.createdAt).toLocaleDateString() }} | 
              分类：{{ getCategoryName(post.categoryId) }}
            </div>
            <p class="text-gray-600">{{ post.summary }}</p>
          </article>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog'

const blogStore = useBlogStore()

// 在组件挂载时获取数据
onMounted(() => {
  blogStore.fetchPosts()
})

// 获取分类名称的辅助函数
const getCategoryName = (categoryId: number) => {
  const category = blogStore.categories.find(c => c.id === categoryId)
  return category?.name || '未分类'
}
</script> 