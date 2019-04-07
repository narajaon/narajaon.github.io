import Vue from 'vue';

export const state = () => ({
    projects: [
        {
            title: "PROJECT 1",
            description: "DOING SOME COOL STUFF",
            src: "https://www.humanesociety.org/sites/default/files/styles/1441x612/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=HVqvfhtg",
            show: false,
            theme: { bg: 'fe6b4f', particles: 'ffffff'},
        },
        {
            title: "PROJECT 2",
            description: "DOING SOME AWESOME STUFF",
            src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            show: false,
            theme: { bg: '1f2833', particles: '66fcf1'},
        },
        {
            title: "PROJECT 3",
            description: "DOING SOME AMAZING STUFF",
            src: "https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            show: false,
            theme: { bg: '2f2fa2', particles: 'f64c72'},
        }
    ],
    activeBanner: null,
});

export const getters = {
    allProjects: state => () => state.projects,
    project: state => (index) => state.projects[index],
    activeBanner: state => () => state.activeBanner,
    currentTheme: state => () => {
        if (state.activeBanner === null) return { bg: 'deddde', particles: '6922ef'};
        return state.projects[state.activeBanner].theme;
    },
};

export const mutations = {
    setGridTile(state, { index, content }) {
        Vue.set(state.grid.homeGrid, index, content);
    },
    bannerVisibility(state, { index, show }) {
        state.projects[index].show = show;
    },
    bannerHoverState(state, { hoveredBannerIndex }) {
        state.activeBanner = hoveredBannerIndex;
    },
};