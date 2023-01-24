<template>
  <div class="app">

    <form @submit.prevent>
      <h2 class="addUserTitle">Добавление пользователя</h2>
      <input
          v-bind:value="surname"
          @input="surname=$event.target.value"
          class="input"
          type="text"
          placeholder="Введите фамилию">
      <input
          v-bind:value="name"
          @input="name=$event.target.value"
          class="input"
          type="text" placeholder="Введите имя">
      <input
          v-bind:value="patronymic"
          @input="patronymic=$event.target.value"
          class="input"
          type="text"
          placeholder="Введите отчество">
      <input
          v-bind:value="email"
          @input="email=$event.target.value"
          class="input"
          type="email"
          placeholder="Введите Email">

      <button class="btnAdd" @click="addUser">
        Добавить пользователя
      </button>
    </form>
    <div class="user" v-for="user in users">
      <div class="userBody">
        <div>
          <img class="imgUser" src="./img/logo.png" alt="картинка">
        </div>
        <div>
          <div><strong>Фамилия:</strong> {{ user.surname }}</div>
          <div><strong>Имя:</strong> {{ user.name }}</div>
          <div><strong>Отчество</strong> {{ user.patronymic }}</div>
          <div><strong>Email:</strong> {{ user.email }}</div>
          <div><strong>Количество друзей:</strong> {{ user.countOfFriends }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          img: 'картинка',
          surname: 'Иванов',
          name: 'Сергей',
          patronymic: 'Михайлович',
          email: 'michalich@mail.ru',
          countOfFriends: 3
        },
        {
          id: 2,
          img: 'картинка',
          surname: 'Сергеев',
          name: 'Петр',
          patronymic: 'Сергеевич',
          email: 'L1991@mail.ru',
          countOfFriends: 5
        },
        {
          id: 3,
          img: 'картинка',
          surname: 'Александров',
          name: 'Николай',
          patronymic: 'Николаевич',
          email: 'Stm@mail.ru',
          countOfFriends: 7
        },
      ],
      id: '',
      img: './img/logo.png',
      surname: '',
      name: '',
      patronymic: '',
      email: '',
      countOfFriends: null,
    }
  },
  methods: {
    addUser() {
      const newUser = {
        id: Date.now(),
        img: './img/logo.png',
        surname: this.surname,
        name: this.name,
        patronymic: this.patronymic,
        email: this.email,
        countOfFriends: null,
      }
      this.users.push(newUser);
    },
  }
}

</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 2px solid rosybrown;
  margin-top: 15px;
  font-size: 20px;
  width: 550px;
  border-radius: 30px;
}

.userBody {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.imgUser {
  border: 1px solid #cbc7c7;
  border-radius: 50%;
  width: 120px;
  padding: 5px;
  margin-right: 30px;
}

/*form*/
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