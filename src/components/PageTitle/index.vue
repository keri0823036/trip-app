<template>
  <div class="page-title">
    <h1 class="page-title__title">{{ info.title }}</h1>
    <p class="page-title__date">{{ date }}</p>
  </div>
</template>
<script>
import moment from "moment"

export default {
    created() {
    this.init()
  },
  computed: {
    info() {
      return this.$store.getters.info
    },
    date() {
      if(!this.info.start_date) return ""
      const { start_date, end_date } = this.info
      const startDate = new Date(start_date)
      const endDate = new Date(end_date)
      const formatRule = "YYYY/MM/DD"

      return startDate.getTime() === endDate.getTime() || !end_date 
        ? moment(startDate).format(formatRule) 
        : moment(startDate).format(formatRule) + "-" + moment(endDate).format(formatRule)
    }
  },
  methods: {
    async init() {
      await this.$store.dispatch('getInfoData')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-title {
  &__title {
    font-size: var(--font-lg);
    text-align: center;
    margin-bottom: 8px;
  }
  &__date {
    font-size: var(--font-m);
    color: var(--gray-60);
    text-align: center;
    margin-bottom: 24px;
  }
}
</style>