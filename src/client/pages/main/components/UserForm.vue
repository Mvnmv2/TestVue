<template>
  <form @submit.prevent>
    <h2 class="addUserTitle">Добавление пользователя</h2>
    <my-input
        v-model="user.surname"
        type="text"
        placeholder="Введите фамилию"/>
    <my-input
        v-model="user.name"
        type="text"
        placeholder="Введите имя"/>
    <my-input
        v-model="user.patronymic"
        type="text"
        placeholder="Введите отчество"/>
    <my-input
        v-model="user.email"
        type="email"
        placeholder="Введите Email"/>

    <my-button @click="addUser">
      Добавить пользователя
    </my-button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      user: {
        id: '',
        img: '',
        surname: '',
        name: '',
        patronymic: '',
        email: '',
        countOfFriends: null,
      }
    }
  },
  methods: {
    addUser() {
      this.user.id = Date.now();
      this.$emit('create', this.user);
      this.user = {
        surname: '',
        name: '',
        patronymic: '',
        email: '',
      }

    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 550px;
}


/*button*/

</style>