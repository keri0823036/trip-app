<template>
  <div id="home-page" class="home-page">
    <PageTitle />
    <DaySelector @pick="pickDay" />
    <Schedule :sheetName="pickedDay" :scheduleData="scheduleData" />
  </div>
</template>
<script>
import DaySelector from '@/components/DaySelector'
import Schedule from '@/components/Schedule'
import PageTitle from '@/components/PageTitle'

export default {
  components: {
    DaySelector,
    Schedule,
    PageTitle
  },
  data() {
    return {
      pickedDay: '',
      scheduleData: {}
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      await this.$store.dispatch('getScheduleData')
      this.scheduleData = this.$store.getters.schedule
    },
    pickDay(val) {
      this.pickedDay = val
    }
  }
}
</script>
<style lang="scss" scoped>
.home-page {
  height: 100%;

  &::v-deep .day-selector {
    margin-bottom: 48px;
  }
}
</style>