<template>
  <div class="colors-showcase">
    <!-- Main Color Palette -->
    <section class="color-section">
      <h2 class="h2 mb-4">Main Color Palette</h2>
      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card">
            <div class="color-swatch bg-primary"></div>
            <div class="card-body text-center">
              <h3 class="h5 mb-2">Primary</h3>
              <p class="small text-gray mb-1">#BF0A30</p>
              <span class="badge bg-primary">Badge</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card">
            <div class="color-swatch bg-secondary"></div>
            <div class="card-body text-center">
              <h3 class="h5 mb-2">Secondary</h3>
              <p class="small text-gray mb-1">#002868</p>
              <span class="badge bg-secondary">Badge</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card">
            <div class="color-swatch bg-error"></div>
            <div class="card-body text-center">
              <h3 class="h5 mb-2">Error</h3>
              <p class="small text-gray mb-1">#F30540</p>
              <span class="badge bg-error">Badge</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card">
            <div class="color-swatch bg-info"></div>
            <div class="card-body text-center">
              <h3 class="h5 mb-2">Info</h3>
              <p class="small text-gray mb-1">#F6C31C</p>
              <span class="badge bg-info">Badge</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Regional Colors -->
    <section class="color-section">
      <h2 class="h2 mb-4">Regional Colors</h2>
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <div class="card">
            <div class="card-body">
              <h3 class="h4 mb-3">🇺🇸 USA Colors</h3>
              <div class="d-flex gap-3 mb-3">
                <div class="flex-1">
                  <div class="color-swatch-sm bg-usa-primary"></div>
                  <p class="small text-center mt-2 mb-0">USA Primary</p>
                  <p class="small text-center text-gray">#BF0A30</p>
                </div>
                <div class="flex-1">
                  <div class="color-swatch-sm bg-usa-secondary"></div>
                  <p class="small text-center mt-2 mb-0">USA Secondary</p>
                  <p class="small text-center text-gray">#002868</p>
                </div>
              </div>
              <button class="btn bg-usa-primary text-white w-100">
                USA Button
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card">
            <div class="card-body">
              <h3 class="h4 mb-3">🇪🇺 Europe Colors</h3>
              <div class="d-flex gap-3 mb-3">
                <div class="flex-1">
                  <div class="color-swatch-sm bg-eu-primary"></div>
                  <p class="small text-center mt-2 mb-0">EU Primary</p>
                  <p class="small text-center text-gray">#003399</p>
                </div>
                <div class="flex-1">
                  <div class="color-swatch-sm bg-eu-secondary"></div>
                  <p class="small text-center mt-2 mb-0">EU Secondary</p>
                  <p class="small text-center text-gray">#FFCC00</p>
                </div>
              </div>
              <button class="btn bg-eu-primary text-white w-100">
                Europe Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Color Variations -->
    <section class="color-section">
      <h2 class="h2 mb-4">Primary Color Variations</h2>
      <div class="card">
        <div class="card-body">
          <h3 class="h5 mb-3">Dark to Light Spectrum</h3>
          <div class="color-gradient">
            <div class="color-box bg-primary-dark-8 text-white">
              <span class="color-label">Dark 8</span>
            </div>
            <div class="color-box bg-primary-dark-6 text-white">
              <span class="color-label">Dark 6</span>
            </div>
            <div class="color-box bg-primary-dark-4 text-white">
              <span class="color-label">Dark 4</span>
            </div>
            <div class="color-box bg-primary-dark-2 text-white">
              <span class="color-label">Dark 2</span>
            </div>
            <div class="color-box bg-primary text-white">
              <span class="color-label">Base</span>
            </div>
            <div class="color-box bg-primary-light-2 text-white">
              <span class="color-label">Light 2</span>
            </div>
            <div class="color-box bg-primary-light-4 text-white">
              <span class="color-label">Light 4</span>
            </div>
            <div class="color-box bg-primary-light-6">
              <span class="color-label">Light 6</span>
            </div>
            <div class="color-box bg-primary-light-8">
              <span class="color-label">Light 8</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Secondary Color Variations -->
    <section class="color-section">
      <h2 class="h2 mb-4">Secondary Color Variations</h2>
      <div class="card">
        <div class="card-body">
          <h3 class="h5 mb-3">Dark to Light Spectrum</h3>
          <div class="color-gradient">
            <div class="color-box bg-secondary-dark-8 text-white">
              <span class="color-label">Dark 8</span>
            </div>
            <div class="color-box bg-secondary-dark-6 text-white">
              <span class="color-label">Dark 6</span>
            </div>
            <div class="color-box bg-secondary-dark-4 text-white">
              <span class="color-label">Dark 4</span>
            </div>
            <div class="color-box bg-secondary-dark-2 text-white">
              <span class="color-label">Dark 2</span>
            </div>
            <div class="color-box bg-secondary text-white">
              <span class="color-label">Base</span>
            </div>
            <div class="color-box bg-secondary-light-2 text-white">
              <span class="color-label">Light 2</span>
            </div>
            <div class="color-box bg-secondary-light-4 text-white">
              <span class="color-label">Light 4</span>
            </div>
            <div class="color-box bg-secondary-light-6">
              <span class="color-label">Light 6</span>
            </div>
            <div class="color-box bg-secondary-light-8">
              <span class="color-label">Light 8</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Text Colors -->
    <section class="color-section">
      <h2 class="h2 mb-4">Text Colors</h2>
      <div class="card">
        <div class="card-body">
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <p class="text-primary h4 mb-2">Primary Text</p>
              <p class="text-secondary h4 mb-2">Secondary Text</p>
              <p class="text-error h4 mb-2">Error Text</p>
              <p class="text-info h4 mb-2">Info Text</p>
              <p class="text-gray h4 mb-2">Gray Text</p>
            </div>
            <div class="col-12 col-md-6">
              <p class="text-usa-primary h4 mb-2">USA Primary Text</p>
              <p class="text-usa-secondary h4 mb-2">USA Secondary Text</p>
              <p class="text-eu-primary h4 mb-2">EU Primary Text</p>
              <p class="text-eu-secondary h4 mb-2">EU Secondary Text</p>
              <p class="text-black h4 mb-2">Black Text</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Background Colors -->
    <section class="color-section">
      <h2 class="h2 mb-4">Background Colors</h2>
      <div class="row g-3">
        <div class="col-6 col-md-3">
          <div class="bg-sample bg-primary text-white">
            <span>Primary</span>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="bg-sample bg-secondary text-white">
            <span>Secondary</span>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="bg-sample bg-error text-white">
            <span>Error</span>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="bg-sample bg-info text-white">
            <span>Info</span>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="bg-sample bg-usa-primary text-white">
            <span>USA Primary</span>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="bg-sample bg-usa-secondary text-white">
            <span>USA Secondary</span>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="bg-sample bg-eu-primary text-white">
            <span>EU Primary</span>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="bg-sample bg-eu-secondary">
            <span>EU Secondary</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Hover States -->
    <section class="color-section">
      <h2 class="h2 mb-4">Hover Effects</h2>
      <div class="card">
        <div class="card-body">
          <p class="mb-3">
            Hover over the links below to see color transitions:
          </p>
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <ul class="hover-list">
                <li>
                  <a href="#" class="text-gray text-hover-primary"
                    >Hover for Primary</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray text-hover-secondary"
                    >Hover for Secondary</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray text-hover-error"
                    >Hover for Error</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray text-hover-info"
                    >Hover for Info</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6">
              <ul class="hover-list">
                <li>
                  <a href="#" class="text-gray text-hover-usa-primary"
                    >Hover for USA Primary</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray text-hover-eu-primary"
                    >Hover for EU Primary</a
                  >
                </li>
                <li>
                  <a href="#" class="text-primary text-hover-primary-light-6"
                    >Hover for Light Variant</a
                  >
                </li>
                <li>
                  <a href="#" class="text-primary text-hover-primary-dark-6"
                    >Hover for Dark Variant</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Practical Examples -->
    <section class="color-section">
      <h2 class="h2 mb-4">Practical Examples</h2>
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <div class="card bg-primary-light-8">
            <div class="card-body">
              <h3 class="h5 text-primary mb-2">Info Card</h3>
              <p class="text-primary-dark-4 mb-3">
                This card uses primary color variations for a cohesive look.
              </p>
              <button class="btn bg-primary text-white">Learn More</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card bg-secondary-light-8">
            <div class="card-body">
              <h3 class="h5 text-secondary mb-2">Feature Card</h3>
              <p class="text-secondary-dark-4 mb-3">
                This card uses secondary color variations for visual hierarchy.
              </p>
              <button class="btn bg-secondary text-white">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Badges and Tags -->
    <section class="color-section mb-0">
      <h2 class="h2 mb-4">Badges & Tags</h2>
      <div class="card">
        <div class="card-body">
          <div class="badge-grid">
            <span class="badge bg-primary text-white">Primary</span>
            <span class="badge bg-secondary text-white">Secondary</span>
            <span class="badge bg-error text-white">Error</span>
            <span class="badge bg-info">Info</span>
            <span class="badge bg-gray text-white">Gray</span>
            <span class="badge bg-usa-primary text-white">USA</span>
            <span class="badge bg-eu-primary text-white">Europe</span>
            <span class="badge bg-primary-dark-4 text-white">Dark Variant</span>
            <span class="badge bg-primary-light-6">Light Variant</span>
            <span class="badge bg-black text-white">Black</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.colors-showcase {
  padding: 2rem 0;
}

.color-section {
  margin-bottom: 4rem;
}

.color-swatch {
  height: 150px;
  border-radius: 16px 16px 0 0;
  transition: transform 0.3s ease;
}

.card:hover .color-swatch {
  transform: scale(1.05);
}

.color-swatch-sm {
  height: 80px;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.color-swatch-sm:hover {
  transform: translateY(-4px);
}

.color-gradient {
  display: flex;
  gap: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.color-box {
  flex: 1;
  padding: 2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  transition: all 0.3s ease;
}

.color-box:hover {
  transform: scale(1.05);
  z-index: 1;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.color-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.bg-sample {
  padding: 3rem 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.bg-sample:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.hover-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hover-list li {
  margin-bottom: 1rem;
}

.hover-list a {
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
}

.hover-list a:hover {
  transform: translateX(8px);
}

.badge-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.badge {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  display: inline-block;
  transition: all 0.3s ease;
}

.badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.d-flex {
  display: flex;
}

.gap-3 {
  gap: 1rem;
}

.flex-1 {
  flex: 1;
}

.w-100 {
  width: 100%;
}

/* Ensure cards have consistent styling */
.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
</style>
