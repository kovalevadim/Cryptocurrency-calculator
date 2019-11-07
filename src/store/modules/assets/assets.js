import axios from 'axios'

const assets = {
  namespaced: true,
  state: {
    apiUrl: 'https://api.coincap.io/v2/',
    wsUrl: 'wss://ws.coincap.io/',
    assetsList: 'bitcoin,ethereum,monero,litecoin',
    assets: [],
  },
  getters: {
    gatAssets: state => state.assets
  },
  mutations: {
    changeAssets: (state, assetsData) => {
      state.assets = assetsData
    },
    changeAssetsPrice: (state, newPrice) => {
      // console.log(newPrice)
      let requiredAsset = state.assets.find(assets => assets.id == newPrice.id)
      requiredAsset.priceUsd = newPrice.priceUsd
    }
  },
  actions: {
    getAssets: ({ commit, state }) => {
      axios.get(`${state.apiUrl}assets?ids=${state.assetsList}`)
        .then(res => {
          let data = res.data.data
          let assets = []
          data.forEach(element => {
            let currency = {
              id: element.id,
              symbol: element.symbol,
              priceUsd: element.priceUsd
            }
            assets.push(currency)
          });
          console.log(assets)
          commit('changeAssets', assets)
        })
    },
    updateAssets: ({commit, state}) => {
      const assetsWs = new WebSocket(`${state.wsUrl}prices?assets=${state.assetsList}`)
      assetsWs.onmessage = (msg) => {
        let assets = Array.of(JSON.parse(msg.data))
        for (let index in assets[0]) {
          let id = index
          let priceUsd = assets[0][index]
          commit('changeAssetsPrice', {id, priceUsd})
        }
      }
    }
  }
}

export default assets
