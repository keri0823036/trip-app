<template>
	<div class="day-selector">
		<template v-for="option in options">
			<div
				:key="`option-${option}`"
				:class="{ 'day-selector__option--active': picked === option }"
				class="day-selector__option"
				@click="picked = option"
			>
				<input v-model="picked" type="radio" :id="option" :value="option" >
				<label :for="option">{{ getOptionName(option) }}</label>
			</div>
		</template>
	</div>
</template>
<script>
export default {
	props: {
		options: {
			require: true,
			type: Array,
			default: () => []
		}
	},
	data() {
    return {
      picked: 'DAY-1'
    }
  },
	watch: {
		options:{
			immediate: true,
      handler(val) {
        this.picked = val[0]
      }
		},
		picked: {
      immediate: true,
      handler(val) {
        this.$emit('pick', val)
      }
    }
	},
	methods: {
		getOptionName(option) {
			return option.split("(")[0]
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