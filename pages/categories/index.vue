<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">文章分类</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="category in categories" :key="category.name" 
           class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-2">{{ category.name }}</h2>
        <p class="text-gray-600 mb-2">{{ category.count }} 篇文章</p>
        <NuxtLink :to="`/categories/${category.slug}`" 
                  class="text-blue-500 hover:text-blue-700">
          查看文章 →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: '技术', count: 12, slug: 'tech' },
  { name: '生活', count: 8, slug: 'life' },
  { name: '随笔', count: 5, slug: 'notes' },
  { name: '教程', count: 15, slug: 'tutorials' },
]
</script> 