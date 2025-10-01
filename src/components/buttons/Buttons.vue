<template>
  <div class="container">
    <h2>Buttons</h2>

    <!-- Default Button -->
    <div class="row gap-2 mt-2">
      <div class="col-12-xs col-6-sm col-4-md">
        <button class="btn">default btn</button>
      </div>
    </div>

    <!-- Solid Buttons -->
    <h4 class="mt-4 mb-2">Solid Buttons</h4>
    <div class="row gap-2 mt-2">
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-primary text-white">btn-primary</button>
      </div>
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-secondary text-white">btn-secondary</button>
      </div>
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-error text-white">btn-error</button>
      </div>
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-info">btn-info</button>
      </div>
    </div>

    <!-- Outlined Buttons -->
    <h4 class="mt-4 mb-2">Outlined Buttons</h4>
    <div class="row gap-2 mt-2">
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-outlined-primary text-primary text-hover-white">
          btn-outlined-primary
        </button>
      </div>
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-outlined-secondary text-secondary text-hover-white">
          btn-outlined-secondary
        </button>
      </div>
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-outlined-error text-error text-hover-white">
          btn-outlined-error
        </button>
      </div>
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-outlined-info text-info text-hover-white">
          btn-outlined-info
        </button>
      </div>
    </div>

    <!-- Text Buttons -->
    <h4 class="mt-4 mb-2">Text Buttons</h4>
    <div class="row gap-2 mt-2">
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-text-primary">btn-text-primary</button>
      </div>
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-text-secondary">btn-text-secondary</button>
      </div>
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-text-error">btn-text-error</button>
      </div>
      <div class="col-12-xs col-6-sm col-3-md">
        <button class="btn-text-info">btn-text-info</button>
      </div>
    </div>

    <!-- Team Specific Buttons -->
    <h4 class="mt-4 mb-2">Team Specific Buttons</h4>

    <!-- USA Buttons -->
    <div class="row gap-2 mb-3">
      <div class="col-12-xs col-6-sm col-4-md">
        <h5 class="mb-2">USA Buttons</h5>
        <div class="row gap-1">
          <div class="col-12-xs col-6-sm">
            <button class="btn-usa-primary text-white">USA Primary</button>
          </div>
          <div class="col-12-xs col-6-sm">
            <button class="btn-usa-secondary text-white">USA Secondary</button>
          </div>
        </div>
        <div class="row gap-1 mt-2">
          <div class="col-12-xs col-6-sm">
            <button
              class="btn-outlined-usa-primary text-usa-primary text-hover-white"
            >
              USA Outlined Primary
            </button>
          </div>
          <div class="col-12-xs col-6-sm">
            <button
              class="btn-outlined-usa-secondary text-usa-secondary text-hover-white"
            >
              USA Outlined Secondary
            </button>
          </div>
        </div>
        <div class="row gap-1 mt-2">
          <div class="col-12-xs col-6-sm">
            <button class="btn-text-usa-primary">USA Text Primary</button>
          </div>
          <div class="col-12-xs col-6-sm">
            <button class="btn-text-usa-secondary">USA Text Secondary</button>
          </div>
        </div>
      </div>
    </div>

    <!-- EU Buttons -->
    <div class="row gap-2 mb-3">
      <div class="col-12-xs col-6-sm col-4-md">
        <h5 class="mb-2">EU Buttons</h5>
        <div class="row gap-1">
          <div class="col-12-xs col-6-sm">
            <button class="btn-eu-primary text-white">EU Primary</button>
          </div>
          <div class="col-12-xs col-6-sm">
            <button class="btn-eu-secondary text-eu-primary">
              EU Secondary
            </button>
          </div>
        </div>
        <div class="row gap-1 mt-2">
          <div class="col-12-xs col-6-sm">
            <button
              class="btn-outlined-eu-primary text-eu-primary text-hover-white"
            >
              EU Outlined Primary
            </button>
          </div>
          <div class="col-12-xs col-6-sm">
            <button
              class="btn-outlined-eu-secondary text-eu-secondary text-hover-white"
            >
              EU Outlined Secondary
            </button>
          </div>
        </div>
        <div class="row gap-1 mt-2">
          <div class="col-12-xs col-6-sm">
            <button class="btn-text-eu-primary">EU Text Primary</button>
          </div>
          <div class="col-12-xs col-6-sm">
            <button class="btn-text-eu-secondary">EU Text Secondary</button>
          </div>
        </div>
      </div>
    </div>

    <hr class="mt-4 mb-4" />
  </div>
</template>

<style scoped></style>
