import { MutationTree, GetterTree, ActionTree } from 'vuex'

export interface MouseState {
  mouseX: number;
  mouseY: number;
}

export const state = (): MouseState => ({
  mouseX: 0,
  mouseY: 0,
})

export const mutations: MutationTree<MouseState> = {
  setMouseCoordinates(state, { x, y }) {
    state.mouseX = x
    state.mouseY = y
  },
}

export const getters: GetterTree<MouseState, MouseState> = {
  getMouseCoordinates: (state) => {
    return { x: state.mouseX, y: state.mouseY }
  },
}

export const actions: ActionTree<MouseState, MouseState> = {
  updateMouseCoordinates({ commit }, { x, y }) {
    commit('setMouseCoordinates', { x, y })
  },
}
