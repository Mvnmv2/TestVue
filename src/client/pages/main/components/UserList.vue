<template>
  <div>
    <div v-if="users.length > 0">
      <h3>Список пользователей:</h3>
      <user-item
          v-for="user in users"
          :user="user"
          :key="user.id"
          @remove="$emit('remove', user)"
          @updateUser="$emit('updateUser', user)"

          :dialogUpdateVisible="dialogUpdateVisible"

      />
    </div>
    <h2 v-else style="color: red;">
      Список пользователей пуст
    </h2>
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
    },
    dialogUpdateVisible: {
      type: Boolean,
      default: false
    }
  },

}
</script>

<style scoped>
h3 {
  margin-top: 10px;
}

</style>