<template>
  <nav class="navbar-primary text-white mb-4">
    <div class="container">
      <div class="navbar-content">
        <div class="navbar-brand">
          <router-link to="/" class="brand-link">
            <h2 class="site-title">Tuey Designs</h2>
          </router-link>
          <p class="brand-subtitle">A set of designs for your next project</p>
        </div>

        <div class="navbar-nav">
          <router-link
            to="/"
            class="nav-link"
            :class="{ active: $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link
            to="/typography"
            class="nav-link"
            :class="{ active: $route.path === '/typography' }"
          >
            Typography
          </router-link>
          <router-link
            to="/buttons"
            class="nav-link"
            :class="{ active: $route.path === '/buttons' }"
          >
            Buttons
          </router-link>
          <router-link
            to="/cards"
            class="nav-link"
            :class="{ active: $route.path === '/cards' }"
          >
            Cards
          </router-link>
          <router-link
            to="/colors"
            class="nav-link"
            :class="{ active: $route.path === '/colors' }"
          >
            Colors
          </router-link>
          <router-link
            to="/grid"
            class="nav-link"
            :class="{ active: $route.path === '/grid' }"
          >
            Grid
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.navbar-brand {
  flex: 1;
  min-width: 200px;
}

.brand-link {
  text-decoration: none;
  color: inherit;
}

.brand-link:hover {
  text-decoration: none;
  color: inherit;
}

.brand-subtitle {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

.navbar-nav {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-weight: 500;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  text-decoration: none;
  color: white;
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 600;
}

@media (max-width: 768px) {
  .navbar-content {
    flex-direction: column;
    text-align: center;
  }

  .navbar-nav {
    justify-content: center;
    gap: 1rem;
  }

  .nav-link {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}
</style>
