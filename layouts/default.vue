<template>
  <div class="px-4">
    <TheHeader />
    <div class="h-[49px]"></div>
    <nuxt />
    <TheTabbar />
  </div>
</template>

<script>
import TheHeader from '../components/layouts/TheHeader.vue'
import TheTabbar from '../components/layouts/TheTabbar.vue'
export default {
  components: {
    TheHeader,
    TheTabbar,
  },
}
</script>

<style></style>
