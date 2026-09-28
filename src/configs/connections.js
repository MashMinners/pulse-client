const isDev = process.env.NODE_ENV

export default {
    api:{
        production: 'https://api.pulse.crb500.ru',
        development: 'http://172.25.70.200'
    },
    get baseURL() {
        return isDev ? this.api.development : this.api.production
    }
}