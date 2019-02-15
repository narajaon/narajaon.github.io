export const state = () => ({
    dialogs: {
        contactMe: {
            isVisible: false,
            params: undefined,
        }
    }
});

export const getters = {
    entity: state => name => state.dialogs[name],
};

export const mutations = {
    setProps: (state, { name, visibility, params }) => {
        state.dialogs[name].isVisible = visibility;
        state.dialogs[name].params = params;
    },
};