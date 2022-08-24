<script setup>
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>CSS Visibility</Title>
      <p>
        일반적인 기능을 위해 별도의 설치없이 바로 사용 가능한 몇가지 CSS 클래스가 있습니다.
      </p>
      <Info advice color="teal-4">
        <p><code>disabled</code>나 <code>hidden</code>, <code>ellipsis</code>, <code>ellipsis-*-lines</code> 등 작업 시
          유용하게 사용할 수 있는 클래스입니다</p>
      </Info>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md">
        <colgroup>
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>disabled</code></td>
            <td>
              커서가 '비활성'임을 알리기 위해 변경되고 불투명도가 낮은 값으로 설정됩니다.
            </td>
          </tr>
          <tr>
            <td><code>hidden</code></td>
            <td>
              <code>display: none</code>으로 설정됩니다. <code>hidden</code> 클래스는 요소가 표시되지 않고 레이아웃에서 공간을 차지하지 않음을 의미합니다(아래와
              비교).
            </td>
          </tr>
          <tr>
            <td><code>invisible</code></td>
            <td>
              <code>visibility: hidden</code>으로 설정됩니다. <code>invisible</code> 클래스는 요소가 표시되지 않지만 레이아웃에서 공간을 차지함을 의미합니다(위와
              비교).
            </td>
          </tr>
          <tr>
            <td><code>transparent</code></td>
            <td>
              배경색을 투명하게 합니다.
            </td>
          </tr>
          <tr>
            <td><code>dimmed</code></td>
            <td>
              요소 위에 어두운 투명 오버레이를 적용합니다. <strong>:after</strong> 가상요소가 이미 있는 요소에는 사용하지 마세요.
            </td>
          </tr>
          <tr>
            <td><code>light-dimmed</code></td>
            <td>
              요소 위에 하얀 투명 오버레이를 적용합니다. <strong>:after</strong> 가상요소가 이미 있는 요소에는 사용하지 마세요.
            </td>
          </tr>
          <tr>
            <td><code>ellipsis</code></td>
            <td>
              사용 가능한 공간이 충분하지 않을 때 텍스트를 잘라내고 줄임표를 표시합니다.
            </td>
          </tr>
          <tr>
            <td><code>ellipsis-2-lines</code></td>
            <td>
              두 줄에 걸쳐 사용 가능한 공간이 충분하지 않을 때 텍스트를 잘라내고 줄임표를 표시합니다.(웹킷 브라우저에서만 작동)
            </td>
          </tr>
          <tr>
            <td><code>ellipsis-3-lines</code></td>
            <td>
              세 줄에 걸쳐 사용 가능한 공간이 충분하지 않을 때 텍스트를 잘라내고 줄임표를 표시합니다.(웹킷 브라우저에서만 작동)
            </td>
          </tr>
          <tr>
            <td><code>z-top</code></td>
            <td>
              요소를 다른 컴포넌트 위에 배치하지만 팝오버, 툴팁, 알림창 보다 뒤에 배치합니다.
            </td>
          </tr>
          <tr>
            <td><code>z-max</code></td>
            <td>
              다른 컴포넌트(Drawer, 모달, 알림창, 헤더/푸터 레이아웃) 위에 요소를 배치합니다.
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section id="width" data-name="창 너비 관련">
      <Title sub>창 너비 관련</Title>
      <p>먼저, 중단점이 무엇인지 정의해 보겠습니다:</p>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:500px">
        <thead>
          <tr>
            <th>창 너비</th>
            <th>이름</th>
            <th>최소 너비 임계값(픽셀)</th>
            <th>최대 너비 임계값(픽셀)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>초소형</td>
            <td><code>xs</code></td>
            <td>0px</td>
            <td>599.99px</td>
          </tr>
          <tr>
            <td>소형</td>
            <td><code>sm</code></td>
            <td>600px</td>
            <td>1023.99px</td>
          </tr>
          <tr>
            <td>중형</td>
            <td><code>md</code></td>
            <td>1024px</td>
            <td>1439.99px</td>
          </tr>
          <tr>
            <td>대형</td>
            <td><code>lg</code></td>
            <td>1440px</td>
            <td>1919.99px</td>
          </tr>
          <tr>
            <td>초대형</td>
            <td><code>xl</code></td>
            <td>1920px</td>
            <td>무한대</td>
          </tr>
        </tbody>
      </q-markup-table>
      <p>이제 창 너비 관련 CSS 클래스로 넘어갑니다.</p>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:300px">
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>xs</code>
            </td>
            <td>초소형 창에서만 표시됨</td>
          </tr>
          <tr>
            <td>
              <code>sm</code>
            </td>
            <td>소형 창에서만 표시됨</td>
          </tr>
          <tr>
            <td>
              <code>md</code>
            </td>
            <td>중형 창에서만 표시됨</td>
          </tr>
          <tr>
            <td>
              <code>lg</code>
            </td>
            <td>대형 창에서만 표시됨</td>
          </tr>
          <tr>
            <td>
              <code>xl</code>
            </td>
            <td>초대형 창에서만 표시됨</td>
          </tr>
        </tbody>
      </q-markup-table>
      <p>
        <strong>특정 너비보다 작은 경우</strong>에만 일부 DOM 요소 또는 컴포넌트를 표시할 수도 있습니다. <strong>특정 너비보다 큰 경우</strong>도 동일합니다. “보다
        작은”과 “보다 큰” 에서 파생된 <code>lt-</code> 또는 <code>gt-</code> 접두사를 붙이기만 하면 됩니다.
        예:<code>lt-md</code> (xs 및 sm에만 표시), <code>lt-xl</code> (xs, sm, md 및 lg 창에만 표시), <code>gt-md</code> (중간보다 큰 창에
        표시:lg 및 xl).
      </p>
      <Note>
        <p><b>팁</b></p>
        <p>
          Visibility 클래스를 inline-block의 <em>inline</em> 클래스와 결합할 수 있습니다.<br />
          예: <em>&#60;span class="gt-sm inline"&#62;...&#60;/span&#62;</em>
        </p>
      </Note>
      <Note>
        <p><b>팁</b></p>
        <p>예를 들어 자바스크립트 속성을 기준으로 보임과 숨김을 처리하려면
          <Link :to="{ name: 'screen' }">스크린 플러그인</Link>을 사용하면 됩니다.
        </p>
      </Note>
    </section>
    <section id="platform" data-name="플랫폼 관련">
      <Title sub>플랫폼 관련</Title>
      <p>다음에서만 볼 수 있음:</p>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:580px">
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>desktop-only</code>
            </td>
            <td>데스크톱 환경에만 표시</td>
          </tr>
          <tr>
            <td>
              <code>mobile-only</code>
            </td>
            <td>모바일 환경에만 표시</td>
          </tr>
          <tr>
            <td>
              <code>native-mobile-only</code>
            </td>
            <td>Cordova/Capacitor 환경에만 표시</td>
          </tr>
          <tr>
            <td>
              <code>cordova-only</code>
            </td>
            <td>앱 내부의 Cordova 환경에만 표시</td>
          </tr>
          <tr>
            <td>
              <code>capacitor-only</code>
            </td>
            <td>앱 내부의 Capacitor 환경에만 표시</td>
          </tr>
          <tr>
            <td>
              <code>electron-only</code>
            </td>
            <td>앱 내부의 Electron 환경에만 표시</td>
          </tr>
          <tr>
            <td>
              <code>touch-only</code>
            </td>
            <td>터치가 가능한 플랫폼 환경에만 표시</td>
          </tr>
          <tr>
            <td>
              <code>platform-ios-only</code>
            </td>
            <td>iOS 플랫폼 환경에만 표시</td>
          </tr>
          <tr>
            <td>
              <code>platform-android-only</code>
            </td>
            <td>안드로이드 플랫폼 환경에만 표시</td>
          </tr>
          <tr>
            <td>
              <code>within-iframe-only</code>
            </td>
            <td>전체 웹 사이트가 IFRAME 태그 아래에 있는 경우에만 표시</td>
          </tr>
        </tbody>
      </q-markup-table>
      <p>숨기기:</p>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:580px">
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>desktop-hide</code>
            </td>
            <td>데스크톱 환경에서 숨기기</td>
          </tr>
          <tr>
            <td>
              <code>mobile-hide</code>
            </td>
            <td>모바일 환경에서 숨기기</td>
          </tr>
          <tr>
            <td>
              <code>native-mobile-hide</code>
            </td>
            <td>Cordova/Capacitor 환경에서 숨기기</td>
          </tr>
          <tr>
            <td>
              <code>cordova-hide</code>
            </td>
            <td>앱 내부의 Cordova 환경에서 숨기기</td>
          </tr>
          <tr>
            <td>
              <code>capacitor-hide</code>
            </td>
            <td>앱 내부의 Capacitor 환경에서 숨기기</td>
          </tr>
          <tr>
            <td>
              <code>electron-hide</code>
            </td>
            <td>앱 내부의 Electron 환경에서 숨기기</td>
          </tr>
          <tr>
            <td>
              <code>touch-hide</code>
            </td>
            <td>터치가 가능한 플랫폼 환경에서 숨기기</td>
          </tr>
          <tr>
            <td>
              <code>platform-ios-hide</code>
            </td>
            <td>iOS 플랫폼 환경에서 숨기기</td>
          </tr>
          <tr>
            <td>
              <code>platform-android-hide</code>
            </td>
            <td>안드로이드 플랫폼 환경에서 숨기기</td>
          </tr>
          <tr>
            <td>
              <code>within-iframe-hide</code>
            </td>
            <td>전체 웹 사이트가 IFRAME 태그 아래에 있는 경우에만 숨기기</td>
          </tr>
        </tbody>
      </q-markup-table>
      <Note>
        <p><b>팁</b></p>
        <p>필요에 따라
          <Link :to="{ name: 'platform' }">플랫폼 감지</Link> 페이지를 확인하여 자바스크립트를 사용하여 동일한 효과를 얻을 수 있는 방법을 확인할 수 있습니다. 이 방법은
          DOM 요소나 컴포넌트를
          렌더링 하지 않아도 됩니다. 렌더링 프로세스가 비용이 많이 드는 경우에 유용합니다.
        </p>
      </Note>
    </section>
    <section id="orientation" data-name="방향 관련">
      <Title sub>방향 관련</Title>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:500px">
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>orientation-portrait</code>
            </td>
            <td>화면 방향이 수직인 경우에만 표시</td>
          </tr>
          <tr>
            <td>
              <code>orientation-landscape</code>
            </td>
            <td>화면 방향이 수평인 경우에만 표시</td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section id="print" data-name="프린트 관련">
      <Title sub>프린트 관련</Title>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:500px">
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>print-only</code>
            </td>
            <td>print media인 경우에만 표시 - screen media에는 숨김</td>
          </tr>
          <tr>
            <td>
              <code>print-hide</code>
            </td>
            <td>screen media인 경우에만 표시 - print media에는 숨김</td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="Body 클래스" prev :to="{ name: 'body' }" />
        <Move label="Positioning" next :to="{ name: 'position' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>