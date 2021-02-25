const state = () => {
  loading: false
}

const mutations = {
  changeLoading(state, status) {
    state.loading = status
  }
}

export default { namespace: true, state, mutations }
