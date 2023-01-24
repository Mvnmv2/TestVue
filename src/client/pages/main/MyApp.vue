<template>
  <div class="app">
    <user-form
        @create="addUser"/>
    <user-list
        :users="users"
    />
  </div>
</template>

<script>
import UserForm from "./components/UserForm.vue";
import UserList from "./components/UserList.vue";

export default {
  components: {
    UserList, UserForm
  },
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
    }
  },
  methods: {
    addUser(user) {
      this.users.push(user);
    }
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
</style>