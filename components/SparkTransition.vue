<template>
	<div class="grid-wrapper">
		<transition-group
			class="card-grid"
			name="spark"
			tag="div"
		>
			<div
				v-for="(id, index) in homeGrid"
				@click="switchTileState(index)"
				:key="`transition-${index}`"
				class="spark-content"
			>
				<image-card :tileIndex="index"/>
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
	computed: {
		currentTurn() {
			return this.$store.getters['grid/entity']('currentTurn');
		},
		homeGrid() {
			return this.$store.getters['grid/entity']('homeGrid');
		},
	},
	methods:{
		switchTurn() {
			this.$store.commit('grid/switchTurn');
		},
		switchTileState(index) {
			this.$store.commit('grid/setGridTile', { index, content: this.currentTurn })
			this.switchTurn();
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
