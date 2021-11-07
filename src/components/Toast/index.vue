<template>
  <transition name="fade">
    <div v-show="value" class="toast">
      <slot />
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
      require: true
    }
  },

  watch: {
    value(val) {
      if(val) {
        setTimeout(() => {
          this.hideToast()
        }, 1000)
      }
    }
  },
 
  methods: {
    hideToast() {
      this.$emit('input', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  color: var(--gray-10);
  background-color: var(--gray-80);
  border-radius: 8px;
  padding: 20px;
  transform: translateX(-50%);
}
</style>