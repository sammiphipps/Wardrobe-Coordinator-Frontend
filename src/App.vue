<template>
  <div id="app">
    <header>
      <h1>Wardrobe Coordinator</h1>

      <nav v-if="this.$route.path !== '/'">
        <ul class="nav-list">
          <li class="nav-link dropdown">
            <span>Outfit</span>
            <ul class="dropdown-content">
              <li><router-link :to="{name: 'outfit'}">Closet</router-link></li>
              <li><router-link :to="{name: 'show outfit'}">Favorites</router-link></li>
            </ul>
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
    background-image: url("https://i.pinimg.com/originals/28/11/5c/28115c5b099c02f76f7b3308c33bfae3.jpg");
    background-repeat: no-repeat;
    background-size:cover;
    font-family: 'Cormorant', serif;
    font-size: large;
    margin: 0;
    box-sizing: border-box;
    height: 100%;

    #app {
      height: 100%;
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

      main {
        height: 100%;
      }

      .dropdown{

        .dropdown-content{ 
          list-style:none;
          margin: 0.5rem;
          padding: 0.15rem 0.5rem 0.15rem 0.25rem;
          display: none;
          position: absolute;
          width: auto;
          height: auto;
          right: 13.5rem;
          left: auto;
          background-color: $primary_color;
          border-radius: 0.5rem;

          li {
            margin: 0;
            padding: 0.25rem;
            color: black;
            text-align: right;
          }
        }
      }

      .dropdown:hover{
        color: hsl(17, 36%, 40%);
        cursor: pointer;
      }

      .dropdown:hover .dropdown-content{
        display: block;
      }

    }

  }
  
</style>
