<template>
  <div class="q-px-md text-body2">
    <section id="intro" data-name="Flexbox 소개">
      <div class="text-h4 text-primary text-weight-bold q-py-lg">
        Flexbox 소개
      </div>
      <p>
        퀘이사는 <a class="text-primary" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank"
          rel="noopener noreferrer">Flexbox
          <q-icon name="open_in_new" />
        </a>의 도움으로 손쉽게 UI를 구축하는 데 도움이 되는 많은 CSS 클래스를 제공합니다. 여러 가지 옵션을 사용하여 행과 열을 다룬다고 생각하면 됩니다.
      </p>
      <p>
        Flexbox(퀘이사 Flex CSS 클래스를 기반) 모듈은 컨테이너 안의 아이템(크기를 알 수 없고/없거나 동적으로 변하는 아이템도 포함) 사이에 공간을 분배, 정렬하는 더 효율적인 방법을 제공하는
        것을 목표로 하고 있습니다.(따라서 "flex(유연한)"라는 단어를 사용)
      </p>
      <div class="note">
        <p><strong>팁</strong></p>
        <p>이 페이지는 퀘이사 Flex CSS 클래스의 기본 이론을 다루고 Grid Row, Grid Column 및 Grid Gutter 페이지를 더 깊이 이해할 수 있도록 대비해 줍니다. </p>
      </div>
    </section>
    <section id="key" data-name="핵심 개념">
      <div class="text-h5 text-primary text-weight-bold q-mt-xl q-pt-lg">
        핵심 개념
      </div>
      <q-separator />
      <p class="q-mt-md">
        퀘이사 Flex CSS 클래스는 컨테이너(부모) 또는 컨테이너 안의 아이템들(자식)에게 적용됩니다.
      </p>
      <p>
        <img src="/../../images/layout/flexbox-container.svg" width="300" />
        <img src="/images/layout/flexbox-items.svg" width="300" />
      </p>
    </section>
  </div>
</template>