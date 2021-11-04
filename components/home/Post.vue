<template>
  <div class="mt-4">
    <div class="relative">
      <div class="flex items-center space-x-2">
        <nuxt-link
          to="/profile"
          class="inline-block w-[44px] h-[44px] overflow-hidden rounded-[7px]"
        >
          <nuxt-img src="/images/posts/sontungmtp.jpg" class="object-cover" />
        </nuxt-link>
        <div class="flex flex-col space-x-0.5">
          <nuxt-link to="/profile" class="text-sm font-semibold">
            Sơn Tùng M-TP
          </nuxt-link>
          <nuxt-link to="/post" class="text-xs text-gray-500 hover:underline">
            14.02.2017
          </nuxt-link>
        </div>
      </div>
      <button class="absolute -top-2 right-0">
        <nuxt-img src="/icons/three-dot.svg" />
      </button>
    </div>
    <!-- Content -->
    <div class="mt-4">
      <p class="font-semibold">Ep. 01: Nơi này có anh</p>
      <p class="mt-2">
        Cầm tay anh, dựa vai anh, kề bên anh,<br />Nơi này có anh...
      </p>
    </div>
    <div class="flex items-center mt-4 space-x-8">
      <button class="flex items-center space-x-1">
        <nuxt-img src="/icons/play.svg" />
        <span class="text-sm text-gray-500">24:00</span>
      </button>
      <div class="flex items-center space-x-1">
        <nuxt-img src="/icons/heart-filled.svg" />
        <span class="text-sm text-[#e11d48]">72</span>
      </div>
      <div class="flex items-center space-x-1">
        <nuxt-img src="/icons/comment.svg" />
        <span class="text-sm text-gray-500">36</span>
      </div>
      <div class="flex items-center space-x-1">
        <nuxt-img src="/icons/share.svg" />
        <span class="text-sm text-gray-500">18</span>
      </div>
    </div>
    <div class="mt-4 -mx-4 w-screen h-px bg-gray-200"></div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
