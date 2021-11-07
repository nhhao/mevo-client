<template>
  <div
    class="-mx-4 px-4 py-4 border-b border-gray-300 flex space-x-2"
    :class="notification.isSeen ? '' : 'bg-primary-100'"
  >
    <div class="w-12 h-12 rounded-lg overflow-hidden">
      <nuxt-img :src="notification.avatarUrl" class="object-cover" />
    </div>
    <div class="flex-1">
      <div class="flex items-center space-x-2">
        <p class="font-semibold text-gray-700">{{ notification.author }}</p>
        <div class="w-1 h-1 rounded-full bg-gray-700"></div>
        <p class="text-gray-500 text-sm">{{ notification.time }}</p>
      </div>
      <p class="font-medium text-sm text-gray-500">
        {{ notification.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
}
</script>
