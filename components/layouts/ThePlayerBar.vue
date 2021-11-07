<template>
  <div v-if="currentPost">
    <div
      v-if="isMinimal"
      class="bg-primary-50 fixed bottom-[3.5625rem] -mx-4 px-4 pb-2 z-10"
    >
      <div class="separate bg-gray-300 -mx-4 mb-2"></div>
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2 w-4/5">
          <div class="w-9 h-9 rounded-md">
            <nuxt-img :src="currentPost.avatarUrl" class="object-cover" />
          </div>
          <div>
            <button @click="toggleMinimal">
              <h4 class="text-sm font-semibold text-gray-700 max-w-sm">
                {{ currentPost.title }}
              </h4>
            </button>
            <p class="text-xs text-gray-600">{{ currentPost.author }}</p>
          </div>
        </div>
        <div>
          <button @click="togglePlayHandler">
            <nuxt-img v-if="isPlaying" src="icons/pauseMd.svg" />
            <nuxt-img v-else src="icons/playMd.svg" />
          </button>
        </div>
      </div>
    </div>

    <div
      v-else
      class="
        fixed
        bottom-[3.5625rem]
        w-screen
        top-0
        -mx-4
        bg-gray-400 bg-opacity-40
        z-20
      "
    >
      <div
        class="
          absolute
          bottom-0
          left-0
          right-0
          pt-12
          px-10
          pb-20
          rounded-tl-2xl rounded-tr-2xl
          bg-white
        "
      >
        <button class="absolute top-4 right-4" @click="toggleMinimal">
          <nuxt-img src="icons/close.svg" />
        </button>
        <div
          class="
            w-full
            aspect-w-1 aspect-h-1
            rounded-xl
            overflow-hidden
            shadow-xl
          "
        >
          <nuxt-img :src="currentPost.avatarUrl" class="object-cover" />
        </div>
        <div class="mt-10 text-center">
          <h2 class="font-semibold text-xl">{{ currentPost.title }}</h2>
          <p class="font-medium text-primary-500">{{ currentPost.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPost: null,
      isPlaying: null,
      isMinimal: true,
    }
  },
  watch: {
    '$store.state.currentPost'() {
      const currentPost = this.$store.state.currentPost
      this.currentPost = { ...currentPost }
      this.$emit('changeThePlayerBarStatus')
    },
    '$store.state.playerStatus'() {
      this.isPlaying = this.$store.state.playerStatus === 'playing'
    },
  },
  methods: {
    togglePlayHandler() {
      this.isPlaying
        ? this.$store.state.currentAudio.pause()
        : this.$store.state.currentAudio.play()
      this.$store.dispatch(
        'changePlayerStatus',
        this.isPlaying ? 'pausing' : 'playing'
      )
    },
    toggleMinimal() {
      this.isMinimal = !this.isMinimal
    },
  },
  mounted() {
    console.log('currentpost: ' + this.$store.state.currentPost)
    this.currentPost = this.$store.state.currentPost
    this.isPlaying = this.$store.state.playerStatus === 'playing'
  },
}
</script>
