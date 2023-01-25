<template>
  <button class="btn" @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  methods : {
    click(){
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.btn {
  font-size: 18px;
  padding: 10px 15px;
  border: 1px solid #cbc7c7;
  background-color: #d7bcbc;
  border-radius: 20px;
  margin: 15px auto 0;
  transition: all .2s;
}

.btn:hover {
  background-color: rosybrown;
}

.btn:active {
  background-color: #e79696;
}
</style>