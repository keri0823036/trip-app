<template>
  <div id="spots-page">
    <PageTitle />
    <Spots :spotsData="spotsData" />
  </div>
</template>
<script>
import PageTitle from '@/components/PageTitle'
import Spots from '@/components/Spots'

export default {
  components: {
    PageTitle,
    Spots
  },
  data() {
    return {
      spotsData: [],
      isShowToast: false
    }
  },
  async created() {
    await this.init()
  },
  methods: {
    async init() {
      await this.$store.dispatch('getSpotsData')
      this.spotsData = this.$store.state.spots
    }
  }
}
</script>
<style lang="scss" scoped>

</style>