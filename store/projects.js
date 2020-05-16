import Vue from "vue";

export const state = () => ({
  projects: [
    {
      title: "IGNITION PROGRAM",
      description: "VUE / NUXT WEBAPP",
      src: "/projects/ig-home.JPG",
      show: false,
      theme: { bg: "fe6b4f", particles: "ffffff" }
    },
    {
      title: "RED TETRIS",
      description: "REACT / REDUX FULL STACK APP",
      src: "/projects/redt-multiplayer.png",
      show: false,
      theme: { bg: "1f2833", particles: "66fcf1" }
    },
    {
      title: "ROOM",
      description: "REACT / NEXTJS APP",
      src: "/projects/room.gif",
      show: false,
      theme: { bg: "2f2fa2", particles: "f64c72" }
    }
  ],
  activeBanner: null
});

export const getters = {
  allProjects: state => () => state.projects,
  project: state => index => state.projects[index],
  activeBanner: state => () => state.activeBanner,
  currentTheme: state => () => {
    if (state.activeBanner === null)
      return { bg: "deddde", particles: "6922ef" };
    return state.projects[state.activeBanner].theme;
  }
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
  }
};
