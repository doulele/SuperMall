import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Car = () => import('@/views/shopcar/Shopcar')
const Profile = () => import('@/views/profile/Profile')
const Details = () => import('@/views/details/Details')


Vue.use(VueRouter)

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/car',
		component:Car
	},
	{
		path:'/profile',
		component:Profile
	},
	{
		path:'/details/:iid',
		component:Details
	}
];

const router = new VueRouter({
	routes
});

export default router