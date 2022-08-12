<script setup>
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>왜 Quasar인가?</Title>
      <p>
        개발 비용을 대폭 절감할 수 있습니다.
      </p>
      <q-video :ratio="5 / 3" src="https://www.youtube.com/embed/GV-D85D9KJQ" />
      <p class="q-mt-lg">
        또 다음과 같은 이유:
      </p>
      <ul>
        <li>Vue.js를 기반</li>
        <li><strong>웹사이트</strong>와 <strong>앱</strong>에 최신 UI(머티리얼 가이드 라인 준수)를 바로 사용할 수 있습니다.</li>
        <li>데스크톱 및 <strong>모바일 브라우저</strong>(iOS Safari 포함!)에 대한 최상의 지원</li>
        <li>각 빌드 모드(SPA, SSR, PWA, 모바일 앱, 데스크톱 앱 및 브라우저 확장)에 대한 동급 최상의 지원 및 자체 CLI와의 통합을 통한 최고의 개발자 경험</li>
        <li>손쉽게 사용자 정의(CSS) 및 확장(JS) 가능</li>
        <li>성능에 중점을 둔 프레임워크</li>
        <li>자동 tree-shakable (불필요한 코드를 제거하는 기능)</li>
        <li>포럼 및 디스코드 채팅의 놀라운 커뮤니티</li>
        <li>새로운 기능을 포함한 정기적인 릴리스</li>
        <li>빠른 버그 수정 및 적극적인 커뮤니티 요청 수용</li>
        <li>전체 개발 환경 처리(앱 아이콘 및 시작 화면 생성 포함)</li>
      </ul>
    </section>
    <section id="what" data-name="Quasar란?">
      <Title sub>Quasar란?</Title>
      <p>Quasar(<span class="text-primary">/ˈkweɪ.zɑɹ/</span>로 발음됨)는 Vue.js 기반 MIT 라이선스 오픈 소스 프레임워크로, 웹
        개발자는 Quasar를 사용해 다양한 유형의 반응형++
        웹사이트/앱을 빠르게 만들 수 있습니다.
      </p>
      <ul>
        <li>SPAs (싱글 페이지 앱)</li>
        <li>SSR (서버 측 렌더링 앱) (+ 선택적 PWA 클라이언트 takeover)</li>
        <li>PWAs (프로그레시브 웹 앱)</li>
        <li>BEX (브라우저 확장)</li>
        <li>모바일 앱 (Android, iOS, …) Cordova 나 Capacitor를 통해</li>
        <li>다중 플랫폼 데스크톱앱 (Electron 사용)</li>
      </ul>
      <p>
        Quasar 모토: <strong>한 번의 코드 작성</strong>으로 웹사이트, 모바일 앱과(또는) Electron 앱으로 <strong>동시에 배포하는 것</strong>입니다.
        네, 모든 것들을 하나의 코드 베이스로, 최신 버전의 CLI와 최적의 예제 및 매우 빠른 Quasar 웹 컴포넌트를 사용해 신속하게 앱을 개발하도록 도와줍니다.
      </p>
      <p>
        Quasar를 사용할 때 Hammer.js, Moment.js 또는 Bootstrap과 같은 무거운 라이브러리가 필요하지 않습니다. 작은 설치 공간만으로 이런 기능들을 모두
        포함하고 있습니다.
      </p>
    </section>
    <section id="got" data-name="또 뭐가 있을까?">
      <Title sub>또 뭐가 있을까?</Title>
      <p>기본적으로 제공되는 단순함과 강력한 기능으로 CLI를 포함해 Quasar는 개발을 더 쉽게 할 수 있도록 많은 기능들을 포함하고 있습니다.
      </p>
      <Note>
        <p><strong>생각할 거리</strong></p>
        <p>Quasar는 미래를 내다보고 있으며 자체적으로 높고 현대적인 기준을 세우고 있습니다. 그리고 웹 개발의 진전을 위해 현재의 틀에서 벗어나야 합니다. 그렇지 않으면, cgi-bin / perl을
          계속해서
          사용해야 할지 모릅니다. 왜냐하면 개발자들에게 그것은 오랫동안 익숙한 것이었기 때문입니다. 그러나 대부분의 개발자가 오랫동안 그것에 익숙해졌다는 것이 최고의 솔루션이나 "분명한" 솔루션을 의미하는
          것은 아니며, Quasar가 높은 품질의 작업에 대한 최적의 경로나 심지어 돈이 되지 않는다고 믿는다 해도 그 선택을 바꾸지 않을 것입니다.</p>
        <i>우리가 Quasar로 달성하고자 하는 것은 전체적인 웹 개발 기준을 높이는 것입니다. 앞으로 전진하세요. 그리고 진화하세요. 생각을 바꾸세요. 더 나은 대안이 있을 때 지적하세요.</i>
      </Note>
      <p class="text-caption">
        아래는 Quasar의 유용한 부분과 특징을 일부 나열한 것입니다.
      </p>
      <Title arrow>신뢰할 수 있는 소스코드 하나로 모든 플랫폼을 동시에 한 번에</Title>
      <p>신뢰할 수 있는 소스코드 하나로 모든 플랫폼을 동시에 한 번에 : 반응형 데스크톱/모바일 웹사이트(SPA, SSR + SPA 클라이언트 테이크 오버, SSR + PWA 클라이언트 테이크 오버),
        PWAs (프로그레시브 웹 앱), 모바일 앱(네이티브 같은) 및 멀티 플랫폼 데스크톱 앱(Electron 사용)</p>
      <Title arrow>빠르고 응답성이 뛰어난 최고 수준의 웹 컴포넌트 세트</Title>
      <p>Quasar에는 거의 모든 웹 개발에 필요한 컴포넌트가 있습니다. 각 Quasar 컴포넌트들은 사용자에게 최상의 경험을 제공하기 위해 세심하게 제작되었습니다. Quasar는 <strong>성능과
          응답성을 염두에
          설계</strong>되었기 때문에
        Quasar 사용에 따른 오버헤드를 찾아보기 어렵습니다. 이런 성능과 좋은 디자인이 여러분에게 특별한 자부심을 줄 것입니다.</p>
      <Title arrow>최적의 예제를 기본적으로 포함</Title>
      <p>또한 Quasar는 개발자들이 최적의 예제를 따라 할 수 있도록 만들어졌습니다. 이를 위해 Quasar는 <strong>특별한 설정 없이</strong> 바로 사용 가능한 훌륭한 기능들로
        채워져있습니다.</p>
      <Title arrow>웹 확장 지원</Title>
      <p>Quasar 웹 확장은 복잡한(또는 간단한) 설정을 웹사이트/앱에 손쉽게 더해줄 수 있는 방법입니다. 이것은 더 커뮤니티에 기여하고 속도를 높이는 데 도움이 되는 방법이기도 합니다.
        <strong>개발
          패턴은 말 그대로
          Quasar를 가장 확장성 있고 강력한 프레임워크</strong>(- 사용자의 상상력과 혁신으로 이루어진)<strong>를 만들기 위한 포문을 열어줍니다.</strong>
      </p>
      <Title arrow>RTL 완벽 지원</Title>
      <p>Quasar의 컴포넌트들과 개발자가 작성한 코드 모두에 RTL(오른쪽에서 왼쪽으로)을 지원합니다. 개발자가 작성한 웹사이트/앱 CSS 코드는 RTL 언어팩을 사용하는 경우 자동으로 RTL로
        변환됩니다.
      </p>
      <Title arrow>기존 프로젝트를 점진적으로 마이그레이션</Title>
      <p>Quasar는 UMD(Unified Module Definition) 버전을 제공합니다. 이는 개발자가 CSS 및 JS, HTML 태그를 기존 프로젝트에 추가하고 사용할 준비가 되었음을 의미합니다.
        따로
        빌드 단계가 필요하지 않습니다.
      </p>
      <Title arrow>재사용 가능성이 아닌 기능에 집중</Title>
      <p>개발자는 Quasar CLI를 사용한 최고 수준의 프로젝트 초기화를 통해 손쉽게 시작해 볼 수 있습니다. 짧은 시간에 아이디어를 실물로 표현할 수 있습니다. 다시 말해 Quasar가 무거운 작업을
        대신
        처리하므로
        재사용 가능성이 아닌 기능에만 집중하면 됩니다.
      </p>
      <Title arrow>테스트 & 검사 자동화</Title>
      <p>Quasar 프로젝트는 단위 및 종단 테스트 자동화뿐 아니라 제품 품질 증대 및 보안 검사 도구 제품군을 추가할 수 있습니다. 이 모든 것들은 웹사이트/앱이 최고의 품질이 가능하도록 해줍니다.
      </p>
      <Title arrow>끊임없이 성장하는 커뮤니티</Title>
      <p>개발자가 해결할 수 없는 문제가 발생하면
        <Link href="https://forum.quasar.dev/">Quasar 포럼</Link>이나
        <Link href="https://chat.quasar.dev/">디스코드 대화 서버</Link>를 방문할 수 있습니다.
        커뮤니티는 언제나 도움이 될
        것입니다.
        <Link href="https://twitter.quasar.dev/">트위터</Link>를 팔로우 해서 새 버전 및 기능에 대한
        업데이트
        소식을 받을 수도 있습니다.
        <Link href="https://donate.quasar.dev/">후원자/광고주</Link>로서 특별한 서비스를 받을 수도 있고 Quasar는 앞으로도 여러분들과 관계를 유지하며
        돕도록
        하겠습니다.
      </p>
      <Title arrow>광범위한 플랫폼 지원</Title>
      <p>구글 크롬, 파이어폭스, 엣지, 사파리, 오페라, iOS, 안드로이드, 맥OS, 리눅스, 윈도우
      </p>
      <Title arrow>Quasar 언어 팩</Title>
      <p>Quasar는 기본적으로 40개 이상의 언어팩을 갖추고 있습니다. 또한 언어팩이 누락된 경우 추가하는 데 5분밖에 걸리지 않습니다.
      </p>
      <Title arrow>훌륭한 문서화</Title>
      <p>마지막으로 개발자가 Quasar를 빠르게 선택할 수 있도록 방대하고, 부풀리지 않은 완벽한 문서를 작성하는 데 초점을 두어 많은 시간을 공들였다는 것을 말하고 싶습니다. 문서를 보고 혼란이 생기지
        않도록
        특별히 노력을 기울였습니다.
      </p>
    </section>
    <section id="started" data-name="1분 안에 시작하세요">
      <Title sub>1분 안에 시작하세요</Title>
      <p>이 말을 하고
        <Link :to="{ name: 'start' }">시작</Link> 하고 싶네요! 1분 이내에 웹사이트나 앱을 시작할 수
        있습니다.
      </p>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="처음으로" prev :to="{ name: 'main' }" />
        <Move label="시작하기" next :to="{ name: 'start' }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.q-video {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .05) !important;
  background-color: rgba(0, 0, 0, .02);
  position: relative;
}

.q-video::after {
  content: '영상';
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, .2);
}

.body--dark .q-video {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, .05) !important;
  background-color: rgba(255, 255, 255, .02);
}

.body--dark .q-video::after {
  color: rgba(255, 255, 255, .2);
}
</style>