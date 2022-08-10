const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/NotFound.vue')
  }, {
    path: '/',
    component: () => import('@/components/Layout.vue'),
    children: [
      {
        path: '',
        name: 'main',
        component: () => import('@/components/Main.vue')
      },
      {
        path: 'intro',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: '소개'
        },
        children: [
          {
            path: 'why',
            name: 'why',
            component: () => import('@/components/intro/Why.vue'),
            meta: {
              title: '왜 퀘이사인가?'
            }
          },
          {
            path: 'start',
            name: 'start',
            component: () => import('@/components/intro/Start.vue'),
            meta: {
              title: '시작하기'
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
            path: 'flexbox',
            name: 'flexbox',
            component: () => import('@/components/layout/FlexBox.vue'),
            meta: {
              title: 'Flexbox 소개'
            }
          },
          {
            path: 'gridrow',
            name: 'gridrow',
            component: () => import('@/components/layout/GridRow.vue'),
            meta: {
              title: '그리드 행'
            }
          }
        ]
      }, {
        path: 'tools',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: '도구'
        },
        children: [
          {
            path: 'htmlencode',
            name: 'htmlencode',
            component: () => import('@/components/tools/HtmlEncode.vue'),
            meta: {
              title: 'HTML 인코딩'
            }
          }
        ]
      }
    ]
  }
]
export default routes