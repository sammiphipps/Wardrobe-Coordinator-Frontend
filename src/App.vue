<template>
  <div id="app">
    <header>
      <h1>Closet Organizer</h1>

      <nav v-if="this.$route.path !== '/'">
        <ul>
          <li class="nav-link" >
            <router-link :to="{name: 'outfit'}">Outfit Selector</router-link>
          </li>
          <li class="nav-link">
            <router-link :to="{name: 'manage clothing'}">Manage Clothing</router-link>
          </li>
          <li class="nav-link" @click="logout">
            <router-link :to="{name: 'login'}">Logout</router-link>
          </li>
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
  methods: {
    logout(){
      localStorage.removeItem("token")
      localStorage.removeItem("username")
    }
  }
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

            li{
              padding: 0.5rem; 

              a {
                color: black;
                text-decoration: none;
              }

              a:hover {
                color: $highlight_color;
                cursor: pointer;
              }
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
