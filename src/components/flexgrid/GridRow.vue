<script setup>
import { defineAsyncComponent, ref } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const splitterModel = ref(100)
</script>
<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Grid Row</Title>
      <p>
        <Link :to="{ name: 'flexbox' }">Flexbox 소개</Link>에서 배운 row에 대해 더 자세히 알아보도록 하겠습니다.
      </p>
      <p>동일한 너비의 column 들에 대해 중단점별 column 클래스를 활용해 봅시다. 중단점 단위가 없는 column 클래스를 사용하면 모든 column의 너비가 같아집니다.</p>
      <Tip advice color="teal-4">
        <ul>
          <li>
            Quasar grid 중 row는 column 보다 사용 빈도가 높습니다.
          </li>
          <li>column의 너비를 지정한 경우, 그 너비는 해당 부모 요소(컨테이너)의 <strong>12 포인트 grid에 해당하는 너비</strong>를 가집니다.</li>
          <li>
            부모 요소에 row를 사용할 때 자식 요소의 col을 다루는 법을 자세히 알아봅시다.
          </li>
        </ul>
      </Tip>
    </section>
    <section id="equal" data-name="동일한 너비">
      <Title sub>동일한 너비</Title>
      <p>아래 초소형(xs) 창 너비부터 초대형(xl) 창 너비까지 모든 디바이스와 뷰포트에 같은 너비의 column을 가지는 grid layouts이 있습니다.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div class="col bg-red-4"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col bg-orange-4"&#62;
    .col
  &#60;/div&#62;
&#60;/div&#62;
&#60;div class="row"&#62;
  &#60;div class="col bg-red-4"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col bg-orange-4"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col bg-green-4"&#62;
    .col
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Tip label="결과">
        <div class="row">
          <div class="col bg-red-4">
            .col
          </div>
          <div class="col bg-orange-4">
            .col
          </div>
        </div>
        <div class="q-mb-md"></div>
        <div class="row">
          <div class="col bg-red-4">
            .col
          </div>
          <div class="col bg-orange-4">
            .col
          </div>
          <div class="col bg-green-4">
            .col
          </div>
        </div>
        <div class="q-mb-md"></div>
      </Tip>
    </section>
    <section id="set-width" data-name="column 너비 설정">
      <Title sub>column 너비 설정</Title>
      <p>flexbox grid column에서 자동 레이아웃은 일부 column의 중단점 사이즈를 설정하면 나머지 column은 자동으로 크기가 조정되는 것을 뜻합니다.</p>
      <p>첫 번째 row의 두 번째 column은 그 너비를 5로 설정했으므로(5/12 = 42.6%), 나머지 column의 너비는 7/12 = 57.4% 가 됩니다.</p>
      <p>두 번째 row의 두 번째 column은 그 너비를 6으로 설정했으므로(6/12 = 50%), 나머지 column들의 너비는 3/12 = 25%(나머지 column이 6/12 너비를 나눠가짐) 가
        됩니다.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div class="col bg-red-4"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col-5 bg-orange-4"&#62;
    .col
  &#60;/div&#62;
&#60;/div&#62;
&#60;div class="row"&#62;
  &#60;div class="col bg-red-4"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col-6 bg-orange-4"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col bg-green-4"&#62;
    .col
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Tip label="결과">
        <div class="row">
          <div class="col bg-red-4">
            .col
          </div>
          <div class="col-5 bg-orange-4">
            .col-5
          </div>
        </div>
        <div class="q-mb-md"></div>
        <div class="row">
          <div class="col bg-red-4">
            .col
          </div>
          <div class="col-6 bg-orange-4">
            .col-6
          </div>
          <div class="col bg-green-4">
            .col
          </div>
        </div>
        <div class="q-mb-md"></div>
      </Tip>
    </section>
    <section id="variable" data-name="가변 너비 콘텐츠">
      <Title sub>가변 너비 콘텐츠</Title>
      <p><code>col-{breakpoint}-auto</code>를 사용한 column은 그 콘텐츠에 따라 너비가 자연스럽게 조정됩니다.</p>
      <p>input과 number 처럼 한 줄에 콘텐츠를 다뤄야 할 때 유용하게 사용됩니다(이 페이지 마지막 예제 참조). 수평 정렬 클래스(justify-center등)와 함께 뷰포트 너비가
        변경됨에
        따라 column의 크기를 알 수 없는 레이아웃을 중앙에 배치하는 데 매우 유용합니다.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="row justify-center"&#62;
  &#60;div class="col-12 col-md-2 bg-red-4"&#62;
    .col-12 .col-md-2
  &#60;/div&#62;
  &#60;div class="col-12 col-md-auto bg-orange-4"&#62;
    .col-12 .col-md-auto(가변 너비의 콘텐츠)
  &#60;/div&#62;
  &#60;div class="col-12 col-md-2 bg-green-4"&#62;
    .col-12 .col-md-2
  &#60;/div&#62;
&#60;/div&#62;
&#60;div class="row"&#62;
  &#60;div class="col bg-red-4"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col-12 col-md-auto bg-orange-4"&#62;
    .col-12 .col-md-auto(가변 너비의 콘텐츠)
  &#60;/div&#62;
  &#60;div class="col bg-green-4"&#62;
    .col
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Tip label="결과">
        <p class="text-caption">브라우저의 크기를 변경해가면서 확인해 보세요.</p>
        <div class="row justify-center">
          <div class="col-12 col-md-2 bg-red-4">
            .col-12 .col-md-2
          </div>
          <div class="col-12 col-md-auto bg-orange-4">
            .col-12 .col-md-auto(가변 너비의 콘텐츠)
          </div>
          <div class="col-12 col-md-2 bg-green-4">
            .col-12 .col-md-2
          </div>
        </div>
        <div class="q-mb-md"></div>
        <div class="row">
          <div class="col bg-red-4">
            .col
          </div>
          <div class="col-12 col-md-auto bg-orange-4">
            .col-12 .col-md-auto(가변 너비의 콘텐츠)
          </div>
          <div class="col bg-green-4">
            .col
          </div>
        </div>
        <div class="q-mb-md"></div>
      </Tip>
    </section>
    <section id="responsive" data-name="반응형 클래스">
      <Title sub>반응형 클래스</Title>
      <p>grid에는 복잡한 반응형 레이아웃을 구축하기 위한 5개 계층의 미리 정의된 클래스가 포함되어 있습니다. 초소형(xs), 소형(sm), 중형(md), 대형(lg) 또는 초대형(xl) 디바이스에서
        column의 너비를 원하는 대로 커스터마이징 할 수 있습니다.</p>
      <Title minor>모든 중단점</Title>
      <p>가장 작은 디바이스에서 가장 큰 디바이스까지 동일한 grid의 경우 <code>.col</code> 및 <code>.col-*</code> 클래스를 사용합니다. 특정 너비의 column이 필요한 경우
        포인트가 지정된 클래스를 사용하세요. 그런
        경우가 아니면 <code>.col</code>을 사용하시면 됩니다.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div class="col bg-red-4"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col bg-orange-4"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col bg-green-4"&#62;
    .col
  &#60;/div&#62;
  &#60;div class="col bg-blue-4"&#62;
    .col
  &#60;/div&#62;
&#60;/div&#62;
&#60;div class="row"&#62;
  &#60;div class="col-8 bg-red-4"&#62;
    .col-8
  &#60;/div&#62;
  &#60;div class="col-4 bg-orange-4"&#62;
    .col-4
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Tip label="결과">
        <div class="row">
          <div class="col bg-red-4">
            .col
          </div>
          <div class="col bg-orange-4">
            .col
          </div>
          <div class="col bg-green-4">
            .col
          </div>
          <div class="col bg-blue-4">
            .col
          </div>
        </div>
        <div class="q-mb-md"></div>
        <div class="row">
          <div class="col-8 bg-red-4">
            .col-8
          </div>
          <div class="col-4 bg-orange-4">
            .col-4
          </div>
        </div>
        <div class="q-mb-md"></div>
      </Tip>
      <Title minor>모든 중단점</Title>
      <p><code>.col-12</code>와 <code>.col-md-*</code> 클래스의 조합을 사용하여 소형 디바이스에서 쌓는 정렬로 시작해 데스크톱(중형) 디바이스에서 수평 정렬까지 기본 그리드
        시스템을 생성할 수 있습니다.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div class="col-12 col-md-8 bg-red-4"&#62;
    .col-12 .col-md-8
  &#60;/div&#62;
  &#60;div class="col-12 col-md-4 bg-orange-4"&#62;
    .col-12 .col-md-4
  &#60;/div&#62;
&#60;/div&#62;
&#60;div class="row"&#62;
  &#60;div class="col-12 col-md bg-red-4"&#62;
    .col-12 .col-md
  &#60;/div&#62;
  &#60;div class="col-12 col-md bg-orange-4"&#62;
    .col-12 .col-md
  &#60;/div&#62;
  &#60;div class="col-12 col-md bg-green-4"&#62;
    .col-12 .col-md
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Tip label="결과">
        <p class="text-caption">브라우저의 크기를 변경해가면서 확인해 보세요.</p>
        <div class="row">
          <div class="col-12 col-md-8 bg-red-4">
            .col-12 .col-md-8
          </div>
          <div class="col-12 col-md-4 bg-orange-4">
            .col-12 .col-md-4
          </div>
        </div>
        <div class="q-mb-md"></div>
        <div class="row">
          <div class="col-12 col-md bg-red-4">
            .col-12 .col-md
          </div>
          <div class="col-12 col-md bg-orange-4">
            .col-12 .col-md
          </div>
          <div class="col-12 col-md bg-green-4">
            .col-12 .col-md
          </div>
        </div>
        <div class="q-mb-md"></div>
      </Tip>
      <Tip advice color="teal-4">
        <p><code>col-md</code> 처럼 너비를 지정하지 않고 중단점만 지정하면 해당 라인의 남은 포인트만큼 너비를 채웁니다.</p>
      </Tip>
      <Title minor>믹스 앤 매치</Title>
      <p>column이 grid 계층에 쌓이는 것을 원하지 않나요? 필요에 따라 각 계층에 서로 다른 클래스 조합을 사용하세요. 모든 작동 방식에 대한 더 좋은 방법은 아래 예제를 참고하세요.</p>
      <Code language="html" class="q-mb-md">
        <textarea readonly>
&#60;div class="row"&#62;
  &#60;div class="col col-md-8 bg-red-4"&#62;
    .col .col-md-8
  &#60;/div&#62;
  &#60;div class="col-6 col-md-4 bg-orange-4"&#62;
    .col-6 .col-md-4
  &#60;/div&#62;
&#60;/div&#62;
&#60;div class="row"&#62;
  &#60;div class="col-6 col-md-4 bg-red-4"&#62;
    .col-6 .col-md-4
  &#60;/div&#62;
  &#60;div class="col-6 col-md-4 bg-orange-4"&#62;
    .col-6 .col-md-4
  &#60;/div&#62;
  &#60;div class="col-6 col-md-4 bg-green-4"&#62;
    .col-6 .col-md-4
  &#60;/div&#62;
&#60;/div&#62;
&#60;div class="row"&#62;
  &#60;div class="col-6 bg-red-4"&#62;
    .col-6
  &#60;/div&#62;
  &#60;div class="col-6 bg-orange-4"&#62;
    .col-6
  &#60;/div&#62;
&#60;/div&#62;
        </textarea>
      </Code>
      <Tip label="결과">
        <p class="text-caption">브라우저의 크기를 변경해가면서 확인해 보세요.</p>
        <div class="row">
          <div class="col col-md-8 bg-red-4">
            .col .col-md-8
          </div>
          <div class="col-6 col-md-4 bg-orange-4">
            .col-6 .col-md-4
          </div>
        </div>
        <div class="q-mb-md"></div>
        <div class="row">
          <div class="col-6 col-md-4 bg-red-4">
            .col-6 .col-md-4
          </div>
          <div class="col-6 col-md-4 bg-orange-4">
            .col-6 .col-md-4
          </div>
          <div class="col-6 col-md-4 bg-green-4">
            .col-6 .col-md-4
          </div>
        </div>
        <div class="q-mb-md"></div>
        <div class="row">
          <div class="col-6 bg-red-4">
            .col-6
          </div>
          <div class="col-6 bg-orange-4">
            .col-6
          </div>
        </div>
        <div class="q-mb-md"></div>
      </Tip>
    </section>
  </div>
</template>