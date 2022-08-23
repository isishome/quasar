<script setup>
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Body 클래스</Title>
      <p>
        Quasar는 document.body에 매우 유용한 몇 가지 헬퍼 클래스를 제공하며 다음과 같은 이점을 얻을 수 있습니다:
      </p>
      <Info advice color="teal-4">
        <p>클라이언트의 플랫폼과 관련해 <b>Body 클래스</b>를 사용하는 것 보다 <b>플랫폼 감지 헬퍼</b>를 사용하는 것이 성능에 유리합니다.</p>
      </Info>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md">
        <colgroup>
          <col style="min-width:140px" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>이름</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>body-dark</td>
            <td>
              <Link :to="{ name: 'dark' }">다크 모드</Link>일 때
            </td>
          </tr>
          <tr>
            <td>body-light</td>
            <td>
              <Link :to="{ name: 'dark' }">다크 모드</Link>가 아닐 때
            </td>
          </tr>
          <tr>
            <td>desktop</td>
            <td>클라이언트가 데스크톱 환경일 때</td>
          </tr>
          <tr>
            <td>mobile</td>
            <td>클라이언트가 모바일 디바이스 환경일 때</td>
          </tr>
          <tr>
            <td>touch</td>
            <td>클라이언트가 터치가 가능한 경우</td>
          </tr>
          <tr>
            <td>no-touch</td>
            <td>클라이언트가 터치가 불가능한 경우</td>
          </tr>
          <tr>
            <td>platform-android</td>
            <td>클라이언트가 안드로이드 디바이스 환경일 때</td>
          </tr>
          <tr>
            <td>platform-ios</td>
            <td>클라이언트가 iOS 디바이스 환경일 때</td>
          </tr>
          <tr>
            <td>native-mobile</td>
            <td>클라이언트가 Quasar CLI의 Cordova 앱 또는 Capacitor 앱 환경일 때</td>
          </tr>
          <tr>
            <td>electron</td>
            <td>클라이언트가 Quasar CLI의 Eletron 앱 환경일 때</td>
          </tr>
          <tr>
            <td>bex</td>
            <td>앱이 브러우저 확장기능에서 실행중일 때</td>
          </tr>
          <tr>
            <td>within-iframe</td>
            <td>앱이 iframe에서 실행중일 때</td>
          </tr>
          <tr>
            <td><code>screen--*</code></td>
            <td>Body 클래스가 활성화된 경우(전용), 현재 창의 중단점을 알려줍니다.(<code>screen--xs</code>, <code>screen--sm</code>, ...,
              <code>screen--xl</code>)
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="중단점" prev :to="{ name: 'break' }" />
        <Move label="Visibility" next :to="{ name: 'visible' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>