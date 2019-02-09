<template>
	<transition-group
		class="card-grid"
		name="spark"
		tag="div"
	>
		<div v-if="toDisplay" class="top-left" key="top-left">
			<slot name="top-left"/>
		</div>
		<div v-if="toDisplay" class="top-right" key="top-right">
			<slot name="top-right"/>
		</div>
		<div v-if="toDisplay" class="bottom-left" key="bottom-left">
			<slot name="bottom-left"/>
		</div>
		<div v-if="toDisplay" class="bottom-right" key="bottom-right"><slot name="bottom-right"/></div>
	</transition-group>
</template>

<script>
export default {
	props: {
		toDisplay: {
			type: Boolean,
			required: true,
		},
	},
}
</script>

<style scoped>
.card-grid {
	display: grid;
	grid-template-columns: 200px 200px;
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
