<script setup>
import { defineAsyncComponent } from 'vue'
import { useQuasar, QSpinnerGears } from 'quasar'

const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const Practice = defineAsyncComponent(() => import('@/components/block/Practice.vue'))

const $q = useQuasar()

const showNotifBasic = () => {
  $q.notify({
    message: '세라에게 전화가 왔어요',
    color: 'purple'
  })
}

const showNotifCaption = () => {
  $q.notify({
    message: '세라에게 전화가 왔어요',
    caption: '5분전',
    color: 'secondary'
  })
}

const showNotifIcon = () => {
  $q.notify({
    message: '세라에게 전화가 왔어요',
    icon: 'announcement'
  })
}

const showNotifAvatar = () => {
  $q.notify({
    message: '세라에게 전화가 왔어요',
    color: 'indigo',
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png'
  })
}

const showNotifSpinner1 = () => {
  $q.notify({
    spinner: true,
    message: '기다려 주세요...',
    timeout: 2000
  })
}

const showNotifSpinner2 = () => {
  $q.notify({
    spinner: QSpinnerGears,
    message: '업무 중...',
    timeout: 2000
  })
}

const showNotifAction = () => {
  $q.notify({
    message: '세라에게 전화가 왔어요',
    color: 'indigo',
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',
    actions: [
      { label: '무시', color: 'white', handler: () => { /* ... */ } }
    ]
  })

  $q.notify({
    message: '세라에게 전화가 왔어요',
    color: 'indigo',
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',
    actions: [
      { label: '응답', color: 'yellow', handler: () => { /* ... */ } },
      { label: '무시', color: 'white', handler: () => { /* ... */ } }
    ]
  })
}

const showNotifMulti = () => {
  $q.notify({
    message: '세라에게 점심 식사 연락이 왔습니다',
    color: 'indigo',
    multiLine: true,
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',
    actions: [
      { label: '수락', color: 'yellow', handler: () => { /* ... */ } }
    ]
  })
}

const alerts = [
  { color: 'negative', message: '와! 위험! 점점 능숙해지고 있군요!', icon: 'report_problem' },
  { message: '이걸 알아야 합니다!', icon: 'warning' },
  { message: '와! 잘했어!', icon: 'thumb_up' },
  { color: 'teal', message: 'Quasar 멋지다! 그쵸?', icon: 'tag_faces' },
  { color: 'purple', message: '세라가 방금 전화했어', avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png' },
  { multiLine: true, message: '식사는 없어 배고파도 음료는 없어 목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아 식사는 없어 배고파도 음료는 없어 목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아' }
]

const showNotifPosition = (position) => {
  const { color, textColor, multiLine, icon, message, avatar } = alerts[
    Math.floor(Math.random(alerts.length) * 10) % alerts.length
  ]
  const random = Math.random() * 100

  const twoActions = random > 70
  const buttonColor = color ? 'white' : void 0

  $q.notify({
    color,
    textColor,
    icon: random > 30 ? icon : null,
    message,
    position,
    avatar,
    multiLine,
    actions: twoActions
      ? [
        { label: '응답', color: buttonColor, handler: () => { /* console.log('와아아우') */ } },
        { label: '무시', color: 'yellow', handler: () => { /* console.log('와아아우') */ } }
      ]
      : (random > 40
        ? [{ label: '응답', color: buttonColor, handler: () => { /* console.log('와아아우') */ } }]
        : null
      ),
    timeout: Math.random() * 5000 + 3000
  })
}

const triggerTwice = () => {
  $q.notify({
    message: '세라에게 전화가 왔어요.',
    color: 'purple'
  })

  $q.notify({
    message: '세라에게 전화가 왔어요.',
    color: 'purple'
  })
}

const triggerNoGroupingTwice = () => {
  $q.notify({
    group: false,
    message: '세라에게 전화가 왔어요.',
    color: 'purple'
  })

  $q.notify({
    group: false,
    message: '세라에게 전화가 왔어요.',
    color: 'purple'
  })
}

const triggerTwiceCustomGroup = () => {
  $q.notify({
    group: 'my-group',
    message: '세라에게 전화가 왔어요.',
    color: 'purple'
  })

  // 이전 그룹과 동일한 그룹이므로
  // 이를 대체하고 
  // 배지 번호를 증가시킵니다:
  $q.notify({
    group: 'my-group',
    message: '뷔가 메시지를 보냈습니다.',
    color: 'indigo'
  })
}

const triggerTwiceCustom = () => {
  $q.notify({
    message: '세라에게 전화가 왔어요.',
    color: 'purple',
    badgeColor: 'yellow',
    badgeTextColor: 'dark',
    badgeClass: 'shadow-3 glossy my-badge-class'
  })

  $q.notify({
    message: '세라에게 전화가 왔어요.',
    color: 'purple',
    badgeColor: 'yellow',
    badgeTextColor: 'dark',
    badgeClass: 'shadow-3 glossy my-badge-class'
  })
}

const showNotifs = () => {
  $q.notify({
    progress: true,
    message: '식사는 없어 배고파도 음료는 없어 목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아 식사는 없어 배고파도 음료는 없어 목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아',
    color: 'indigo',
    multiLine: true,
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',
    actions: [
      { label: '응답', color: 'yellow', handler: () => { /* ... */ } }
    ]
  })

  setTimeout(() => {
    $q.notify({
      progress: true,
      message: '세라에게 메일 왔어요.',
      icon: 'mail',
      color: 'white',
      textColor: 'indigo'
    })
  }, 2000)

  setTimeout(() => {
    $q.notify({
      progress: true,
      message: '세라에게 전화가 왔어요.',
      color: 'purple',
      avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',
      actions: [
        { label: '응답', color: 'yellow', handler: () => { /* ... */ } }
      ]
    })
  }, 3200)
}

const showNotifUpdate = () => {
  const notif = $q.notify({
    group: false, // 업데이트 가능해야 함
    timeout: 0, // 알림이 해제되는 때를 전적으로 제어하기 위해
    spinner: true,
    message: '업데이트 파일...',
    caption: '0%'
  })

  // 이곳에서 진행 상황을 시뮬레이션
  let percentage = 0
  const interval = setInterval(() => {
    percentage = Math.min(100, percentage + Math.floor(Math.random() * 22))

    // 다이얼로그 업데이트
    notif({
      caption: `${percentage}%`
    })

    // 완료되면...
    if (percentage === 100) {
      notif({
        icon: 'done', // 아이콘을 추가
        spinner: false, // 아이콘이 표시될 수 있도록 스피너를 초기화
        message: '업데이트 완료!',
        timeout: 2500 // 2.5초의 타임아웃
      })
      clearInterval(interval)
    }
  }, 500)
}

const triggerPositive = () => {
  $q.notify({
    type: 'positive',
    message: '이것은 "positive" 유형의 알림입니다.'
  })
}

const triggerNegative = () => {
  $q.notify({
    type: 'negative',
    message: '이것은 "negative" 유형의 알림입니다.'
  })
}

const triggerWarning = () => {
  $q.notify({
    type: 'warning',
    message: '이것은 "warning" 유형의 알림입니다.'
  })
}

const triggerInfo = () => {
  $q.notify({
    type: 'info',
    message: '이것은 "info" 유형의 알림입니다.'
  })
}

const triggerOngoing = () => {
  // 알림 참조가 필요합니다.
  // 그렇지 않으면 해제되지 않습니다. ('ongoing' 유형은 timeout 0을 가짐)
  const notif = $q.notify({
    type: 'ongoing',
    message: '검색어를 찾고 있습니다...'
  })

  // simulate delay
  setTimeout(() => {
    notif({
      type: 'positive',
      message: '원하는 결과를 찾았습니다',
      timeout: 1000
    })
  }, 4000)
}

/**
 * 사용 전에 유형을 등록해 놓아야 합니다.
 *
 * .vue 파일 대신 부팅 파일이 가장 좋습니다.
 * 그게 아니라면 컴포넌트에 매본 등록해야
 * 사용이 가능합니다 :)
 */

$q.notify.registerType('my-notif', {
  icon: 'announcement',
  progress: true,
  color: 'brown',
  textColor: 'white',
  classes: 'glossy'
})

const triggerCustomRegisteredType1 = () => {
  $q.notify({
    type: 'my-notif',
    message: '이 알림은 사용자 정의 유형을 사용하고 있습니다.'
  })
}

const triggerCustomRegisteredType2 = () => {
  // this one overrides some of the original
  // options of the "my-notif" registered type
  $q.notify({
    type: 'my-notif',
    icon: 'contactless',
    message: '이 알림은 사용자 정의 유형을 사용하고 있습니다.',
    caption: 'my-notif 유형의 기본 아이콘과 색상을 재정의 합니다.',
    color: 'primary'
  })
}

const showNotifHtml = () => {
  $q.notify({
    message: '<span style="color: green">나는</span> <strong>HTML</strong>을 <span style="color: red">사용</span> 할 수 있습니다',
    html: true
  })
}
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Notify 플러그인
      </Title>
      <p>Notify는 알림 형태로 사용자에게 애니메이션 메시지(페이지에 있는 다른 요소들 보다 상위에 있는)를 표시할 수 있는 Quasar 플러그인입니다. 이벤트를 사용자에게 알리는 데 유용하며 액션을 통해
        사용자의 참여를 유도할 수도 있습니다. 토스트 또는 스낵바라고도 합니다.</p>
      <Info advice color="teal-4">
        <p>HTTP 요청 성공이나 실패에 대한 메시지를 보여주거나 사용자 동의를 받는 등 다양한 곳에 활용할 수 있습니다.</p>
        <p>Notify 플러그인의 옵션이나 메서드는 Quasar 공식 홈페이지
          <Link href="https://quasar.dev/quasar-plugins/notify#notify-api">Notify API</Link>를 참고하세요.
        </p>
      </Info>
    </section>
    <section id="install" data-name="설치">
      <Title sub>설치</Title>
      <Code class="q-mb-lg" language="javascript" :convert="{'javascript':'js'}">
        <textarea readonly>
// main.js

import &#123;
  Quasar,
  Notify
&#125; from 'quasar'

app.use(Quasar, &#123;
  plugins: &#123;
    Notify
  &#125;,
  config: &#123;
    Notify: &#123; /* API 카드에서 QuasarConfOptions 살펴보기 */ &#125;
  &#125;
&#125;)
        </textarea>
      </Code>
    </section>
    <section id="usage" data-name="사용법">
      <Title sub>사용법</Title>
    </section>
    <section id="inside" data-name="Vue 파일에서 사용하기" sub>
      <Title minor>Vue 파일에서 사용하기</Title>
      <Code class="q-mb-lg" language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

$q.notify('메시지')
// 또는 구성 객체와 함께:
$q.notify(&#123;...&#125;)
&#60;/script&#62;
        </textarea>
      </Code>
    </section>
    <section id="outside" data-name="Vue 파일 외부에서 사용하기" sub>
      <Title minor>Vue 파일 외부에서 사용하기</Title>
      <Code class="q-mb-lg" language="javascript" :convert="{'javascript':'js'}">
        <textarea readonly>
{{ 'import { Notify } from \'quasar\'' }}

Notify.create('위험해! 세라야! 위험!')
// 또는 구성 객체와 함께:
Notify.create(&#123;
  message: '위험해! 세라야! 위험!'
&#125;)
        </textarea>
      </Code>
    </section>
    <section id="example" data-name="기본 예제" sub>
      <Title minor>기본 예제</Title>
      <Practice :options="[
        { label: '기본', value: 'default' },
        { label: '캡션', value: 'caption' },
        { label: '아이콘과 함께', value: 'icon' },
        { label: '아바타와 함께', value: 'avatar' },
        { label: '기본 스피너와 함께', value: 'spinner1' },
        { label: '사용자 스피너와 함께', value: 'spinner2' },
        { label: '액션과 함께', value: 'action' },
        { label: '멀티라인', value: 'multi' },
        { label: '포지셔닝', value: 'position' }
      ]" non-code>
        <template #default>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 전화가 왔어요',
    color: 'purple'
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <q-btn color="purple" @click="showNotifBasic" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #caption>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 전화가 왔어요',
    caption: '5분전',
    color: 'secondary'
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <q-btn color="purple" @click="showNotifCaption" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #icon>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 전화가 왔어요',
    icon: 'announcement'
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <q-btn color="purple" @click="showNotifIcon" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #avatar>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 전화가 왔어요',
    color: 'indigo',
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png'
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <q-btn color="purple" @click="showNotifAvatar" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #spinner1>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    spinner: true,
    message: '기다려 주세요...',
    timeout: 2000
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <q-btn color="purple" @click="showNotifSpinner1" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #spinner2>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar, QSpinnerGears } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    spinner: QSpinnerGears,
    message: '업무 중...',
    timeout: 2000
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <q-btn color="purple" @click="showNotifSpinner2" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #action>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 전화가 왔어요',
    color: 'indigo',
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',
    actions: [
      &#123; label: '무시', color: 'white', handler: () =&#62; &#123; /* ... */ &#125; &#125;
    ]
  &#125;)

  $q.notify(&#123;
    message: '세라에게 전화가 왔어요',
    color: 'indigo',
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',
    actions: [
      &#123; label: '응답', color: 'yellow', handler: () =&#62; &#123; /* ... */ &#125; &#125;,
      &#123; label: '무시', color: 'white', handler: () =&#62; &#123; /* ... */ &#125; &#125;
    ]
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <q-btn color="purple" @click="showNotifAction" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #multi>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 점심 식사 연락이 왔습니다',
    color: 'indigo',
    multiLine: true,
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',
    actions: [
      &#123; label: '수락', color: 'yellow', handler: () =&#62; &#123; /* ... */ &#125; &#125;
    ]
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <q-btn color="purple" @click="showNotifMulti" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #position>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const alerts = [
  &#123; color: 'negative', message: '와! 위험! 점점 능숙해지고 있군요!', icon: 'report_problem' &#125;,
  &#123; message: '이걸 알아야 합니다!', icon: 'warning' &#125;,
  &#123; message: '와! 잘했어!', icon: 'thumb_up' &#125;,
  &#123; color: 'teal', message: 'Quasar 멋지다! 그쵸?', icon: 'tag_faces' &#125;,
  &#123; color: 'purple', message: '세라가 방금 전화했어', avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png' &#125;,
  &#123; multiLine: true, message: '식사는 없어 배고파도 음료는 없어 목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아 식사는 없어 배고파도 음료는 없어 목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아' &#125;
]

const showNotif = (position) =&#62; &#123;
  const &#123; color, textColor, multiLine, icon, message, avatar &#125; = alerts[
    Math.floor(Math.random(alerts.length) * 10) % alerts.length
  ]
  const random = Math.random() * 100

  const twoActions = random &#62; 70
  const buttonColor = color ? 'white' : void 0

  $q.notify(&#123;
    color,
    textColor,
    icon: random &#62; 30 ? icon : null,
    message,
    position,
    avatar,
    multiLine,
    actions: twoActions
      ? [
        &#123; label: '응답', color: buttonColor, handler: () =&#62; &#123; /* console.log('와아아우') */ &#125; &#125;,
        &#123; label: '무시', color: 'yellow', handler: () =&#62; &#123; /* console.log('와아아우') */ &#125; &#125;
      ]
      : (random &#62; 40
        ? [&#123; label: '응답', color: buttonColor, handler: () =&#62; &#123; /* console.log('와아아우') */ &#125; &#125;]
        : null
      ),
    timeout: Math.random() * 5000 + 3000
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
&#60;div class="q-pa-md q-gutter-y-sm column items-center"&#62;
  &#60;div&#62;
    &#60;div class="row q-gutter-sm"&#62;
      &#60;q-btn round size="sm" color="secondary" @click="showNotif('top-left')"&#62;
        &#60;q-icon name="arrow_back" class="rotate-45" /&#62;
      &#60;/q-btn&#62;
      &#60;q-btn round size="sm" color="accent" @click="showNotif('top')"&#62;
        &#60;q-icon name="arrow_upward" /&#62;
      &#60;/q-btn&#62;
      &#60;q-btn round size="sm" color="secondary" @click="showNotif('top-right')"&#62;
        &#60;q-icon name="arrow_upward" class="rotate-45" /&#62;
      &#60;/q-btn&#62;
    &#60;/div&#62;
  &#60;/div&#62;

  &#60;div&#62;
    &#60;div class="row q-gutter-sm"&#62;
      &#60;div&#62;
        &#60;q-btn round size="sm" color="accent" @click="showNotif('left')"&#62;
          &#60;q-icon name="arrow_back" /&#62;
        &#60;/q-btn&#62;
      &#60;/div&#62;
      &#60;div&#62;
        &#60;q-btn round size="sm" color="accent" @click="showNotif('center')"&#62;
          &#60;q-icon name="fullscreen_exit" /&#62;
        &#60;/q-btn&#62;
      &#60;/div&#62;
      &#60;div&#62;
        &#60;q-btn round size="sm" color="accent" @click="showNotif('right')"&#62;
          &#60;q-icon name="arrow_forward" /&#62;
        &#60;/q-btn&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;

  &#60;div&#62;
    &#60;div class="row q-gutter-sm"&#62;
      &#60;div&#62;
        &#60;q-btn round size="sm" color="secondary" @click="showNotif('bottom-left')"&#62;
          &#60;q-icon name="arrow_forward" class="rotate-135" /&#62;
        &#60;/q-btn&#62;
      &#60;/div&#62;
      &#60;div&#62;
        &#60;q-btn round size="sm" color="accent" @click="showNotif('bottom')"&#62;
          &#60;q-icon name="arrow_downward" /&#62;
        &#60;/q-btn&#62;
      &#60;/div&#62;
      &#60;div&#62;
        &#60;q-btn round size="sm" color="secondary" @click="showNotif('bottom-right')"&#62;
          &#60;q-icon name="arrow_forward" class="rotate-45" /&#62;
        &#60;/q-btn&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md q-gutter-y-sm column items-center">
              <div>
                <div class="row q-gutter-sm">
                  <q-btn round size="sm" color="secondary" @click="showNotifPosition('top-left')">
                    <q-icon name="arrow_back" class="rotate-45" />
                  </q-btn>
                  <q-btn round size="sm" color="accent" @click="showNotifPosition('top')">
                    <q-icon name="arrow_upward" />
                  </q-btn>
                  <q-btn round size="sm" color="secondary" @click="showNotifPosition('top-right')">
                    <q-icon name="arrow_upward" class="rotate-45" />
                  </q-btn>
                </div>
              </div>

              <div>
                <div class="row q-gutter-sm">
                  <div>
                    <q-btn round size="sm" color="accent" @click="showNotifPosition('left')">
                      <q-icon name="arrow_back" />
                    </q-btn>
                  </div>
                  <div>
                    <q-btn round size="sm" color="accent" @click="showNotifPosition('center')">
                      <q-icon name="fullscreen_exit" />
                    </q-btn>
                  </div>
                  <div>
                    <q-btn round size="sm" color="accent" @click="showNotifPosition('right')">
                      <q-icon name="arrow_forward" />
                    </q-btn>
                  </div>
                </div>
              </div>

              <div>
                <div class="row q-gutter-sm">
                  <div>
                    <q-btn round size="sm" color="secondary" @click="showNotifPosition('bottom-left')">
                      <q-icon name="arrow_forward" class="rotate-135" />
                    </q-btn>
                  </div>
                  <div>
                    <q-btn round size="sm" color="accent" @click="showNotifPosition('bottom')">
                      <q-icon name="arrow_downward" />
                    </q-btn>
                  </div>
                  <div>
                    <q-btn round size="sm" color="secondary" @click="showNotifPosition('bottom-right')">
                      <q-icon name="arrow_forward" class="rotate-45" />
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
          </Info>
        </template>
      </Practice>
      <Note>
        <p><b>팁</b></p>
        <p>actions을 정의하면, 사용자가 action을 선택할 때 알림이 자동으로 해제됩니다.</p>
      </Note>
    </section>
    <section id="group" data-name="그룹화" sub>
      <Title minor>그룹화</Title>
      <p>각 알림에는 메시지 + 캡션 + 멀티라인 + 액션 레이블 + 포지션에서 계산되는 기본 고유 그룹이 있습니다. 동일한 그룹에서 여러 알림이 트리거 되면 모든 알림을 펼쳐 표시하는 대신 첫
        번째 알림만 배지와 함께 화면에 남습니다. 배지 콘텐츠는 첫 번째 알림이 화면에 나타난 이후 동일한 알림이 동일한 위치에서 트리거 된 횟수를 나타냅니다.</p>
      <p>이 동작을 비활성화하려면 <code>group: false</code>를 지정하세요. 아래 예에서 첫 번째 예제는 클릭할 때마다 동일한 알림을 두 번 트리거 합니다. 두 번째 예제는 그룹화가
        비활성화되어 있습니다. 세
        번째 예제는 사용자 지정 그룹명이 있으므로 이후의 알림은 이전 알림을 대체하고 배지 번호를 증가시킵니다.</p>
      <Practice :options="[
        { label: '두 번 트리거', value: 'trigger' },
        { label: '두 번 트리거(그룹화되지 않음)', value: 'nogroup' },
        { label: '두 번 트리거(사용자 정의 그룹화)', value: 'group' },
        { label: '두 번 트리거와 사용자 정의 배지', value: 'custom' }
      ]" non-code>
        <template #trigger>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const triggerTwice = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 전화가 왔어요.',
    color: 'purple'
  &#125;)

  $q.notify(&#123;
    message: '세라에게 전화가 왔어요.',
    color: 'purple'
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="row q-gutter-sm"&#62;
    &#60;q-btn no-caps color="teal" @click="triggerTwice" label="두 번 트리거" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <div class="row q-gutter-sm">
                <q-btn no-caps color="teal" @click="triggerTwice" label="두 번 트리거" />
              </div>
            </div>
          </Info>
        </template>
        <template #nogroup>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const triggerNoGroupingTwice = () =&#62; &#123;
  $q.notify(&#123;
    group: false,
    message: '세라에게 전화가 왔어요.',
    color: 'purple'
  &#125;)

  $q.notify(&#123;
    group: false,
    message: '세라에게 전화가 왔어요.',
    color: 'purple'
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="row q-gutter-sm"&#62;
    &#60;q-btn no-caps color="teal" @click="triggerNoGroupingTwice" label="두 번 트리거(그룹화되지 않음)" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <div class="row q-gutter-sm">
                <q-btn no-caps color="teal" @click="triggerNoGroupingTwice" label="두 번 트리거(그룹화되지 않음)" />
              </div>
            </div>
          </Info>
        </template>
        <template #group>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const triggerTwiceCustomGroup = () =&#62; &#123;
  $q.notify(&#123;
    group: 'my-group',
    message: '세라에게 전화가 왔어요.',
    color: 'purple'
  &#125;)

  // 이전 그룹과 동일한 그룹이므로
  // 이를 대체하고 
  // 배지 번호를 증가시킵니다:
  $q.notify(&#123;
    group: 'my-group',
    message: '뷔가 메시지를 보냈습니다.',
    color: 'indigo'
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="row q-gutter-sm"&#62;
    &#60;q-btn no-caps color="teal" @click="triggerTwiceCustomGroup" label="두 번 트리거(사용자 정의 그룹화)" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <div class="row q-gutter-sm">
                <q-btn no-caps color="teal" @click="triggerTwiceCustomGroup" label="두 번 트리거(사용자 정의 그룹화)" />
              </div>
            </div>
          </Info>
        </template>
        <template #custom>
          <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const triggerTwice = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 전화가 왔어요.',
    color: 'purple',
    badgeColor: 'yellow',
    badgeTextColor: 'dark',
    badgeClass: 'shadow-3 glossy my-badge-class'
  &#125;)

  $q.notify(&#123;
    message: '세라에게 전화가 왔어요.',
    color: 'purple',
    badgeColor: 'yellow',
    badgeTextColor: 'dark',
    badgeClass: 'shadow-3 glossy my-badge-class'
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn no-caps color="indigo" @click="triggerTwice" label="두 번 트리거와 사용자 정의 배지" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="실행">
            <div class="q-pb-md">
              <q-btn no-caps color="indigo" @click="triggerTwiceCustom" label="두 번 트리거와 사용자 정의 배지" />
            </div>
          </Info>
        </template>
      </Practice>
    </section>
    <section id="timeout" data-name="타임아웃 진행 상황" sub>
      <Title minor>타임아웃 진행 상황</Title>
      <p>timeout을 0으로 설정하지 않는 경우, 화면에서 알림이 사라지는 시간을 사용자가 지정할 수 있습니다.</p>
      <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotifs = () =&#62; &#123;
  $q.notify(&#123;
    progress: true,
    message: '식사는 없어 배고파도 음료는 없어 목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아 식사는 없어 배고파도 음료는 없어 목말라도 달콤한 맛만 디저트만 만 원하게 될 거 알잖아',
    color: 'indigo',
    multiLine: true,
    avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',
    actions: [
      &#123; label: '응답', color: 'yellow', handler: () =&#62; &#123; /* ... */ &#125; &#125;
    ]
  &#125;)

  setTimeout(() =&#62; &#123;
    $q.notify(&#123;
      progress: true,
      message: '세라에게 메일 왔어요.',
      icon: 'mail',
      color: 'white',
      textColor: 'indigo'
    &#125;)
  &#125;, 2000)

  setTimeout(() =&#62; &#123;
    $q.notify(&#123;
      progress: true,
      message: '세라에게 전화가 왔어요.',
      color: 'purple',
      avatar: 'https://quasar.serasome.com/favicon/favicon-32x32.png',
      actions: [
        &#123; label: '응답', color: 'yellow', handler: () =&#62; &#123; /* ... */ &#125; &#125;
      ]
    &#125;)
  &#125;, 3200)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn no-caps color="purple" @click="showNotifs" label="타임아웃 진행 상황 보기" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
      <Info label="실행">
        <div class="q-pb-md">
          <q-btn no-caps color="purple" @click="showNotifs" label="타임아웃 진행 상황 보기" />
        </div>
      </Info>
    </section>
    <section id="update" data-name="업데이트 가능한 알림" sub>
      <Title minor>업데이트 가능한 알림</Title>
      <p>진행 중인 프로세스가 있을 때, 현재 작업을 종료하지 않고 진행 상황을 사용자에게 알리려면 업데이트 가능한 알림을 사용하세요. 업데이트되는 동안 스피너를 보여주는 것도 좋습니다.</p>
      <p>아래 예제에서는 “group: false”(그룹화되지 않은 알림만 업데이트하기 위해)와 “timeout: 0”(알림이 해제되는 때를 전적으로 제어하기 위해)을 명시적으로 설정하고 있습니다.
      </p>
      <Code language="html" :convert="{'html':'vue'}">
            <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  const notif = $q.notify(&#123;
    group: false, // 업데이트 가능해야 함
    timeout: 0, // 알림이 해제되는 때를 전적으로 제어하기 위해
    spinner: true,
    message: '업데이트 파일...',
    caption: '0%'
  &#125;)

  // 이곳에서 진행 상황을 시뮬레이션
  let percentage = 0
  const interval = setInterval(() =&#62; &#123;
    percentage = Math.min(100, percentage + Math.floor(Math.random() * 22))

    // 다이얼로그 업데이트
    notif(&#123;
      caption: `$&#123;percentage&#125;%`
    &#125;)

    // 완료되면...
    if (percentage === 100) &#123;
      notif(&#123;
        icon: 'done', // 아이콘을 추가
        spinner: false, // 아이콘이 표시될 수 있도록 스피너를 초기화
        message: '업데이트 완료!',
        timeout: 2500 // 2.5초의 타임아웃
      &#125;)
      clearInterval(interval)
    &#125;
  &#125;, 500)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn no-caps color="purple" @click="showNotif" label="업데이트 가능한 알림 보기" /&#62;
&#60;/template&#62;
            </textarea>
          </Code>
      <Info label="실행">
        <div class="q-pb-md">
          <q-btn no-caps color="purple" @click="showNotifUpdate" label="업데이트 가능한 알림 보기" />
        </div>
      </Info>
    </section>
    <section id="predefine" data-name="미리 정의된 유형" sub>
      <Title minor>미리 정의된 유형</Title>
      <p>“positive”, “negative”, “warning” 및 “info”의 미리 정의된 네 가지 유형을 기본적으로 사용할 수 있습니다.</p>
      <Code language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const triggerPositive = () =&#62; &#123;
  $q.notify(&#123;
    type: 'positive',
    message: '이것은 "positive" 유형의 알림입니다.'
  &#125;)
&#125;

const triggerNegative = () =&#62; &#123;
  $q.notify(&#123;
    type: 'negative',
    message: '이것은 "negative" 유형의 알림입니다.'
  &#125;)
&#125;

const triggerWarning = () =&#62; &#123;
  $q.notify(&#123;
    type: 'warning',
    message: '이것은 "warning" 유형의 알림입니다.'
  &#125;)
&#125;

const triggerInfo = () =&#62; &#123;
  $q.notify(&#123;
    type: 'info',
    message: '이것은 "info" 유형의 알림입니다.'
  &#125;)
&#125;

const triggerOngoing = () =&#62; &#123;
  // 알림 참조가 필요합니다.
  // 그렇지 않으면 해제되지 않습니다. ('ongoing' 유형은 timeout 0을 가짐)
  const notif = $q.notify(&#123;
    type: 'ongoing',
    message: '검색어를 찾고 있습니다...'
  &#125;)

  // simulate delay
  setTimeout(() =&#62; &#123;
    notif(&#123;
      type: 'positive',
      message: '원하는 결과를 찾았습니다',
      timeout: 1000
    &#125;)
  &#125;, 4000)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="row q-gutter-sm"&#62;
    &#60;q-btn no-caps unelevated color="positive" @click="triggerPositive" label="'positive' 트리거" /&#62;
    &#60;q-btn no-caps unelevated color="negative" @click="triggerNegative" label="'negative' 트리거" /&#62;
    &#60;q-btn no-caps unelevated color="warning" text-color="dark" @click="triggerWarning" label="'warning' 트리거" /&#62;
    &#60;q-btn no-caps unelevated color="info" @click="triggerInfo" label="'info' 트리거" /&#62;
    &#60;q-btn no-caps unelevated color="grey-8" @click="triggerOngoing" label="'ongoing' 트리거" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
        </textarea>
      </Code>
      <Info label="실행">
        <div class="q-pb-md">
          <div class="row q-gutter-sm">
            <q-btn no-caps unelevated color="positive" @click="triggerPositive" label="'positive' 트리거" />
            <q-btn no-caps unelevated color="negative" @click="triggerNegative" label="'negative' 트리거" />
            <q-btn no-caps unelevated color="warning" text-color="dark" @click="triggerWarning" label="'warning' 트리거" />
            <q-btn no-caps unelevated color="info" @click="triggerInfo" label="'info' 트리거" />
            <q-btn no-caps unelevated color="grey-8" @click="triggerOngoing" label="'ongoing' 트리거" />
          </div>
        </div>
      </Info>
      <p>사용자 정의 유형을 등록하거나 미리 정의된 유형을 재정의할 수도 있습니다. <code>@quasar/app-vite Boot File</code> 또는
        <code>@quasar/app-webpack Boot File</code>에 적용해 사용하는 것이 가장
        좋습니다.
      </p>
      <Code language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

/**
 * 사용 전에 유형을 등록해 놓아야 합니다.
 *
 * .vue 파일 대신 부팅 파일이 가장 좋습니다.
 * 그게 아니라면 컴포넌트에 매본 등록해야
 * 사용이 가능합니다 :)
 */

$q.notify.registerType('my-notif', &#123;
  icon: 'announcement',
  progress: true,
  color: 'brown',
  textColor: 'white',
  classes: 'glossy'
&#125;)

const triggerCustomRegisteredType1 = () =&#62; &#123;
  $q.notify(&#123;
    type: 'my-notif',
    message: '이 알림은 사용자 정의 유형을 사용하고 있습니다.'
  &#125;)
&#125;

const triggerCustomRegisteredType2 = () =&#62; &#123;
  // this one overrides some of the original
  // options of the "my-notif" registered type
  $q.notify(&#123;
    type: 'my-notif',
    icon: 'contactless',
    message: '이 알림은 사용자 정의 유형을 사용하고 있습니다.',
    caption: 'my-notif 유형의 기본 아이콘과 색상을 재정의 합니다.',
    color: 'primary'
  &#125;)
&#125;
&#60;/script&#62;

&#60;div class="row q-gutter-sm"&#62;
  &#60;q-btn no-caps color="brown" @click="triggerCustomRegisteredType1" label="사용자 정의 유형 1" /&#62;
  &#60;q-btn no-caps color="primary" @click="triggerCustomRegisteredType2" label="사용자 정의 유형 2" /&#62;
&#60;/div&#62;
&#60;/template&#62;
        </textarea>
      </Code>
      <Info label="실행">
        <div class="q-pb-md">
          <div class="row q-gutter-sm">
            <q-btn no-caps color="brown" @click="triggerCustomRegisteredType1" label="사용자 정의 유형 1" />
            <q-btn no-caps color="primary" @click="triggerCustomRegisteredType2" label="사용자 정의 유형 2" />
          </div>
        </div>
      </Info>
      <Code language="javascript" :convert="{'javascript':'js'}">
        <textarea readonly>
// 부팅 파일에 등록하는 방법

{{ 'import { Notify } from \'quasar\'' }}

Notify.registerType('my-notif', &#123;
  icon: 'announcement',
  progress: true,
  color: 'brown',
  textColor: 'white',
  classes: 'glossy'
&#125;)
        </textarea>
      </Code>
    </section>
    <section id="html" data-name="HTML 사용" sub>
      <Title minor>HTML 사용</Title>
      <p><code>html: true</code> prop을 지정하면 HTML을 메시지로 사용할 수 있습니다. <strong>이로 인해 XSS 공격에 노출될 위험이 있으므로</strong> 메시지를 직접
        삭제해야
        합니다.</p>
      <Code language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    message: '&#60;span style="color: green"&#62;나는&#60;/span&#62; &#60;strong&#62;HTML&#60;/strong&#62;을 &#60;span style="color: red"&#62;사용&#60;/span&#62; 할 수 있습니다',
    html: true
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;q-btn no-caps color="purple" @click="showNotif" label="HTML 알림 보기" /&#62;
&#60;/template&#62;
        </textarea>
      </Code>
      <Info label="실행">
        <div class="q-pb-md">
          <q-btn no-caps color="purple" @click="showNotifHtml" label="HTML 알림 보기" />
        </div>
      </Info>
    </section>
    <section id="attr" data-name="속성 설정" sub>
      <Title minor>속성 설정</Title>
      <p>attr 객체 속성을 설정하여 알림 자체에 사용자 정의 HTML 속성을 설정할 수 있습니다. 개별 알림 액션의 경우 다른 prop처럼 직접 전달할 수 있습니다.</p>
      <Code language="html" :convert="{'html':'vue'}">
        <textarea readonly>
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

$q.notify(&#123;
  // ...

  attrs: &#123;
    // 알림 자체의 경우:
    role: 'alertdialog'
  &#125;,

  actions: [
    &#123;
      icon: 'close',
      // 개별 액션 (버튼):
      'aria-label': '무시'
    &#125;
  ]
&#125;)
&#60;/script&#62;
        </textarea>
      </Code>
    </section>
    <section id="close" data-name="프로그래밍 방식으로 닫기" sub>
      <Title minor>프로그래밍 방식으로 닫기</Title>
      <p>알림은 사용자만 해제하도록 되어 있지만 예외적인 경우에는 프로그래밍 방식으로 해제할 수 있습니다. 무제한으로 시간(0)을 설정할 때 특히 유용합니다.</p>
      <Code language="javascript" :convert="{'javascript':'js'}">
        <textarea readonly>
const dismiss = $q.notify(&#123;...&#125;)
...
dismiss()
        </textarea>
      </Code>
    </section>
    <section id="default" data-name="기본값 설정" sub>
      <Title minor>기본값 설정</Title>
      <p>모든 알림에 적용할 기본 구성을 설정하는 두 가지 방법이 있습니다. main.js > framework > config > notify Object(
        <Link :to="{ hash: '#install' }">설치 섹션</Link> 참조) 또는
        <Link href="https://quasar.dev/quasar-plugins/notify#setting-defaults">프로그래밍 방식</Link>입니다.
      </p>
      <p>일부 Vue 파일에서 기본값을 설정할 수도 있습니다.</p>
      <Code language="html" :convert="{'html':'vue'}">
        <textarea readonly>
// Vue 컴포넌트 내부

&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

$q.notify.setDefaults(&#123;
  position: 'top-right',
  timeout: 2500,
  textColor: 'white',
  actions: [&#123; icon: 'close', color: 'white' &#125;]
&#125;)
&#60;/script&#62;
        </textarea>
      </Code>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="Loading" prev :to="{ name: 'loading' }" />
        <!-- <Move label="Notify" next :to="{ name: 'notify' }" /> -->
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>