import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Blog from 'components/Blog'
import Portfolio from 'components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [

    // home //
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    // blog //
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },

    // portfolio //
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    }

  ]
})
