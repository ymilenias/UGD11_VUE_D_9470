import Vue from 'vue' 
import Router from 'vue-router' 
const login = () => 
import(/* webpackChunkName: "dashboard" */ '../components/login.vue') 
const DashboardLayout = () => 
import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue') 
function loadView(view) {
    
    return () => 
    import(/* webpackChunkName: "view-[request]" */ `../components/dashboardContents/${view}.vue`) 
} 
const routes = [ 
    { 
        path: '/dashboard/', 
        component: DashboardLayout, 
        children: [ 
            { 
                name: 'UserController', 
                path: '', 
                component: loadView('userController') 
            },

            { 
                name: 'ServiceController', 
                path: 'service', 
                component: loadView('serviceController') 
            } 
        ] 
    }, 
    {
        path: '/',
        component: login,
    }
 ] 
 Vue.use(Router) 
 const router = new Router({mode: 'history', routes: routes}) 
 export default router