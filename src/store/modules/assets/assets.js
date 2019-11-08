import axios from 'axios'

const assets = {
  namespaced: true,
  state: {
    apiUrl: 'https://api.coincap.io/v2/',
    wsUrl: 'wss://ws.coincap.io/',
    assetsList: 'bitcoin,ethereum,monero,litecoin',
    assets: [],
    selectedAsset: {},
    isDownloadAssets: false
  },
  getters: {
    getStatusDownload: state => state.isDownloadAssets,
    getAssets: state => state.assets,
    getSelectedAsset: state => state.selectedAsset
  },
  mutations: {
    changeStatusDownloadAssets: (state, status) => {
      state.isDownloadAssets = status
    },
    changeAssets: (state, assetsData) => {
      state.assets = assetsData
    },
    changeAssetsPrice: (state, newPrice) => {
      let requiredAsset = state.assets.find(assets => assets.id == newPrice.id)
      if (requiredAsset) requiredAsset.priceUsd = newPrice.priceUsd
    },
    changeSelectedAsset: (state, newSelectedAsset) => {
      //! newSelectedAsset == {id: id, symbol: symbol}
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
              priceUsd: element.priceUsd
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
          commit('changeAssetsPrice', {id, priceUsd})
        }
      }
    }
  }
}

export default assets
