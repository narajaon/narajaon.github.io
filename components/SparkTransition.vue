<template>
	<div class="grid-wrapper">
		<transition-group
			class="card-grid"
			name="spark"
			tag="div"
		>
			<div
				v-for="(id, index) in toDisplay"
				@click="switchTileState(index)"
				:key="`transition-${index}`"
				class="spark-content"
			>
				<image-card
					:tileId="id"/>
			</div>
		</transition-group>
	</div>
</template>

<script>
import ImageCard from '~/components/ImageCard.vue';

export default {
	components: {
		ImageCard
	},
	props: {
		toDisplay: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			gridState: 'IA', // Can either be 'player' or 'IA'
		};
	},
	methods:{
		switchTileState(index) {
			this.toDisplay[index] = this.gridState;
			this.$forceUpdate();
		},
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
