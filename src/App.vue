<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCount } from './composables/countStore'
const countStore = useCount()
const router = useRouter()

watch(countStore.globalCount, (val) => {
  if (val > 1000) {
    router.push('/user')
  }
})
</script>

<template>
  <Suspense>
    <div>
      <header class="header">
        <span class="logo">
          <img src="@/assets/vue-heart.png" width="30" />C'est La Vue
        </span>
        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/login">Login</router-link>
          <router-link to="/user">User</router-link>
        </nav>
      </header>
      <h2>{{ countStore.globalCount }}</h2>
      <!-- <HomePage v-if="currentPage === 'Home'" />
      <UserPage v-else-if="currentPage === 'Users'" />
      <LoginPage v-else /> -->
      <router-view />
    </div>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style>
html {
  background-color: papayawhip;
}

* {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

pre {
  font-family: 'Consolas', monospace;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}

span.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
}

span.logo img {
  margin-right: 8px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.nav a:last-child {
  padding-right: 0;
}

.button {
  border: 3px solid orangered !important;
}
</style>