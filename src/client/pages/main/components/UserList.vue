<template>
  <div>
    <div class="user" v-for="user in users">
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
    </div>
  </div>
</template>

<script>
export default {
    props: {
      users: {
        type: Array,
        required: true,
      }
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

</style>