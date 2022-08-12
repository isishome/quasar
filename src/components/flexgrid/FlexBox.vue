<script setup>
import { defineAsyncComponent, ref } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/Code.vue'))
const Practice = defineAsyncComponent(() => import('@/components/block/Practice.vue'))
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
      <Title sub>컨테이너(부모 요소) 관리</Title>
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
          <Tip label="결과">
            <div class="row">
              <div v-for="i in 5" :key="i">{{ i }}</div>
            </div>
            <div class="q-mb-md"></div>
          </Tip>
        </template>
        <template #column>
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
        </template>
        <template #row-reverse>
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
        </template>
        <template #column-reverse>
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
        </template>
      </Practice>
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
      <p><strong>주축을 따라 수평으로 정렬하려면</strong> 아래 클래스를 사용하세요. 아이템(자식 요소)이 해당 라인의 유연성과 관계없이 최대 크기에 도달 한 경우 여유 공간을 분배할 수
        있도록
        도와줍니다.
        또한 해당 라인을 넘어가는
        아이템(자식 요소)의 정렬을 어느 정도 제어할 수 있습니다.</p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-main-axis-align---2.svg" width="319" />
      </p>
      <p><strong>주축에 수직으로 정렬하려면</strong> 아래 클래스를 사용하세요. 이 클래스는 현재 줄의 교차 축을 따라 아이템(자식 요소)이 배치되는 방식에 대한 기본 동작을 정의합니다. 교차되는
        축에
        대한 수평-* 버전(주축에 수직)이라고 생각하면 됩니다.</p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-cross-axis-align.svg" width="319" />
      </p>
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
    </section>
    <section id="children" data-name="아이템(자식 요소) 관리">
      <Title sub>아이템(자식 요소) 관리</Title>
      <Title minor>사이즈 분배</Title>
      <p>Quasar는 row에 포함된 자식 요소의 크기를 분배하기 위해 12 포인트 column 시스템을 사용합니다. 다음은 사용 가능한 CSS 헬퍼 클래스의 몇 가지 예입니다.</p>
      <Code language="html">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div class="col-8 bg-red-2"&#62;two thirds&#60;/div&#62;
  &#60;div class="col-2 bg-orange-2"&#62;one sixth&#60;/div&#62;
  &#60;div class="col-auto bg-green-2"&#62;auto size based on content and available space&#60;/div&#62;
  &#60;div class="col bg-blue-2"&#62;fills remaining available space&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Tip label="결과">
        <div class="row">
          <div class="col-8 bg-red-2">two thirds</div>
          <div class="col-2 bg-orange-2">one sixth</div>
          <div class="col-auto bg-green-2">auto size based on content and available space</div>
          <div class="col bg-blue-2">fills remaining available space</div>
        </div>
        <div class="q-mb-md"></div>
      </Tip>
      <p>위 예를 보면 <code>col-8</code>은 8/12 = 2/3 = 66%이기 때문에 row 너비의 2/3를 채웁니다. 동시에 <code>col-2</code>는 1/6을 차지합니다.(2/12
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
      <p>
        <img src="@/assets/images/flexgrid/flexbox-grow.svg" width="400" />
      </p>
      <p>셀을 오프셋하는것도 가능합니다. 예: <code>offset-4</code>는 공간의 1/3을 오프셋 합니다.(4/12 = 1/3 = 33%)</p>
      <Title minor>줄 바꿈</Title>
      <p>줄 바꿈은 Flex CSS 클래스를 이해하는 핵심 기능입니다. 각 row를 정확히 12포인트로 사용해야 하는 것은 아닙니다. 더 적거나 더 많이 사용할 수 있습니다.</p>
      <p>이를 통해 작은 화면에 row를 수직으로 쌓는 동시에 큰 화면에 row를 한줄로 표시할 수 있습니다. "반응형 디자인" 섹션을 읽어보세요.</p>
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
      <Note color="grey-5">row는 기본적으로 줄 바꿈 됩니다. 이를 비활성화하려면 <code>no-wrap</code> CSS 헬퍼 클래스를 사용하세요. </Note>
      <Title minor>자체 정렬</Title>
      <p><strong>아이템(자식 요소)은 부모 요소에 지정된 정렬을 재정의 할 수 있습니다</strong>. 이를 통해 개별 flex 아이템에 대해 정렬을 재정의할 수 있습니다. 사용 가능한
        값들(<code>self-start</code>,
        <code>self-center</code>, <code>self-baseline</code>, <code>self-end</code>, <code>self-stretch</code>)의 이해를 돕기
        위해 "컨테이너(부모 요소) 관리"의 "정렬" 설명을 참조하세요.
      </p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-self.svg" width="319" />
      </p>
      <Title minor>순서</Title>
      <p><code>order-first</code>와 <code>order-last</code> CSS 헬퍼 클래스를 사용하여 자식 요소의 <strong>순서를 설정할 수 있습니다</strong>.</p>
      <p>기본적으로 flex 아이템들은 소스코드의 순서대로 배치됩니다. 그러나 order 속성은 flex 컨테이너에 나타나는 순서를 제어합니다. 더 세분화가 필요한 경우<code>order</code>
        CSS 속성을 사용하고
        원하는 값을 할당합니다.</p>
      <p>예제:</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div style="order: 2"&#62;Second column&#60;/div&#62;
  &#60;div class="order-last"&#62;Third column&#60;/div&#62;
  &#60;div class="order-first"&#62;First column&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <p>
        CSS <code>order</code> 속성의 작동 방식은 다음과 같습니다:
      </p>
      <p>
        <img src="@/assets/images/flexgrid/flexbox-order.svg" width="400" />
      </p>
    </section>
    <section id="reponsive" data-name="반응형 디자인">
      <Title sub>반응형 디자인</Title>
    </section>
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

.body--dark img {
  filter: grayscale(1) invert(100%);
}
</style>