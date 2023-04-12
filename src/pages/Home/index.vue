<template>
  <div id="home-page" class="home-page">
    <PageTitle />
    <DaySelector v-if="isShowDateOptions" :options="dateSelectorOptions" @pick="pickDay" />
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
      pickedDay: ''
    }
  },
  created() {
    this.init()
  },
  computed: {
    scheduleData() {
      return this.$store.getters.schedule
    },
    dateSelectorOptions() {
      return Object.keys(this.scheduleData)
    },
    isShowDateOptions() {
      return this.dateSelectorOptions.length > 1
    }
  },
  methods: {
    async init() {
      await this.$store.dispatch('getScheduleData')
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