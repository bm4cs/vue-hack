import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import UserPage from './views/UserPage.vue'
import PokemonPage from './views/PokemonPage.vue'

export const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/user',
        component: UserPage
    },
    {
        path: '/pokemon/:id',
        component: PokemonPage
    },
]