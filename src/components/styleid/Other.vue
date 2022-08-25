<script setup>
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>그 외 CSS 헬퍼 클래스</Title>
      <p>
        Vue 템플릿을 작성하는 동안 사용할 수 있는 많은 CSS 클래스가 있습니다. VueModel 및 템플릿의 복잡성을 완화하는데 매우 유용합니다.
      </p>
      <p>아래 목록은 완벽하지 않습니다. 타이포그래피, Visibility,
        <Link href="https://quasar.dev/style/shadows">Shadows</Link>, Positioning과 같은 다른 CSS 문서 페이지도 함께 참고하세요.
      </p>
    </section>
    <section id="mouse" data-name="마우스 관련">
      <Title sub>마우스 관련</Title>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:630px">
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
            <td><code>non-selectable</code></td>
            <td>
              사용자는 텍스트와 함께 DOM 노드를 선택할 수 없음
            </td>
          </tr>
          <tr>
            <td><code>no-pointer-events</code></td>
            <td>
              DOM 요소는 클릭, 호버 등의 마우스 이벤트의 대상이 되지 않음.
            </td>
          </tr>
          <tr>
            <td><code>all-pointer-events</code></td>
            <td>
              <code>no-pointer-events</code>와 반대
            </td>
          </tr>
          <tr>
            <td><code>cursor-pointer</code></td>
            <td>
              클릭 가능한 링크처럼 보이도록 DOM 요소의 마우스 포인터 변경
            </td>
          </tr>
          <tr>
            <td><code>cursor-not-allowed</code></td>
            <td>
              작업이 수행되지 않을 것처럼 보이도록 DOM 요소의 마우스 포인터 변경
            </td>
          </tr>
          <tr>
            <td><code>cursor-inherit</code></td>
            <td>
              DOM 요소의 마우스 포인터를 부모 옵션과 동일하게 보이도록 변경
            </td>
          </tr>
          <tr>
            <td><code>cursor-inherit</code></td>
            <td>
              마우스 커서가 렌더링되지 않음
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section id="scroll" data-name="스크롤 관련">
      <Title sub>스크롤 관련</Title>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:540px">
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>scroll</code>
            </td>
            <td>모든 플랫폼에서 스크롤이 잘 동작하도록 CSS 조정을 적용</td>
          </tr>
          <tr>
            <td>
              <code>no-scroll</code>
            </td>
            <td>DOM 노드에서 스크롤바를 숨깁</td>
          </tr>
          <tr>
            <td>
              <code>overflow-auto</code>
            </td>
            <td>오버플로를 자동으로 설정</td>
          </tr>
          <tr>
            <td>
              <code>overflow-hidden</code>
            </td>
            <td>오버플로를 숨김으로 설정</td>
          </tr>
          <tr>
            <td>
              <code>overflow-hidden-y</code>
            </td>
            <td>오버플로를 y축에서 숨김으로 설정</td>
          </tr>
          <tr>
            <td>
              <code>hide-scrollbar</code>
            </td>
            <td>스크롤바 제거</td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section id="size" data-name="크기 관련">
      <Title sub>크기 관련</Title>
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
              <code>fit</code>
            </td>
            <td>너비 및 높이가 100%로 설정됨</td>
          </tr>
          <tr>
            <td>
              <code>full-height</code>
            </td>
            <td>높이가 100%로 설정됨</td>
          </tr>
          <tr>
            <td>
              <code>full-width</code>
            </td>
            <td>너비가 100%로 설정됨</td>
          </tr>
          <tr>
            <td>
              <code>window-height</code>
            </td>
            <td>높이가 100vh로 설정되며 상단 및 하단 마진 0으로 설정</td>
          </tr>
          <tr>
            <td>
              <code>window-width</code>
            </td>
            <td>너비가 100vw로 설정되며 좌측 및 우측 마진 0으로 설정</td>
          </tr>
          <tr>
            <td>
              <code>block</code>
            </td>
            <td><code>display</code>속성을 <code>block</code>으로 설정</td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section id="orientation" data-name="방향 관련">
      <Title sub>방향 관련</Title>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:350px">
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>rotate-45</code>
            </td>
            <td>45도 회전</td>
          </tr>
          <tr>
            <td>
              <code>rotate-90</code>
            </td>
            <td>90도 회전</td>
          </tr>
          <tr>
            <td>
              <code>rotate-135</code>
            </td>
            <td>135도 회전</td>
          </tr>
          <tr>
            <td>
              <code>rotate-180</code>
            </td>
            <td>180도 회전</td>
          </tr>
          <tr>
            <td>
              <code>rotate-225</code>
            </td>
            <td>225도 회전</td>
          </tr>
          <tr>
            <td>
              <code>rotate-270</code>
            </td>
            <td>270도 회전</td>
          </tr>
          <tr>
            <td>
              <code>rotate-315</code>
            </td>
            <td>315도 회전</td>
          </tr>
          <tr>
            <td>
              <code>flip-horizontal</code>
            </td>
            <td>DOM 요소를 수평으로 뒤집기</td>
          </tr>
          <tr>
            <td>
              <code>flip-vertical</code>
            </td>
            <td>DOM 요소를 수직으로 뒤집기</td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section id="border" data-name="테두리 관련">
      <Title sub>테두리 관련</Title>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:430px">
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>no-border</code>
            </td>
            <td>테두리 제거</td>
          </tr>
          <tr>
            <td>
              <code>no-border-radius</code>
            </td>
            <td>테두리 가질 수 있는 모든 반경 제거</td>
          </tr>
          <tr>
            <td>
              <code>no-box-shadow</code>
            </td>
            <td>적용된 box-shadow 제거</td>
          </tr>
          <tr>
            <td>
              <code>no-outline</code>
            </td>
            <td>테두리에 적용된 윤곽선 제거</td>
          </tr>
          <tr>
            <td>
              <code>rounded-borders</code>
            </td>
            <td>일반 테두리 반경 적용</td>
          </tr>
          <tr>
            <td>
              <code>border-radius-inherit</code>
            </td>
            <td>부모 요소에서 테두리 반경 상속</td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="Positioning" prev :to="{ name: 'position' }" />
        <Move label="Cookies" next :to="{ name: 'cookies' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>