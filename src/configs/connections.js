export default {
    api:{
        production: 'https://api.pulse.crb500.ru',
        development: 'http://172.25.70.200'
    },
    get baseURL() {
        return process.env.NODE_ENV === 'production'
            ? this.api.production
            : this.api.development
    }
}