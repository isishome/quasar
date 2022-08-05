const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component:  () => import('@/components/NotFound.vue') 
  }, {
    path: '/',
    component: () => import('@/components/Layout.vue'),
    children: [
      {
        path: '',
        name: 'intro',
        component: () => import('@/components/Intro.vue'),
        meta: {
          title: '소개'
        }
      },
      {
        path: 'started',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: '시작하기'
        },
        children: [
          {
            path: 'why',
            name: 'why',
            component: () => import('@/components/started/Why.vue'),
            meta: {
              title: '왜 퀘이사인가?'
            }
          }
        ]
      }, {
        path: 'layout',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: '레이아웃'
        },
        children: [
          {
            path: 'gridrow',
            name: 'gridrow',
            component: () => import('@/components/layout/GridRow.vue'),
            meta: {
              title: '그리드 행'
            }
          }
        ]
      }
    ]
  }
]
export default routes