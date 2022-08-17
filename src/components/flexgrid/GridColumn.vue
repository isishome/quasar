<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const Practice = defineAsyncComponent(() => import('@/components/block/Practice.vue'))
</script>
<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Grid Column</Title>
      <p>
        <Link :to="{ name: 'flexbox' }">Flexbox 소개</Link>에서 배운 Columns에 대해 더 자세히 알아보도록 하겠습니다.
      </p>
      <p>동일한 높이의 column에 대해 중단점별 column 클래스를 활용해 봅시다. 중단점 단위가 없는 column 클래스를 사용하면 모든 column의 높이가 같아집니다.</p>
      <Info advice color="teal-4">
        <ul>
          <li>column은 row의 수직 버전이라고 생각하시면 됩니다.</li>
          <li>column의 높이를 지정한 경우, 그 높이는 해당 부모 요소(컨테이너)의 <strong>12 포인트 grid에 해당하는 높이</strong>를 가집니다.</li>
          <li>
            부모 요소에 column을 사용할 때 자식 요소의 col을 다루는 법을 자세히 알아봅시다.
          </li>
        </ul>
      </Info>
    </section>
    <section id="equal" data-name="같은 높이">
      <Title sub>같은 높이</Title>
      <p>아래 초소형(xs) 창 높이부터 초대형(xl) 창 높이까지 모든 디바이스와 뷰포트에 같은 높이의 column을 가지는 grid layouts이 있습니다.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="column" style="height: 150px"&#62;
  &#60;div class="col"&#62;
    1/2
  &#60;/div&#62;
  &#60;div class="col"&#62;
    1/2
  &#60;/div&#62;
&#60;/div&#62;

&#60;div class="column" style="height: 150px"&#62;
  &#60;div class="col"&#62;
    1/3
  &#60;/div&#62;
  &#60;div class="col"&#62;
    1/3
  &#60;/div&#62;
  &#60;div class="col"&#62;
    1/3
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <div class="column" style="height: 150px">
          <div class="col">
            1/2
          </div>
          <div class="col">
            1/2
          </div>
        </div>
        <div class="column" style="height: 150px">
          <div class="col">
            1/3
          </div>
          <div class="col">
            1/3
          </div>
          <div class="col">
            1/3
          </div>
        </div>
      </Info>
    </section>
    <section id="set-width" data-name="row 높이 설정">
      <Title sub>row 높이 설정</Title>
      <p>flexbox grid row에서 자동 레이아웃은 일부 row의 중단점 높이를 설정하면 나머지 row는 자동으로 높이가 조정되는 것을 뜻합니다.
        미리 정의된 grid 클래스(아래 참조)나 인라인 높이를 사용할 수 있습니다.
        다른 row는 가운데 row와 관계없이 높이가 조정됩니다.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="column" style="height: 150px"&#62;
  &#60;div class="col"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col-5"&#62;
    .col-5
  &#60;/div&#62;
  &#60;div class="col"&#62;
    .col
  &#60;/div&#62;
&#60;/div&#62;

&#60;div class="column" style="height: 250px"&#62;
  &#60;div class="col"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col-8"&#62;
    .col-8
  &#60;/div&#62;
  &#60;div class="col"&#62;
    .col
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <div class="column" style="height: 150px">
          <div class="col">
            .col
          </div>
          <div class="col-5">
            .col-5
          </div>
          <div class="col">
            .col
          </div>
        </div>
        <div class="column" style="height: 250px">
          <div class="col">
            .col
          </div>
          <div class="col-8">
            .col-8
          </div>
          <div class="col">
            .col
          </div>
        </div>
      </Info>
    </section>
    <section id="variable" data-name="가변 너비 콘텐츠">
      <Title sub>가변 높이 콘텐츠</Title>
      <p><code>col-{breakpoint}-auto</code>를 사용한 row는 그 콘텐츠에 따라 높이가 자연스럽게 조정됩니다. input과 number 처럼 한 줄에 콘텐츠를 다뤄야 할 때 유용하게
        사용됩니다. 수평 정렬 클래스와 함께 뷰포트 높이가
        변경됨에
        따라 row의 높이를 알 수 없는 레이아웃을 중앙에 배치하는 데 매우 유용합니다.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="column justify-center" style="height: 250px"&#62;
  &#60;div class="col col-md-4"&#62;
    .col .col-md-4
  &#60;/div&#62;
  &#60;div class="col-auto"&#62;
    .col-auto (가변 높이의 콘텐츠)
  &#60;/div&#62;
  &#60;div class="col col-md-4"&#62;
    .col .col-md-4
  &#60;/div&#62;
&#60;/div&#62;
&#60;div class="column" style="height: 250px"&#62;
  &#60;div class="col"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col-auto"&#62;
    .col-auto (가변 높이의 콘텐츠)
  &#60;/div&#62;
  &#60;div class="col col-md-3"&#62;
    .col .col-md-3
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <p class="text-caption">브라우저의 크기를 변경해가면서 확인해 보세요.</p>
        <div class="column justify-center" style="height: 250px">
          <div class="col col-md-4">
            .col .col-md-4
          </div>
          <div class="col-auto">
            .col-auto (가변 높이의 콘텐츠)
          </div>
          <div class="col col-md-4">
            .col .col-md-4
          </div>
        </div>
        <div class="column" style="height: 250px">
          <div class="col">
            .col
          </div>
          <div class="col-auto">
            .col-auto (가변 높이의 콘텐츠)
          </div>
          <div class="col col-md-3">
            .col .col-md-3
          </div>
        </div>
      </Info>
    </section>
    <section id="responsive" data-name="반응형 클래스">
      <Title sub>반응형 클래스</Title>
      <p>grid에는 복잡한 반응형 레이아웃을 구축하기 위한 5개 계층의 미리 정의된 클래스가 포함되어 있습니다. 초소형(xs), 소형(sm), 중형(md), 대형(lg) 또는 초대형(xl) 디바이스에서
        row의 높이를 원하는 대로 커스터마이징 할 수 있습니다.</p>
      <Title minor>모든 중단점</Title>
      <p>가장 작은 디바이스에서 가장 큰 디바이스까지 동일한 grid의 경우 <code>.col</code> 및 <code>.col-*</code> 클래스를 사용합니다. 특정 높이의 row가 필요한 경우
        포인트가 지정된 클래스를 사용하세요. 그런
        경우가 아니면 <code>.col</code>을 사용하시면 됩니다.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="column" style="height: 150px"&#62;
  &#60;div class="col"&#62;.col&#60;/div&#62;
  &#60;div class="col"&#62;.col&#60;/div&#62;
  &#60;div class="col"&#62;.col&#60;/div&#62;
  &#60;div class="col"&#62;.col&#60;/div&#62;
&#60;/div&#62;

&#60;div class="column" style="height: 150px"&#62;
  &#60;div class="col-8"&#62;.col-8&#60;/div&#62;
  &#60;div class="col-4"&#62;.col-4&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <div class="column" style="height: 150px">
          <div class="col">.col</div>
          <div class="col">.col</div>
          <div class="col">.col</div>
          <div class="col">.col</div>
        </div>
        <div class="column" style="height: 150px">
          <div class="col-8">.col-8</div>
          <div class="col-4">.col-4</div>
        </div>
      </Info>
      <Title minor>믹스 앤 매치</Title>
      <p>row가 grid 계층에 쌓이는 것을 원하지 않나요? 필요에 따라 각 계층에 서로 다른 클래스를 조합하여 사용하세요. 모든 클래스들이 어떻게 작동하는지 알고 싶다면 아래 예제를 참고하세요.
      </p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;!-- 하나는 전체 너비로 다른 하나는 절반 너비로 모바일 환경에서 column 쌓기 --&#62;
&#60;div class="column" style="height: 150px"&#62;
  &#60;div class="col col-md-8"&#62;.col .col-md-8&#60;/div&#62;
  &#60;div class="col-6 col-md-4"&#62;.col-6 .col-md-4&#60;/div&#62;
&#60;/div&#62;

&#60;!-- 모바일 환경에서 50%의 너비로 시작해 데스크톱 환경에서 33% 너비로 증가하는 column. --&#62;
&#60;div class="column" style="height: 150px"&#62;
  &#60;div class="col-4 col-md-6"&#62;.col-4 .col-md-6&#60;/div&#62;
  &#60;div class="col-4 col-md-6"&#62;.col-4 .col-md-6&#60;/div&#62;
  &#60;div class="col-4 col-md-6"&#62;.col-4 .col-md-6&#60;/div&#62;
&#60;/div&#62;

&#60;!-- 모바일 및 데스크톱 환경에서 항상 50% 너비를 가지는 column --&#62;
&#60;div class="column" style="height: 150px"&#62;
  &#60;div class="col-6"&#62;.col-6&#60;/div&#62;
  &#60;div class="col-6"&#62;.col-6&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <p class="text-caption">브라우저의 크기를 변경해가면서 확인해 보세요.</p>
        <div class="column" style="height: 150px">
          <div class="col col-md-8">.col .col-md-8</div>
          <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
        <div class="column" style="height: 150px">
          <div class="col-4 col-md-6">.col-4 .col-md-6</div>
          <div class="col-4 col-md-6">.col-4 .col-md-6</div>
          <div class="col-4 col-md-6">.col-4 .col-md-6</div>
        </div>
        <div class="column" style="height: 150px">
          <div class="col-6">.col-6</div>
          <div class="col-6">.col-6</div>
        </div>
      </Info>
      <Title minor>정렬</Title>
      <p>flexbox 정렬 유틸리티를 사용하여 column을 수직 및 수평으로 정렬합니다.</p>
      <Practice :options="[
        { label: 'items-start', value: 'items-start' },
        { label: 'items-center', value: 'items-center' },
        { label: 'items-end', value: 'items-end' },
        { label: 'self-*', value: 'self' }
      ]">
        <template #items-start>
          <Code language="html">
            <textarea readonly>
&#60;div class="column items-start" style="height: 150px"&#62;
  &#60;div class="col"&#62;
    세 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col"&#62;
    세 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col"&#62;
    세 개의 row 중 하나
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column items-start" style="height: 150px">
              <div class="col">
                세 개의 row 중 하나
              </div>
              <div class="col">
                세 개의 row 중 하나
              </div>
              <div class="col">
                세 개의 row 중 하나
              </div>
            </div>
          </Info>
        </template>
        <template #items-center>
          <Code language="html">
            <textarea readonly>
&#60;div class="column items-center" style="height: 150px"&#62;
  &#60;div class="col"&#62;
    세 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col"&#62;
    세 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col"&#62;
    세 개의 row 중 하나
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column items-center" style="height: 150px">
              <div class="col">
                세 개의 row 중 하나
              </div>
              <div class="col">
                세 개의 row 중 하나
              </div>
              <div class="col">
                세 개의 row 중 하나
              </div>
            </div>
          </Info>
        </template>
        <template #items-end>
          <Code language="html">
            <textarea readonly>
&#60;div class="column items-end" style="height: 150px"&#62;
  &#60;div class="col"&#62;
    세 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col"&#62;
    세 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col"&#62;
    세 개의 row 중 하나
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column items-end" style="height: 150px">
              <div class="col">
                세 개의 row 중 하나
              </div>
              <div class="col">
                세 개의 row 중 하나
              </div>
              <div class="col">
                세 개의 row 중 하나
              </div>
            </div>
          </Info>
        </template>
        <template #self>
          <Code language="html">
            <textarea readonly>
&#60;div class="column" style="height: 150px"&#62;
  &#60;div class="col self-start"&#62;
    .self-start
  &#60;/div&#62;
  &#60;div class="col self-center"&#62;
    .self-center
  &#60;/div&#62;
  &#60;div class="col self-end"&#62;
    .self-end
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column" style="height: 150px">
              <div class="col self-start">
                .self-start
              </div>
              <div class="col self-center">
                .self-center
              </div>
              <div class="col self-end">
                .self-end
              </div>
            </div>
          </Info>
        </template>
      </Practice>
      <Practice :options="[
        { label: 'justify-start', value: 'justify-start' },
        { label: 'justify-center', value: 'justify-center' },
        { label: 'justify-end', value: 'justify-end' },
        { label: 'justify-around', value: 'justify-around' },
        { label: 'justify-between', value: 'justify-between' },
        { label: 'justify-evenly', value: 'justify-evenly' }
      ]">
        <template #justify-start>
          <Code language="html">
            <textarea readonly>
&#60;div class="column justify-start" style="height: 150px"&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column justify-start" style="height: 150px">
              <div class="col-4">
                두 개의 row 중 하나
              </div>
              <div class="col-4">
                두 개의 row 중 하나
              </div>
            </div>
          </Info>
        </template>
        <template #justify-center>
          <Code language="html">
            <textarea readonly>
&#60;div class="column justify-center" style="height: 150px"&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column justify-center" style="height: 150px">
              <div class="col-4">
                두 개의 row 중 하나
              </div>
              <div class="col-4">
                두 개의 row 중 하나
              </div>
            </div>
          </Info>
        </template>
        <template #justify-end>
          <Code language="html">
            <textarea readonly>
&#60;div class="column justify-end" style="height: 150px"&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column justify-end" style="height: 150px">
              <div class="col-4">
                두 개의 row 중 하나
              </div>
              <div class="col-4">
                두 개의 row 중 하나
              </div>
            </div>
          </Info>
        </template>
        <template #justify-around>
          <Code language="html">
            <textarea readonly>
&#60;div class="column justify-around" style="height: 150px"&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column justify-around" style="height: 150px">
              <div class="col-4">
                두 개의 row 중 하나
              </div>
              <div class="col-4">
                두 개의 row 중 하나
              </div>
            </div>
          </Info>
        </template>
        <template #justify-between>
          <Code language="html">
            <textarea readonly>
&#60;div class="column justify-between" style="height: 150px"&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column justify-between" style="height: 150px">
              <div class="col-4">
                두 개의 row 중 하나
              </div>
              <div class="col-4">
                두 개의 row 중 하나
              </div>
            </div>
          </Info>
        </template>
        <template #justify-evenly>
          <Code language="html">
            <textarea readonly>
&#60;div class="column justify-evenly" style="height: 150px"&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
  &#60;div class="col-4"&#62;
    두 개의 row 중 하나
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column justify-evenly" style="height: 150px">
              <div class="col-4">
                두 개의 row 중 하나
              </div>
              <div class="col-4">
                두 개의 row 중 하나
              </div>
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
      <Title minor>줄 바꿈</Title>
      <p>단일 row에 column들의 높이 값이 12 포인트를 넘는 경우, 초과되는 column들은 순차적으로 새 라인으로 줄 바꿈 됩니다.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="column" style="height: 300px; max-height: 100%"&#62;
  &#60;div class="col-9"&#62;.col-9&#60;/div&#62;
  &#60;div class="col-5"&#62;
    .col-5
    &#60;br /&#62;9 + 5 = 14 &gt; 12이므로
    &#60;br /&#62;5 높이의 row는 새 라인으로
    &#60;br /&#62;줄 바꿈 됩니다.
  &#60;/div&#62;
  &#60;div class="col-6"&#62;
    .col-6
    &#60;br /&#62;뒤에 오는 row들도
    &#60;br /&#62;앞 row과 계산되어
    &#60;br /&#62;줄 바꿈 됩니다.
  &#60;/div&#62;
&#60;/div&#62;

&#60;div class="column" style="height: 150px"&#62;
  &#60;div class="col-3 col-sm-6"&#62;.col-3 .col-sm-6&#60;/div&#62;
  &#60;div class="col-3 col-sm-6"&#62;.col-3 .col-sm-6&#60;/div&#62;
  &#60;div class="col-3 col-sm-6"&#62;.col-3 .col-sm-6&#60;/div&#62;
  &#60;div class="col-3 col-sm-6"&#62;.col-3 .col-sm-6&#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <p class="text-caption">브라우저의 크기를 변경해가면서 확인해 보세요.</p>
        <div class="column" style="height: 300px; max-height: 100%">
          <div class="col-9">.col-9</div>
          <div class="col-5">
            .col-5
            <br />9 + 5 = 14 &gt; 12이므로
            <br />5 높이의 row는 새 라인으로
            <br />줄 바꿈 됩니다.
          </div>
          <div class="col-6">
            .col-6
            <br />뒤에 오는 row들도
            <br />앞 row과 계산되어
            <br />줄 바꿈 됩니다.
          </div>
        </div>
        <div class="column" style="height: 150px">
          <div class="col-3 col-sm-6">.col-3 .col-sm-6</div>
          <div class="col-3 col-sm-6">.col-3 .col-sm-6</div>
          <div class="col-3 col-sm-6">.col-3 .col-sm-6</div>
          <div class="col-3 col-sm-6">.col-3 .col-sm-6</div>
        </div>
      </Info>
      <Title minor>재배치</Title>
      <Practice :options="[
        { label: '역순', value: 'reverse' },
        { label: 'Flex 배치', value: 'flex-order' }
      ]">
        <template #reverse>
          <Code language="html">
            <textarea readonly>
&#60;div class="column reverse" style="height: 150px"&#62;
  &#60;div class="col"&#62;
    첫 번째, 마지막으로
  &#60;/div&#62;
  &#60;div class="col"&#62;
    두 번째, 바뀌지 않음
  &#60;/div&#62;
  &#60;div class="col"&#62;
    세 번째, 처음으로
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column reverse" style="height: 150px">
              <div class="col">
                첫 번째, 마지막으로
              </div>
              <div class="col">
                두 번째, 바뀌지 않음
              </div>
              <div class="col">
                세 번째, 처음으로
              </div>
            </div>
          </Info>
        </template>
        <template #flex-order>
          <Code language="html">
            <textarea readonly>
&#60;div class="column" style="height: 190px"&#62;
  &#60;div class="col order-none"&#62;
    첫 번째, 재배치되지 않음
    &#60;br&#62;(.order-none)
  &#60;/div&#62;
  &#60;div class="col order-last"&#62;
    두번째, 마지막으로
    &#60;br&#62;(.order-last)
  &#60;/div&#62;
  &#60;div class="col order-first"&#62;
    세 번째, 처음으로
    &#60;br&#62;(.order-first)
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과" example>
            <div class="column" style="height: 190px">
              <div class="col order-none">
                첫 번째, 재배치되지 않음
                <br>(.order-none)
              </div>
              <div class="col order-last">
                두번째, 마지막으로
                <br>(.order-last)
              </div>
              <div class="col order-first">
                세 번째, 처음으로
                <br>(.order-first)
              </div>
            </div>
          </Info>
        </template>
      </Practice>
      <Title minor>중첩</Title>
      <p>기본 grid에 콘텐츠를 중첩시키려면 기존 grid의 <code>.col-sm-*</code> 안에 새로운 grid(<code>.row</code> 및
        <code>.col-sm-*</code>
        세트)를 추가합니다. 중첩된
        row에는 최대
        12포인트
        이하의 column이 포함되어야 합니다(12 포인트 column을 모두 사용할 필요는 없습니다).
      </p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="column" style="height: 200px"&#62;
  &#60;div class="col-auto"&#62;.col-auto&#60;/div&#62;
  &#60;div class="col column"&#62;
    &#60;div class="col-8 col-sm-6"&#62;
      .col-8 .col-sm-6
    &#60;/div&#62;
    &#60;div class="col-4 col-sm-6"&#62;
      .col-4 .col-sm-6
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Info label="결과" example>
        <p class="text-caption">브라우저의 크기를 변경해가면서 확인해 보세요.</p>
        <div class="column" style="height: 200px">
          <div class="col-auto">.col-auto</div>
          <div class="col column">
            <div class="col-8 col-sm-6">
              .col-8 .col-sm-6
            </div>
            <div class="col-4 col-sm-6">
              .col-4 .col-sm-6
            </div>
          </div>
        </div>
      </Info>
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
        <Move label="Grid Row 소개" prev :to="{ name: 'gridrow' }" />
        <Move label="Grid Gutter 소개" next :to="{ name: 'gridgutter' }" />
      </div>
    </div>
  </div>
</template>