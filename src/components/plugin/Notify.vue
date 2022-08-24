<script setup>
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>중단점</Title>
      <p>
        Quasar는 다음과 같은 CSS 중단점을 사용합니다:
      </p>
      <Info advice color="teal-4">
        <p><strong>간격에서 사용하는 너비와 다른 개념</strong>입니다. 웹사이트/앱을 이용하는 디바이스의 수평 너비를 계산합니다.</p>
      </Info>
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
      <p>더 자세한 사용방법은,
        <Link :to="{ name: 'visible' }">Visibility</Link> 페이지를 참고하세요.
      </p>
      <p>
        “반응형 디자인” 섹션에서
        <Link :to="{ name: 'flexbox', hash: '#reponsive' }">Flexbox 소개</Link>를 살펴보는 것도 좋습니다.
      </p>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="간격" prev :to="{ name: 'spacing' }" />
        <Move label="Body 클래스" next :to="{ name: 'body' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>