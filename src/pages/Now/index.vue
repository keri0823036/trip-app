<template>
  <div id="now-page">
    <PageTitle />
    <SpotCard />
  </div>
</template>
<script>
import PageTitle from '@/components/PageTitle'
import SpotCard from '@/components/SpotCard'

export default {
  components: {
    PageTitle,
    SpotCard
  },
  data() {
    return {
      scheduleData: {}
    }
  },
  computed: {
    nowSpot() {
      if(!this.scheduleData) return
      const today = new Date()
      return today.getDate()
    },
    // nextSpot() {
    //   if(!this.this.scheduleData) return 
    // }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      await this.$store.dispatch('getScheduleData')
      this.scheduleData = this.$store.state.schedule
    }
  }
}
</script>
<style lang="scss" scoped>

</style>