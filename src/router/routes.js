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
        component: () => import('@/components/Main.vue'),
        meta: {
          nonSections: true
        }
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
        path: 'tutorial',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: '자습서'
        },
        children: [
          {
            path: 'ready',
            name: 'ready',
            component: () => import('@/components/tutorial/Ready.vue'),
            meta: {
              title: '준비하기'
            }
          },
          {
            path: 'card',
            name: 'card',
            component: () => import('@/components/tutorial/Card.vue'),
            meta: {
              title: '카드 만들기',
              nonSections: true
            }
          },
          {
            path: 'component',
            name: 'component',
            component: () => import('@/components/tutorial/Comp.vue'),
            meta: {
              title: '컴포넌트 분리하기',
              nonSections: true
            }
          },
          {
            path: 'edit',
            name: 'edit',
            component: () => import('@/components/tutorial/Edit.vue'),
            meta: {
              title: '카드 수정하기'
            }
          },
          {
            path: 'storage',
            name: 'storage',
            component: () => import('@/components/tutorial/Storage.vue'),
            meta: {
              title: '카드 정보 저장하기',
              toDo: true
            }
          },
          {
            path: 'result',
            name: 'result',
            component: () => import('@/components/tutorial/Result.vue'),
            meta: {
              title: '결과물',
              nonSections: true
            }
          }
        ]
      }, {
        path: 'flexgrid',
        component: () => import('@/components/Blank.vue'),
        redirect: { name: 'flexbox' },
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
            path: 'palette',
            name: 'palette',
            component: () => import('@/components/styleid/Palette.vue'),
            meta: {
              title: '색상 팔레트'
            }
          },
          {
            path: 'dark',
            name: 'darkmode',
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
              title: '중단점'
            }
          },
          {
            path: 'body',
            name: 'body',
            component: () => import('@/components/styleid/Body.vue'),
            meta: {
              title: 'Body 클래스'
            }
          },
          {
            path: 'visible',
            name: 'visible',
            component: () => import('@/components/styleid/Visible.vue'),
            meta: {
              title: 'Visibility'
            }
          },
          {
            path: 'position',
            name: 'position',
            component: () => import('@/components/styleid/Position.vue'),
            meta: {
              title: 'Positioning'
            }
          },
          {
            path: 'helper',
            name: 'helper',
            component: () => import('@/components/styleid/Helper.vue'),
            meta: {
              title: '그 외 CSS 헬퍼 클래스'
            }
          }
        ]
      }, {
        path: 'plugin',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: 'Quasar 플러그인'
        },
        children: [
          {
            path: 'cookies',
            name: 'cookies',
            component: () => import('@/components/plugin/Cookies.vue'),
            meta: {
              title: 'Cookies'
            }
          },
          {
            path: 'dark',
            name: 'dark',
            component: () => import('@/components/plugin/Dark.vue'),
            meta: {
              title: 'Dark'
            }
          },
          {
            path: 'loading',
            name: 'loading',
            component: () => import('@/components/plugin/Loading.vue'),
            meta: {
              title: 'Loading'
            }
          },
          {
            path: 'notify',
            name: 'notify',
            component: () => import('@/components/plugin/Notify.vue'),
            meta: {
              title: 'Notify'
            }
          }
        ]
      }, {
        path: 'util',
        component: () => import('@/components/Blank.vue'),
        meta: {
          title: 'Quasar 유틸',
          toDo: true
        },
        children: [
          {
            path: 'date',
            name: 'date',
            component: () => import('@/components/util/Date.vue'),
            meta: {
              title: 'Date',
              toDo: true
            }
          },
          {
            path: 'color',
            name: 'color',
            component: () => import('@/components/util/Color.vue'),
            meta: {
              title: 'Color',
              toDo: true
            }
          },
          {
            path: 'dom',
            name: 'dom',
            component: () => import('@/components/util/Dom.vue'),
            meta: {
              title: 'DOM',
              toDo: true
            }
          },
          {
            path: 'format',
            name: 'format',
            component: () => import('@/components/util/Format.vue'),
            meta: {
              title: 'Formatter',
              toDo: true
            }
          },
          {
            path: 'scroll',
            name: 'scroll',
            component: () => import('@/components/util/Scroll.vue'),
            meta: {
              title: 'Scrolling',
              toDo: true
            }
          },
          {
            path: 'util',
            name: 'util',
            component: () => import('@/components/util/Util.vue'),
            meta: {
              title: '그 외 유틸',
              toDo: true
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
              title: 'HTML 인코더',
              nonSections: true
            }
          }
        ]
      }
    ]
  }
]
export default routes