<template>
	<div class="grid-wrapper">
		<transition-group
			class="card-grid"
			name="spark"
			tag="div"
		>
			<div
				v-for="(reload, index) in toDisplay"
				:key="`transition-${index}`"
				class="spark-content"
			>
				<image-card :reloadTime="reload"/>
			</div>
		</transition-group>
	</div>
</template>

<script>
import ImageCard from '~/components/ImageCard.vue';

export default {
	props: {
		toDisplay: {
			type: Array,
			required: true,
		},
	},
	components: {
		ImageCard
	}
}
</script>

<style scoped>
.card-grid {
	display: grid;
	grid-template-columns: repeat(3, 200px);
	grid-gap: 10px;
}

.spark-content {
	display: flex;
	justify-content: center;
}

.spark-enter-active, .spark-leave-active {
  transition: all 0.8s;
}

.spark-enter, .spark-leave-to {
  opacity: 0;
}
</style>
