export const state = () => ({
  currentAudio: null,
  currentPost: null,
  playerStatus: 'stopped',
})

export const mutations = {
  SELECT_AUDIO(state, post) {
    state.currentAudio = new Audio(post.audioUrl)
    state.currentPost = { ...post }
  },
  CHANGE_PLAYER_STATUS(state, playerStatus) {
    state.playerStatus = playerStatus
  },
}

export const actions = {
  selectAudio({ commit }, post) {
    commit('SELECT_AUDIO', post)
  },
  changePlayerStatus({ commit }, playerStatus) {
    commit('CHANGE_PLAYER_STATUS', playerStatus)
  },
}
