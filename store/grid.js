import Vue from 'vue';

export const state = () => ({
    grid: {
        currentTurn: 'player', // Can either be 'player' or 'IA'
        homeGrid: [
            'empty', 'empty', 'empty',
            'empty', 'empty', 'empty',
            'empty', 'empty', 'empty',
        ],
    }
});

export const getters = {
    entity: state => name => state.grid[name],
    tileContent: state => index => state.grid.homeGrid[index],
};

export const mutations = {
    switchTurn(state) {
        state.grid.currentTurn = (state.grid.currentTurn === 'player') ? 'IA' : 'player';
    },
    setGridTile(state, { index, content }) {
        if (state.grid.homeGrid[index] !== 'empty') return;
        Vue.set(state.grid.homeGrid, index, content);
    },
};