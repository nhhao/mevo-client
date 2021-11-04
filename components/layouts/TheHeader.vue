<template>
  <div class="fixed top-0 left-0 right-0 bg-white z-20 px-4 pt-2">
    <div class="flex justify-between items-center">
      <nuxt-link to="/">
        <nuxt-img src="/images/logo.png" class="h-8" />
      </nuxt-link>
      <nuxt-link to="/direct-messages">
        <nuxt-img src="/icons/chat.svg" />
      </nuxt-link>
    </div>
    <div class="mt-2 -mx-4 h-px w-screen bg-gray-200"></div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
