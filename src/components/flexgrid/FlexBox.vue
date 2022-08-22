<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const Practice = defineAsyncComponent(() => import('@/components/block/Practice.vue'))
</script>
<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Flexbox</Title>
      <p>
        Quasar는
        <Link href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</Link>의 도움으로 손쉽게 UI를 구축하는 데 도움이 되는
        많은 CSS 클래스를 제공합니다. 여러 가지 옵션을 사용하여 row와 column을 다룬다고 생각하면 됩니다.
      </p>
      <p>
        Flexbox(Quasar Flex CSS 클래스를 기반) 모듈은 컨테이너 안의 아이템 (크기를 알 수 없거나 동적으로 변하는 아이템도 포함) 사이에 공간을 분배, 정렬하는 더 효율적인 방법을
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
        Quasar Flex CSS 클래스는 컨테이너(부모 요소) 또는 컨테이너 안의 아이템(자식 요소)에게 적용됩니다.
      </p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-container.svg" width="300" />
        <img src="@/assets/images/flexgrid/flexbox-items.svg" width="300" />
      </p>
      <Info advice color="teal-4">
        <p>
          Quasar에서 가장 많이 사용하게 될 클래스입니다.
          Quasar는 Flex Grid로 시작해 Flex Grid로 끝난다고 해도 과언이 아니죠.
          그만큼 잘 익혀두면 두고두고 유용하게 사용할 수 있습니다.
        </p>
      </Info>
    </section>
    <section id="container" data-name="컨테이너 관리">
      <Title sub>컨테이너 관리</Title>
    </section>
    <section id="direction" data-name="방향 설정" sub>
      <Title minor>방향 설정</Title>
      <p>다음 CSS 클래스는 아이템(자식 요소)에 사용되는 클래스(다음 섹션에서 설명)에 영향을 주기 때문에 필수로 사용돼야 합니다.</p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-direction.svg" width="319" />
      </p>
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
              <code>row</code>
            </td>
            <td>아이템(자식 요소)을 수평 방향으로 배치합니다</td>
          </tr>
          <tr>
            <td>
              <code>row inline</code>
            </td>
            <td>아이템(자식 요소)을 수평 방향으로 인라인 배치합니다</td>
          </tr>
          <tr>
            <td>
              <code>column</code>
            </td>
            <td>아이템(자식 요소)을 수직 방향으로 배치합니다</td>
          </tr>
          <tr>
            <td>
              <code>column inline</code>
            </td>
            <td>아이템(자식 요소)을 수직 방향으로 인라인 배치합니다</td>
          </tr>
          <tr>
            <td>
              <code>row reverse</code>
            </td>
            <td>아이템(자식 요소)을 수평 역방향으로 배치합니다</td>
          </tr>
          <tr>
            <td>
              <code>column reverse</code>
            </td>
            <td>아이템(자식 요소)을 수직 역방향으로 배치합니다</td>
          </tr>
        </tbody>
      </q-markup-table>
      <p><em>inline</em>클래스는 아이템(자식 요소)에 영향을 주는 것이 아닌 컨테이너(부모)에게 영향을 주는 요소로 CSS <b>display</b> 속성에서
        사용하는 <em>inline</em>값과 동일한 효과를 준다고 생각하면 됩니다.
      </p>
      <p>다음은 방향 설정 관련 헬퍼 클래스의 예제입니다:</p>
      <Practice :options="[
        { label: 'row', value: 'row' },
        { label: 'column', value: 'column' },
        { label: 'row reverse', value: 'row-reverse' },
        { label: 'column reverse', value: 'column-reverse' },
      ]">
        <template #row>
          <Code language="html">
            <textarea readonly>
&#60;div class="row"&#62;
  &#60;div v-for="i in 5" :key="i"&#62;&#123;&#123; i &#125;&#125;&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row">
              <div v-for="i in 5" :key="i">{{ i }}</div>
            </div>
          </Info>
        </template>
        <template #column>
          <Code language="html">
           <textarea readonly>
&#60;div class="column"&#62;
  &#60;div v-for="i in 5" :key="i"&#62;&#123;&#123; i &#125;&#125;&#60;/div&#62;
&#60;/div&#62;
          </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column">
              <div v-for="i in 5" :key="i">{{ i }}</div>
            </div>
          </Info>
        </template>
        <template #row-reverse>
          <Code language="html">
            <textarea readonly>
&#60;div class="row reverse"&#62;
  &#60;div v-for="i in 5" :key="i"&#62;&#123;&#123; i &#125;&#125;&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row reverse">
              <div v-for="i in 5" :key="i">{{ i }}</div>
            </div>
          </Info>
        </template>
        <template #column-reverse>
          <Code language="html">
            <textarea readonly>
&#60;div class="column reverse"&#62;
  &#60;div v-for="i in 5" :key="i"&#62;&#123;&#123; i &#125;&#125;&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column reverse">
              <div v-for="i in 5" :key="i">{{ i }}</div>
            </div>
          </Info>
        </template>
      </Practice>
    </section>
    <section id="default-wrap" data-name="기본 래핑" sub>
      <Title minor>기본 래핑</Title>
      <p>기본적으로 모든 row와 column은 내용을 래핑 합니다</p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-wrap.svg" width="319" />
      </p>
      <p>명시적으로 래핑 하지 않고 모든 내용을 한 줄에 넣으려면 <code>no-wrap</code> CSS 헬퍼 클래스를 사용하세요.</p>
      <p>역순으로 래핑 하고 싶다면 <code>reverse-wrap</code>을 사용할 수 있습니다.</p>
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
              <code>wrap</code>
            </td>
            <td>필요한 경우 래핑 합니다 (기본으로 활성화 되어 있으므로 따로 설정하지 않아도 됩니다)</td>
          </tr>
          <tr>
            <td>
              <code>no-wrap</code>
            </td>
            <td>필요한 경우 래핑을 해제합니다</td>
          </tr>
          <tr>
            <td>
              <code>reverse-wrap</code>
            </td>
            <td>필요한 경우 역순으로 래핑 합니다.</td>
          </tr>
        </tbody>
      </q-markup-table>
      <p>다음은 래핑 관련 헬퍼 클래스의 예제입니다:</p>
      <Practice :options="[
        { label: 'wrap', value: 'wrap' },
        { label: 'no-wrap', value: 'no-wrap' },
        { label: 'reverse-wrap', value: 'reverse-wrap' }
      ]">
        <template #wrap>
          <Code language="html">
            <textarea readonly>
&#60;div class="row wrap"&#62;
  &#60;div class="col-6"&#62;1&#60;/div&#62;
  &#60;div class="col-6"&#62;2&#60;/div&#62;
  &#60;div class="col-6"&#62;3&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row wrap">
              <div class="col-6">1</div>
              <div class="col-6">2</div>
              <div class="col-6">3</div>
            </div>
          </Info>
        </template>
        <template #no-wrap>
          <Code language="html">
           <textarea readonly>
&#60;div class="row no-wrap"&#62;
  &#60;div class="col-6"&#62;1&#60;/div&#62;
  &#60;div class="col-6"&#62;2&#60;/div&#62;
  &#60;div class="col-6"&#62;3&#60;/div&#62;
&#60;/div&#62;
          </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row no-wrap">
              <div class="col-6">1</div>
              <div class="col-6">2</div>
              <div class="col-6">3</div>
            </div>
          </Info>
        </template>
        <template #reverse-wrap>
          <Code language="html">
            <textarea readonly>
&#60;div class="row reverse-wrap"&#62;
  &#60;div class="col-6"&#62;1&#60;/div&#62;
  &#60;div class="col-6"&#62;2&#60;/div&#62;
  &#60;div class="col-6"&#62;3&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row reverse-wrap">
              <div class="col-6">1</div>
              <div class="col-6">2</div>
              <div class="col-6">3</div>
            </div>
          </Info>
        </template>
      </Practice>
    </section>
    <section id="align" data-name="정렬" sub>
      <Title minor>정렬</Title>
      <p><strong>주축을 따라 수평으로 정렬하려면</strong> 아래 클래스를 사용하세요. 아이템(자식 요소)이 해당 라인의 유연성과 관계없이 최대 크기에 도달 한 경우 여유 공간을 분배할 수
        있도록
        도와줍니다.
        또한 해당 라인을 넘어가는
        아이템(자식 요소)의 정렬을 어느 정도 제어할 수 있습니다.</p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-main-axis-align---2.svg" width="319" />
      </p>
      <p>다음은 수평 정렬 관련 헬퍼 클래스의 예제입니다:</p>
      <Practice :options="[
        { label: 'justify-start', value: 'justify-start' },
        { label: 'justify-end', value: 'justify-end' },
        { label: 'justify-center', value: 'justify-center' },
        { label: 'justify-between', value: 'justify-between' },
        { label: 'justify-around', value: 'justify-around' },
        { label: 'justify-evenly', value: 'justify-evenly' }
      ]">
        <template #justify-start>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-start"&#62;
  &#60;div class="col-2"&#62;1&#60;/div&#62;
  &#60;div class="col-2"&#62;2&#60;/div&#62;
  &#60;div class="col-2"&#62;3&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-start">
              <div class="col-2">1</div>
              <div class="col-2">2</div>
              <div class="col-2">3</div>
            </div>
          </Info>
        </template>
        <template #justify-end>
          <Code language="html">
           <textarea readonly>
&#60;div class="row justify-end"&#62;
  &#60;div class="col-2"&#62;1&#60;/div&#62;
  &#60;div class="col-2"&#62;2&#60;/div&#62;
  &#60;div class="col-2"&#62;3&#60;/div&#62;
&#60;/div&#62;
          </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-end">
              <div class="col-2">1</div>
              <div class="col-2">2</div>
              <div class="col-2">3</div>
            </div>
          </Info>
        </template>
        <template #justify-center>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-center"&#62;
  &#60;div class="col-2"&#62;1&#60;/div&#62;
  &#60;div class="col-2"&#62;2&#60;/div&#62;
  &#60;div class="col-2"&#62;3&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-center">
              <div class="col-2">1</div>
              <div class="col-2">2</div>
              <div class="col-2">3</div>
            </div>
          </Info>
        </template>
        <template #justify-between>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-center"&#62;
  &#60;div class="col-2"&#62;1&#60;/div&#62;
  &#60;div class="col-2"&#62;2&#60;/div&#62;
  &#60;div class="col-2"&#62;3&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-between">
              <div class="col-2">1</div>
              <div class="col-2">2</div>
              <div class="col-2">3</div>
            </div>
          </Info>
        </template>
        <template #justify-around>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-center"&#62;
  &#60;div class="col-2"&#62;1&#60;/div&#62;
  &#60;div class="col-2"&#62;2&#60;/div&#62;
  &#60;div class="col-2"&#62;3&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-around">
              <div class="col-2">1</div>
              <div class="col-2">2</div>
              <div class="col-2">3</div>
            </div>
          </Info>
        </template>
        <template #justify-evenly>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-center"&#62;
  &#60;div class="col-2"&#62;1&#60;/div&#62;
  &#60;div class="col-2"&#62;2&#60;/div&#62;
  &#60;div class="col-2"&#62;3&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-evenly">
              <div class="col-2">1</div>
              <div class="col-2">2</div>
              <div class="col-2">3</div>
            </div>
          </Info>
        </template>
      </Practice>
      <p><strong>주축에 수직으로 정렬하려면</strong> 아래 클래스를 사용하세요. 이 클래스는 현재 줄의 교차 축을 따라 아이템(자식 요소)이 배치되는 방식에 대한 기본 동작을 정의합니다. 교차되는
        축에
        대한 수평-* 버전(주축에 수직)이라고 생각하면 됩니다.</p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-cross-axis-align.svg" width="319" />
      </p>
      <p>다음은 수직 정렬 관련 헬퍼 클래스의 예제입니다:</p>
      <Practice :options="[
        { label: 'items-start', value: 'items-start' },
        { label: 'items-end', value: 'items-end' },
        { label: 'items-center', value: 'items-center' },
        { label: 'items-stretch', value: 'items-stretch' },
        { label: 'items-baseline', value: 'items-baseline' }
      ]">
        <template #items-start>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-between items-start" style="height:100px"&#62;
  &#60;div class="col-2 q-py-sm"&#62;1&#60;/div&#62;
  &#60;div class="col-2 q-py-lg"&#62;2&#60;/div&#62;
  &#60;div class="col-2 q-py-xs"&#62;3&#60;/div&#62;
  &#60;div class="col-2 q-py-sm"&#62;4&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-between items-start" style="height:100px">
              <div class="col-2 q-py-sm">1</div>
              <div class="col-2 q-py-lg">2</div>
              <div class="col-2 q-py-xs">3</div>
              <div class="col-2 q-py-sm">4</div>
            </div>
          </Info>
        </template>
        <template #items-end>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-between items-end" style="height:100px"&#62;
  &#60;div class="col-2 q-py-sm"&#62;1&#60;/div&#62;
  &#60;div class="col-2 q-py-lg"&#62;2&#60;/div&#62;
  &#60;div class="col-2 q-py-xs"&#62;3&#60;/div&#62;
  &#60;div class="col-2 q-py-sm"&#62;4&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-between items-end" style="height:100px">
              <div class="col-2 q-py-sm">1</div>
              <div class="col-2 q-py-lg">2</div>
              <div class="col-2 q-py-xs">3</div>
              <div class="col-2 q-py-sm">4</div>
            </div>
          </Info>
        </template>
        <template #items-center>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-between items-center" style="height:100px"&#62;
  &#60;div class="col-2 q-py-sm"&#62;1&#60;/div&#62;
  &#60;div class="col-2 q-py-lg"&#62;2&#60;/div&#62;
  &#60;div class="col-2 q-py-xs"&#62;3&#60;/div&#62;
  &#60;div class="col-2 q-py-sm"&#62;4&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-between items-center" style="height:100px">
              <div class="col-2 q-py-sm">1</div>
              <div class="col-2 q-py-lg">2</div>
              <div class="col-2 q-py-xs">3</div>
              <div class="col-2 q-py-sm">4</div>
            </div>
          </Info>
        </template>
        <template #items-stretch>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-between items-stretch" style="height:100px"&#62;
  &#60;div class="col-2 q-py-sm"&#62;1&#60;/div&#62;
  &#60;div class="col-2 q-py-lg"&#62;2&#60;/div&#62;
  &#60;div class="col-2 q-py-xs"&#62;3&#60;/div&#62;
  &#60;div class="col-2 q-py-sm"&#62;4&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-between items-stretch" style="height:100px">
              <div class="col-2 q-py-sm">1</div>
              <div class="col-2 q-py-lg">2</div>
              <div class="col-2 q-py-xs">3</div>
              <div class="col-2 q-py-sm">4</div>
            </div>
          </Info>
        </template>
        <template #items-baseline>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-between items-baseline" style="height:100px"&#62;
  &#60;div class="col-2 q-py-sm"&#62;1&#60;/div&#62;
  &#60;div class="col-2 q-py-lg"&#62;2&#60;/div&#62;
  &#60;div class="col-2 q-py-xs"&#62;3&#60;/div&#62;
  &#60;div class="col-2 q-py-sm"&#62;4&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-between items-baseline" style="height:100px">
              <div class="col-2 q-py-sm">1</div>
              <div class="col-2 q-py-lg">2</div>
              <div class="col-2 q-py-xs">3</div>
              <div class="col-2 q-py-sm">4</div>
            </div>
          </Info>
        </template>
      </Practice>
      <Note color="green-13">
        <p><b>팁</b></p>
        <p><em>items-center</em> + <em>justify-center</em>와 효과가 같은 편리한 <em>flex-center</em> CSS 클래스도 있습니다.
          <em>flex</em>, <em>row</em> 또는
          <em>column</em>과
          함께 사용하세요.
        </p>
      </Note>
      <p>다음 클래스는 주축 안의 각 아이템(자식 요소)이 수평-* 정렬되는 방식과 유사하게 교차되는 축에 여유 공간이 있을 때 컨테이너(부모 요소) 라인을 정렬해 줍니다.</p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-content-align.svg" width="319" />
      </p>
      <p>다음은 래핑 된 아이템의 수직 정렬 관련 헬퍼 클래스의 예제입니다:</p>
      <Practice :options="[
        { label: 'content-start', value: 'content-start' },
        { label: 'content-end', value: 'content-end' },
        { label: 'content-center', value: 'content-center' },
        { label: 'content-stretch', value: 'content-stretch' },
        { label: 'content-between', value: 'content-between' },
        { label: 'content-around', value: 'content-around' }
      ]">
        <template #content-start>
          <Code language="html">
            <textarea readonly>
&#60;div class="row content-start q-gutter-xs" style="height:20rem"&#62;
  &#60;div class="col-1" v-for="i in 30" :key="i"&#62;1&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row content-start q-gutter-xs" style="height:20rem">
              <div class="col-1" v-for="i in 30" :key="i">1</div>
            </div>
          </Info>
        </template>
        <template #content-end>
          <Code language="html">
            <textarea readonly>
&#60;div class="row content-end q-gutter-xs" style="height:20rem"&#62;
  &#60;div class="col-1" v-for="i in 30" :key="i"&#62;1&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row content-end q-gutter-xs" style="height:20rem">
              <div class="col-1" v-for="i in 30" :key="i">1</div>
            </div>
          </Info>
        </template>
        <template #content-center>
          <Code language="html">
            <textarea readonly>
&#60;div class="row content-center q-gutter-xs" style="height:20rem"&#62;
  &#60;div class="col-1" v-for="i in 30" :key="i"&#62;1&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row content-center q-gutter-xs" style="height:20rem">
              <div class="col-1" v-for="i in 30" :key="i">1</div>
            </div>
          </Info>
        </template>
        <template #content-stretch>
          <Code language="html">
            <textarea readonly>
&#60;div class="row content-stretch q-gutter-xs" style="height:20rem"&#62;
  &#60;div class="col-1" v-for="i in 30" :key="i"&#62;1&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row content-stretch q-gutter-xs" style="height:20rem">
              <div class="col-1" v-for="i in 30" :key="i">1</div>
            </div>
          </Info>
        </template>
        <template #content-between>
          <Code language="html">
            <textarea readonly>
&#60;div class="row content-between q-gutter-xs" style="height:20rem"&#62;
  &#60;div class="col-1" v-for="i in 30" :key="i"&#62;1&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row content-between q-gutter-xs" style="height:20rem">
              <div class="col-1" v-for="i in 30" :key="i">1</div>
            </div>
          </Info>
        </template>
        <template #content-around>
          <Code language="html">
            <textarea readonly>
&#60;div class="row content-around q-gutter-xs" style="height:20rem"&#62;
  &#60;div class="col-1" v-for="i in 30" :key="i"&#62;1&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row content-around q-gutter-xs" style="height:20rem">
              <div class="col-1" v-for="i in 30" :key="i">1</div>
            </div>
          </Info>
        </template>
      </Practice>
    </section>
    <section id="children" data-name="아이템 관리">
      <Title sub>아이템 관리</Title>
    </section>
    <section id="distribute" data-name="크기 분배" sub>
      <Title minor>크기 분배</Title>
      <p>Quasar는 row에 포함된 아이템의 크기를 분배하기 위해 12 포인트 column 시스템을 사용합니다. 다음은 사용 가능한 CSS 헬퍼 클래스의 몇 가지 예입니다.</p>
      <Code language="html">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div class="col-8"&#62;2/3&#60;/div&#62;
  &#60;div class="col-2"&#62;1/6&#60;/div&#62;
  &#60;div class="col-auto"&#62;콘텐츠 및 사용 가능한 공간에 따라 자동 크기 조정&#60;/div&#62;
  &#60;div class="col"&#62;남아있는 사용 가능한 공간을 채움&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <div class="row">
          <div class="col-8">2/3</div>
          <div class="col-2">1/6</div>
          <div class="col-auto">콘텐츠 및 사용 가능한 공간에 따라 자동 크기 조정</div>
          <div class="col">남아있는 사용 가능한 공간을 채움</div>
        </div>
      </Info>
      <p>위 예를 보면 <code>col-8</code>은 8/12 = 2/3 = 66%이기 때문에 row 너비의 2/3를 채웁니다. 동시에 <code>col-2</code>는 1/6을
        차지합니다.(2/12
        = 1/6 ~
        16.67)</p>
      <p>CSS 헬퍼 클래스 <code>col-auto</code>는 셀이 렌더링 해야 하는 공간만 채우도록 합니다. 반면에 <code>col</code>은 필요한 경우 축소되기도 하면서 사용 가능한 모든
        공간을
        채우려고 합니다.</p>
      <p>CSS 헬퍼 클래스 <code>col-grow</code>는 셀이 렌더링에 필요한 최소한의 공간만 채우고 더 많은 공간을 사용할 수 있을 때 확장할 수 있습니다.</p>
      <p>CSS 헬퍼 클래스 <code>col-shrink</code>는 셀이 렌더링에 필요한 최대 공간으로 채우고 사용 가능한 공간이 충분하지 않을 때 축소할 수 있습니다.</p>
      <p>다음은 시각적 표현의 또 다른 예제입니다:</p>
      <Code language="html">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div class="col"&#62;1&#60;/div&#62;
  &#60;div class="col"&#62;1&#60;/div&#62;
  &#60;div class="col"&#62;1&#60;/div&#62;
  &#60;!--
    3개의 아이템(자식 요소)는 
    각 아이템에 `col-4`를 사용한 것과
    동일한 효과를 줍니다
  --&#62;
&#60;/div&#62;

&#60;div class="row"&#62;
  &#60;div class="col-3"&#62;1&#60;/div&#62;
  &#60;div class="col-6"&#62;2&#60;/div&#62;
  &#60;div class="col-3"&#62;1&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <div class="row">
          <div class="col">1</div>
          <div class="col">1</div>
          <div class="col">1</div>
        </div>
        <div class="row">
          <div class="col-3">1</div>
          <div class="col-6">2</div>
          <div class="col-3">1</div>
        </div>
      </Info>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-grow.svg" width="400" />
      </p>
      <p>셀을 오프셋하는것도 가능합니다. 예: <code>offset-4</code>는 공간의 1/3을 오프셋 합니다 (4/12 = 1/3 = 33%).</p>
    </section>
    <section id="wrap" data-name="래핑" sub>
      <Title minor>래핑</Title>
      <p>래핑은 Flex CSS 클래스를 이해하는 핵심 기능입니다. 각 row를 정확히 12포인트로 사용해야 하는 것은 아닙니다. 더 적거나 더 많이 사용할 수 있습니다.</p>
      <p>이를 통해 작은 화면에 row를 수직으로 쌓는 동시에 큰 화면에 row를 한줄로 표시할 수 있습니다.
        <Link :to="{ hash: '#reponsive' }">"반응형 디자인"</Link> 섹션을 읽어보세요.
      </p>
      <Code language="html">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div class="col-2"&#62;...&#60;/div&#62;

  &#60;!-- 2 + 6 &#60; 12, 그래서 뒤에 오는 요소는 같은 줄에 배치됩니다. --&#62;
  &#60;div class="col-6"&#62;...&#60;/div&#62;

  &#60;!-- 2 + 6 + 10 &#62; 12, 그래서 뒤에 오는 요소는 다음 줄로 줄 바꿈 됩니다. --&#62;
  &#60;div class="col-10"&#62;...&#60;/div&#62;

  &#60;!--
    10 + 3 &#62; 12, 그래서 뒤에 오는 요소는 다음 줄로 줄 바꿈 됩니다.
    현재 줄만 고려한다는 점에 유의하세요. 
    (col-10의 경우는 자체 라인으로 줄 바꿈 되었으므로)
  --&#62;
  &#60;div class="col-3"&#62;...&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <div class="row">
          <div class="col-2">...</div>
          <div class="col-6">...</div>
          <div class="col-10">...</div>
          <div class="col-3">...</div>
        </div>
      </Info>
      <Note color="grey-5">row는 기본적으로 래핑 됩니다. 이를 비활성화하려면 <code>no-wrap</code> CSS 헬퍼 클래스를 사용하세요. </Note>
    </section>
    <section id="self-align" data-name="자체 정렬" sub>
      <Title minor>자체 정렬</Title>
      <p><strong>아이템(자식 요소)은 부모 요소에 지정된 정렬을 재정의 할 수 있습니다</strong>. 이를 통해 개별 flex 아이템에 대해 정렬을 재정의할 수 있습니다. 사용 가능한
        값들(<code>self-start</code>,
        <code>self-center</code>, <code>self-baseline</code>, <code>self-end</code>, <code>self-stretch</code>)의
        이해를 돕기
        위해 "컨테이너(부모 요소) 관리"의 "정렬" 설명을 참조하세요.
      </p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-self.svg" width="319" />
      </p>
      <p>다음은 자체 정렬 관련 헬퍼 클래스의 예제입니다:</p>
      <Practice :options="[
        { label: 'self', value: 'self' }
      ]">
        <template #self>
          <Code language="html">
            <textarea readonly>
&#60;div class="row justify-between items-start" style="height:100px"&#62;
  &#60;div class="col-2 self-start q-py-sm"&#62;self-start&#60;/div&#62;
  &#60;div class="col-2 self-center q-py-lg"&#62;self-center&#60;/div&#62;
  &#60;div class="col-2 self-baseline q-py-md"&#62;self-baseline&#60;/div&#62;
  &#60;div class="col-2 self-end q-py-xs"&#62;self-end&#60;/div&#62;
  &#60;div class="col-2 self-stretch q-py-sm"&#62;self-stretch&#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="row justify-between items-start" style="height:100px">
              <div class="col-2 self-start q-py-sm">self-start</div>
              <div class="col-2 self-center q-py-lg">self-center</div>
              <div class="col-2 self-baseline q-py-md">self-baseline</div>
              <div class="col-2 self-end q-py-xs">self-end</div>
              <div class="col-2 self-stretch q-py-sm">self-stretch</div>
            </div>
            <div class=" q-mb-md"></div>
          </Info>
        </template>
      </Practice>
    </section>
    <section id="order" data-name="순서" sub>
      <Title minor>순서</Title>
      <p><code>order-first</code>와 <code>order-last</code> CSS 헬퍼 클래스를 사용하여 자식 요소의 <strong>순서를 설정할 수
          있습니다</strong>.</p>
      <p>기본적으로 flex 아이템들은 소스코드의 순서대로 배치됩니다. 그러나 order 속성은 flex 컨테이너에 나타나는 순서를 제어합니다. 더 세분화가 필요한
        경우<code>order</code>
        CSS 속성을 사용하고
        원하는 값을 할당합니다.</p>
      <p>예제:</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div style="order: 2" class=""&#62;두 번째 column&#60;/div&#62;
  &#60;div class="order-last"&#62;세 번째 column&#60;/div&#62;
  &#60;div class="order-first"&#62;첫 번째 column&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <div class="row">
          <div style="order: 2" class="">두 번째 column</div>
          <div class="order-last">세 번째 column</div>
          <div class="order-first">첫 번째 column</div>
        </div>
      </Info>
      <p>
        CSS <code>order</code> 속성의 작동 방식은 다음과 같습니다:
      </p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-order.svg" width="400" />
      </p>
    </section>
    <section id="reponsive" data-name="반응형 디자인">
      <Title sub>반응형 디자인</Title>
      <p>화면 너비에 따라 반응형 UI를 만들 수 있도록 도와주는 Quasar Flex CSS 클래스를 적용할 수 있습니다. 12포인트 grid는 부트스트랩에서 영감을 받아 만들어졌기 때문에 유사한 부분이
        많습니다.</p>
      <p>중단점 지정자는 더 큰 중단점 정의가 더 작은 정의를 재정의 하는 모바일 우선 접근 방식을 사용합니다.</p>
      <p>지금까지 우리가 배운 것은 창 너비에 관계없이 column 크기를 조정할 수 있는 있다는 것입니다. 반응형 UI를 만들려면 창 너비를 고려하면서 크기를 동적으로 변경해야 합니다. 먼저
        <code>col-*</code>, <code>offset-*</code> 및 <code>col-auto</code> 헬퍼 클래스 중간에 삽입할 수 있는 몇 가지 토큰에 대해 알아보겠습니다.(토큰은
        아래 표 참조)
      </p>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md">
        <thead>
          <tr>
            <th>토큰</th>
            <th>최소 창 너비</th>
            <th>설명 / 다른 큰 중단점에 의해 재정의되지 않고 적용될 때</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>xs</code>
            </td>
            <td>0px</td>
            <td>모든 창 너비 (중단점을 특정하지 않은 경우처럼)</td>
          </tr>
          <tr>
            <td>
              <code>sm</code>
            </td>
            <td>600px</td>
            <td>초소형 창 너비보다 클 때</td>
          </tr>
          <tr>
            <td>
              <code>md</code>
            </td>
            <td>1024px</td>
            <td>소형 창 너비보다 클 때</td>
          </tr>
          <tr>
            <td>
              <code>lg</code>
            </td>
            <td>1440px</td>
            <td>중형 창 너비보다 클 때</td>
          </tr>
          <tr>
            <td>
              <code>xl</code>
            </td>
            <td>1920px</td>
            <td>대형 창 너비보다 클 때</td>
          </tr>
        </tbody>
      </q-markup-table>
      <p>예: <code>col-md-7</code>, <code>offset-lg-3</code>, <code>col-xs-auto</code></p>
      <p>전체 예 : 3개의 아이템(자식 요소) 있는 row가 있다고 가정해 보겠습니다. 초소형 창에서는 아이템을 세로로 쌓아야 하고, 소형 창에서는 나란히 표시해야 하며(각각 너비가 동일함) 중형 창부터는
        모든 아이템을 한 줄에 표시해야 합니다:</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div class="col-xs-12 col-sm-6 col-md-4"&#62;
    col
  &#60;/div&#62;
  &#60;div class="col-xs-12 col-sm-6 col-md-4"&#62;
    col
  &#60;/div&#62;
  &#60;div class="col-xs-12 col-sm-6 col-md-4"&#62;
    col
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <p>창 크기를 변경하면서 확인해보세요</p>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4">
            col
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            col
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            col
          </div>
        </div>
      </Info>
      <p>위 예제에서 <code>col-xs-12</code> (12/12 = row 100%이므로 row가 내용을 기본적으로 줄 바꿈 하기 때문에 각 아이템은 컨테이너의 전체 너비를 사용하여 수직으로
        쌓이게
        됩니다), <code>col-sm-6</code>(6/12 = row의 50%) 및 <code>col-md-4</code>(4/12 = row의 33%)를 사용한 것에 주목하세요.</p>
      <p>앞에서 언급한 것처럼, row의 내용 줄 바꿈은 기본 설정값이므로 12개의(보다 큰 경우도) grid 포인트가 사용되면 내용은 다음 줄로 줄 바꿈 됩니다. 두 개의
        <code>&#60;div&#62;</code>에
        <code>col-8</code>을 사용한 경우 8 + 8 = 16이고 한 줄에 12개 포인트만 표시할 수 있기 때문에 아이템들은 쌓이게 됩니다.
      </p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;!--
    12개 이상의 grid 포인트를 함께 사용하므로,
    두번째 &#60;div&#62;는 다음 줄로 줄 바꿈 됩니다.
  --&#62;
  &#60;div class="col-8"&#62;col&#60;/div&#62;
  &#60;div class="col-8"&#62;col&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <div class="row">
          <div class="col-8">col</div>
          <div class="col-8">col</div>
        </div>
      </Info>
      <p>
        <Link href="https://quasar.dev/style/visibility#window-width-related">가시성</Link> 페이지에서 창 너비에 대한
        임곗값과
        이러한 토큰들(xs, sm, md, lg, xl)을 사용하여 DOM 요소를 숨기거나 표시합니다.
      </p>
    </section>
    <section id="addon" data-name="Flex 애드온">
      <Title sub>Flex 애드온</Title>
      <p>활성화되면(<code>quasar.config.js</code> &gt; <code>framework</code> &gt; <code>cssAddon: true</code>를 통해) 모든 flex(및
        디스플레이) 관련
        CSS 클래스에 대해 중단점 인식
        버전을 제공합니다.</p>
      <Note color="orange-4">
        <p class="text-subtitle1"><b>경고</b></p>
        <p>활성화할 때 CSS 사용 부분에 눈에 띄는 충돌이 있을 수 있으니 이점 유의하여 꼭 필요한 경우에만 사용하세요. </p>
      </Note>
      <Code language="css" class="q-mb-md">
        <textarea readonly>
.flex-&#60;bp&#62;-(block|inline)
.(row|column|flex)-&#60;bp&#62;(|-inline-&#60;bp&#62;)
.reverse-&#60;bp&#62;
.(wrap|no-wrap|reverse-wrap)-&#60;bp&#62;
.order-&#60;bp&#62;-(first|last|none)
.justify-&#60;bp&#62;-(start|end|center|between|around|evenly)
.items-&#60;bp&#62;-(start|end|center|baseline|stretch)
.content-&#60;bp&#62;-(start|end|center|between|around)
.self-&#60;bp&#62;-(start|end|center|baseline|stretch)
.flex-&#60;bp&#62;-center
.q-gutter-&#60;bp&#62;(|-x|-y)-(xs|sm|md|lg|xl)
.(col|offset)-&#60;bp&#62;-(|0..12)
        </textarea>
      </Code>
      <p>패딩과 마진 간격 모두에 적용되는 반응형 클래스도 있습니다:</p>
      <Code language="css" class="q-mb-md">
        <textarea readonly>
.q-(p|m)(t|r|b|l|a|x|y)-&#60;bp&#62;-(none|auto|xs|sm|md|lg|xl)
        </textarea>
      </Code>
      <p>예: <code>row-md</code>, <code>items-lg-end</code>,
        <code>q-pa-xs</code>, <code>q-pa-sm-sm</code>, <code>q-px-md-lg</code>, <code>q-py-md-md</code>
      </p>
    </section>
    <section id="playground" data-name="Flex Playground">
      <Title sub>Flex Playground</Title>
      <p>Flex Playground를 사용하여 인터렉티브 한 Flex의 동작을 자세히 알아보세요.</p>
      <q-btn push label="Flex Playground" icon-right="open_in_new" color="primary" type="a"
        href="https://quasar.dev/layout/grid/flex-playground" target="_blank" rel="noopener noreferrer" />
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="시작하기" prev :to="{ name: 'start' }" />
        <Move label="Grid Row 소개" next :to="{ name: 'gridrow' }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
th {
  font-weight: 700;
}

th {
  word-break: normal !important;
}

.body--dark img {
  filter: hue-rotate(180deg) invert(100%);
}
</style>