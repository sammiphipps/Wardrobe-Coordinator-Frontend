<template>
  <div id="app">
    <header>
      <h1>Closet Organizer</h1>

      <nav>
        <ul>
          <li class="nav-link">Outfit</li>
          <li class="nav-link">Manage Clothing</li>
        </ul>
      </nav>

    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default{
  mounted(){
      this.$store.dispatch("fetchClothingItems")
  },
}
</script>

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
    height: 90%;

    #app {
      height: 100%;

      header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h1{
          font-weight: 150;
        }
      
        nav {

          ul {
            list-style: none;
            display: flex;
            flex-direction: row;
            padding: 0;
            margin: 0;

            .nav-link {
              padding: 0.5rem; 
            }

            .nav-link:hover {
              color: $links_color;
            }
          }
        }
      }

      main {
        height: 91%;
      }

    }

  }
  
</style>
