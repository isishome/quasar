<script setup>
import { defineAsyncComponent, ref } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/Code.vue'))
const practice1 = ref('row')
</script>
<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Flexbox</Title>
      <p>
        Quasar는
        <Link href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</Link>의 도움으로 손쉽게 UI를 구축하는 데 도움이 되는
        많은 CSS 클래스를 제공합니다. 여러 가지 옵션을 사용하여 행과 열을 다룬다고 생각하면 됩니다.
      </p>
      <p>
        Flexbox(Quasar Flex CSS 클래스를 기반) 모듈은 컨테이너 안의 아이템(크기를 알 수 없거나 동적으로 변하는 아이템도 포함) 사이에 공간을 분배, 정렬하는 더 효율적인 방법을
        제공하는
        것을 목표로 하고 있습니다.(따라서 "flex(유연한)"라는 단어를 사용)
      </p>
      <Note>
        <p><strong>팁</strong></p>
        <p>이 페이지는 Quasar Flex CSS 클래스의 기본 이론을 다루고 Grid Row, Grid Column 및 Grid Gutter 페이지를 더 심도 있게 학습할 수 있도록 도와줄 것입니다.
        </p>
      </Note>
    </section>
    <section id="key" data-name="핵심 개념">
      <Title sub>핵심 개념</Title>
      <p>
        Quasar Flex CSS 클래스는 컨테이너(부모) 또는 컨테이너 안의 아이템들(자식)에게 적용됩니다.
      </p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-container.svg" width="300" />
        <img src="@/assets/images/flexgrid/flexbox-items.svg" width="300" />
      </p>
    </section>
    <section id="container" data-name="컨테이너(부모) 관리">
      <Title sub>컨테이너(부모) 관리</Title>
      <Title minor>방향 설정</Title>
      <Tip knowledge color="teal-4">
        <p>
          Quasar에서 가장 많이 사용하게 될 클래스입니다.
          Quasar는 Flex Grid로 시작해 Flex Grid로 끝난다고 해도 과언이 아닙니다.
          그만큼 잘 익혀두면 두고두고 유용하게 사용될 것입니다.
        </p>
        <p>
        </p>
      </Tip>
      <p>다음 CSS 클래스는 아이템(자식)에 사용되는 클래스(다음 섹션에서 설명)에 영향을 주기 때문에 필수로 사용돼야 합니다.</p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-direction.svg" width="319" />
      </p>
      <div class="row q-mb-lg">
        <q-markup-table flat bordered wrap-cells class="text-left col-12" style="max-width:500px">
          <thead>
            <tr>
              <th>클래스 명</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>row</code>
              </td>
              <td>아이템(자식 요소)을 가로 방향으로 배치한다</td>
            </tr>
            <tr>
              <td>
                <code>row inline</code>
              </td>
              <td>아이템(자식 요소)을 가로 방향으로 인라인 배치한다</td>
            </tr>
            <tr>
              <td>
                <code>column</code>
              </td>
              <td>아이템(자식 요소)을 세로 방향으로 배치한다</td>
            </tr>
            <tr>
              <td>
                <code>column inline</code>
              </td>
              <td>아이템(자식 요소)을 세로 방향으로 인라인 배치한다</td>
            </tr>
            <tr>
              <td>
                <code>row reverse</code>
              </td>
              <td>아이템(자식 요소)을 가로 역방향으로 배치한다</td>
            </tr>
            <tr>
              <td>
                <code>column reverse</code>
              </td>
              <td>아이템(자식 요소)을 세로 역방향으로 배치한다</td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
      <p><em>inline</em>클래스는 아이템(자식 요소)에 영향을 주는 것이 아닌 컨테이너(부모)에게 영향을 주는 요소로 CSS <b>display</b> 속성에서 사용하는
        <em>inline</em>값과 같이 화면에 배치된다고 생각하면 됩니다.
      </p>
      <q-separator color="transparent" />
      <Title arrow>연습 하기</Title>
      <q-option-group v-model="practice1" inline class="og" :options="[
        { label: 'row', value: 'row' },
        { label: 'column', value: 'column' },
        { label: 'row reverse', value: 'row-reverse' },
        { label: 'column reverse', value: 'column-reverse' },
      ]" />
      <q-tab-panels v-model="practice1">
        <q-tab-panel name="row">
          <Code language="html">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div v-for="i in 5" :key="i"&#62;&#123;&#123; i &#125;&#125;&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
          <Tip label="결과">
            <div class="row">
              <div v-for="i in 5" :key="i">{{ i }}</div>
            </div>
            <div class="q-mb-md"></div>
          </Tip>
        </q-tab-panel>
        <q-tab-panel name="column">
          <Code language="html">
        <textarea readonly>
&#60;div class="column"&#62;
  &#60;div v-for="i in 5" :key="i"&#62;&#123;&#123; i &#125;&#125;&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
          <Tip label="결과">
            <div class="column">
              <div v-for="i in 5" :key="i">{{ i }}</div>
            </div>
            <div class="q-mb-md"></div>
          </Tip>
        </q-tab-panel>
        <q-tab-panel name="row-reverse">
          <Code language="html">
        <textarea readonly>
&#60;div class="row reverse"&#62;
  &#60;div v-for="i in 5" :key="i"&#62;&#123;&#123; i &#125;&#125;&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
          <Tip label="결과">
            <div class="row reverse">
              <div v-for="i in 5" :key="i">{{ i }}</div>
            </div>
            <div class="q-mb-md"></div>
          </Tip>
        </q-tab-panel>
        <q-tab-panel name="column-reverse">
          <Code language="html">
        <textarea readonly>
&#60;div class="column reverse"&#62;
  &#60;div v-for="i in 5" :key="i"&#62;&#123;&#123; i &#125;&#125;&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
          <Tip label="결과">
            <div class="column reverse">
              <div v-for="i in 5" :key="i">{{ i }}</div>
            </div>
            <div class="q-mb-md"></div>
          </Tip>
        </q-tab-panel>
      </q-tab-panels>
    </section>
    <Title minor>기본 줄 바꿈</Title>
    <p>기본적으로 모든 row와 column은 내용을 래핑(줄 바꿈) 합니다</p>
    <p>
      <img src="@/assets/images/flexgrid/flexbox-wrap.svg" width="319" />
    </p>
    <p>명시적으로 줄 바꿈을 하지 않고 모든 내용을 한 줄에 넣으려면 <code>no-wrap</code> CSS 헬퍼 클래스를 사용하세요.</p>
    <p>역순으로 줄 바꿈이 하고 싶다면 <code>reverse-wrap</code>을 사용할 수 있습니다.</p>
    <q-markup-table flat bordered wrap-cells class="text-left col-12" style="max-width:500px">
      <thead>
        <tr>
          <th>클래스 명</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>wrap</code>
          </td>
          <td>필요한 경우 줄 바꿈 합니다 (기본으로 활성화 되어 있으므로 따로 설정하지 않아도 됩니다)</td>
        </tr>
        <tr>
          <td>
            <code>no-wrap</code>
          </td>
          <td>필요한 경우 줄 바꿈을 해제합니다</td>
        </tr>
        <tr>
          <td>
            <code>reverse-wrap</code>
          </td>
          <td>필요한 경우 역순으로 줄 바꿈 합니다.</td>
        </tr>
      </tbody>
    </q-markup-table>
    <Title minor>정렬</Title>
    <p><strong>주축을 따라 수평으로 정렬하려면</strong> 아래 클래스를 사용하세요. 아이템(자식 요소)이 해당 라인의 유연성과 관계없이 최대 크기에 도달 한 경우 여유 공간을 분배할 수 있도록
      도와줍니다.
      또한 해당 라인을 넘어가는
      아이템(자식 요소)의 정렬을 어느 정도 제어할 수 있습니다.</p>
    <p>
      <img src="@/assets/images/flexgrid/flexbox-main-axis-align---2.svg" width="319" />
    </p>
    <p><strong>주축에 수직으로 정렬하려면</strong> 아래 클래스를 사용하세요. 이것은 현재 줄의 교차 축을 따라 아이템(자식 요소)이 배치되는 방식에 대한 기본 동작을 정의합니다. 교차되는 축에
      대한 수평-* 버전(주축에 수직)이라고 생각하면 됩니다.</p>
    <p>
      <img src="@/assets/images/flexgrid/flexbox-cross-axis-align.svg" width="319" />
    </p>
  </div>
</template>
<style scoped>
th {
  font-weight: 700;
}

th {
  word-break: normal !important;
}

code {
  color: var(--q-primary);
  border: dotted 1px var(--q-primary);
  padding: 2px 5px;
  border-radius: 4px;
  text-decoration: dashed;
  white-space: nowrap;
}

.q-tab-panels {
  background-color: transparent;
}

.q-tab-panel {
  padding: 0;
  overflow: hidden;
}

@media (max-width: 480px) {
  .q-tab-panels {
    margin-left: -16px;
    margin-right: -16px;
  }

  .q-tab-panel:deep(.outer) {
    margin-left: 16px;
    margin-right: 16px;
  }
}

.og:deep(.q-radio__inner) {
  font-size: 2em;
  height: 1em;
}

.body--dark img {
  filter: grayscale(1) invert(100%);
}
</style>