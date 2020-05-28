export default {
    async carregarPersonagens({ getters, commit }, params) {
        let route = typeof params.search !== 'undefined' && params.search !== null
            ? `people/?search=${params.search}&page=${params.page}`
            : `people/?page=${params.page}`;

        let { data } = await getters.getApi.get(route)
        if (data) commit('SET_PERSONAGENS', data)
        return data
    },
    async procurarPersonagens({ getters, commit }, params) {
        let { data } = await getters.getApi.get(`people/?search=${params.search}&page=${params.page}`)
        if (data) commit('SET_PERSONAGENS', data)
        return data
    },
}
