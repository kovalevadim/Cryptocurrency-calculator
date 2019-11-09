<template>
  <div class="main">
    <div class="container">
      <h1>{{ $t('message') }}</h1>
      <h3>{{ $t('about-page.stack') }}:</h3>
      <ul>
        <li>{{ $t('about-page.stack-list.vue') }}</li>
        <li>{{ $t('about-page.stack-list.api') }}</li>
        <li>{{ $t('about-page.stack-list.websocket') }}</li>
        <li>{{ $t('about-page.stack-list.i18n') }}</li>
        <li>{{ $t('about-page.stack-list.hosting') }}</li>
      </ul>
      <p>{{ $t('about-page.github') }} - <a href="https://github.com/kovalevadim">https://github.com/kovalevadim</a></p>
      <p>{{ $t('about-page.telegram') }} - <a href="https://t.me/kovalevadim">@kovalevadim</a></p>
    </div>
  </div>
</template>
