<script setup>
import { defineAsyncComponent, shallowReadonly } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const sType = shallowReadonly([{ value: 'p', label: '패딩' }, { value: 'm', label: '마진' }])
const sDirection = shallowReadonly([{ value: 't', label: '상단' }, { value: 'r', label: '우측' }, { value: 'b', label: '하단' }, { value: 'l', label: '좌측' }, { value: 'a', label: '전체' }, { value: 'x', label: '좌우측' }, { value: 'y', label: '상하단' }])
const sWidth = shallowReadonly([{ value: 'none', label: '' }, { value: 'xs', label: '초소형' }, { value: 'sm', label: '소형' }, { value: 'md', label: '중형' }, { value: 'lg', label: '대형' }, { value: 'xl', label: '초대형' }, { value: 'auto', label: '' }])
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>CSS 간격 클래스</Title>
      <p>
        Quasar는 DOM 요소 또는 컴포넌트의 간격을 지정하는 데 도움이 되는 CSS 클래스를 제공합니다. 모든 옵션에는 <code>q-</code>가 접두사로 붙은 다음 유형(T), 방향(D),
        너비(S)로 분류되어 연결됩니다. 가능한 모든 CSS 클래스는 아래 순열 표를 참고하세요.
      </p>
      <Info advice color="teal-4">
        <p><em>Flex Grid</em> 만큼이나 자주 사용되는 Quasar에서 제공하는 스타일 클래스입니다. 유형, 방향, 너비 조합만 알아두면 필요한 부분에 손쉽게 간격 설정이
          가능합니다. <strong>꼭 기억해두세요!</strong></p>
      </Info>
      <Code class="q-mb-lg" language="">
        <textarea readonly>
q-[p|m][t|r|b|l|a|x|y]-[none|auto|xs|sm|md|lg|xl]
    T       D                   S

T - 유형
  - values: p (패딩), m (마진)

D - 방향
  - values:
      t (상단), r (우측), b (하단), l (좌측),
      a (전체방향), x (좌우측), y (상하단)

S - 너비
  - values:
      none,
      auto (특정 마진에만 해당: q-ml-*, q-mr-*, q-mx-*),
      xs (특소형),
      sm (소형),
      md (중형),
      lg (대형),
      xl (특대형)
        </textarea>
      </Code>
    </section>
    <section id="example" data-name="예제">
      <Title sub>예제</Title>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- 모든 방향의 소형 패딩 --&#62;
&#60;div class="q-pa-sm"&#62;...&#60;/div&#62;

&#60;!-- 상단 중형 마진, 우측 소형 마진 --&#62;
&#60;q-card class="q-mt-md q-mr-sm"&#62;...&#60;/q-card&#62;
        </textarea>
      </Code>
      <p>기본 다크 모드 페이지 배경색을 재정의 하려는 경우:</p>
      <Code class="q-mb-lg" language="css">
        <textarea readonly>
body.body--dark &#123;
  background: #000
&#125;
        </textarea>
      </Code>
    </section>
    <section id="addon" data-name="Flex 애드온">
      <Title sub>Flex 애드온</Title>
      <p><code>main.js</code> &gt; <code>app.use(Quasar)</code> &gt; <code>cssAddon: true</code>를 통해 활성화되면 모든 간격 관련 CSS
        클래스에 대해 중단점 인식 버전을 제공합니다.</p>
      <Note color="grey-6">
        <p>활성화 시 CSS가 사용된 부분에 눈에 띄는 결함이 발생할 수 있으니 이점 유의하여 꼭 필요한 경우에만 사용하세요.</p>
      </Note>
      <Code class="q-mb-lg" language="">
        <textarea readonly>
.q-(p|m)(t|r|b|l|a|x|y)-&#60;bp&#62;-(none|auto|xs|sm|md|lg|xl)
        </textarea>
      </Code>
      <p>예: <code>q-pa-xs-md</code> <code>q-pa-sm-sm</code> <code>q-px-md-lg</code> <code>q-py-md-md</code></p>
    </section>
    <section id="permutations" data-name="순열표">
      <Title sub>순열 표</Title>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md" style="max-width:500px">
        <thead>
          <tr>
            <th>접두사</th>
            <th>유형</th>
            <th>방향</th>
            <th>너비</th>
            <th>예제</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="t in sType" :key="t.value">
            <template v-for="d in sDirection" :key="d.value">
              <tr v-for="w in sWidth" :key="w.value">
                <td><code>q-</code></td>
                <td><code>{{ t.value }}</code> ({{ t.label }})</td>
                <td><code>{{ d.value }}</code> ({{ d.label }})</td>
                <td><code>{{ w.value }}</code>{{ w.label ? ` (${w.label})` : '' }}</td>
                <td><code>{{ `q-${t.value}${d.value}-${w.value}` }}</code></td>
              </tr>
            </template>
          </template>
        </tbody>
      </q-markup-table>
      <Note>
        <p>
          <Link :to="{ name: 'flexbox', hash: '#addon' }">Flex 애드온</Link>에 대한 자세한 내용을 참고하세요.
        </p>
      </Note>
    </section>
    <section id="other" data-name="기타">
      <Title sub>기타</Title>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md">
        <thead>
          <tr>
            <th>클래스명</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>no-margin</code></td>
            <td>적용된 마진을 제거합니다</td>
          </tr>
          <tr>
            <td><code>no-padding</code></td>
            <td>적용된 패딩을 제거합니다</td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="다크 모드" prev :to="{ name: 'darkmode' }" />
        <Move label="중단점" next :to="{ name: 'break' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>