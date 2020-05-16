export const state = () => ({
  dialogs: {
    ContactMeCard: {
      isVisible: false,
      params: undefined
    },
    ProjectBanner: {
      isVisible: false,
      params: undefined
    }
  }
});

export const getters = {
  entity: state => name => state.dialogs[name],
  all: state => state.dialogs
};

export const mutations = {
  setProps: (state, { name, visibility, params }) => {
    state.dialogs[name].isVisible = visibility;
    state.dialogs[name].params = params;
  }
};
