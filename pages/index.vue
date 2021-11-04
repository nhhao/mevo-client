<template>
  <main class="pb-[3.5625rem]">
    <Post v-for="post in postsData" :post="post" :key="post" />
  </main>
</template>

<script>
import Post from '../components/home/Post.vue'
import PostsData from '@/data/posts.json'
export default {
  data() {
    return {
      postsData: {},
    }
  },
  components: {
    Post,
  },
  created() {
    this.postsData = {
      ...PostsData.posts,
    }
  },
}
</script>
