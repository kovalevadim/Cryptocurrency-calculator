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
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
        <div class="button-box">
          <button @click="isShowDropdownMenu = !isShowDropdownMenu" class="navbar-more-options icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24"><g id="ic_more_vert_white" transform="translate(-331 -40)"><path id="path" d="M12,0H0V-24H12Z" transform="translate(331 64)" fill="none" fill-rule="evenodd"/><path id="path-2" data-name="path" d="M5-16a2.006,2.006,0,0,0,2-2,2.006,2.006,0,0,0-2-2,2.006,2.006,0,0,0-2,2,2.006,2.006,0,0,0,2,2Zm0,2a2.006,2.006,0,0,0-2,2,2.006,2.006,0,0,0,2,2,2.006,2.006,0,0,0,2-2,2.006,2.006,0,0,0-2-2ZM5-8A2.006,2.006,0,0,0,3-6,2.006,2.006,0,0,0,5-4,2.006,2.006,0,0,0,7-6,2.006,2.006,0,0,0,5-8Z" transform="translate(332 64)" fill="#fff" fill-rule="evenodd"/></g></svg>
          </button>
        </div>
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
  .container {
    .row {
      display: flex;
      justify-content: space-between;
      .navbar-brand {
        flex: 0 1;
        .logo {
          margin: 0;
          padding-left: 2rem;
          text-align: left;
          white-space: nowrap;
        }
      }
    }
  }
  .navbar-nav {
    display: flex;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }
  .router-link-active {
    font-weight: $fw-bold;
  }
}
</style>
