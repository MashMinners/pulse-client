export default {
    api:{
        production: 'https://api.pulse.crb500.ru',
        development: 'http://api.pulse.local'
    },
    get baseURL() {
        return process.env.NODE_ENV === 'production'
            ? this.api.production
            : this.api.development
    }
}