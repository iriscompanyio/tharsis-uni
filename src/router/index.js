import {createRouter , createWebHistory} from 'vue-router'
import HomeView from '../views/HomeViews.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes:[
        {
            path:'/',
            name:'homes',
            component: HomeView
        },
    ]
})

export default router 
