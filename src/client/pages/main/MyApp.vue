<template>
  <div class="app">
    <h1>Список пользователей</h1>
    <my-button @click="showDialog">Добавить пользователя</my-button>

    <my-dialog :show="dialogVisible"
               @update="dialogHide"
    >
      <user-form
          @create="addUser"/>
    </my-dialog>
    <user-list
        :users="users"
        @remove="removeUser"
        @updateUser="updateUser"

        :dialogUpdateVisible="dialogUpdateVisible"

    />


  </div>
</template>

<script>
import UserForm from "./components/UserForm.vue";
import UserList from "./components/UserList.vue";
import MyDialog from "./components/MyDialog.vue";


export default {
  components: {
    MyDialog, UserList, UserForm
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
      dialogVisible: false,
      dialogUpdateVisible: false,

    }
  },
  methods: {
    addUser(user) {
      this.users.push(user);
      this.dialogVisible = false;
    },
    removeUser(user) {
      this.users = this.users.filter(u => u.id !== user.id)
    },
    updateUser: function (user) {

      this.users.map(u => {
        if (u.id === user.id) {
           user.surname === '' ? '' : u.surname = user.surname;
           user.name === '' ? '' : u.name = user.name;
           user.patronymic === '' ? '' : u.patronymic = user.patronymic;
           user.email === '' ? '' : u.email = user.email;
        }
      })


      //this.dialogUpdateVisible = false;
    },

    showDialog() {
      this.dialogVisible = true;

    },
    dialogHide() {
      this.dialogVisible = false;
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