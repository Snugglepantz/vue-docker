import Vue from 'vue'

export default {
    getHello() {
        return Vue.http.get(`./api/hello`)
    }
}