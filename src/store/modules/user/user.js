const user = {
  namespaced: true,
  state: {
    name: 'kovalevadim'
  },
  getters: {
    getName: state => state.name
  }
}

export default user
