<template>
  <div class="relative" ref="searchContainer">
    <div class="relative">
      <MagnifyingGlassIcon class="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索文章..."
        class="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        @input="handleSearch"
      />
      <XMarkIcon 
        v-if="searchQuery"
        class="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
        @click="clearSearch"
      />
    </div>
    
    <!-- 搜索结果 -->
    <div v-if="blogStore.searchResults.length && searchQuery" 
         class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 border">
      <div class="max-h-96 overflow-y-auto">
        <NuxtLink
          v-for="post in blogStore.searchResults"
          :key="post.id"
          :to="`/posts/${post.id}`"
          class="block px-4 py-3 hover:bg-gray-50 transition duration-150"
        >
          <div class="flex items-start">
            <DocumentTextIcon class="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
            <div class="ml-3">
              <h4 class="font-medium text-gray-900">{{ post.title }}</h4>
              <p class="text-sm text-gray-600 mt-1 line-clamp-2">{{ post.summary }}</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog'
import { useDebounceFn } from '@vueuse/core'
import { 
  MagnifyingGlassIcon, 
  XMarkIcon,
  DocumentTextIcon 
} from '@heroicons/vue/24/outline'

const blogStore = useBlogStore()
const searchQuery = ref('')
const searchContainer = ref(null)

const handleSearch = useDebounceFn(() => {
  blogStore.setSearchQuery(searchQuery.value)
}, 300)

const clearSearch = () => {
  searchQuery.value = ''
  blogStore.setSearchQuery('')
}
</script> 