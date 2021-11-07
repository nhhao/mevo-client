<template>
  <div class="px-4" :class="paddingBottom" @keydown.space="pressed">
    <nuxt />
    <ThePlayerBar @changeThePlayerBarStatus="changeThePlayerBarStatus" />
    <TheTabbar />
  </div>
</template>

<script>
import TheTabbar from '@/components/layouts/TheTabbar.vue'
import ThePlayerBar from '@/components/layouts/ThePlayerBar.vue'
export default {
  components: {
    TheTabbar,
    ThePlayerBar,
  },
  data() {
    return {
      isPlayerBarShows: false,
    }
  },
  computed: {
    paddingBottom() {
      return this.isPlayerBarShows ? 'pb-[6.875rem]' : 'pb-[3.5625rem]'
    },
  },
  methods: {
    changeThePlayerBarStatus() {
      this.isPlayerBarShows = true
    },
    pressed() {
      console.log('pressed space')
    },
  },
}
</script>

<style></style>
