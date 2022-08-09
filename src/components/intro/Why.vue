<script setup>

</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <div class="text-h4 text-primary text-weight-bold q-py-lg">
        왜 퀘이사인가?
      </div>
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
    <section id="what" data-name="퀘이사란?">
      <div class="text-h5 text-primary text-weight-bold q-mt-lg q-py-sm">
        퀘이사란?
      </div>
      <q-separator />
      <p class="q-mt-md">Quasar(<span class="text-primary">/ˈkweɪ.zɑɹ/</span>로 발음됨)는 Vue.js 기반 MIT 라이선스 오픈 소스 프레임워크로, 웹
        개발자는 퀘이사를 사용해 다양한 유형의 반응형++
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
        퀘이사 모토: <strong>한 번의 코드 작성</strong>으로 웹사이트, 모바일 앱과(또는) Electron 앱으로 <strong>동시에 배포하는 것</strong>입니다.
        네, 모든 것들을 하나의 코드 베이스로, 최신 버전의 CLI와 최적의 예제 및 매우 빠른 퀘이사 웹 컴포넌트를 사용해 신속하게 앱을 개발하도록 도와줍니다.
      </p>
      <p>
        퀘이사를 사용할 때 Hammer.js, Moment.js 또는 Bootstrap과 같은 무거운 라이브러리가 필요하지 않습니다. 작은 설치 공간만으로 이런 기능들을 모두
        포함하고 있습니다.
      </p>
    </section>
    <section id="got" data-name="또 뭐가 있을까요?">
      <div class="text-h5 text-primary text-weight-bold q-mt-lg q-py-sm">
        또 뭐가 있을까요?
      </div>
      <q-separator />
      <p class="q-mt-md">기본적으로 제공되는 단순함과 강력한 기능으로 CLI를 포함해 퀘이사는 개발을 더 쉽게 할 수 있도록 많은 기능들을 포함하고 있습니다.
      </p>
      <div class="note">
        <p><strong>생각할 거리</strong></p>
        <p>퀘이사는 미래를 내다보고 있으며 자체적으로 높고 현대적인 기준을 세우고 있습니다. 그리고 웹 개발의 진전을 위해 현재의 틀에서 벗어나야 합니다. 그렇지 않으면, cgi-bin / perl을
          계속해서
          사용해야 할지 모릅니다. 왜냐하면 개발자들에게 그것은 오랫동안 익숙한 것이었기 때문입니다. 그러나 대부분의 개발자가 오랫동안 그것에 익숙해졌다는 것이 최고의 솔루션이나 "분명한" 솔루션을 의미하는
          것은 아니며, 퀘이사가 높은 품질의 작업에 대한 최적의 경로나 심지어 돈이 되지 않는다고 믿는다 해도 그 선택을 바꾸지 않을 것입니다.</p>
        <i>우리가 퀘이사로 달성하고자 하는 것은 전체적인 웹 개발 기준을 높이는 것입니다. 앞으로 전진하세요. 그리고 진화하세요. 생각을 바꾸세요. 더 나은 대안이 있을 때 지적하세요.</i>

      </div>
      <p class="text-caption">
        아래는 퀘이사의 유용한 부분과 특징을 일부 나열한 것입니다.
      </p>
      <div class="text-h6 text-primary text-weight-bold q-mt-lg q-py-sm row items-center q-gutter-x-xs">
        <q-icon name="keyboard_double_arrow_right" />
        <div>신뢰할 수 있는 소스코드 하나로 모든 플랫폼을 동시에 한 번에</div>
      </div>
      <p>신뢰할 수 있는 소스코드 하나로 모든 플랫폼을 동시에 한 번에 : 반응형 데스크톱/모바일 웹사이트(SPA, SSR + SPA 클라이언트 테이크 오버, SSR + PWA 클라이언트 테이크 오버),
        PWAs (프로그레시브 웹 앱), 모바일 앱(네이티브 같은) 및 멀티 플랫폼 데스크톱 앱(Electron 사용)</p>
      <div class="text-h6 text-primary text-weight-bold q-mt-lg q-py-sm row items-center q-gutter-x-xs">
        <q-icon name="keyboard_double_arrow_right" />
        <div>빠르고 응답성이 뛰어난 최고 수준의 웹 컴포넌트 세트</div>
      </div>
      <p>퀘이사에는 거의 모든 웹 개발에 필요한 컴포넌트가 있습니다. 각 퀘이사 컴포넌트들은 사용자에게 최상의 경험을 제공하기 위해 세심하게 제작되었습니다. 퀘이사는 <strong>성능과 응답성을 염두에
          설계</strong>되었기 때문에
        퀘이사 사용에 따른 오버헤드를 찾아보기 어렵습니다. 이런 성능과 좋은 디자인이 여러분에게 특별한 자부심을 줄 것입니다.</p>
      <div class="text-h6 text-primary text-weight-bold q-mt-lg q-py-sm row items-center q-gutter-x-xs">
        <q-icon name="keyboard_double_arrow_right" />
        <div>최적의 예제를 기본적으로 포함</div>
      </div>
      <p>또한 퀘이사는 개발자들이 최적의 예제를 따라 할 수 있도록 만들어졌습니다. 이를 위해 퀘이사는 <strong>특별한 설정 없이</strong> 바로 사용 가능한 훌륭한 기능들로 채워져있습니다.</p>
    </section>
  </div>
</template>
<style scoped>
p {
  word-break: keep-all;
}
</style>