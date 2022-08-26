<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>쿠키</Title>
      <p>
        표준화된 <code>document.cookie</code>의 래퍼입니다.
      </p>
      <Note>
        <p><b>메모</b></p>
        <p>쿠키를 다루는 표준 방법에 더해 쿠키 플러그인을 사용하면 JSON 객체를 사용하여 쿠키를 읽고 쓸 수 있습니다. SSR의 쿠키를 관리하는 것 역시 가능합니다.</p>
      </Note>
      <Info advice color="teal-4">
        <p>Quasar 내에서 쿠키를 사용하도록 도와주는 플러그인입니다. 저는 주로 다크 모드 여부 값이나 다국어 정보(<code>ko</code>, <code>en</code> 등)와 같이 간단한 정보를
          저장할 때
          사용합니다.</p>
      </Info>
    </section>
    <section id="install" data-name="설치">
      <Title sub>설치</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// main.js : Quasar Vite 플러그인

import &#123;
  Quasar,
  Cookies
&#125; from 'quasar'

app.use(Quasar, &#123;
  plugins: &#123;
    Cookies
  &#125;
&#125;)
        </textarea>
      </Code>
    </section>
    <section id="ssr" data-name="SSR에 관한 참고사항">
      <Title sub>SSR에 관한 참고사항</Title>
      <p>SSR 용으로 빌드 할 때, <code>$q.cookies</code> 형식만 사용할 수 있습니다.
        <code>{{ 'import { Cookies } from \'quasar\'' }}</code>(server-side 환경일 때)를 사용해야 하는 경우 다음과 같이 사용해야 합니다.
      </p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
{{ 'import { Cookies } from \'quasar\'' }}

// `ssrContext`에 접근이 필요합니다
function (ssrContext) &#123;
  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies // 그렇지 않으면 클라이언트 환경이 됩니다

  //  "cookies"는 non-SSR 빌드에 global import 와 동일합니다
&#125;
        </textarea>
      </Code>
      <p><code>ssrContext</code>는
        <Link href="https://quasar.dev/quasar-cli-vite/boot-files">@quasar/app-vite Boot File</Link> 또는
        <Link href="https://quasar.dev/quasar-cli-webpack/boot-files">@quasar/app-webpack Boot File</Link>에서 사용할 수 있습니다.
        또한
        <Link href="https://quasar.dev/quasar-cli-vite/prefetch-feature">@quasar/app-vite preFetch</Link> 또는
        <Link href="https://quasar.dev/quasar-cli-webpack/prefetch-feature">@quasar/app-webpack preFetch</Link> 기능에서
        매개변수로
        제공됩니다.
      </p>
      <p>이것은 클라이언트 전용 앱에서 모든 사용자가 브라우저의 새로운 앱 인스턴스를 사용하기 때문입니다. server-side 렌더링에 대해서도 동일한 것을 원하는 것에 대해:각 요청에는 교차 요청
        상태 오염이 발생하지
        않도록 새로운 격리 앱 인스턴스를 필요로 합니다. 따라서 Cookies는 각 요청에 별도로 바인딩 되어야 합니다.</p>
    </section>
    <section id="read" data-name="쿠키 읽기">
      <Title sub>쿠키 읽기</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// Vue 파일 밖에서 사용
{{ 'import { Cookies } from \'quasar\'' }}
const value = Cookies.get('cookie_name')
        </textarea>
      </Code>
      <p>쿠키를 설정하지 않으면, <code>null</code>값을 반환한다.</p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- Vue file 안에서 사용 --&#62;
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()
const value = $q.cookies.get('cookie_name')
&#60;/script&#62;
        </textarea>
      </Code>
    </section>
    <section id="readall" data-name="모든 쿠키 읽기">
      <Title sub>모든 쿠키 읽기</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// Vue 파일 밖에서 사용
{{ 'import { Cookies } from \'quasar\'' }}
const value = Cookies.getAll()
        </textarea>
      </Code>
      <p><code>cookies</code> 변수는 키-값 쌍의 객체 입니다(cookie_name : cookie_value).</p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- Vue file 안에서 사용 --&#62;
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()
const value = $q.cookies.getAll()
&#60;/script&#62;
        </textarea>
      </Code>
    </section>
    <section id="verify" data-name="쿠키 설정 확인">
      <Title sub>쿠키 설정 확인</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// Vue 파일 밖에서 사용
{{ 'import { Cookies } from \'quasar\'' }}
Cookies.has('cookie_name') // 불린값
        </textarea>
      </Code>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- Vue file 안에서 사용 --&#62;
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()
const hasIt = $q.cookies.has('cookie_name')
&#60;/script&#62;
        </textarea>
      </Code>
    </section>
    <section id="write" data-name="쿠키 쓰기">
      <Title sub>쿠키 쓰기</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// Vue 파일 밖에서 사용
{{ 'import { Cookies } from \'quasar\'' }}

Cookies.set('cookie_name', cookie_value)

// 쿠키 옵션도 전달:
Cookies.set('cookie_name', cookie_value, options)
        </textarea>
      </Code>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// Vue 파일 밖에서 사용
{{ 'import { Cookies } from \'quasar\'' }}

Cookies.set('quasar', 'framework', &#123;
  secure: true
&#125;)
        </textarea>
      </Code>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- Vue file 안에서 사용 --&#62;
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()
$q.cookies.set('cookie_name', cookie_value)
// 쿠키 옵션도 전달:
$q.cookies.set('cookie_name', cookie_value, options)
&#60;/script&#62;
        </textarea>
      </Code>
      <p>(선택사항) <code>options</code> 매개변수는 속성별로 아래에 설명된 객체입니다.</p>
    </section>
    <section id="expires" data-name="옵션: expires" sub>
      <Title minor>옵션: expires</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
expires: 10 // 10일
expires: -1 // 어제
expires: 'Mon, 06 Jan 2020 12:52:55 GMT'
expires: new Date() // 자바스크립트 날짜 객체
expires: '1d 3h 5m' // 1일 3시간 5분
expires: '2d' // 2일
expires: '15m 10s' // 15분 10초
        </textarea>
      </Code>
      <p>쿠키의 수명을 정의합니다. 값은 생성 시점으로부터 날짜로 해석되는 숫자 또는 Date 객체 또는 원시 문자열 날짜 (“Mon, 06 Jan 2020 12:52:55 GMT”) 또는 특수 문자열 형식
        ("1d", " 15m", "13d", "1d 15m", "1d 3h 5m 3s") 일 수 있습니다. 생략하면 쿠키는 세션 쿠키가 됩니다.</p>
    </section>
    <section id="path" data-name="옵션: path" sub>
      <Title minor>옵션: path</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
path: '/'
        </textarea>
      </Code>
      <p>쿠키의 유효 경로를 정의합니다. 기본적으로 쿠키의 경로는 쿠키가 작성된 페이지의 경로입니다(표준 브라우저 동작). 예를 들어 전체 도메인에서 사용할 수 있도록 하려면 경로: '/'를 사용하세요.
        기본값: 쿠키가 생성된 페이지 경로입니다.</p>
    </section>
    <section id="domain" data-name="옵션: domain" sub>
      <Title minor>옵션: domain</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
domain: 'quasar.dev'
        </textarea>
      </Code>
      <p>쿠키의 유효 도메인을 정의합니다. 기본값: 쿠키가 생성된 페이지의 도메인입니다.</p>
    </section>
    <section id="samesite" data-name="옵션: sameSite" sub>
      <Title minor>옵션: sameSite</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
sameSite: 'Strict'
// 또는
sameSite: 'Lax'
        </textarea>
      </Code>
      <p>SameSite 쿠키를 사용하면 서버에서 사이트 간 요청과 함께 쿠키를 보내지 않도록 요구할 수 있습니다(여기서 사이트는 등록 가능한 도메인에 의해 정의됨). 이는 사이트 간
        요청 위조
        공격(CSRF)에 대한 보호 기능을 제공합니다.</p>
      <p>
        <strong>Strict</strong> - SameSite 쿠키에 이 속성이 있는 경우 브라우저는 요청이 쿠키를 설정한 웹사이트에서 시작된 경우에만 쿠키를 보냅니다. 요청이
        현재 위치의 URL과
        다른 URL에서 발생한 경우 Strict 속성이 지정된 쿠키는 포함되지 않습니다.
      </p>
      <p><strong>Lax</strong> - 속성이 Lax로 설정된 경우 SameSite 쿠기는 이미지나 프레임 로드 호출과 같은 사이트 간 하위 요청은 보류되지만 사용자가 링크를 따라가는 것과 같이
        외부
        사이트에서 URL로 이동하는 경우에는 전송됩니다.</p>
      <p><code>same-site</code> 설정에 대한 자세한 정보는
        <Link href="https://web.dev/samesite-cookies-explained/">여기</Link>를 참고하세요.
      </p>
    </section>
    <section id="httponly" data-name="옵션: httpOnly" sub>
      <Title minor>옵션: httpOnly</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
httpOnly: true
        </textarea>
      </Code>
      <p>사이트 간 스크립트(XSS) 공격을 완화하기 위해 HttpOnly 쿠키는 자바스크립트의 document.cookie API에 액세스할 수 없으며 서버로만 전송됩니다. 예를 들어, 서버 측 세션을
        유지하는 쿠키는 자바스크립트에서 사용할 필요가 없으며 HttpOnly 플래그가 설정되어야 합니다.</p>
    </section>
    <section id="secure" data-name="옵션: secure" sub>
      <Title minor>옵션: secure</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
secure: true
        </textarea>
      </Code>
      <p>true인 경우 쿠키 전송에는 보안 프로토콜(HTTPS)이 필요하며 HTTP를 통해서는 전송되지 않습니다. 기본값은 <code>false</code>입니다.</p>
      <Note>
        <p><b>팁</b></p>
        <p>Quasar CLI 환경과 개발 모드를 사용하고 있다면, quasar.config.js > devServer > https: true를 통해 HTTPS를 활성화할 수 있습니다.</p>
      </Note>
    </section>
    <section id="other" data-name="옵션: ohter" sub>
      <Title minor>옵션: ohter</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
other: 'SomeNewProp'
        </textarea>
      </Code>
      <p>다른 쿠키 옵션의 원시 문자열입니다. 현재 Quasar에서 구현되지 않은 새 props를 위한 최후의 수단으로 사용됩니다.</p>
    </section>
    <section id="remove" data-name="쿠키 제거">
      <Title sub>쿠키 제거</Title>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// Vue 파일 밖에서 사용
{{ 'import { Cookies } from \'quasar\'' }}

Cookies.remove('cookie_name')

// 쿠키가 경로 및/또는 도메인과 같은 특정 옵션으로 설정된 경우
// 제거할 때 역시 동일한 속성의 옵션을 설정해야 합니다:
Cookies.remove('cookie_name', options)
        </textarea>
      </Code>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- Vue file 안에서 사용 --&#62;
&#60;script setup&#62;
{{ 'import { useQuasar } from \'quasar\'' }}

const $q = useQuasar()

$q.cookies.remove('cookie_name')

// 쿠키가 경로 및/또는 도메인과 같은 특정 옵션으로 설정된 경우
// 제거할 때 역시 동일한 속성의 옵션을 설정해야 합니다:
$q.cookies.remove('cookie_name', options)
&#60;/script&#62;
        </textarea>
      </Code>
      <Note color="orange-4">
        <p><b>주의</b></p>
        <p>쿠키가 이전에 특정 <em>경로</em> 및/또는 <em>도메인</em>으로 설정된 경우 <em>options</em> 매개변수를 통해 동일한 속성이 remove()에 전달된 경우에만 쿠키를
          성공적으로
          제거할 수 있습니다. 이것은 RFC6265에
          따릅니다.</p>
      </Note>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="그 외 CSS 헬퍼 클래스" prev :to="{ name: 'other' }" />
        <Move label="Dark" next :to="{ name: 'dark' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>