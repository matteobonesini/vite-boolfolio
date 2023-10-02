import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import AppSingleProject from './pages/AppSingleProject.vue';
import AppContact from './pages/AppContact.vue';
import AppNotFound from './pages/AppNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppProjects
        },
        {
            path: '/blog/:slug',
            name: 'blog-project',
            component: AppSingleProject
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router };