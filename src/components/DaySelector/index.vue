<template>
	<div class="day-selector">
		<div
			:class="{ 'day-selector__option--active': picked === 'DAY-1' }"
			class="day-selector__option"
			@click="picked = 'DAY-1'"
		>
			<input v-model="picked" type="radio" id="DAY-1" value="DAY-1" >
			<label for="DAY-1">DAY-1</label>
		</div>
		<div
			:class="{ 'day-selector__option--active': picked === 'DAY-2' }"
			class="day-selector__option"
			@click="picked = 'DAY-2'"
		>
			<input v-model="picked" type="radio" id="DAY-2" value="DAY-2" >
			<label for="DAY-2" class="day-selector__option__text">DAY-2</label>
		</div>
	</div>
</template>
<script>
export default {
	data() {
    return {
      picked: 'DAY-1'
    }
  },
	watch: {
		picked: {
      immediate: true,
      handler(val) {
        this.$emit('pick', val)
      }
    }
	}
}
</script>
<style lang="scss" scoped>
.day-selector {
	display: flex;

	&__option {
		background-color: var(--gray-10);
		padding: 16px;
		border-radius: 30px;
		width: 100%;
		text-align: center;
		box-shadow: 0px 2px 5px 1px var(--gray-30);
		transition: all 0.2s ease;

		&:not(:first-child) {
			margin-left: 20px;
		}

		&--active {
			background-color: var(--orange-base);
			color: var(--gray-10);
		}

		input {
			display: none;
		}
	}
}
</style>