<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const Practice = defineAsyncComponent(() => import('@/components/block/Practice.vue'))
</script>
<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>Grid Gutter</Title>
      <p>
        <Link :to="{ name: 'flexbox' }">Flexbox 소개</Link>에서 배운 Gutters에 대해 더 자세히 알아보도록 하겠습니다.
      </p>
      <p>Quasar Gutter CSS 클래스는 요소(특히 Grid Row)를 서로 동일한 간격으로 쉽게 배치할 수 있는 방법을 제공합니다.</p>
    </section>
    <section id="types" data-name="유형">
      <Title sub>유형</Title>
      <p>사용 사례에 따라 <code>q-gutter-{size}</code>와 <code>q-col-gutter-{size}</code>의 두 가지의 주요 gutter 유형이 있습니다. 첫 번째는 서로
        간격을
        두려는 요소가 너비를 지정하는 <code>col-*</code> 또는 <code>offset-*</code> 클래스를 사용하지 않을 때, 두 번째는 <code>col-*</code> 또는
        <code>offset-*</code> 클래스를 사용할 때 각각 사용됩니다.
      </p>
      <Note color="green-13">
        <p><strong>팁</strong></p>
        <p>접미사(<em>-none</em>,<em>-xs</em>,<em>-sm</em>,<em>-md</em>,<em>-lg</em>,<em>-xl</em>)는 디바이스 화면 너비가 아닌 요소 사이의
          간격
          너비를 나타냅니다.
        </p>
      </Note>
    </section>
    <section id="q-gutter" data-name="q-gutter-{size}">
      <Title sub>q-gutter-{size}</Title>
      <Note color="orange-4">
        <p><strong>경고</strong></p>
        <p>
          <code>q-gutter-*</code> 클래스는 부모 요소의 <strong>상단과 좌측에 -마진</strong>을 적용하고 자식 요소의 <strong>상단과 좌측에는 +마진</strong>을
          적용합니다. gutter의
          css가 깨지지 않도록 다른 간격
          클래스와 함께 동작할 때 이점에 유의하세요.
        </p>
      </Note>
      <p>이 클래스는 인접한 자식 요소에 너비를 지정하는 <code>col-*</code> 또는 <code>offset-*</code> 클래스가 없을 때 사용됩니다.</p>
      <Practice class="practice" :options="[
        { label: 'q-gutter-xs', value: 'q-gutter-xs' },
        { label: 'q-gutter-sm', value: 'q-gutter-sm' },
        { label: 'q-gutter-md', value: 'q-gutter-md' },
        { label: 'q-gutter-lg', value: 'q-gutter-lg' },
        { label: 'q-gutter-xl', value: 'q-gutter-xl' }
      ]">
        <template #q-gutter-xs>
          <Code language="html">
            <textarea readonly>
&#60;div class="q-gutter-xs"&#62;
  &#60;q-btn color="brown" label="Button" v-for="n in 7" :key="`xs-$&#123;n&#125;`" /&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-gutter-xs">
              <q-btn color="brown" label="Button" v-for="n in 7" :key="`xs-${n}`" />
            </div>
          </Info>
        </template>
        <template #q-gutter-sm>
          <Code language="html">
            <textarea readonly>
&#60;div class="q-gutter-sm"&#62;
  &#60;q-btn color="teal" label="Button" v-for="n in 7" :key="`sm-$&#123;n&#125;`" /&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-gutter-sm">
              <q-btn color="teal" label="Button" v-for="n in 7" :key="`sm-${n}`" />
            </div>
          </Info>
        </template>
        <template #q-gutter-md>
          <Code language="html">
            <textarea readonly>
&#60;div class="q-gutter-md"&#62;
  &#60;q-btn color="accent" label="Button" v-for="n in 7" :key="`md-$&#123;n&#125;`" /&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-gutter-md">
              <q-btn color="accent" label="Button" v-for="n in 7" :key="`md-${n}`" />
            </div>
          </Info>
        </template>
        <template #q-gutter-lg>
          <Code language="html">
            <textarea readonly>
&#60;div class="q-gutter-lg"&#62;
  &#60;q-btn color="red" label="Button" v-for="n in 7" :key="`lg-$&#123;n&#125;`" /&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-gutter-lg">
              <q-btn color="red" label="Button" v-for="n in 7" :key="`lg-${n}`" />
            </div>
          </Info>
        </template>
        <template #q-gutter-xl>
          <Code language="html">
            <textarea readonly>
&#60;div class="q-gutter-xl"&#62;
  &#60;q-btn color="indigo" label="Button" v-for="n in 7" :key="`xl-$&#123;n&#125;`" /&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-gutter-xl">
              <q-btn color="indigo" label="Button" v-for="n in 7" :key="`xl-${n}`" />
            </div>
          </Info>
        </template>
      </Practice>
      <p>위 예제에 포함되지 않은 <code>q-gutter-none</code> 클래스(gutter를 사용하지 않은 것과 동일)도 있습니다.</p>
      <Practice class="practice" :options="[
        { label: '수평에만 적용되는 q-gutter', value: 'horizontal' },
        { label: '수직에만 적용되는 q-gutter', value: 'vertical' },
        { label: '수평, 수직이 혼합된 q-gutter', value: 'mixed' }
      ]">
        <template #horizontal>
          <Code language="html">
            <textarea readonly>
&#60;div class="q-gutter-x-md"&#62;
  &#60;q-btn color="primary" label="Button" v-for="n in 3" :key="n" /&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-gutter-x-md">
              <q-btn color="primary" label="Button" v-for="n in 3" :key="n" />
            </div>
          </Info>
        </template>
        <template #vertical>
          <Code language="html">
            <textarea readonly>
&#60;div class="q-gutter-y-md"&#62;
  &#60;q-btn color="teal" label="Button" v-for="n in 10" :key="n" /&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-gutter-y-md">
              <q-btn color="teal" label="Button" v-for="n in 10" :key="n" />
            </div>
          </Info>
        </template>
        <template #mixed>
          <Code language="html">
            <textarea readonly>
&#60;div class="q-gutter-x-xs q-gutter-y-lg"&#62;
  &#60;q-btn color="purple" label="Button" v-for="n in 10" :key="n" /&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="q-gutter-x-xs q-gutter-y-lg">
              <q-btn color="purple" label="Button" v-for="n in 10" :key="n" />
            </div>
          </Info>
        </template>
      </Practice>
    </section>
    <section id="q-col-gutter" data-name="q-col-gutter-{size}">
      <Title sub>q-col-gutter-{size}</Title>
      <Note color="orange-4">
        <p><strong>경고</strong></p>
        <p>
          <code>q-col-gutter-*</code> 클래스는 부모 요소의 <strong>상단과 좌측에 -마진</strong>을 적용하고 자식 요소의 <strong>상단과 좌측에는
            +패딩</strong>을
          적용합니다. gutter의
          css가 깨지지 않도록 다른 간격
          클래스와 함께 동작할 때 이점에 유의하세요.
        </p>
      </Note>
      <p>이 클래스는 인접한 자식 요소에 너비를 지정하는 <code>col-*</code> 또는 <code>offset-*</code> 클래스가 있을 때 사용됩니다.</p>
      <Practice class="practice" :options="[
        { label: 'q-col-gutter-none', value: 'q-col-gutter-none' },
        { label: 'q-col-gutter-xs', value: 'q-col-gutter-xs' },
        { label: 'q-col-gutter-sm', value: 'q-col-gutter-sm' },
        { label: 'q-col-gutter-md', value: 'q-col-gutter-md' },
        { label: 'q-col-gutter-lg', value: 'q-col-gutter-lg' },
        { label: 'q-col-gutter-xl', value: 'q-col-gutter-xl' }
      ]">
        <template #q-col-gutter-none>
          <Code language="html">
            <textarea readonly>
&#60;div class="row q-col-gutter-none"&#62;
  &#60;div class="col-4" v-for="n in 5" :key="`none-$&#123;n&#125;`"&#62;
    &#60;div class="my-content"&#62;&#38;nbsp;&#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="row q-col-gutter-none">
              <div class="col-4" v-for="n in 5" :key="`none-${n}`">
                <div class="my-content">&nbsp;</div>
              </div>
            </div>
          </Info>
        </template>
        <template #q-col-gutter-xs>
          <Code language="html">
            <textarea readonly>
&#60;div class="row q-col-gutter-xs"&#62;
  &#60;div class="col-4" v-for="n in 5" :key="`xs-$&#123;n&#125;`"&#62;
    &#60;div class="my-content"&#62;&#38;nbsp;&#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="row q-col-gutter-xs">
              <div class="col-4" v-for="n in 5" :key="`xs-${n}`">
                <div class="my-content">&nbsp;</div>
              </div>
            </div>
          </Info>
        </template>
        <template #q-col-gutter-sm>
          <Code language="html">
            <textarea readonly>
&#60;div class="row q-col-gutter-sm"&#62;
  &#60;div class="col-4" v-for="n in 5" :key="`sm-$&#123;n&#125;`"&#62;
    &#60;div class="my-content"&#62;&#38;nbsp;&#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="row q-col-gutter-sm">
              <div class="col-4" v-for="n in 5" :key="`sm-${n}`">
                <div class="my-content">&nbsp;</div>
              </div>
            </div>
          </Info>
        </template>
        <template #q-col-gutter-md>
          <Code language="html">
            <textarea readonly>
&#60;div class="row q-col-gutter-md"&#62;
  &#60;div class="col-4" v-for="n in 5" :key="`md-$&#123;n&#125;`"&#62;
    &#60;div class="my-content"&#62;&#38;nbsp;&#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="row q-col-gutter-md">
              <div class="col-4" v-for="n in 5" :key="`md-${n}`">
                <div class="my-content">&nbsp;</div>
              </div>
            </div>
          </Info>
        </template>
        <template #q-col-gutter-lg>
          <Code language="html">
            <textarea readonly>
&#60;div class="row q-col-gutter-lg"&#62;
  &#60;div class="col-4" v-for="n in 5" :key="`lg-$&#123;n&#125;`"&#62;
    &#60;div class="my-content"&#62;&#38;nbsp;&#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="row q-col-gutter-lg">
              <div class="col-4" v-for="n in 5" :key="`lg-${n}`">
                <div class="my-content">&nbsp;</div>
              </div>
            </div>
          </Info>
        </template>
        <template #q-col-gutter-xl>
          <Code language="html">
            <textarea readonly>
&#60;div class="row q-col-gutter-xl"&#62;
  &#60;div class="col-4" v-for="n in 5" :key="`xl-$&#123;n&#125;`"&#62;
    &#60;div class="my-content"&#62;&#38;nbsp;&#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="row q-col-gutter-xl">
              <div class="col-4" v-for="n in 5" :key="`xl-${n}`">
                <div class="my-content">&nbsp;</div>
              </div>
            </div>
          </Info>
        </template>
      </Practice>
      <Practice class="practice" :options="[
        { label: '수평에만 적용되는 q-col-gutter', value: 'horizontal' },
        { label: '수직에만 적용되는 q-col-gutter', value: 'vertical' },
        { label: '수평, 수직이 혼합된 q-col-gutter', value: 'mixed' }
      ]">
        <template #horizontal>
          <Code language="html">
            <textarea readonly>
&#60;div class="row q-col-gutter-x-md"&#62;
  &#60;div class="col-4" v-for="n in 5" :key="`none-$&#123;n&#125;`"&#62;
    &#60;div class="my-content"&#62;&#38;nbsp;&#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="row q-col-gutter-x-md">
              <div class="col-4" v-for="n in 5" :key="`none-${n}`">
                <div class="my-content">&nbsp;</div>
              </div>
            </div>
          </Info>
        </template>
        <template #vertical>
          <Code language="html">
            <textarea readonly>
&#60;div class="row q-col-gutter-y-md"&#62;
  &#60;div class="col-4" v-for="n in 5" :key="`none-$&#123;n&#125;`"&#62;
    &#60;div class="my-content"&#62;&#38;nbsp;&#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="row q-col-gutter-y-md">
              <div class="col-4" v-for="n in 5" :key="`none-${n}`">
                <div class="my-content">&nbsp;</div>
              </div>
            </div>
          </Info>
        </template>
        <template #mixed>
          <Code language="html">
            <textarea readonly>
&#60;div class="row q-col-gutter-x-xs q-col-gutter-y-lg"&#62;
  &#60;div class="col-4" v-for="n in 5" :key="`none-$&#123;n&#125;`"&#62;
    &#60;div class="my-content"&#62;&#38;nbsp;&#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
          <Info label="결과">
            <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
              <div class="col-4" v-for="n in 5" :key="`none-${n}`">
                <div class="my-content">&nbsp;</div>
              </div>
            </div>
          </Info>
        </template>
      </Practice>
    </section>
    <section id="issue" data-name="장단점 및 문제 해결 방법">
      <Title sub>장단점 및 문제 해결 방법</Title>
      <p>두 클래스 세트 모두 장단점이 있습니다.</p>
      <Note color="orange-4">
        <p><strong>경고</strong></p>
        <p>
          <code>q-gutter-*</code> 및 <code>q-col-gutter-*</code> 클래스 모두 부모 요소의 <strong>상단과 좌측에 -마진</strong>을 적용하기 때문에 부모
          요소의 배경, 마진 또는 테두리 관련 속성을 대상으로 하는 스타일을 적용해서는 안 됩니다. 대신 부모 요소를 컨테이너로 래핑하고 그 컨테이너에 스타일 및 overflow-auto, row 등을
          적용하세요.
        </p>
      </Note>
      <Code language="html">
            <textarea readonly>
&#60;div class="q-pa-md"&#62;
  &#60;div class="row"&#62;
    &#60;div class="offset-1 col-3 column justify-between"&#62;
      &#60;p&#62;부모 요소에 스타일 적용&#60;/p&#62;
      &#60;div&#62;
        &#60;div class="bg-yellow q-pa-sm"&#62;노랑 블록&#60;/div&#62;
        &#60;div class="row q-gutter-lg bg-red-4"&#62;
          &#60;div class="q-pa-md bg-green-3" v-for="n in 4" :key="n"&#62;C&#60;/div&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
    &#60;div class="offset-1 col-3 column justify-between"&#62;
      &#60;p&#62;래퍼 요소(컨테이너)에 스타일 적용 - .row&#60;/p&#62;
      &#60;div&#62;
        &#60;div class="bg-yellow q-pa-sm"&#62;노랑 블록&#60;/div&#62;
        &#60;div class="bg-red-4 row"&#62;
          &#60;div class="row q-gutter-lg"&#62;
            &#60;div class="q-pa-md bg-green-3" v-for="n in 4" :key="n"&#62;C&#60;/div&#62;
          &#60;/div&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
    &#60;div class="offset-1 col-3 column justify-between"&#62;
      &#60;p&#62;래퍼 요소(컨테이너)에 스타일 적용 - .overflow-auto&#60;/p&#62;
      &#60;div&#62;
        &#60;div class="bg-yellow q-pa-sm"&#62;노랑 블록&#60;/div&#62;
        &#60;div class="bg-red-4 overflow-auto"&#62;
          &#60;div class="row q-gutter-lg"&#62;
            &#60;div class="q-pa-md bg-green-3" v-for="n in 4" :key="n"&#62;C&#60;/div&#62;
          &#60;/div&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
      <Info label="결과">
        <div class="q-pa-md">
          <div class="row">
            <div class="offset-1 col-3 column justify-between">
              <p>부모 요소에 스타일 적용</p>
              <div>
                <div class="bg-yellow q-pa-sm">노랑 블록</div>
                <div class="row q-gutter-lg bg-red-4">
                  <div class="q-pa-md bg-green-3" v-for="n in 4" :key="n">C</div>
                </div>
              </div>
            </div>
            <div class="offset-1 col-3 column justify-between">
              <p>래퍼 요소(컨테이너)에 스타일 적용 - .row</p>
              <div>
                <div class="bg-yellow q-pa-sm">노랑 블록</div>
                <div class="bg-red-4 row">
                  <div class="row q-gutter-lg">
                    <div class="q-pa-md bg-green-3" v-for="n in 4" :key="n">C</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="offset-1 col-3 column justify-between">
              <p>래퍼 요소(컨테이너)에 스타일 적용 - .overflow-auto</p>
              <div>
                <div class="bg-yellow q-pa-sm">노랑 블록</div>
                <div class="bg-red-4 overflow-auto">
                  <div class="row q-gutter-lg">
                    <div class="q-pa-md bg-green-3" v-for="n in 4" :key="n">C</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Info>
      <Note color="green-13">
        <p><strong>팁</strong></p>
        <p>
          <code>q-gutter-*</code> 클래스는 자식 요소의 내부 수치를 <strong>변경하지 않으므로</strong> 직접 <em>배경</em>이나 <em>테두리</em>를 사용할 수
          있습니다.
        </p>
      </Note>
      <Note color="orange-4">
        <p><strong>경고</strong></p>
        <p>
          <code>q-gutter-*</code> 클래스는 자식 요소의 외부 수치를 <strong>변경하므로</strong> 더이상 너비를 지정하는 <em>col-*</em> 또는
          <em>offset-*</em> 클래스를 사용할 수
          없습니다.
        </p>
      </Note>
      <Code language="html">
            <textarea readonly>
&#60;div class="q-px-xl q-py-md"&#62;
  &#60;p&#62;.q-gutter 및 너비가 지정되지 않은 자식 요소&#60;/p&#62;
  &#60;div class="row"&#62;
    &#60;div class="col bg-red-4"&#62;
      &#60;div class="row q-gutter-lg"&#62;
        &#60;div :class="`bg-green-$&#123;n + 1&#125;`" v-for="n in 7" :key="n"&#62;
          자식 요소
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;

  &#60;q-separator class="q-my-md" /&#62;

  &#60;p&#62;.q-col-gutter 및 너비가 지정되지 않은 자식 요소&#60;/p&#62;
  &#60;div class="row"&#62;
    &#60;div class="col bg-red-4 q-mt-lg"&#62;
      &#60;div class="row q-col-gutter-lg"&#62;
        &#60;div class="semi-transparent" :class="`bg-green-$&#123;n + 1&#125;`" v-for="n in 7" :key="n"&#62;
          자식 요소
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;

  &#60;q-separator class="q-my-md" /&#62;

  &#60;p&#62;.q-gutter 및 .col-6 너비의 자식 요소 .col-6 합은 &#60;strong&#62;100%를 초과&#60;/strong&#62;&#60;/p&#62;
  &#60;div class="row"&#62;
    &#60;div class="col bg-red-4"&#62;
      &#60;div class="row q-gutter-lg"&#62;
        &#60;div class="col-6" :class="`bg-green-$&#123;n + 1&#125;`" v-for="n in 5" :key="n"&#62;
          자식 요소
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;

  &#60;q-separator class="q-my-md" /&#62;

  &#60;p&#62;.q-gutter 및 .col-6 너비의 자식 요소 .col-6 합은 &#60;strong&#62;100%&#60;/strong&#62;&#60;/p&#62;
  &#60;div class="row"&#62;
    &#60;div class="col bg-red-4 q-mt-lg"&#62;
      &#60;div class="row q-col-gutter-lg"&#62;
        &#60;div class="semi-transparent col-6" :class="`bg-green-$&#123;n + 1&#125;`" v-for="n in 5" :key="n"&#62;
          자식 요소
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
      <Info label="결과">
        <div class="q-px-xl q-py-md">
          <p>.q-gutter 및 너비가 지정되지 않은 자식 요소</p>
          <div class="row">
            <div class="col bg-red-4">
              <div class="row q-gutter-lg">
                <div :class="`bg-green-${n + 1}`" v-for="n in 7" :key="n">
                  자식 요소
                </div>
              </div>
            </div>
          </div>
          <q-separator class="q-my-md" />
          <p>.q-col-gutter 및 너비가 지정되지 않은 자식 요소</p>
          <div class="row">
            <div class="col bg-red-4 q-mt-lg">
              <div class="row q-col-gutter-lg">
                <div class="semi-transparent" :class="`bg-green-${n + 1}`" v-for="n in 7" :key="n">
                  자식 요소
                </div>
              </div>
            </div>
          </div>
          <q-separator class="q-my-md" />
          <p>.q-gutter 및 .col-6 너비의 자식 요소 .col-6 합은 <strong>100%를 초과</strong></p>
          <div class="row">
            <div class="col bg-red-4">
              <div class="row q-gutter-lg">
                <div class="col-6" :class="`bg-green-${n + 1}`" v-for="n in 5" :key="n">
                  자식 요소
                </div>
              </div>
            </div>
          </div>
          <q-separator class="q-my-md" />
          <p>.q-gutter 및 .col-6 너비의 자식 요소 .col-6 합은 <strong>100%</strong></p>
          <div class="row">
            <div class="col bg-red-4 q-mt-lg">
              <div class="row q-col-gutter-lg">
                <div class="semi-transparent col-6" :class="`bg-green-${n + 1}`" v-for="n in 5" :key="n">
                  자식 요소
                </div>
              </div>
            </div>
          </div>
        </div>
      </Info>
      <Note color="orange-4">
        <p><strong>경고</strong></p>
        <p>
          <code>q-col-gutter-*</code> 클래스는 자식 요소의 <strong>상단과 좌측에 -패딩</strong>을 적용하기 때문에
          자식
          요소의 배경, 마진 또는 테두리 관련 속성을 대상으로 하는 스타일을 적용해서는 안 됩니다. 대신 자식 요소 내부에 스타일을
          적용하세요.
        </p>
      </Note>
      <Code language="html">
            <textarea readonly>
&#60;div class="q-px-xl q-py-md"&#62;
  &#60;p&#62;.q-col-gutter와 스타일 적용된 자식 요소&#60;/p&#62;
  &#60;div class="row"&#62;
    &#60;div class="col bg-red-4 q-mt-lg"&#62;
      &#60;div class="row q-col-gutter-lg"&#62;
        &#60;div class="semi-transparent col-6 q-pa-md text-center" :class="`bg-green-$&#123;n + 1&#125;`" v-for="n in 5"
          :key="n"&#62;
          자식 요소
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;

  &#60;q-separator class="q-my-md" /&#62;

  &#60;p&#62;.q-col-gutter와 자식 요소 안의 스타일 적용된 요소&#60;/p&#62;
  &#60;div class="row"&#62;
    &#60;div class="col bg-red-4"&#62;
      &#60;div class="row q-col-gutter-lg"&#62;
        &#60;div class="col-6" v-for="n in 5" :key="n"&#62;
          &#60;div class="q-pa-md text-center" :class="`bg-green-$&#123;n + 1&#125;`"&#62;
            자식 요소
          &#60;/div&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;

  &#60;q-separator class="q-my-md" /&#62;

  &#60;p&#62;.q-col-gutter와 QBtn 자식 요소&#60;/p&#62;
  &#60;div class="row"&#62;
    &#60;div class="col bg-red-4 q-mt-lg"&#62;
      &#60;div class="row q-col-gutter-lg"&#62;
        &#60;q-btn class="semi-transparent col-6" color="primary" label="버튼" v-for="n in 5" :key="`md-$&#123;n&#125;`" /&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;

  &#60;q-separator class="q-my-md" /&#62;
  
  &#60;p&#62;.q-col-gutter와 자식 요소 안의 QBtn&#60;/p&#62;
  &#60;div class="row"&#62;
    &#60;div class="col bg-red-4"&#62;
      &#60;div class="row q-col-gutter-lg"&#62;
        &#60;div class="col-6" v-for="n in 5" :key="n"&#62;
          &#60;q-btn class="full-width" color="primary" label="버튼" /&#62;
        &#60;/div&#62;
      &#60;/div&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/div&#62;
            </textarea>
          </Code>
      <Info label="결과">
        <div class="q-px-xl q-py-md">
          <p>.q-col-gutter와 스타일 적용된 자식 요소</p>
          <div class="row">
            <div class="col bg-red-4 q-mt-lg">
              <div class="row q-col-gutter-lg">
                <div class="semi-transparent col-6 q-pa-md text-center" :class="`bg-green-${n + 1}`" v-for="n in 5"
                  :key="n">
                  자식 요소
                </div>
              </div>
            </div>
          </div>
          <q-separator class="q-my-md" />
          <p>.q-col-gutter와 자식 요소 안의 스타일 적용된 요소</p>
          <div class="row">
            <div class="col bg-red-4">
              <div class="row q-col-gutter-lg">
                <div class="col-6" v-for="n in 5" :key="n">
                  <div class="q-pa-md text-center" :class="`bg-green-${n + 1}`">
                    자식 요소
                  </div>
                </div>
              </div>
            </div>
          </div>
          <q-separator class="q-my-md" />
          <p>.q-col-gutter와 QBtn 자식 요소</p>
          <div class="row">
            <div class="col bg-red-4 q-mt-lg">
              <div class="row q-col-gutter-lg">
                <q-btn class="semi-transparent col-6" color="primary" label="버튼" v-for="n in 5" :key="`md-${n}`" />
              </div>
            </div>
          </div>
          <q-separator class="q-my-md" />
          <p>.q-col-gutter와 자식 요소 안의 QBtn</p>
          <div class="row">
            <div class="col bg-red-4">
              <div class="row q-col-gutter-lg">
                <div class="col-6" v-for="n in 5" :key="n">
                  <q-btn class="full-width" color="primary" label="버튼" />
                </div>
              </div>
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
        <Move label="Grid Column 소개" prev :to="{ name: 'gridcolumn' }" />
        <Move label="$q 객체" next :to="{ name: 'qobject' }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.practice:deep(.contents > div) {
  margin-bottom: 16px;
}

.my-content {
  padding: 10px 15px;
  background: rgba(86, 61, 124, .15);
  border: 1px solid rgba(86, 61, 124, .2);
}

.body--dark .my-content {
  filter: invert(100%) contrast(200%);
}

.semi-transparent {
  opacity: .7;
}
</style>