import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../components/Tabs.vue'

const routes = [{
    path: '/',
    component: Tabs,
    children: [
        {
            path: 'GeoAPI',
            component: () => import('@/components/GeoAPI.vue')
        },
        {
            path: 'Municipalities',
            component: () => import('@/components/Municipalities/Municipalities.vue')
        },
        {
            path: 'Departments',
            component: () => import('@/components/Departments/Departments.vue')
        },
        {
            path: 'Regions',
            component: () => import('@/components/Regions/Regions.vue')
        },
        {
            path: '',
            redirect: '/GeoAPI'
        }
    ]
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
