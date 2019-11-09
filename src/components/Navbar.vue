<template>
  <nav class="navbar">
    <div class="container">
      <div class="row">
        <div class="navbar-brand">
          <div class="logo">
            {{ $t('message') }}
          </div>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">{{ $t('navbar.home') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">{{ $t('navbar.about') }}</router-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<script>
// import firebase from '@/firebase.js'

export default {
  name: 'Navbar',
  data() {
    return {
      activeSidebar: false,
      isShowDropdownMenu: false
    }
  },
  methods: {
    changeTrigger(functionName) {
      this.$emit(functionName)
    }
  }
}
</script>

<style lang="scss">
.navbar {
  @media only screen and (max-width: 767px) {
    font-size: 0.875rem;
  }
  .container {
    .row {
      display: flex;
      justify-content: space-between;
      .navbar-brand {
        flex: 0 1;
        .logo {
          margin: 0;
          // padding-left: 2rem;
          text-align: left;
          white-space: nowrap;
          @media only screen and (max-width: 767px) {
            white-space: normal;
          }
        }
      }
      .navbar-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        .nav-item {
          display: flex;
          align-items: center;
          height: 100%;
          margin: 0 .25rem;
        }
      }
    }
  }
  .router-link-active {
    font-weight: $fw-bold;
  }
}
</style>
