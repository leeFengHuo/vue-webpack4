
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
const baseRouterMap = [
    {
        path: '/',
        redirect: '/dashboard'
    }, {
        path: '/dashboard',
        component: resolve => {
            require(['../views/dashboard/index'], resolve);
        }
    }
];

export default new Router({
    // mode: 'history',//后端支持可开
    // base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes: baseRouterMap

});
