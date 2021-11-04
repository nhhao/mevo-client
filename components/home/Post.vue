<template>
  <div class="mt-4">
    <div class="relative">
      <div class="flex items-center space-x-2">
        <nuxt-link
          to="/profile"
          class="inline-block w-[44px] h-[44px] overflow-hidden rounded-[7px]"
        >
          <nuxt-img :src="post.avatarUrl" class="object-cover" />
        </nuxt-link>
        <div class="flex flex-col space-x-0.5">
          <nuxt-link to="/profile" class="text-sm font-semibold">
            {{ post.author }}
          </nuxt-link>
          <nuxt-link to="/post" class="text-xs text-gray-500 hover:underline">
            {{ post.datetime }}
          </nuxt-link>
        </div>
      </div>
      <button class="absolute -top-2 right-0">
        <nuxt-img src="/icons/three-dot.svg" />
      </button>
    </div>
    <!-- Content -->
    <div class="mt-4">
      <p class="font-semibold">{{ post.title }}</p>
      <p class="mt-2">
        {{ post.description }}
      </p>
    </div>
    <div class="flex items-center mt-4 space-x-8">
      <button class="flex items-center space-x-1">
        <nuxt-img src="/icons/play.svg" />
        <span class="text-sm text-gray-500">{{ post.duration }}</span>
      </button>
      <div class="flex items-center space-x-1">
        <nuxt-img src="/icons/heart-filled.svg" />
        <span class="text-sm text-[#e11d48]">{{ post.likes }}</span>
      </div>
      <div class="flex items-center space-x-1">
        <nuxt-img src="/icons/comment.svg" />
        <span class="text-sm text-gray-500">{{ post.comments }}</span>
      </div>
      <div class="flex items-center space-x-1">
        <nuxt-img src="/icons/share.svg" />
        <span class="text-sm text-gray-500">{{ post.shares }}</span>
      </div>
    </div>
    <div class="mt-4 -mx-4 w-screen h-px bg-gray-200"></div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
