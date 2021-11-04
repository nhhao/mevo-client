<template>
  <div>
    <div class="mt-4 h-52 rounded-2xl overflow-hidden">
      <nuxt-img src="images/authentication/cover.png" class="object-cover" />
    </div>
    <h2 class="mt-3 text-center font-semibold text-2xl text-primary-500">
      Sign in
    </h2>
    <div class="mt-4">
      <div>
        <label for="username" class="mt-3 ml-3 font-medium text-gray-500"
          >Username or email:</label
        >
        <input
          v-model="formData.username"
          type="text"
          id="username"
          class="input mt-1"
          placeholder="email@example.com"
        />
      </div>
      <div class="mt-2">
        <label for="password" class="mt-3 ml-3 font-medium text-gray-500"
          >Password:</label
        >
        <input
          v-model="formData.password"
          type="password"
          id="password"
          class="input mt-1"
          placeholder="********"
        />
      </div>
      <div class="mt-4">
        <button @click="signInHandler" class="btn btn-primary">Sign In</button>
      </div>
    </div>
    <div class="mt-3 flex items-center">
      <span class="h-px flex-1 bg-gray-300"></span>
      <span class="mx-1 font-bold text-gray-400">OR</span>
      <span class="h-px flex-1 bg-gray-300"></span>
    </div>
    <div class="mt-3">
      <button
        class="
          btn
          border border-gray-400
          hover:border-primary-600
          text-primary-500
          space-x-2
          transition-colors
          duration-100
        "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
            fill="#FFC107"
          />
          <path
            d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
            fill="#FF3D00"
          />
          <path
            d="M12 22.0001C14.583 22.0001 16.93 21.0116 18.7045 19.4041L15.6095 16.7851C14.5718 17.5743 13.3038 18.0011 12 18.0001C9.39903 18.0001 7.19053 16.3416 6.35853 14.0271L3.09753 16.5396C4.75253 19.7781 8.11353 22.0001 12 22.0001Z"
            fill="#4CAF50"
          />
          <path
            d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
            fill="#1976D2"
          />
        </svg>
        <span>Continue with Google</span>
      </button>
    </div>
    <p class="block mt-3 text-center text-gray-500 font-medium">
      Don't have an account?
      <nuxt-link
        to="/sign-up"
        class="font-semibold text-primary-500 hover:text-primary-600"
        >Create one.</nuxt-link
      >
    </p>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      formData: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    signInHandler() {
      console.log(this.formData.username)
      console.log(this.formData.password)
    },
  },
}
</script>
