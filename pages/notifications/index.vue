<template>
  <div class="mt-4">
    <div class="mx-4 flex justify-between items-center">
      <h2 class="text-primary-500 text-lg font-semibold">Notifications</h2>
      <button>
        <nuxt-img src="icons/doubleCheck.svg" />
      </button>
    </div>
    <div class="separate mt-4 -mx-4"></div>
    <Notification
      v-for="notification in notifications"
      :key="notification._id"
      :notification="notification"
    />
  </div>
</template>

<script>
import Notification from '@/components/notifications/Notification.vue'
import notificationsData from '@/data/notificationsData.json'
export default {
  components: {
    Notification,
  },
  data() {
    return {
      notifications: [],
    }
  },
  created() {
    this.notifications = [...notificationsData.notifications]
  },
}
</script>
