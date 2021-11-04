<template>
  <div class="fixed bottom-0 -mx-4 w-full bg-white">
    <div class="h-px w-screen bg-gray-200"></div>
    <div class="mt-3 mx-6 mb-4 flex justify-between items-center">
      <nuxt-link to="/" @click="highlightTabIcon">
        <HomeIcon :class="homeIconClass" />
      </nuxt-link>
      <nuxt-link to="/search">
        <SearchIcon />
      </nuxt-link>
      <nuxt-link to="/create-post">
        <MevoIcon />
      </nuxt-link>
      <nuxt-link to="/notifications">
        <BellIcon :class="bellIconClass" />
      </nuxt-link>
      <nuxt-link to="/profile">
        <div class="w-6 h-6 rounded-full bg-indigo-400"></div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import HomeIcon from '@/components/home/tabbar/HomeIcon.vue'
import SearchIcon from '@/components/home/tabbar/SearchIcon.vue'
import MevoIcon from '@/components/home/tabbar/MevoIcon.vue'
import BellIcon from '@/components/home/tabbar/BellIcon.vue'

export default {
  data() {
    return {
      currentTab: null,
    }
  },
  computed: {
    homeIconClass() {
      return this.currentTab === '/' ? 'text-primary-500' : ''
    },
    bellIconClass() {
      return this.currentTab === '/notifications' ? 'text-primary-500' : ''
    },
  },
  components: {
    HomeIcon,
    SearchIcon,
    MevoIcon,
    BellIcon,
  },
  watch: {
    $route() {
      this.currentTab = this.$route.path
    },
  },
  mounted() {
    this.currentTab = this.$route.path
  },
}
</script>

<style></style>
