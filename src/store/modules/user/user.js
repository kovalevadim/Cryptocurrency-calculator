const user = {
  namespaced: true,
  state: {
    name: 'Vadym'
  },
  getters: {
    getName: state => state.name
  }
}

export default user
