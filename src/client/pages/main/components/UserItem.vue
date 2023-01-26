<template>
  <div>
    <div class="user">
      <div class="userBody">
        <div>
          <img class="imgUser" src="../img/logo.png" alt="картинка">
        </div>
        <div>
          <div><strong>Фамилия:</strong> {{ user.surname }}</div>
          <div><strong>Имя:</strong> {{ user.name }}</div>
          <div><strong>Отчество</strong> {{ user.patronymic }}</div>
          <div><strong>Email:</strong> {{ user.email }}</div>
          <div><strong>Количество друзей:</strong> {{ user.countOfFriends }}</div>
        </div>
      </div>
      <div class="user__btn">
        <my-button @click="$emit('remove', user)">Удалить</my-button>

        <my-button @click="showDialogUpdate">Редактировать</my-button>

        <my-dialog :show="dialogUpdateVisible"
                   @update="dialogUpdateHide"
        >
          <user-update-form
              :id="id"
              @updateUser="$emit('updateUser', $event)"/>
        </my-dialog>
      </div>
    </div>

  </div>
</template>

<script>
import UserUpdateForm from "./UserUpdateForm.vue";
import MyButton from "./UI/MyButton.vue";

export default {
  components: {MyButton, UserUpdateForm},
  props: {
    user: {
      type: Object,
      required: true
    },
    dialogUpdateVisible: {
      type: Boolean,
      default: false
    },
    id: {
      type: Number,
      required: true
    }
  },

  data() {
    return {}
  },

  methods: {
    dialogUpdateHide() {
      this.dialogUpdateVisible = false;
    },
    showDialogUpdate() {
      this.dialogUpdateVisible = true;

    },
  }

}
</script>

<style scoped>
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 2px solid rosybrown;
  margin-top: 15px;
  font-size: 20px;
  width: 750px;
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
</style>