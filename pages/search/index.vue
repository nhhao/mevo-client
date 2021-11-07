<template>
  <div class="">
    <form
      class="-ml-2 mt-4 flex items-center space-x-1.5"
      @submit.prevent="searchHandler"
    >
      <nuxt-link to="/">
        <nuxt-img src="icons/back.svg" />
      </nuxt-link>
      <div class="flex-1">
        <input
          v-model="formData.searchPattern"
          type="text"
          class="input border-transparent"
          placeholder="Search Mevo"
        />
      </div>
    </form>
    <div class="separate -mx-4 mt-4"></div>
    <div class="mt-2 flex justify-between items-center">
      <h2 class="text-primary-500 font-semibold text-lg">Recent searches</h2>
      <button>
        <nuxt-img src="icons/emptySearch.svg" />
      </button>
    </div>
    <div class="mt-4 mx-4 grid grid-cols-4 gap-4">
      <div
        v-for="result in recentSearches"
        :key="result._id"
        class="col-span-1 flex flex-col items-center space-y-1.5"
      >
        <div class="w-14 h-14 rounded-md overflow-hidden">
          <nuxt-img :src="result.avatarUrl" class="object-cover" />
        </div>
        <p
          class="w-full text-sm font-medium text-center text-gray-600 truncate"
        >
          {{ result.user }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import recentSearchesData from '@/data/recentSearches'
export default {
  layout: 'empty',
  data() {
    return {
      recentSearches: {},
      formData: {
        searchPattern: '',
      },
    }
  },
  created() {
    this.recentSearches = {
      ...recentSearchesData.recentSearches,
    }
  },
  methods: {
    searchHandler() {},
  },
}
</script>
