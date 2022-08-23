const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/components/NotFound.vue')
  }, {
    path: '/',
    component: () => import('@/components/Layout.vue'),
    meta: {
      keywords: ['vuejs', 'vue3', 'vue.js', 'framework', 'quasar', 'quasar 강좌', '퀘이사', '퀘이사 강좌', '퀘이사 시작하기', 'vue3 quasar']
    },
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
              title: 'Grid Gutter'
            }
          }
        ]
      }, {
        path: 'opthelper',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: '옵션 및 헬퍼'
        },
        children: [
          {
            path: 'qobject',
            name: 'qobject',
            component: () => import('@/components/opthelper/QObject.vue'),
            meta: {
              title: '$q 객체'
            }
          },
          {
            path: 'platform',
            name: 'platform',
            component: () => import('@/components/opthelper/Platform.vue'),
            meta: {
              title: '플랫폼 감지'
            }
          },
          {
            path: 'screen',
            name: 'screen',
            component: () => import('@/components/opthelper/Screen.vue'),
            meta: {
              title: '스크린 플러그인'
            }
          },
          {
            path: 'transition',
            name: 'transition',
            component: () => import('@/components/opthelper/Transition.vue'),
            meta: {
              title: 'Transitions'
            }
          }
        ]
      }, {
        path: 'styleid',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: '스타일 및 아이덴티티'
        },
        children: [
          {
            path: 'typo',
            name: 'typo',
            component: () => import('@/components/styleid/Typo.vue'),
            meta: {
              title: '타이포그래피'
            }
          },
          {
            path: 'color',
            name: 'color',
            component: () => import('@/components/styleid/Color.vue'),
            meta: {
              title: '색상 팔레트'
            }
          },
          {
            path: 'dark',
            name: 'dark',
            component: () => import('@/components/styleid/Dark.vue'),
            meta: {
              title: '다크 모드'
            }
          },
          {
            path: 'spacing',
            name: 'spacing',
            component: () => import('@/components/styleid/Spacing.vue'),
            meta: {
              title: '간격'
            }
          },
          {
            path: 'break',
            name: 'break',
            component: () => import('@/components/styleid/Break.vue'),
            meta: {
              title: '중단점',
              working: true
            }
          },
          {
            path: 'body',
            name: 'body',
            component: () => import('@/components/styleid/Body.vue'),
            meta: {
              title: 'Body 클래스',
              working: true
            }
          },
          {
            path: 'visible',
            name: 'visible',
            component: () => import('@/components/styleid/Visible.vue'),
            meta: {
              title: 'Visibility',
              working: true
            }
          },
          {
            path: 'position',
            name: 'position',
            component: () => import('@/components/styleid/Position.vue'),
            meta: {
              title: '위치',
              working: true
            }
          },
          {
            path: 'other',
            name: 'other',
            component: () => import('@/components/styleid/Other.vue'),
            meta: {
              title: '기타 CSS 헬퍼 클래스',
              working: true
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
              title: 'HTML 인코더'
            }
          }
        ]
      }
    ]
  }
]
export default routes