// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'Vue-resource'
import App from './App'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'

import DetailAnalysisPage from './pages/detail/analysis'
import DetailPublishPage from './pages/detail/publish'
import DetailForecastPage from './pages/detail/forecast'
import DetailCountPage from './pages/detail/count'

import Router from 'vue-router'
Vue.use(Router);
Vue.use(VueResource);

let router = new Router({
	mode : 'history',
	routes: [
	    {
	      path: '/',
	      component: IndexPage
	    },
	    {
	      path: '/detail',
	      component: DetailPage,
	      redirect : "/detail/analysis",
	      children : [
      		{
      			 path: 'forecast',
	      		 component: DetailForecastPage
      		},
      		{
      			 path: 'count',
	      		 component: DetailCountPage
      		},
      		{
      			 path: 'analysis',
	      		 component: DetailAnalysisPage
      		},
      		{
      			 path: 'publish',
	      		 component: DetailPublishPage
      		}

	      ]
	    }
	  ]
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
