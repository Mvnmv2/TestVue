<template>
  <div>
    <h3>Список пользователей:</h3>
    <user-item
        v-for="user in users"
        :user="user"
    />
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";

export default {
  components: {UserItem},
  props: {
    users: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
h3 {
  margin-top: 10px;
}

</style>