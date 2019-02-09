<template>
	<div>
		<transition-group
			class="card-grid"
			name="spark"
			tag="div"
		>
			<div
				v-for="position in displayedCards"
				:key="position"
				:class="position"
			>
				<slot :name="position"/>
			</div>
		</transition-group>
	</div>
</template>

<script>
export default {
	props: {
		toDisplay: {
			type: Boolean,
			required: true,
		},
	},
	data() {
		return {
			positions: [
				'top-left',
				'top-right',
				'bottom-left',
				'bottom-right',
			]
		};
	},
	computed: {
		displayedCards() {
			if (!this.toDisplay) return;
			return this.positions;
		}
	}
}
</script>

<style scoped>
.card-grid {
	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: auto;
}

.spark-enter-active, .spark-leave-active {
  transition: all 0.5s;
}

.spark-enter, .spark-leave-to {
  opacity: 0;
}

.spark-enter.top-left, .spark-leave-to.top-left {
  transform: translateX(-50px);
}

.spark-enter.top-right, .spark-leave-to.top-right {
  transform: translateY(-50px);
}

.spark-enter.bottom-right, .spark-leave-to.bottom-right {
  transform: translateX(50px);
}

.spark-enter.bottom-left, .spark-leave-to.bottom-left {
  transform: translateY(50px);
}
</style>
