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
              title: '왜 Quasar인가?'
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
        path: 'flexgrid',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: 'Flex Grid'
        },
        children: [
          {
            path: 'flexbox',
            name: 'flexbox',
            component: () => import('@/components/flexgrid/FlexBox.vue'),
            meta: {
              title: 'Flexbox'
            }
          },
          {
            path: 'gridrow',
            name: 'gridrow',
            component: () => import('@/components/flexgrid/GridRow.vue'),
            meta: {
              title: 'Grid Row'
            }
          },
          {
            path: 'gridcolumn',
            name: 'gridcolumn',
            component: () => import('@/components/flexgrid/GridColumn.vue'),
            meta: {
              title: 'Grid Column'
            }
          },
          {
            path: 'gridgutter',
            name: 'gridgutter',
            component: () => import('@/components/flexgrid/GridGutter.vue'),
            meta: {
              title: 'Grid Gutter',
              hidden: true
            }
          }
        ]
      }, {
        path: 'tools',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: '도구',
          hidden: true
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