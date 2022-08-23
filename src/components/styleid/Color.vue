<script setup>
import { defineAsyncComponent, shallowReadonly, ref } from 'vue'
const Code = defineAsyncComponent(() => import('@/components/block/Code.vue'))
const CopyColor = defineAsyncComponent(() => import('@/components/styleid/CopyColor.vue'))
const brandColors = shallowReadonly(['primary', 'secondary', 'accent', 'dark', 'positive', 'negative', 'info', 'warning'])
const colors = shallowReadonly(['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'])
const mode = ref('rgb')
</script>

<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="소개">
      <Title head>색상 팔레트</Title>
      <p>
        Quasar Framework는 기본적으로 다양한 색상을 제공합니다. CSS 코드에서 Sass/SCSS 변수로 사용하거나 HTML 템플릿에서 CSS 클래스로 직접 사용할 수 있습니다.
      </p>
      <Info advice color="teal-4">
        <p>컴포넌트와 더불어 색상 참고를 위해 가장 많이 사용하는 페이지입니다.</p>
      </Info>
    </section>
    <section id="brand" data-name="브랜드 색상">
      <Title sub>브랜드 색상</Title>
      <p>Quasar 컴포넌트가 사용하는 대부분의 색상은 변경 가능한 아래 색상들과 밀접하게 연관되어 있습니다. 이러한 색상을 선택하는 것이 앱의 디자인을 차별화하기 위해 해야 할 첫 번째
        단계입니다.
        기본값을 변경하면 Quasar 컴포넌트가 기본값으로 설정된 색상들의 지침을 따른다는 것을 바로 알 수 있습니다.
      </p>
      <div class="row q-col-gutter-xs">
        <div class="col-6 col-sm-4 col-md-3" v-for="bc in brandColors" :key="bc">
          <CopyColor class="full-width" :color="bc" :label="bc" :type="mode" />
        </div>
      </div>
      <Note>
        <p><b>팁</b></p>
        <p>Quasar 공식 홈페이지의
          <Link href="https://quasar.dev/style/theme-builder">테마 빌더</Link>를 통해 웹사이트/앱의 브랜드 색상 사용자 정의 도구를 확인해 보세요.
        </p>
      </Note>
    </section>
    <section id="list" data-name="색상 목록">
      <Title sub>색상 목록</Title>
      <p>다음은 기본으로 제공되는 색상 목록입니다. 앱의 <em>*.vue</em> 파일 내에서 CSS 클래스(HTML 템플릿) 또는 <em>&lt;style lang="..."&gt;</em>태그의
        <Link href="https://quasar.dev/style/sass-scss-variables">Sass/SCSS 변수
        </Link>로 사용할 수 있습니다.
      </p>
      <Info advice color="teal-4">
        <p>원하는 형식(RGB 또는 HEX)을 선택하고 색상을 클릭하면 색상 값이 클립보드로 복사됩니다.</p>
      </Info>
      <p>
        <q-btn-toggle dense no-caps unelevated v-model="mode" toggle-color="primary" :options="[
          { label: 'RGB', value: 'rgb' },
          { label: 'HEX', value: 'hex' }
        ]" class="toggle" />
      </p>
      <div class="row q-col-gutter-md">
        <div class="col-6 col-sm-4 col-md-3 column" v-for="c in colors" :key="c">
          <div class="overflow-hidden rounded-borders">
            <CopyColor square class="full-width" :color="c" :label="c" :type="mode" />
            <CopyColor square v-for="s in 14" :key="s" class="full-width" :color="`${c}-${s}`"
              :text-color="s % 11 < 6 ? 'black' : ''" :label="`${c}-${s}`" :type="mode" />
          </div>
        </div>
      </div>
    </section>
    <section id="class" data-name="CSS 클래스로 사용">
      <Title sub>CSS 클래스로 사용</Title>
      <p><code>text-</code> 또는 <code>bg-</code> 접두사를 클래스 이름으로 사용하여 텍스트 또는 배경의 색상을 변경합니다.</p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;!-- 텍스트 색상 변경 --&#62;
&#60;p class="text-primary"&#62;....&#60;/p&#62;

&#60;!-- 배경 색상 변경 --&#62;
&#60;p class="bg-positive"&#62;...&#60;/p&#62;
        </textarea>
      </Code>
    </section>
    <section id="own" data-name="나만의 색상 추가">
      <Title sub>나만의 색상 추가</Title>
      <p>컴포넌트에 자신만의 색상을 사용하고 싶다면('brand'라는 색상을 추가한다고 가정) 앱에 다음 CSS를 추가하기만 하면 됩니다.</p>
      <Code class="q-mb-lg" language="css">
        <textarea readonly>
.text-brand &#123;
  color: #a2aa33 !important;
&#125;
.bg-brand &#123;
  background: #a2aa33 !important;
&#125;
        </textarea>
      </Code>
      <p>이제 Quasar 컴포넌트에 이 색상을 사용할 수 있습니다.</p>
      <Code class="q-mb-lg" language="html">
        <textarea readonly>
&#60;q-btn color="brand" ... /&#62;
        </textarea>
      </Code>
      <p>
        <Link>getPaletteColor</Link> 유틸을 사용하여 JS 컨텍스트에서 사용자 정의 색상 값(hex 문자)에 액세스할 수 있습니다.>
      </p>
    </section>
    <section id="dynamic" data-name="브래드 색상의 동적 변경(동적 테마 색상)">
      <Title sub>브래드 색상의 동적 변경(동적 테마 색상)</Title>
    </section>
    <section id="how" data-name="작동 방법" sub>
      <Title minor>작동 방법</Title>
      <p>실행 중에 브랜드 색상(<code>primary</code>, <code>secondary</code>, <code>accent</code>, <code>dark</code>,
        <code>positive</code>, <code>negative</code>, <code>info</code>, <code>warning</code>)을 동적으로 사용자 지정할 수 있습니다. 즉,
        하나의
        빌드 결과물 안에 기본
        색상 테마와 실행 중 선택한 테마 모두 표시할 수 있습니다.
      </p>
      <p>기본 색상 구성은 루트 요소 (<code>:root</code>)에 저장된 CSS 사용자 정의 속성으로 사용됩니다. 각 속성의 이름은 <code>--q-${name}</code>(예:
        <code>--q-primary</code>, <code>--q-secondary</code>)이며 유효한
        CSS 색상이 값으로 있어야 합니다.
      </p>
      <p>CSS 사용자 정의 속성은 일반 CSS와 동일한 상속 규칙을 사용하므로 원하는 색상만 재정의할 수 있으며 나머지는 상위 요소에서 상속됩니다.</p>
      <p>
        <code>html</code> (<code>document.documentElement</code>) 또는
        <code>body</code> (<code>document.body</code>) 요소에 사용자 정의된 색상 속성을 설정하는 것이 좋습니다. 이렇게 하면 사용자 지정 색상을 삭제하여 기본
        색상으로 되돌릴 수 있습니다.
      </p>
      <p>자세한 정보는
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables">MDN</Link>의 CSS 사용자 지정 속성(변수)를
        참고하세요.
      </p>
    </section>
    <section id="setcssvar" data-name="유틸: setCssVar" sub>
      <Title minor>유틸: setCssVar</Title>
      <p>Quasar는 브랜드 색상에도 사용할 수 있는 Quasar CSS 변수 설정 헬퍼 함수를 제공합니다:
        <code>setCssVar(colorName, colorValue[, element])</code>
      </p>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md">
        <thead>
          <tr>
            <th>매개변수</th>
            <th>유형</th>
            <th>필수</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>colorName</code>
            </td>
            <td>String</td>
            <td>예</td>
            <td><code>primary</code>, <code>secondary</code>, <code>accent</code>, <code>dark</code>,
              <code>positive</code>, <code>negative</code>, <code>info</code>, <code>warning</code> 중 하나
            </td>
          </tr>
          <tr>
            <td>
              <code>colorValue</code>
            </td>
            <td>String</td>
            <td>예</td>
            <td>
              유효한 CSS 색상 값
            </td>
          </tr>
          <tr>
            <td>
              <code>element</code>
            </td>
            <td>Element</td>
            <td>-</td>
            <td>
              (기본값: <code>document.body</code>) 사용자 정의 속성이 설정될 요소입니다.
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      <p>헬퍼를 사용하여 브랜드 색상을 설정하는 예:</p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
{{ 'import { setCssVar } from \'quasar\'' }}

setCssVar('light', '#DDD')
setCssVar('primary', '#33F')
setCssVar('primary', '#F33', document.getElementById('rebranded-section-id'))
        </textarea>
      </Code>
      <p>순수 자바스크립트를 사용하여 브랜드 색상을 설정하는 예:</p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// 원시 자바스크립트의 setCssVar('primary')와 동일:
document.body.style.setProperty('--q-primary', '#0273d4')
        </textarea>
      </Code>
    </section>
    <section id="getcssvar" data-name="유틸: getCssVar" sub>
      <Title minor>유틸: getCssVar</Title>
      <p>Quasar는 브랜드 색상에도 사용할 수 있는 Quasar CSS 변수 값을 가져오는 헬퍼 함수를 제공합니다:
        <code>getCssVar(colorName[, element])</code>
      </p>
      <q-markup-table flat bordered wrap-cells class="text-left q-mb-md">
        <thead>
          <tr>
            <th>매개변수</th>
            <th>유형</th>
            <th>필수</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>colorName</code>
            </td>
            <td>String</td>
            <td>예</td>
            <td><code>primary</code>, <code>secondary</code>, <code>accent</code>, <code>dark</code>,
              <code>positive</code>, <code>negative</code>, <code>info</code>, <code>warning</code> 중 하나
            </td>
          </tr>
          <tr>
            <td>
              <code>element</code>
            </td>
            <td>Element</td>
            <td>-</td>
            <td>
              (기본값: <code>document.body</code>) 사용자 정의 속성을 가져올 요소입니다.
            </td>
          </tr>
        </tbody>
      </q-markup-table>
      <p>헬퍼를 사용하여 브랜드 색상을 가져오는 예:</p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
{{ 'import { getCssVar } from \'quasar\'' }}

getCssVar('primary') // '#33F'
getCssVar('primary', document.getElementById('rebranded-section-id'))
        </textarea>
      </Code>
      <p>이 헬퍼는 원시 자바스크립트의 <code>getPeropertyValue()</code>를 래핑 하여 편리하게 사용 가능합니다. 다음은 이와 동일한 순수 자바스크립트의 예제입니다:</p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// 원시 자바스크립트의 getCssVar('primary')와 동일:
getComputedStyle(document.documentElement)
  .getPropertyValue('--q-primary') // #0273d4
        </textarea>
      </Code>
    </section>
    <section id="more" data-name="더 많은 색상 유틸" sub>
      <Title minor>더 많은 색상 유틸</Title>
      <p>위 유틸 외에도 관심을 가질만한 색상을 처리하기 위한 전용 섹션 문서가 있습니다:
        <Link href="https://quasar.dev/quasar-utils/color-utils">색상 유틸</Link>
      </p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
{{ 'import { colors, setCssVar } from \'quasar\'' }}

const &#123; lighten &#125; = colors

const newPrimaryColor = '#933'
setCssVar('primary', newPrimaryColor)
setCssVar('primary-darkened', lighten(newPrimaryColor, -10))
        </textarea>
      </Code>
    </section>
    <section id="default" data-name="기본값 설정">
      <Title sub>기본값 설정</Title>
      <p>직접 CSS를 변경하지 않고 브랜드 색상을 설정할 수 있는 방법은 다음과 같습니다.
      </p>
      <Code class="q-mb-lg" language="javascript">
        <textarea readonly>
// UMD 또는 Quasar Vite 플러그인 또는 Vue CLI
app.use(Quasar, &#123;
  config: &#123;
    brand: &#123;
      primary: '#ff0000',
      // ...
    &#125;
  &#125;
&#125;)
        </textarea>
      </Code>
    </section>
    <div class="q-py-xl"></div>
    <q-separator class="q-mb-lg" />
    <div>
      <div class="row justify-between items-cetner">
        <Move label="타이포그래피" prev :to="{ name: 'typo' }" />
        <Move label="다크 모드" next :to="{ name: 'dark' }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.q-hoverable:deep(.q-focus-helper) {
  display: none;
}

.toggle {
  box-shadow: 0 0 0 1px var(--q-primary);
}
</style>