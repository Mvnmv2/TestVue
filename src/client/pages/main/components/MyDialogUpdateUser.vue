<template>
  <div class="dialog"
       v-if="show"
       @click="hideDialog"
       style="margin: 15px 0"
  >
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-dialogUpdate',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    hideDialog(){
      console.log('hideDialogEvent')
      this.$emit('hideDialogEvent', false )
    }
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 20px;
  min-height: 100px;
  min-width: 400px;
  padding: 20px;
}

</style>