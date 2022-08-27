<script setup>
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>CSS Positioning 클래스</Title>
      <p>
        DOM 요소를 쉽게 포지셔닝할 수 있도록 Quasar에서 제공하는 CSS 클래스가 있습니다:
      </p>
      <Info advice color="teal-4">
        <p>CSS의 위치 관련 속성들을 쉽게 사용할 수 있도록 Quasar에서 미리 정의해 놓은 헬퍼 클래스입니다. 디테일한 위치 설정 시에는 사용하기 어렵지만 요소의 간단한 위치를 위치시킬 때 유용하게
          사용됩니다.</p>
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
            <td><code>fullscreen</code></td>
            <td>
              전체 창 영역을 고정 위치로 덮어씌움
            </td>
          </tr>
          <tr>
            <td><code>fixed</code></td>
            <td>
              <code>top</code>, <code>left</code>, <code>right</code>, <code>bottom</code> 속성 없이
              <code>고정</code> 위치 설정
            </td>
          </tr>
          <tr>
            <td><code>fixed-center</code></td>
            <td>창 가운데에
              <code>고정</code> 위치 설정
            </td>
          </tr>
          <tr>
            <td><code>absolute</code></td>
            <td>
              <code>top</code>, <code>left</code>, <code>right</code>, <code>bottom</code>속성 없이
              <code>절대</code> 위치 설정
            </td>
          </tr>
          <tr>
            <td><code>absolute-center</code></td>
            <td>창 가운데에
              <code>절대</code> 위치 설정
            </td>
          </tr>
          <tr>
            <td><code>fixed-top</code>, <code>absolute-top</code></td>
            <td>
              화면 상단에 고정 또는 절대 위치
            </td>
          </tr>
          <tr>
            <td><code>fixed-right</code>, <code>absolute-right</code></td>
            <td>
              화면 우측에 고정 또는 절대 위치
            </td>
          </tr>
          <tr>
            <td><code>fixed-bottom</code>, <code>absolute-bottom</code></td>
            <td>
              화면 하단에 고정 또는 절대 위치
            </td>
          </tr>
          <tr>
            <td><code>fixed-left</code>, <code>absolute-left</code></td>
            <td>
              화면 좌측에 고정 또는 절대 위치
            </td>
          </tr>
          <tr>
            <td><code>fixed-top-left</code>, <code>absolute-top-left</code></td>
            <td>
              화면 좌측 상단에 고정 또는 절대 위치
            </td>
          </tr>
          <tr>
            <td><code>fixed-top-right</code>, <code>absolute-top-right</code></td>
            <td>
              화면 우측 상단에 고정 또는 절대 위치
            </td>
          </tr>
          <tr>
            <td><code>fixed-bottom-left</code>, <code>absolute-bottom-left</code></td>
            <td>
              화면 좌측 하단에 고정 또는 절대 위치
            </td>
          </tr>
          <tr>
            <td><code>fixed-bottom-right</code>, <code>absolute-bottom-right</code></td>
            <td>
              화면 우측 하단에 고정 또는 절대 위치
            </td>
          </tr>
          <tr>
            <td><code>fixed-full</code>, <code>absolute-full</code></td>
            <td>
              모든 화먄 가장자리까지 고정 또는 절대 위치
            </td>
          </tr>
          <tr>
            <td><code>relative-position</code></td>
            <td>
              <code>상대</code> 위치 설정
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section id="align" data-name="정렬">
      <Title sub>정렬</Title>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md">
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>float-left</code>
            </td>
            <td>좌측으로 정렬</td>
          </tr>
          <tr>
            <td>
              <code>float-right</code>
            </td>
            <td>우측으로 정렬</td>
          </tr>
          <tr>
            <td>
              <code>on-left</code>
            </td>
            <td>우측에 작은 마진을 설정; 일반적으로 인접한 다른 요소 옆에 아이콘 요소를 위치시킬 때 사용</td>
          </tr>
          <tr>
            <td>
              <code>on-right</code>
            </td>
            <td>좌측에 작은 마진을 설정; 일반적으로 인접한 다른 요소 옆에 아이콘 요소를 위치시킬 때 사용</td>
          </tr>
        </tbody>
      </q-markup-table>
      <Note>
        <p><b>팁</b></p>
        <p><em>float-left</em> 또는 <em>float-right</em>를 사용하는 대신 Quasar Grid 시스템을 익히고 사용하는 것을 추천합니다.</p>
      </Note>
      <p>수직 정렬:</p>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:400px">
        <thead>
          <tr>
            <th>클래스 명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>vertical-top</code></td>
            <td><code>상단</code>으로 CSS 수직 정렬 설정</td>
          </tr>
          <tr>
            <td><code>vertical-middle</code></td>
            <td><code>가운데</code>로 CSS 수직 정렬 설정</td>
          </tr>
          <tr>
            <td><code>vertical-bottom</code></td>
            <td><code>하단</code>으로 CSS 수직 정렬 설정</td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="Visibility" prev :to="{ name: 'visible' }" />
        <Move label="기타 CSS 헬퍼 클래스" next :to="{ name: 'helper' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>