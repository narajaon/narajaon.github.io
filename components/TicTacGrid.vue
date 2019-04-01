<template>
	<div class="grid-wrapper">
		<transition
			name="fade"
		>
			<div
				v-show="currentState === 'full'"
				class="grid-overlay"
			>
				<i
					@click="resetGrid()"
					class="fas fa-redo"
				/>
			</div>
		</transition>
		<transition-group
			class="card-grid"
			name="fade"
			tag="div"
		>
			<div
				v-for="(id, index) in homeGrid"
				@click="switchTileState(index)"
				:key="`transition-${index}`"
				class="fade-content"
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
		currentState() {
			return this.$store.getters['grid/currentState'];
		},
	},
	methods: {
		resetGrid() {
			this.$store.commit('grid/setAllTiles', { content: 'empty' });
		},
		switchTileState(index) {
			if (this.homeGrid[index] !== 'empty') return;
			this.$store.commit('grid/setGridTile', { index, content: this.currentTurn })
			this.$store.commit('grid/switchTurn');
		},
	}
}
</script>

<style scoped>
.grid-overlay {
	position: absolute;
	height: 622px;
	width: 622px;
	background-color: #3e3a3e;
	opacity: 0.9;
	display: flex;
	justify-content: center;
	align-items: center;
	/* font-size: 70px; */
	color: white;
}

.fa-redo {
	padding: 30px;
	background-color: black;
	border-radius: 20px;
	cursor: pointer;
}

.card-grid {
	display: grid;
	grid-template-columns: repeat(3, 200px);
	grid-gap: 10px;
}

.fade-content {
	display: flex;
	justify-content: center;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.8s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
