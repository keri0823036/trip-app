<template>
  <div class="spot-card">
    開發中
  </div>
</template>
<script>
// import Toast from '@/components/Toast'
export default {
  components: {
    // Toast
  },
  props: {
    spotData: {
      type: Object,
      default: () => {},
      require: true
    }
  },
  data() {
    return {
      isShowToast: false
    }
  },
  methods: {
    copyAddress (text) {
      const vueThis = this
      navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!')
        vueThis.isShowToast = true
      }, function(err) {
        console.error('Async: Could not copy text: ', err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>