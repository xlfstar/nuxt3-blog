<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">所有文章</h1>
    
    <!-- 文章列表 -->
    <div class="space-y-8">
      <article v-for="i in 10" :key="i" class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-2">
          <NuxtLink :to="`/posts/${i}`" class="hover:text-blue-600">
            文章标题 {{ i }}
          </NuxtLink>
        </h2>
        <div class="flex items-center text-sm text-gray-500 mb-4">
          <span>2024-03-20</span>
          <span class="mx-2">·</span>
          <span>分类：技术</span>
          <span class="mx-2">·</span>
          <span>阅读时间：5分钟</span>
        </div>
        <p class="text-gray-600 mb-4">
          这是文章的摘要内容，简短介绍文章的主要内容...
        </p>
        <div class="flex gap-2">
          <span v-for="tag in ['Vue', 'Nuxt', 'Web']" :key="tag" 
                class="px-2 py-1 bg-gray-100 text-sm rounded">
            {{ tag }}
          </span>
        </div>
      </article>
    </div>

    <!-- 分页 -->
    <div class="flex justify-center mt-8 gap-2">
      <button class="px-4 py-2 border rounded hover:bg-gray-100">上一页</button>
      <button class="px-4 py-2 border rounded hover:bg-gray-100">下一页</button>
    </div>
  </div>
</template> 