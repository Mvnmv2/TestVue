<template>
  <form @submit.prevent>
    <h2 class="addUserTitle">Добавление пользователя</h2>
    <input
        v-model="user.surname"
        class="input"
        type="text"
        placeholder="Введите фамилию">
    <input
        v-model="user.name"
        class="input"
        type="text" placeholder="Введите имя">
    <input
        v-model="user.patronymic"
        class="input"
        type="text"
        placeholder="Введите отчество">
    <input
        v-model="user.email"
        class="input"
        type="email"
        placeholder="Введите Email">

    <button class="btnAdd" @click="addUser">
      Добавить пользователя
    </button>
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

.input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  outline: none;
  border: 1px solid #cbc7c7;
}

.input:hover {
  outline: 1px solid rgba(203, 199, 199, 0.99);
}

/*button*/
.btnAdd {
  font-size: 18px;
  padding: 10px 15px;
  border: 1px solid #cbc7c7;
  background-color: #d7bcbc;
  border-radius: 20px;
  margin: 15px auto 0;
  transition: all .2s;
}

.btnAdd:hover {
  background-color: rosybrown;
}

.btnAdd:active {
  background-color: #e79696;
}
</style>