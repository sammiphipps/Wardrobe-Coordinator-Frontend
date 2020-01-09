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
@import url('https://fonts.googleapis.com/css?family=Cormorant&display=swap');

  html {
    height: 100%;
  }

  body{
    background-image: url("https://i.pinimg.com/originals/28/11/5c/28115c5b099c02f76f7b3308c33bfae3.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    font-family: 'Cormorant', serif;
    font-size: large;
    height: 97%;

    #app {
      height: 100%;

      header {

        h1{
          font-weight: 150;
        }
      
      }

      main {
        height: 91%;
      }

    }

  }
  
</style>
