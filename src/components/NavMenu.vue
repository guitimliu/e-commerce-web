<template>
    <div class="bg-white sticky-top">
      <div class="container">
        <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
          <a class="navbar-brand position-absolute" href="./index.html"
            style="left: 50%; transform: translate(-50%, -50%); top: 50%;">
            Navbar
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse bg-white custom-header-md-open" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="menu in menuData" :key="menu.name">
                <router-link class="nav-link" :to="menu.link">{{ menu.name }}</router-link>
              </li>
              <!-- <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li> -->
            </ul>
          </div>
          <div class="d-flex">
            <a href="#"><i class="fas bi-heart me-5"></i></a>
            <a href="./cart-2.html"><i class="fas fa-shopping-cart"></i></a>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      menuData: [
        {
          name: 'Home',
          link: '/'
        }, {
          name: 'About',
          link: '/about'
        }
      ]
    }
  }
}
</script>
