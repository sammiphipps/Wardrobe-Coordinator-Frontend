<template>
  <div id="app">
    <header>
      <h1>Wardrobe Coordinator</h1>

      <nav v-if="this.$route.path !== '/'">
        <ul class="nav-list">
          <li class="nav-link">
            <router-link :to="{name: 'outfit'}">Wardrobe</router-link>
          </li>
          <li class="nav-link">
            <router-link :to="{name: 'show outfit'}">Favorite Outfits</router-link>
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
  methods: {
    logout(){
      localStorage.removeItem("token")
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
    font-family: 'Cormorant', serif;
    font-size: large;
    margin: 0;
    box-sizing: border-box;
    min-height: 100%;

    #app {
      background-image: url("https://i.pinimg.com/originals/28/11/5c/28115c5b099c02f76f7b3308c33bfae3.jpg");
      background-repeat: no-repeat;
      background-size:cover;
      min-height: -webkit-fill-available;
      display: flex;
      flex-direction: column;

      header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h1{
          margin: 1rem 0 1rem 1.5rem;
          font-weight: 150;
        }
      
        nav {
          background-color: $primary_color;
          margin-right: 1rem;
          border-radius: 0.5rem;

          .nav-list {
            list-style: none;
            display: flex;
            flex-direction: row;
            padding: 0;
            margin: 0;
          }

          .nav-list > li{
            padding: 0.5rem; 

            a {
              color: black;
              text-decoration: none;
            }

            a:hover {
              color: hsl(17, 36%, 40%);
              cursor: pointer;
            }
          }
        }
      }

    }
  }
  
</style>
