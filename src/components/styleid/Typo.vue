<script setup>
import { defineAsyncComponent } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>타이포그래피</Title>
      <p>
        아래 섹션에서 Quasar에서 제공하는 타이포그래피를 다룰 것입니다.
      </p>
      <Info advice color="teal-4">
        <p>Quasar에서는 아래와 같이 여러가지 텍스트 스타일을 제공합니다.</p>
        <p>기본적으로 html이 제공하는 h1, h2, h3 등을 쓰거나 임의로 스타일을 지정해서 사용해도 되는데 굳이 이런 텍스트 스타일을 왜 제공하는지 처음 사용할 때는 잘 알지 못했는데요. 반응형
          웹사이트나 앱을 만들 때 <strong>텍스트 크기가 각 디바이스에서 들쑥날쑥하고 맞추기 어렵다</strong>는 사실을 깨달았습니다. 그래서 Quasar에서 제공하는 텍스트 스타일을 사용할
          경우 이런 들쑥날쑥 한 문제들을 어느 정도 보완해 준다는 사실을 알게 됐습니다.</p>
      </Info>
    </section>
    <section id="style" data-name="텍스트 스타일">
      <Title sub>텍스트 스타일</Title>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md">
        <thead>
          <tr>
            <th>클래스</th>
            <th>미리보기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-h1</code><code>h1</code>
              </div>
            </td>
            <td>
              <div class="text-h1">Headline 1</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-h2</code><code>h2</code>
              </div>
            </td>
            <td>
              <div class="text-h2">Headline 2</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-h3</code><code>h3</code>
              </div>
            </td>
            <td>
              <div class="text-h3">Headline 3</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-h4</code><code>h4</code>
              </div>
            </td>
            <td>
              <div class="text-h4">Headline 4</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-h5</code><code>h5</code>
              </div>
            </td>
            <td>
              <div class="text-h5">Headline 5</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-h6</code><code>h6</code>
              </div>
            </td>
            <td>
              <div class="text-h6">Headline 6</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-subtitle1</code>
              </div>
            </td>
            <td>
              <div class="text-subtitle1">Subtitle 1</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-subtitle2</code>
              </div>
            </td>
            <td>
              <div class="text-subtitle2">Subtitle 2</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-body1</code>
              </div>
            </td>
            <td>
              <div class="text-body1">Body 1. 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-body2</code>
              </div>
            </td>
            <td>
              <div class="text-body2">Body 2. 동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-caption</code>
              </div>
            </td>
            <td>
              <div class="text-caption">Caption text</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-overline</code>
              </div>
            </td>
            <td>
              <div class="text-overline">Overline</div>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section id="weight" data-name="텍스트 굵기">
      <Title sub>텍스트 굵기</Title>
      <Info advice color="teal-4">
        <p>폰트에 해당 굵기가 포함된 경우에만 정상적으로 표시됩니다.</p>
        <p>시스템 기본 폰트(따로 폰트를 설정하지 않은 경우), 웹폰트, 임의 폰트 등을 사용하는 경우 해당 폰트가 Quasar에서 지정한 굵기들을 지원해야만 정상적으로 사용이 가능합니다.</p>
        <p>아래 미리 보기에 정상적인 폰트 굵기를 표시하기 위해 해당 페이지에서만 구글 웹폰트인 '<em>Noto Sans Korean</em>'을 사용했습니다.</p>
      </Info>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md">
        <thead>
          <tr>
            <th>클래스</th>
            <th>미리보기(<b>Noto Sans Korean</b>)</th>
          </tr>
        </thead>
        <tbody class="noto-sans">
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-weight-thin</code>
              </div>
            </td>
            <td>
              <div class="text-weight-thin">
                One, two, three 용기가 생겼지<br />
                이미 아는 니 눈치<br />
                고개를 돌려 천천히, 여기<br />
                You see 여기 보이니?
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-weight-light</code>
              </div>
            </td>
            <td>
              <div class="text-weight-light">
                One, two, three 용기가 생겼지<br />
                이미 아는 니 눈치<br />
                고개를 돌려 천천히, 여기<br />
                You see 여기 보이니?
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-weight-regular</code>
              </div>
            </td>
            <td>
              <div class="text-weight-regular">
                One, two, three 용기가 생겼지<br />
                이미 아는 니 눈치<br />
                고개를 돌려 천천히, 여기<br />
                You see 여기 보이니?
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-weight-medium</code>
              </div>
            </td>
            <td>
              <div class="text-weight-medium">
                One, two, three 용기가 생겼지<br />
                이미 아는 니 눈치<br />
                고개를 돌려 천천히, 여기<br />
                You see 여기 보이니?
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-weight-bold</code>
              </div>
            </td>
            <td>
              <div class="text-weight-bold">
                One, two, three 용기가 생겼지<br />
                이미 아는 니 눈치<br />
                고개를 돌려 천천히, 여기<br />
                You see 여기 보이니?
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="row q-gutter-xs">
                <code>text-weight-bolder</code>
              </div>
            </td>
            <td>
              <div class="text-weight-bolder">
                One, two, three 용기가 생겼지<br />
                이미 아는 니 눈치<br />
                고개를 돌려 천천히, 여기<br />
                You see 여기 보이니?
              </div>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
    <section id="default" data-name="기본 폰트">
      <Title sub>기본 폰트</Title>
      <p>기본으로 포함된 웹폰트는
        <Link href="https://fonts.google.com/specimen/Roboto">Roboto</Link>입니다. <strong>필수 폰트는 아니므로</strong> 원하는 폰트를 사용할
        수 있습니다.
      </p>
      <p>Roboto는 100, 300, 400, 500, 700의 5가지 폰트 굵기가 포함되어 있습니다.</p>
      <p>Roboto 폰트가 기본적으로 포함되지 않도록 하려면, 아래 파일에 해당 부분을 제거하세요. (Quasar Vite 플러그인 및 css를 사용하는 경우)</p>
      <Info advice color="teal-4">
        <p>기존 Quasar 버전에서는 Roboto 폰트가 강제로 설치 적용되었으나, 현재 버전에서는 사용 여부를 사용자가 설정할 수 있게 되었습니다.</p>
      </Info>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// 파일: main.js

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
        </textarea>
      </Code>
    </section>
    <section id="custom" data-name="사용자 정의 폰트 추가">
      <Title sub>사용자 정의 폰트 추가</Title>
      <p>다른 폰트를 포함시켜 앱에서 사용하는 것도 가능합니다. 다음은 이를 수행하는 한 가지 방법입니다:
      </p>
      <ol>
        <li>원하는 디렉터리에 새 웹폰트 <em>[customfont].woff</em>(확장자가 무엇이든 상관없지만, 모든 브라우저 간의 호환성을 위해 woff 추천)를 원하는 디렉터리에 복사합니다.
          예를 들면:
          <em>./src/css/fonts/[customfont].woff</em>
        </li>
        <li><em>./src/css/app.{css|sass|scss|styl}</em>에서 폰트를 선언합니다.(또는 적합한 모든 장소에서 웹 폰트 파일의 상대 경로를 올바르게 적용합니다.)</li>
      </ol>
      <Code class="q-mb-lg" language="css">
        <textarea readonly>
@font-face &#123;
  font-family: customfont;
  src: url(./fonts/customfont.woff);
&#125;

// 사용자 정의 폰트를 적용하는 클래스를 선언
.my-font &#123;
  font-family: 'customfont';
&#125;
        </textarea>
      </Code>
      <ol start="3">
        <li>그런 다음 필요한 곳에 해당 클래스를 사용하세요.</li>
      </ol>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="Transitions" prev :to="{ name: 'transition' }" />
        <Move label="색상 팔레트" next :to="{ name: 'color' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

.noto-sans {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>