<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <PencilSquareIcon class="h-6 w-6 text-blue-600" />
            <span class="text-xl font-bold">我的博客</span>
          </NuxtLink>
          
          <!-- 搜索组件 -->
          <div class="flex-1 max-w-xl mx-4">
            <BlogSearch />
          </div>
          
          <div class="flex items-center space-x-6">
            <NuxtLink to="/" class="nav-link">
              <HomeIcon class="h-5 w-5" />
              <span>首页</span>
            </NuxtLink>
            <NuxtLink to="/posts" class="nav-link">
              <DocumentTextIcon class="h-5 w-5" />
              <span>文章</span>
            </NuxtLink>
            <NuxtLink to="/categories" class="nav-link">
              <FolderIcon class="h-5 w-5" />
              <span>分类</span>
            </NuxtLink>
            <NuxtLink to="/about" class="nav-link">
              <UserIcon class="h-5 w-5" />
              <span>关于</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- 页面内容 -->
    <main class="min-h-[calc(100vh-4rem-4rem)]">
      <slot />
    </main>

    <!-- 页脚 -->
    <footer class="bg-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <PencilSquareIcon class="h-6 w-6 text-gray-400" />
            <span class="text-gray-600">我的博客</span>
          </div>
          <div class="flex space-x-6">
            <a href="https://github.com" target="_blank" class="text-gray-400 hover:text-gray-600">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" class="text-gray-400 hover:text-gray-600">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="mt-4 text-center text-gray-600">
          <p>© 2024 我的博客. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { 
  HomeIcon,
  DocumentTextIcon,
  FolderIcon,
  UserIcon,
  PencilSquareIcon
} from '@heroicons/vue/24/outline'
</script>

<style scoped>
.nav-link {
  @apply flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition duration-150;
}

.nav-link.router-link-active {
  @apply text-blue-600;
}
</style> 