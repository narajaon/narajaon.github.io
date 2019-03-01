import Vue from 'vue';

export const state = () => ({
    grid: {
        currentTurn: 'player', // Can either be 'player' or 'IA'
        homeGrid: [
            'empty', 'empty', 'empty',
            'empty', 'empty', 'empty',
            'empty', 'empty', 'empty',
        ],
    },
});

export const getters = {
    entity: state => name => state.grid[name],
    tileContent: state => index => state.grid.homeGrid[index],
    currentState: state => {
        if (state.grid.homeGrid.every(elem => elem === 'empty')) {
			return 'empty';
        } else if (state.grid.homeGrid.every(elem => elem !== 'empty')) {
			return 'full';
        }
        return 'non-empty';
    }
};

export const mutations = {
    switchTurn(state) {
        state.grid.currentTurn = (state.grid.currentTurn === 'player') ? 'IA' : 'player';
    },
    setAllTiles(state, { content }) {
        state.grid.homeGrid.forEach((any, index) => {
            Vue.set(state.grid.homeGrid, index, content);
        })
    },
    setGridTile(state, { index, content }) {
        Vue.set(state.grid.homeGrid, index, content);
    },
};