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
    avatar: 'https://quasar.serasome.com/android-icon-48x48.png'
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
    avatar: 'https://quasar.serasome.com/android-icon-48x48.png',
    actions: [
      { label: '무시', color: 'white', handler: () => { /* ... */ } }
    ]
  })

  $q.notify({
    message: '세라에게 전화가 왔어요',
    color: 'indigo',
    avatar: 'https://quasar.serasome.com/android-icon-48x48.png',
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
    avatar: 'https://quasar.serasome.com/android-icon-48x48.png',
    actions: [
      { label: '수락', color: 'yellow', handler: () => { /* ... */ } }
    ]
  })
}
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Notify 플러그인
      </Title>
      <p>Notify는 알림 형태로 사용자에게 애니메이션 메시지(페이지에 있는 모든 것보다 상위에 있는)를 표시할 수 있는 Quasar 플러그인입니다. 이벤트를 사용자에게 알리는 데 유용하며 작업을 통해
        사용자의 참여를 유도할 수도 있습니다. 토스트 또는 스낵바라고도 합니다.</p>
      <Info advice color="teal-4">
        <p>백엔드 서버에 HTTP 요청 성공이나 실패에 대한 메시지를 보여주거나 사용자 동의를 받는 등 다양한 곳에 활용할 수 있습니다.</p>
      </Info>
    </section>
    <section id="install" data-name="설치">
      <Title sub>설치</Title>
      <Code class="q-mb-lg" language="javascript">
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
      <Code class="q-mb-lg" language="html">
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
      <Code class="q-mb-lg" language="javascript">
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
    <section id="example" data-name="예제">
      <Title sub>예제</Title>
      <Practice :options="[
        { label: '기본', value: 'default' },
        { label: '캡션', value: 'caption' },
        { label: '아이콘과 함께', value: 'icon' },
        { label: '아바타와 함께', value: 'avatar' },
        { label: '기본 스피너와 함께', value: 'spinner1' },
        { label: '사용자 스피너와 함께', value: 'spinner2' },
        { label: '액션과 함께', value: 'action' },
        { label: '여러줄', value: 'multi' },
        { label: '위치', value: 'position' }
      ]" item="default">
        <template #default>
          <Code language="html">
            <textarea readonly>
&#60;script sectup&#62;
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
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn color="purple" @click="showNotifBasic" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #caption>
          <Code language="html">
            <textarea readonly>
&#60;script sectup&#62;
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
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn color="purple" @click="showNotifCaption" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #icon>
          <Code language="html">
            <textarea readonly>
&#60;script sectup&#62;
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
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn color="purple" @click="showNotifIcon" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #avatar>
          <Code language="html">
            <textarea readonly>
&#60;script sectup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 전화가 왔어요',
    color: 'indigo',
    avatar: 'https://quasar.serasome.com/android-icon-48x48.png'
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn color="purple" @click="showNotifAvatar" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #spinner1>
          <Code language="html">
            <textarea readonly>
&#60;script sectup&#62;
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
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn color="purple" @click="showNotifSpinner1" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #spinner2>
          <Code language="html">
            <textarea readonly>
&#60;script sectup&#62;
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
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn color="purple" @click="showNotifSpinner2" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #action>
          <Code language="html">
            <textarea readonly>
&#60;script sectup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 전화가 왔어요',
    color: 'indigo',
    avatar: 'https://quasar.serasome.com/android-icon-48x48.png',
    actions: [
      &#123; label: '무시', color: 'white', handler: () =&#62; &#123; /* ... */ &#125; &#125;
    ]
  &#125;)

  $q.notify(&#123;
    message: '세라에게 전화가 왔어요',
    color: 'indigo',
    avatar: 'https://quasar.serasome.com/android-icon-48x48.png',
    actions: [
      &#123; label: '응답', color: 'yellow', handler: () =&#62; &#123; /* ... */ &#125; &#125;,
      &#123; label: '무시', color: 'white', handler: () =&#62; &#123; /* ... */ &#125; &#125;
    ]
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn color="purple" @click="showNotifAction" label="알림 보기" />
            </div>
          </Info>
        </template>
        <template #multi>
          <Code language="html">
            <textarea readonly>
&#60;script sectup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

const showNotif = () =&#62; &#123;
  $q.notify(&#123;
    message: '세라에게 점심 식사 연락이 왔습니다',
    color: 'indigo',
    multiLine: true,
    avatar: 'https://quasar.serasome.com/android-icon-48x48.png',
    actions: [
      &#123; label: '수락', color: 'yellow', handler: () =&#62; &#123; /* ... */ &#125; &#125;
    ]
  &#125;)
&#125;
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="purple" @click="showNotif" label="알림 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn color="purple" @click="showNotifMulti" label="알림 보기" />
            </div>
          </Info>
        </template>
      </Practice>
      <Note>
        <p><b>팁</b></p>
        <p>actions을 정의하면, 사용자가 action을 선택할 때 알림이 자동으로 해제됩니다.</p>
      </Note>
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