import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import foo from '@/components/foo'
import bar from '@/components/bar'
import fooChild1 from '@/components/fooChild1'
import fooChild2 from '@/components/fooChild2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'foo',
      component: foo,
      children: [  //这里就是二级路由的配置
        {
          path: '/fooChild1',
          name: 'fooChild1',
          component: fooChild1
        },
        {
          path: '/fooChild2',
          name: 'fooChild2',
          component: fooChild2
        }
      ]
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar
    }
  ]
})
