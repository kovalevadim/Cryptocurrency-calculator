import axios from 'axios'

const assets = {
  namespaced: true,
  state: {
    apiUrl: 'https://api.coincap.io/v2/',
    wsUrl: 'wss://ws.coincap.io/',
    assetsList: 'bitcoin,ethereum,zcash,monero,litecoin',
    assets: [],
    selectedAsset: {},
    isDownloadAssets: false
  },
  mutations: {
    changeStatusDownloadAssets: (state, status) => {
      state.isDownloadAssets = status
    },
    changeAssets: (state, assetsData) => {
      state.assets = assetsData
    },
    changeAssetsPrice: (state, [newData, requiredAsset]) => {
      if (requiredAsset) {
        requiredAsset.priceUsd = newData.priceUsd
        requiredAsset.priceChangeStatus = newData.priceChangeStatus
      }
    },
    changeSelectedAsset: (state, newSelectedAsset) => {
      state.selectedAsset = newSelectedAsset
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
              priceUsd: Number(element.priceUsd),
              priceChangeStatus: ''
            }
            assets.push(currency)
          });
          commit('changeAssets', assets)
          commit('changeSelectedAsset', {
            id: assets[0].id, symbol: assets[0].symbol
          })
          commit('changeStatusDownloadAssets', true)
        })
    },
    updateAssets: ({commit, state}) => {
      const assetsWs = new WebSocket(`${state.wsUrl}prices?assets=${state.assetsList}`)
      assetsWs.onmessage = (msg) => {
        let assets = JSON.parse(msg.data)
        for (let index in assets) {
          let id = index
          let priceUsd = assets[index]
          let requiredAsset = state.assets.find(assets => assets.id == id)
          if (requiredAsset) {
            let currentPrice = requiredAsset.priceUsd
            let newPrice = Number(priceUsd)
            let priceChangeStatus = ''
            newPrice > currentPrice ? priceChangeStatus = 'up' : priceChangeStatus = 'down'
            commit('changeAssetsPrice', [{priceUsd: newPrice, priceChangeStatus}, requiredAsset])
          }
        }
      }
    }
  }
}

export default assets
