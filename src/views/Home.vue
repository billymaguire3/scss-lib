<template>
  <div class="container">
    <h1 class="display-1 mb-4">Tuey Designs</h1>
    <p class="lead mb-4">A set of designs for your next project</p>

    <div class="row mt-5">
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">Typography</h5>
            <p class="card-text">
              Beautiful typography with consistent spacing and hierarchy.
            </p>
            <router-link to="/typography" class="btn btn-primary"
              >View Typography</router-link
            >
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">Buttons</h5>
            <p class="card-text">
              Various button styles and states for all your needs.
            </p>
            <router-link to="/buttons" class="btn btn-primary"
              >View Buttons</router-link
            >
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">Cards</h5>
            <p class="card-text">
              Flexible card components for content organization.
            </p>
            <router-link to="/cards" class="btn btn-primary"
              >View Cards</router-link
            >
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">Colors</h5>
            <p class="card-text">
              A carefully crafted color palette for your designs.
            </p>
            <router-link to="/colors" class="btn btn-primary"
              >View Colors</router-link
            >
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title">Grid System</h5>
            <p class="card-text">Responsive grid system for perfect layouts.</p>
            <router-link to="/grid" class="btn btn-primary"
              >View Grid</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
