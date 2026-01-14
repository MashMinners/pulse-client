import {doRefresh} from "@/services/RefreshTokens";

export default async function process ({ next, router }) {
    const currentAccessToken = localStorage.getItem('JWT')
    if (currentAccessToken) {
        return next()
    } else {
        const currentRefreshToken = localStorage.getItem('RefreshToken')
        if (currentRefreshToken) {
            await doRefresh(currentRefreshToken)
            console.log('Y\'ll be redirecting after 3 seconds')
            // eslint-disable-next-line no-unused-vars
            await new Promise((resolve, reject) => setTimeout(resolve, 3000))
            return router.push({ name: 'DashboardMain' })
        } else {
            return router.push({ name: 'core.authenticate' })
        }
    }
}