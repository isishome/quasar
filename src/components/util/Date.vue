<script setup>
import { defineAsyncComponent, onBeforeUnmount } from "vue";
import { useQuasar, QSpinnerFacebook, QSpinnerGears } from "quasar";

const Code = defineAsyncComponent(() => import("@/components/block/Code.vue"));
const Practice = defineAsyncComponent(() =>
  import("@/components/block/Practice.vue")
);

const $q = useQuasar();
let timer;

const showLoadingDefault = () => {
  $q.loading.show();

  // 2초 후 로딩 숨김
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 2000);
};

const showLoadingMessage = () => {
  $q.loading.show({
    message: "몇 가지 중요한 프로세스가 진행 중입니다. 기다리세요...",
  });

  // 3초 후 로딩 숨김
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 3000);
};

const showLoadingBox = () => {
  $q.loading.show({
    message: "뭔가 하는 중입니다. 기다려 주세요...",
    boxClass: "bg-grey-2 text-grey-9",
    spinnerColor: "primary",
  });

  // 3초 후 로딩 숨김
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 3000);
};

const showLoadingUnsafe = () => {
  $q.loading.show({
    message:
      '몇가지 중요한 <b>프로세스</b>가 진행 중입니다.<br/><span class="text-primary">기다려 주세요...</span>',
    html: true,
  });

  // 3초 후 로딩 숨김
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 3000);
};

const showLoadingCustom = () => {
  $q.loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: "yellow",
    spinnerSize: 140,
    backgroundColor: "purple",
    message: "몇 가지 중요한 프로세스가 진행 중입니다. 기다려 주세요...",
    messageColor: "black",
  });

  // 3초 후 로딩 숨김
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 3000);
};

const showLoadingChange = () => {
  $q.loading.show({
    message: "첫 번째 메시지. 3초 안에 바뀝니다...",
  });

  timer = setTimeout(() => {
    $q.loading.show({
      spinner: QSpinnerGears,
      spinnerColor: "red",
      messageColor: "black",
      backgroundColor: "yellow",
      message: "업데이트된 메시지",
    });

    timer = setTimeout(() => {
      $q.loading.hide();
      timer = void 0;
    }, 2000);
  }, 2000);
};

onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer);
    $q.loading.hide();
  }
});
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Date 유틸 </Title>
      <p>
        Quasar는 Momentjs와 같은 전용 라이브러리를 통합하는 데 드는 높은 추가
        비용 없이 대부분의 사용 사례에 JS Date를 쉽게 조작할 수 있는 유용한
        함수들을 제공합니다.
      </p>
      <p>
        대부분의 Quasar 날짜 함수는 유닉스 타임스탬프 또는 네이티브 JS
        <Link
          href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date"
          >Date 생성자</Link
        >에 의해 파싱할 수 있는 유닉스 타임스탬프 도는 문자열을 매개변수로
        받습니다. 몇가지 예: <code>1497159857411</code>,
        <code>Sun Jun 11 2017 08:44:42 GMT+0300</code>, <code>2017-06-16</code>
      </p>
      <p>반환되는 값은 모두 JS Date들입니다.</p>
      <p>
        매우 강력한 JS 네이티브 Date 클래스에 익숙해지고, 번들에 수백개의 축소된
        KB를 추가하는 Momentjs와 같은 솔루션이 필요하지 않다는 것을 잊지마세요.
      </p>
      <Info color="green">
        <p class="text-green"><b>팁</b></p>
        <p>
          Quasar date 유틸에는 UMD 버전을 제외하고, 트리 쉐이킹이 포함되어
          있습니다.
        </p>
      </Info>
      <p>
        모든 예제에서 Quasar <code>date</code>객체를 가져오는 것(import)을 볼 수
        있습니다. 그러나 하나의 메서드만 필요한 경우 ES6 분해 구조를 이용 트리
        쉐이킹하여 해당 메서드만 포함되도록 할 수 있습니다.
      </p>
      <code>addToDate()</code>의 예
      <Code
        class="q-mt-sm q-mb-lg"
        language="javascript"
        :convert="{ javascript: 'js' }"
      >
        <textarea readonly>
// we import all of `date`
import &#123; date &#125; from {{ "'quasar'" }}
// destructuring to keep only what is needed
const &#123; addToDate &#125; = date

const newDate = addToDate(new Date(), &#123; days: 7, months: 1 &#125;)
        </textarea>
      </Code>
    </section>
    <section id="install" data-name="설치">
      <Title sub>설치</Title>
      <Code
        class="q-mb-lg"
        language="javascript"
        :convert="{ javascript: 'js' }"
      >
        <textarea readonly>
// main.js

import &#123;
  Quasar,
  Loading
&#125; from 'quasar'

app.use(Quasar, &#123;
  plugins: &#123;
    Loading
  &#125;,
  config: &#123;
    loading: &#123; /* API 카드에서 QuasarConfOptions 살펴보기 */ &#125;
  &#125;
&#125;)
        </textarea>
      </Code>
    </section>
    <section id="usage" data-name="사용법">
      <Title sub>사용법</Title>
      <p>
        Quasar 로딩 플러그인은 빠른 작업으로 인해 화면이 깜박이지 않도록 지연
        (500ms)을 사용하여 표시됩니다. 깜박임은 사용자가 확인할 기회도 없이
        스피너와 오버레이가 표시되었다가 빠르게 숨김 처리 될 때 발생합니다.
        지연은 로딩 화면이 보여기 전 이런 문제를 해결하는 데 도움을 줍니다.
      </p>
    </section>
    <section id="inside" data-name="Vue 파일에서 사용하기" sub>
      <Title minor>Vue 파일에서 사용하기</Title>
      <Code class="q-mb-lg" language="html" :convert="{ html: 'vue' }">
        <textarea readonly>
&#60;script setup&#62;
{{ "import { useQuasar } from 'quasar'" }}

const $q = useQuasar()

$q.loading.show(&#123;
  delay: 400 // 밀리초
&#125;)

$q.loading.hide()
&#60;/script&#62;
        </textarea>
      </Code>
    </section>
    <section id="outside" data-name="Vue 파일 외부에서 사용하기" sub>
      <Title minor>Vue 파일 외부에서 사용하기</Title>
      <Code
        class="q-mb-lg"
        language="javascript"
        :convert="{ javascript: 'js' }"
      >
        <textarea readonly>
import &#123;
  Loading,

  // 선택사항!, 아래 예제의 스피너 사용을 위해
  QSpinnerGears
&#125; from 'quasar'

// 기본 옵션
Loading.show()

// 사용자 정의
Loading.show(&#123;
  spinner: QSpinnerGears,
  // 다른 props
&#125;)

Loading.hide()
        </textarea>
      </Code>
    </section>
    <section id="example" data-name="예제">
      <Title sub>예제</Title>
      <Practice
        :options="[
          { label: '기본 옵션', value: 'default' },
          { label: '메시지', value: 'message' },
          { label: '사용자 정의 박스', value: 'box' },
          { label: '안전하지 않은 메시지', value: 'unsafe' },
          { label: '사용자 정의', value: 'custom' },
          { label: '표시 및 변경', value: 'change' },
        ]"
        non-code
      >
        <template #default>
          <Code language="html" :convert="{ html: 'vue' }">
            <textarea readonly>
&#60;script sectup&#62;
{{ "import { useQuasar } from 'quasar'" }}
import &#123; onBeforeUnmount &#125; from 'vue'

const $q = useQuasar()
let timer

const showLoading = () =&#62; &#123;
  $q.loading.show()

  // 2초 후 로딩 숨김
  timer = setTimeout(() =&#62; &#123;
    $q.loading.hide()
    timer = void 0
  &#125;, 2000)
&#125;

onBeforeUnmount(() =&#62; &#123;
  if (timer !== void 0) &#123;
    clearTimeout(timer)
    $q.loading.hide()
  &#125;
&#125;)
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="purple" @click="showLoading" label="로딩 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn
                color="purple"
                @click="showLoadingDefault"
                label="로딩 보기"
              />
            </div>
          </Info>
        </template>
        <template #message>
          <Code language="html" :convert="{ html: 'vue' }">
            <textarea readonly>
&#60;script sectup&#62;
{{ "import { useQuasar } from 'quasar'" }}
import &#123; onBeforeUnmount &#125; from 'vue'

const $q = useQuasar()
let timer

const showLoading = () =&#62; &#123;
  $q.loading.show(&#123;
    message: '몇 가지 중요한 프로세스가 진행 중입니다. 기다리세요...'
  &#125;)

  // 3초 후 로딩 숨김
  timer = setTimeout(() =&#62; &#123;
    $q.loading.hide()
    timer = void 0
  &#125;, 3000)
&#125;

onBeforeUnmount(() =&#62; &#123;
  if (timer !== void 0) &#123;
    clearTimeout(timer)
    $q.loading.hide()
  &#125;
&#125;)
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="teal" @click="showLoading" label="로딩 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn
                color="teal"
                @click="showLoadingMessage"
                label="로딩 보기"
              />
            </div>
          </Info>
        </template>
        <template #box>
          <Code language="html" :convert="{ html: 'vue' }">
            <textarea readonly>
&#60;script sectup&#62;
{{ "import { useQuasar } from 'quasar'" }}
import &#123; onBeforeUnmount &#125; from 'vue'

const $q = useQuasar()
let timer

const showLoading = () =&#62; &#123;
  $q.loading.show(&#123;
    message: '뭔가 하는 중입니다. 기다려 주세요...',
    boxClass: 'bg-grey-2 text-grey-9',
    spinnerColor: 'primary'
  &#125;)

  // 3초 후 로딩 숨김
  timer = setTimeout(() =&#62; &#123;
    $q.loading.hide()
    timer = void 0
  &#125;, 3000)
&#125;

onBeforeUnmount(() =&#62; &#123;
  if (timer !== void 0) &#123;
    clearTimeout(timer)
    $q.loading.hide()
  &#125;
&#125;)
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="purple" @click="showLoading" label="로딩 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn color="purple" @click="showLoadingBox" label="로딩 보기" />
            </div>
          </Info>
        </template>
        <template #unsafe>
          <Code language="html" :convert="{ html: 'vue' }">
            <textarea readonly>
&#60;script sectup&#62;
{{ "import { useQuasar } from 'quasar'" }}
import &#123; onBeforeUnmount &#125; from 'vue'

const $q = useQuasar()
let timer

const showLoading = () =&#62; &#123;
  $q.loading.show(&#123;
    message: '몇가지 중요한 &#60;b&#62;프로세스&#60;/b&#62;가 진행 중입니다.&#60;br/&#62;&#60;span class="text-primary"&#62;기다려 주세요...&#60;/span&#62;',
    html: true
  &#125;)

  // 3초 후 로딩 숨김
  timer = setTimeout(() =&#62; &#123;
    $q.loading.hide()
    timer = void 0
  &#125;, 3000)
&#125;

onBeforeUnmount(() =&#62; &#123;
  if (timer !== void 0) &#123;
    clearTimeout(timer)
    $q.loading.hide()
  &#125;
&#125;)
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="teal" @click="showLoading" label="로딩 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn
                color="teal"
                @click="showLoadingUnsafe"
                label="로딩 보기"
              />
            </div>
          </Info>
        </template>
        <template #custom>
          <Code language="html" :convert="{ html: 'vue' }">
            <textarea readonly>
&#60;script sectup&#62;
{{ "import { useQuasar, QSpinnerFacebook } from 'quasar'" }}
import &#123; onBeforeUnmount &#125; from 'vue'

const $q = useQuasar()
let timer

const showLoading = () =&#62; &#123;
  $q.loading.show(&#123;
    spinner: QSpinnerFacebook,
    spinnerColor: 'yellow',
    spinnerSize: 140,
    backgroundColor: 'purple',
    message: '몇 가지 중요한 프로세스가 진행 중입니다. 기다려 주세요...',
    messageColor: 'black'
  &#125;)

  // 3초 후 로딩 숨김
  timer = setTimeout(() =&#62; &#123;
    $q.loading.hide()
    timer = void 0
  &#125;, 3000)
&#125;

onBeforeUnmount(() =&#62; &#123;
  if (timer !== void 0) &#123;
    clearTimeout(timer)
    $q.loading.hide()
  &#125;
&#125;)
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="red" @click="showLoading" label="로딩 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn color="red" @click="showLoadingCustom" label="로딩 보기" />
            </div>
          </Info>
        </template>
        <template #change>
          <Code language="html" :convert="{ html: 'vue' }">
            <textarea readonly>
&#60;script sectup&#62;
{{ "import { useQuasar, QSpinnerGears } from 'quasar'" }}
import &#123; onBeforeUnmount &#125; from 'vue'

const $q = useQuasar()
let timer

const showLoading = () =&#62; &#123;
  $q.loading.show(&#123;
    message: '첫 번째 메시지. 3초 안에 바뀝니다...'
  &#125;)

  timer = setTimeout(() =&#62; &#123;
    $q.loading.show(&#123;
      spinner: QSpinnerGears,
      spinnerColor: 'red',
      messageColor: 'black',
      backgroundColor: 'yellow',
      message: '업데이트된 메시지'
    &#125;)

    timer = setTimeout(() =&#62; &#123;
      $q.loading.hide()
      timer = void 0
    &#125;, 2000)
  &#125;, 2000)
&#125;

onBeforeUnmount(() =&#62; &#123;
  if (timer !== void 0) &#123;
    clearTimeout(timer)
    $q.loading.hide()
  &#125;
&#125;)
&#60;/script&#62;

&#60;template&#62;
  &#60;div class="q-pa-md"&#62;
    &#60;q-btn color="primary" @click="showLoading" label="로딩 보기" /&#62;
  &#60;/div&#62;
&#60;/template&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-pa-md">
              <q-btn
                color="primary"
                @click="showLoadingChange"
                label="로딩 보기"
              />
            </div>
          </Info>
        </template>
      </Practice>
    </section>
    <section id="default" data-name="기본값 설정">
      <Title sub>기본값 설정</Title>
      <p>
        매번 특정값을 사용하는 대신 기본값을 설정하려면
        <em>main.js > framework > config > loading: {...}</em>을 사용하거나
        <code>Loading.setDefaults({...})</code> 또는
        <code>$q.loading.setDefaults({...})</code>를 호출하면 됩니다.
      </p>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="Dark" prev :to="{ name: 'dark' }" />
        <Move label="Notify" next :to="{ name: 'notify' }" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
