const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/NotFound.vue"),
    meta: {
      desc: "페이지를 찾을 수 없습니다 :(",
    },
  },
  {
    path: "/",
    component: () => import("@/components/Layout.vue"),
    children: [
      {
        path: "",
        name: "main",
        component: () => import("@/components/Main.vue"),
        meta: {
          nonSections: true,
        },
      },
      {
        path: "intro",
        component: () => import("@/components/Blank.vue"),
        meta: {
          title: "소개",
        },
        redirect: { name: "why" },
        children: [
          {
            path: "why",
            name: "why",
            component: () => import("@/components/intro/Why.vue"),
            meta: {
              title: "왜 Quasar인가?",
              desc: "Quasar(/ˈkweɪ.zɑɹ/로 발음됨)는 Vue.js 기반 MIT 라이선스 오픈 소스 프레임워크로, 웹 개발자는 Quasar를 사용해 다양한 유형의 반응형++ 웹사이트/앱을 빠르게 만들 수 있습니다.",
            },
          },
          {
            path: "start",
            name: "start",
            component: () => import("@/components/intro/Start.vue"),
            meta: {
              title: "시작하기",
              desc: "Quasar를 사용하는 방법에는 여러 가지가 있지만 여기서는 Vue.js 공식 사이트에 나온 빠른 시작의 가볍고 빠른 빌드 도구인 Vite를 바탕으로 하는 Quasar 플러그인을 설치해 보도록 하겠습니다.",
            },
          },
        ],
      },
      {
        path: "tutorial",
        component: () => import("@/components/Blank.vue"),
        meta: {
          title: "자습서",
        },
        redirect: { name: "ready" },
        children: [
          {
            path: "ready",
            name: "ready",
            component: () => import("@/components/tutorial/Ready.vue"),
            meta: {
              title: "준비하기",
              desc: "이 자습서를 통해 멤버 관리 페이지를 만들어 보려고 합니다. Grid Box를 이용한 카드 배치부터 Card의 내용을 수정, 저장 및 다양한 컴포넌트를 사용하여 Quasar로 앱을 만드는 기본적인 사항들을 배워보도록 하겠습니다.",
            },
          },
          {
            path: "card",
            name: "card",
            component: () => import("@/components/tutorial/Card.vue"),
            meta: {
              title: "카드 만들기",
              nonSections: true,
              desc: "Quasar QCard 컴포넌트를 활용해 간단한 레이아웃을 구성해 보도록 하겠습니다.",
            },
          },
          {
            path: "component",
            name: "component",
            component: () => import("@/components/tutorial/Comp.vue"),
            meta: {
              title: "컴포넌트 분리하기",
              nonSections: true,
              desc: "Quasar QCard를 이용해 만든 멤버 카드를 싱글 파일 컴포넌트(SFC)로 분리해 보도록 하겠습니다.",
            },
          },
          {
            path: "edit",
            name: "edit",
            component: () => import("@/components/tutorial/Edit.vue"),
            meta: {
              title: "카드 수정하기",
              desc: "싱글 파일 컴포넌트로 분리한 멤버 컴포넌트에 수정 기능을 추가해 보도록 하겠습니다.",
            },
          },
          {
            path: "storage",
            name: "storage",
            component: () => import("@/components/tutorial/Storage.vue"),
            meta: {
              title: "카드 정보 저장하기",
              desc: "멤버 카드의 정보를 로컬 세션 스토리지에 저장하여 사용하는 방법을 알아보도록 하겠습니다.",
            },
          },
          {
            path: "soc",
            name: "soc",
            component: () => import("@/components/tutorial/Soc.vue"),
            meta: {
              title: "관심사의 분리",
              desc: "관심사의 분리(Separation Of Concerns) 디자인 원칙을 활용해 멤버 카드 컴포넌트가 단순히 멤버의 데이터를 전달받고 원하는 경우에 변경된 정보만을 제공하도록 코드를 수정해 보도록 하겠습니다.",
            },
          },
          // {
          //   path: 'decorate',
          //   name: 'decorate',
          //   component: () => import('@/components/tutorial/Decorate.vue'),
          //   meta: {
          //     title: '카드 꾸미기'
          //   }
          // },
          {
            path: "result",
            name: "result",
            component: () => import("@/components/tutorial/Result.vue"),
            meta: {
              title: "결과물",
              desc: "자습서를 통해 만든 맴버 카드 결과물을 확인해 봅시다.",
              nonSections: true,
            },
          },
        ],
      },
      {
        path: "flexgrid",
        component: () => import("@/components/Blank.vue"),
        redirect: { name: "flexbox" },
        meta: {
          title: "Flex Grid",
        },
        redirect: { name: "flexbox" },
        children: [
          {
            path: "flexbox",
            name: "flexbox",
            component: () => import("@/components/flexgrid/FlexBox.vue"),
            meta: {
              title: "Flexbox",
              desc: "Quasar는 Flexbox의 도움으로 손쉽게 UI를 구축하는 데 도움이 되는 많은 CSS 클래스를 제공합니다. 여러 가지 옵션을 사용하여 row와 column을 다룬다고 생각하면 됩니다.",
            },
          },
          {
            path: "gridrow",
            name: "gridrow",
            component: () => import("@/components/flexgrid/GridRow.vue"),
            meta: {
              title: "Grid Row",
              desc: "Flexbox Rows에 대해 더 자세히 알아보도록 하겠습니다.",
            },
          },
          {
            path: "gridcolumn",
            name: "gridcolumn",
            component: () => import("@/components/flexgrid/GridColumn.vue"),
            meta: {
              title: "Grid Column",
              desc: "Flexbox Columns에 대해 더 자세히 알아보도록 하겠습니다.",
            },
          },
          {
            path: "gridgutter",
            name: "gridgutter",
            component: () => import("@/components/flexgrid/GridGutter.vue"),
            meta: {
              title: "Grid Gutter",
              desc: "Flexbox Gutters에 대해 더 자세히 알아보도록 하겠습니다.",
            },
          },
        ],
      },
      {
        path: "opthelper",
        component: () => import("@/components/Blank.vue"),
        meta: {
          title: "옵션 및 헬퍼",
        },
        redirect: { name: "qobject" },
        children: [
          {
            path: "qobject",
            name: "qobject",
            component: () => import("@/components/opthelper/QObject.vue"),
            meta: {
              title: "$q 객체",
              desc: "Quasar는 다양한 용도로 사용할 수 있는 $q 객체를 제공합니다. 문서를 통해 확인할 수 있습니다.",
            },
          },
          {
            path: "platform",
            name: "platform",
            component: () => import("@/components/opthelper/Platform.vue"),
            meta: {
              title: "플랫폼 감지",
              desc: "Quasar는 코드가 실행되는 컨텍스트 내에서 플랫폼(및 해당기능)을 감지하기 위한 헬퍼가 내장되어 있습니다.",
            },
          },
          {
            path: "screen",
            name: "screen",
            component: () => import("@/components/opthelper/Screen.vue"),
            meta: {
              title: "스크린 플러그인",
              desc: "Quasar 스크린 플러그인을 사용하면 자바스크립트 코드로 동적이고 반응형인 UI를 다룰 수 있습니다. 가능하면 성능상의 이유로 반응형 CSS 클래스를 사용하는 것을 추천합니다.",
            },
          },
          {
            path: "transition",
            name: "transition",
            component: () => import("@/components/opthelper/Transition.vue"),
            meta: {
              title: "Transitions",
              desc: "transition-show / transition-hide 또는 transition-prev / transition-next 또는 간단하게 transition props를 사용하는 몇 가지 Quasar 컴포넌트가 있습니다. 여기에서 이러한 props에 사용하는 몇 가지 transition을 알아봅시다.",
            },
          },
        ],
      },
      {
        path: "styleid",
        component: () => import("@/components/Blank.vue"),
        meta: {
          title: "스타일 및 아이덴티티",
        },
        redirect: { name: "typo" },
        children: [
          {
            path: "typo",
            name: "typo",
            component: () => import("@/components/styleid/Typo.vue"),
            meta: {
              title: "타이포그래피",
              desc: "Quasar에서 제공하는 타이포그래피에 대해 알아봅시다.",
            },
          },
          {
            path: "palette",
            name: "palette",
            component: () => import("@/components/styleid/Palette.vue"),
            meta: {
              title: "색상 팔레트",
              desc: "Quasar Framework는 기본적으로 다양한 색상을 제공합니다. CSS 코드에서 Sass/SCSS 변수로 사용하거나 HTML 템플릿에서 CSS 클래스로 직접 사용할 수 있습니다.",
            },
          },
          {
            path: "dark",
            name: "darkmode",
            component: () => import("@/components/styleid/Dark.vue"),
            meta: {
              title: "다크 모드",
              desc: "다크 모드는 UI의 많은 부분을 어둡게 표시하는 데 사용되는 일종의 보조 모드입니다. 이 디자인은 가독성에 필요한 최소 색상 대비 비율을 유지하고 디바이스 화면에 밝은 부분을 줄여줍니다.",
            },
          },
          {
            path: "spacing",
            name: "spacing",
            component: () => import("@/components/styleid/Spacing.vue"),
            meta: {
              title: "간격",
              desc: "Quasar는 DOM 요소 또는 컴포넌트의 간격을 지정하는 데 도움이 되는 CSS 클래스를 제공합니다. 모든 옵션에는 q-가 접두사로 붙은 다음 유형(T), 방향(D), 너비(S)로 분류되어 연결됩니다. 가능한 모든 CSS 클래스는 아래 순열 표를 참고하세요.",
            },
          },
          {
            path: "break",
            name: "break",
            component: () => import("@/components/styleid/Break.vue"),
            meta: {
              title: "중단점",
              desc: "Quasar에서 사용하는 CSS 중단점에 대해 알아봅시다.",
            },
          },
          {
            path: "body",
            name: "body",
            component: () => import("@/components/styleid/Body.vue"),
            meta: {
              title: "Body 클래스",
              desc: "Quasar는 document.body에 매우 유용한 몇 가지 헬퍼 클래스를 제공하며 이를 통해 여러가지 이점을 얻을 수 있습니다",
            },
          },
          {
            path: "visible",
            name: "visible",
            component: () => import("@/components/styleid/Visible.vue"),
            meta: {
              title: "Visibility",
              desc: "일반적인 기능을 위해 별도의 설치없이 바로 사용 가능한 몇가지 CSS 클래스들을 알아봅시다.",
            },
          },
          {
            path: "position",
            name: "position",
            component: () => import("@/components/styleid/Position.vue"),
            meta: {
              title: "Positioning",
              desc: "DOM 요소를 쉽게 포지셔닝할 수 있도록 Quasar에서 제공하는 CSS 클래스가 있습니다.",
            },
          },
          {
            path: "helper",
            name: "helper",
            component: () => import("@/components/styleid/Helper.vue"),
            meta: {
              title: "그 외 CSS 헬퍼 클래스",
              desc: "Vue 템플릿을 작성하는 동안 사용할 수 있는 많은 CSS 클래스가 있습니다. VueModel 및 템플릿의 복잡성을 완화하는데 매우 유용합니다.",
            },
          },
        ],
      },
      {
        path: "plugin",
        component: () => import("@/components/Blank.vue"),
        meta: {
          title: "Quasar 플러그인",
        },
        redirect: { name: "cookies" },
        children: [
          {
            path: "cookies",
            name: "cookies",
            component: () => import("@/components/plugin/Cookies.vue"),
            meta: {
              title: "Cookies",
              desc: "Quasar Cookies는 표준화된 document.cookie의 래퍼입니다.",
            },
          },
          {
            path: "dark",
            name: "dark",
            component: () => import("@/components/plugin/Dark.vue"),
            meta: {
              title: "Dark",
              desc: "Quasar 내에서 어두운 테마를 사용하도록 도와주는 플러그인입니다.",
            },
          },
          {
            path: "loading",
            name: "loading",
            component: () => import("@/components/plugin/Loading.vue"),
            meta: {
              title: "Loading",
              desc: "Quasar 로딩 플러그인은 백그라운드 작업이 진행 중임을 사용자에게 알리기 위해 앱 콘텐츠 위에 스피너와 오버레이를 표시하는 데 사용되는 기능입니다. 전역 백그라운드 작업을 위해 페이지 내에 복잡한 논리를 추가할 필요가 없습니다.",
            },
          },
          {
            path: "notify",
            name: "notify",
            component: () => import("@/components/plugin/Notify.vue"),
            meta: {
              title: "Notify",
              desc: "Notify 플러그인은 알림 형태로 사용자에게 애니메이션 메시지(페이지에 있는 다른 요소들 보다 상위에 있는)를 표시할 수 있는 Quasar 플러그인입니다. 이벤트를 사용자에게 알리는 데 유용하며 액션을 통해 사용자의 참여를 유도할 수도 있습니다. 토스트 또는 스낵바라고도 합니다.",
            },
          },
        ],
      },
      {
        path: "tip",
        component: () => import("@/components/Blank.vue"),
        meta: {
          title: "팁",
        },
        redirect: { name: "performance" },
        children: [
          {
            path: "performance",
            name: "performance",
            component: () => import("@/components/tip/Performance.vue"),
            meta: {
              title: "성능 끌어올리기",
              desc: "Quasar를 사용해 만든 프로젝트를 실제로 배포하여 서비스를 하게 되면 로컬에서 작업할 때와 다른 성능 경험으로 인해 고민에 빠지는 경우가 있습니다. 최적화되지 않은 코드, 외부에서 가져오는 웹폰트 또는 모듈, 큰 용량의 내부 폰트, 그리고 운영 서버의 성능 등과 같은 동작 환경에 영향을 받기 때문입니다. 성능 또는 최적화에 도움이 될만한 몇 가지 팁을 알아 보도록 하겠습니다.",
            },
          },
        ],
      },
      {
        path: "util",
        component: () => import("@/components/Blank.vue"),
        meta: {
          title: "Quasar 유틸",
          toDo: true,
        },
        redirect: { name: "date" },
        children: [
          {
            path: "date",
            name: "date",
            component: () => import("@/components/util/Date.vue"),
            meta: {
              title: "Date",
              desc: "Quasar는 Momentjs와 같은 전용 라이브러리를 통합하는 데 드는 높은 추가 비용 없이 대부분의 사용 사례에 JS Date를 쉽게 조작할 수 있는 유용한 함수들을 제공합니다.",
              toDo: true
            },
          },
          {
            path: "color",
            name: "color",
            component: () => import("@/components/util/Color.vue"),
            meta: {
              title: "Color",
              toDo: true
            },
          },
          {
            path: "dom",
            name: "dom",
            component: () => import("@/components/util/Dom.vue"),
            meta: {
              title: "DOM",
              toDo: true
            },
          },
          {
            path: "format",
            name: "format",
            component: () => import("@/components/util/Format.vue"),
            meta: {
              title: "Formatter",
              toDo: true
            },
          },
          {
            path: "scroll",
            name: "scroll",
            component: () => import("@/components/util/Scroll.vue"),
            meta: {
              title: "Scrolling",
              toDo: true
            },
          },
          {
            path: "util",
            name: "util",
            component: () => import("@/components/util/Util.vue"),
            meta: {
              title: "그 외 유틸",
              toDo: true
            },
          },
        ],
      },
      {
        path: "tools",
        component: () => import("@/components/Blank.vue"),
        meta: {
          title: "도구",
        },
        redirect: { name: "htmlencode" },
        children: [
          {
            path: "htmlencode",
            name: "htmlencode",
            component: () => import("@/components/tools/HtmlEncode.vue"),
            meta: {
              title: "HTML 인코더",
              nonSections: true,
            },
          },
        ],
      },
    ],
  },
];
export default routes;
