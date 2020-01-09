<template>
  <div id="app">
    <header>
      <h1>Closet Organizer</h1>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import '@/styles/_colors.scss';

  body{
    background-color: $primary_color1;
  }
  
</style>
