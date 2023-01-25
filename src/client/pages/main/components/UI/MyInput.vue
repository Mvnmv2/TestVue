<template>
  <input
      :value="value"
      @input="updateInput"
      class="input"
      type="text">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value)

    }
  }
}
</script>

<style scoped>
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
</style>