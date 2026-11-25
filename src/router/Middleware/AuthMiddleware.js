
import store from '@/store'
// eslint-disable-next-line no-unused-vars
export default async function process ({ next, router }) {
    const currentAccessToken = store.getters['core/accessToken']
    if (currentAccessToken) {
        return next()
    }
    await store.dispatch('core/doRefresh') // при namespaced: true
    if (store.getters['core/accessToken']) {
        console.log(currentAccessToken)
        return next()
    }
    else {
        return router.push({ name: 'core.authenticate' })
    }
}