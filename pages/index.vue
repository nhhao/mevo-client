<template>
  <div>
    <TheHeader />
    <main class="mt-[4.0625rem]">
      <Post v-for="post in postsData" :key="post._id" :post="post" />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader.vue'
import Post from '@/components/home/Post.vue'
import PostsData from '@/data/posts.json'
export default {
  components: {
    TheHeader,
    Post,
  },
  data() {
    return {
      postsData: {},
    }
  },
  created() {
    this.postsData = {
      ...PostsData.posts,
    }
  },
  methods: {},
}
</script>
