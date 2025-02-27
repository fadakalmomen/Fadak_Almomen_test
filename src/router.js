import { createRouter, createWebHistory } from 'vue-router';


import Dashboard from '@/components/Dashboard.vue';
import Orders from '@/components/Orders.vue';
import Passengers from '@/components/Passengers.vue';
import Captains from '@/components/Captains.vue';
import Categories from '@/components/Categories.vue';
import Settlement from '@/components/Settlement.vue';
import Contact from '@/components/Contact.vue';
import Reviews from '@/components/Reviews.vue';
import Translation from '@/components/Translation.vue';
import EducationVideo from '@/components/EducationVideo.vue';
import Settings from '@/components/Settings.vue';
import Content from '@/components/Content.vue';


const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/passengers',
    component: Passengers,
  },
  {
    path: '/captains',
    component: Captains,
  },
  {
    path: '/categories',
    component: Categories,
  },
  {
    path: '/settlement',
    component: Settlement,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/reviews',
    component: Reviews,
  },
  {
    path: '/translation',
    component: Translation,
  },
  {
    path: '/education-video',
    component: EducationVideo,
  },
  {
    path: '/settings',
    component: Settings,
  },
  {
    path: '/content',
    component: Content,
  },

  {
    path: '/',
    redirect: '/dashboard', 
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;