<template>
  <div class="cards-showcase">
    <!-- Introduction -->
    <section class="showcase-section">
      <div class="row">
        <div class="col-12">
          <p class="lead">
            Our card component is versatile and customizable with various
            border-radius options, elevation levels, and styling variants to
            suit any design need.
          </p>
        </div>
      </div>
    </section>

    <!-- SCSS Function Showcase -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">🎨 SCSS Function: card-radius()</h2>
      <p class="mb-4">
        All border radius variations use the
        <code class="demo-code-inline">card-radius()</code> function for
        consistency and maintainability.
      </p>

      <div class="function-info-box mb-4">
        <h3 class="h5 mb-3">🔧 How it works:</h3>
        <p class="mb-2">
          The <code class="demo-code-inline">card-radius()</code> function uses
          a Sass map to store all radius sizes, then retrieves values using
          <code class="demo-code-inline">map-get()</code>.
        </p>
        <p class="mb-0">
          <strong>Benefits:</strong> Single source of truth • Easy global
          updates • Consistent sizing
        </p>
      </div>

      <div class="code-showcase mb-4">
        <h4 class="h6 mb-3">📝 Function Definition:</h4>
        <pre class="code-block"><code>@function card-radius($size: "sm") {
  $radius-map: (
    "none": 0,
    "xs": math.div($base-border-radius, 4),   // 4px
    "sm": math.div($base-border-radius, 2),   // 8px
    "md": $base-border-radius,                // 16px
    "lg": $base-border-radius * 1.5,          // 24px
    "xl": $base-border-radius * 2,            // 32px
  );
  @return map-get($radius-map, $size);
}

// Usage in card modifiers:
.card-rounded-lg {
  border-radius: card-radius("lg");  // Returns 24px
}</code></pre>
      </div>

      <div class="row">
        <div class="col-12">
          <h3 class="h5 mb-3">Function in Action:</h3>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <div class="card card-rounded-none bg-primary-light-8">
            <div class="card-body">
              <h3 class="h5 text-primary mb-2">card-radius("none")</h3>
              <p class="mb-2 text-primary-dark-2">
                Returns: <strong>0px</strong>
              </p>
              <code class="demo-code-inline">.card-rounded-none</code>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <div class="card card-rounded-xs bg-secondary-light-8">
            <div class="card-body">
              <h3 class="h5 text-secondary mb-2">card-radius("xs")</h3>
              <p class="mb-2 text-secondary-dark-2">
                Returns: <strong>4px</strong>
              </p>
              <code class="demo-code-inline">.card-rounded-xs</code>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <div class="card card-rounded-sm bg-info-light-6">
            <div class="card-body">
              <h3 class="h5 text-info-dark-4 mb-2">card-radius("sm")</h3>
              <p class="mb-2 text-info-dark-4">Returns: <strong>8px</strong></p>
              <code class="demo-code-inline">.card-rounded-sm</code>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <div class="card card-rounded bg-error-light-8">
            <div class="card-body">
              <h3 class="h5 text-error mb-2">card-radius("md")</h3>
              <p class="mb-2 text-error-dark-2">
                Returns: <strong>16px</strong>
              </p>
              <code class="demo-code-inline">.card-rounded</code>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <div class="card card-rounded-lg bg-usa-primary-light-8">
            <div class="card-body">
              <h3 class="h5 text-usa-primary mb-2">card-radius("lg")</h3>
              <p class="mb-2 text-usa-primary-dark-2">
                Returns: <strong>24px</strong>
              </p>
              <code class="demo-code-inline">.card-rounded-lg</code>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <div class="card card-rounded-xl bg-eu-primary-light-8">
            <div class="card-body">
              <h3 class="h5 text-eu-primary mb-2">card-radius("xl")</h3>
              <p class="mb-2 text-eu-primary-dark-2">
                Returns: <strong>32px</strong>
              </p>
              <code class="demo-code-inline">.card-rounded-xl</code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Cards -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">Interactive Cards with Hover Effects</h2>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <div class="card card-hover">
            <div class="card-body">
              <h3 class="h5 mb-2">🎯 Hover Me!</h3>
              <p class="mb-0">
                This card lifts up when you hover over it. Let's change the
                border radius here with our classes !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Colored Cards -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">Colored Card Variations</h2>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 p-4">
          <div class="card card-rounded bg-primary-light-8">
            <div class="card-body">
              <h3 class="h5 text-primary mb-2">Primary Theme</h3>
              <p class="text-primary-dark-2 mb-3">
                Light primary background with dark text.
              </p>
              <button class="btn bg-primary text-white btn-sm">Action</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 p-4">
          <div class="card card-rounded bg-secondary-light-8">
            <div class="card-body">
              <h3 class="h5 text-secondary mb-2">Secondary Theme</h3>
              <p class="text-secondary-dark-2 mb-3">
                Light secondary background for variety.
              </p>
              <button class="btn bg-secondary text-white btn-sm">Action</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 p-4">
          <div class="card card-rounded bg-error-light-8">
            <div class="card-body">
              <h3 class="h5 text-error mb-2">Alert Theme</h3>
              <p class="text-error-dark-2 mb-3">
                Light error color for warnings.
              </p>
              <button class="btn bg-error text-white btn-sm">View</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 p-4">
          <div class="card card-rounded bg-info-light-6">
            <div class="card-body">
              <h3 class="h5 text-info-dark-4 mb-2">Info Theme</h3>
              <p class="text-info-dark-4 mb-3">
                Light info background for notices.
              </p>
              <button class="btn bg-info btn-sm">Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Regional Theme Cards (USA & Europe) -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">Regional Theme Cards</h2>
      <div class="row">
        <div class="col-12 col-md-6 p-4">
          <div
            class="card card-rounded-lg bg-usa-primary text-white card-hover"
          >
            <div class="card-body p-4">
              <h3 class="h3 mb-3">🇺🇸 Team USA</h3>
              <p class="mb-3">
                Cards can be fully branded with regional colors. Perfect for the
                Ryder Cup or any team-based application.
              </p>
              <div class="d-flex gap-2">
                <span class="badge bg-white text-usa-primary"
                  >Stars & Stripes</span
                >
                <span class="badge bg-usa-secondary text-white">Freedom</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 p-4">
          <div class="card card-rounded-lg bg-eu-primary text-white card-hover">
            <div class="card-body p-4">
              <h3 class="h3 mb-3">🇪🇺 Team Europe</h3>
              <p class="mb-3">
                European themed cards with distinctive colors create strong
                visual identity and team spirit.
              </p>
              <div class="d-flex gap-2">
                <span class="badge bg-eu-secondary">Unity</span>
                <span class="badge bg-white text-eu-primary">Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Practical Examples -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">Practical Examples</h2>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <div class="card card-rounded-lg card-hover">
            <div class="card-body text-center p-4">
              <div class="icon-circle bg-primary-light-6 mb-3">
                <span class="h2 mb-0">📊</span>
              </div>
              <h3 class="h5 mb-2">Analytics</h3>
              <p class="text-gray mb-3">
                Track your performance with detailed insights.
              </p>
              <button class="btn bg-primary text-white w-100">
                View Stats
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <div class="card card-rounded-lg card-hover">
            <div class="card-body text-center p-4">
              <div class="icon-circle bg-secondary-light-6 mb-3">
                <span class="h2 mb-0">🎯</span>
              </div>
              <h3 class="h5 mb-2">Goals</h3>
              <p class="text-gray mb-3">
                Set and achieve your objectives efficiently.
              </p>
              <button class="btn bg-secondary text-white w-100">
                Set Goals
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 p-4">
          <div class="card card-rounded-lg card-hover">
            <div class="card-body text-center p-4">
              <div class="icon-circle bg-info-light-4 mb-3">
                <span class="h2 mb-0">⚡</span>
              </div>
              <h3 class="h5 mb-2">Performance</h3>
              <p class="text-gray mb-3">
                Optimize your workflow for maximum results.
              </p>
              <button class="btn bg-info w-100">Optimize</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Cards with Complex Layout -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">Feature Cards</h2>
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="card card-elevated-lg card-rounded-xl">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-4">
                  <div class="feature-icon bg-primary-light-7">
                    <span class="h1 text-primary">🏆</span>
                  </div>
                </div>
                <div class="col-8">
                  <h3 class="h4 mb-2">Championship Level</h3>
                  <p class="text-gray mb-3">
                    Compete at the highest level with advanced features and
                    professional tools.
                  </p>
                  <div class="d-flex gap-2">
                    <span class="badge bg-primary text-white">Pro</span>
                    <span class="badge bg-secondary text-white">Featured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6 p-4">
          <div class="card card-elevated-lg card-rounded-xl bg-gradient">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-4">
                  <div class="feature-icon bg-white">
                    <span class="h1 text-secondary">🎖️</span>
                  </div>
                </div>
                <div class="col-8">
                  <h3 class="h4 mb-2">Elite Status</h3>
                  <p class="mb-3">
                    Join the elite ranks with exclusive benefits and premium
                    support options.
                  </p>
                  <div class="d-flex gap-2">
                    <span class="badge bg-white text-secondary">Elite</span>
                    <span class="badge bg-info">Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cards-showcase {
  padding: 2rem 0;
}

.showcase-section {
  margin-bottom: 4rem;
}

.lead {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

.demo-code {
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.25rem 0.5rem;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #d63384;
  font-family: "Courier New", monospace;
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.feature-icon {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.d-flex {
  display: flex;
}

.gap-2 {
  gap: 0.5rem;
}

.w-100 {
  width: 100%;
}

.p-4 {
  padding: 1.5rem !important;
}

.bg-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.bg-gradient .badge {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Enhance card hover states for demo */
.card-hover {
  position: relative;
}

.card-hover::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 2px transparent;
  transition: box-shadow 0.3s ease;
  pointer-events: none;
}

.card-hover:hover::after {
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.4);
}

/* SCSS Function Showcase Styles */
.demo-code-inline {
  padding: 0.125rem 0.375rem;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 0.875rem;
  color: #d63384;
  font-family: "Courier New", monospace;
}

.function-info-box {
  /* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  border-left: 4px solid #667eea;
}

.function-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.function-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.function-list li:last-child {
  border-bottom: none;
}

.code-showcase {
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: 1.5rem;
  color: #d4d4d4;
}

.code-showcase h4 {
  color: #fff;
  margin-bottom: 1rem;
}

.code-block {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
}

.code-block code {
  font-family: "Courier New", Consolas, monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #d4d4d4;
  display: block;
  white-space: pre;
  overflow-x: auto;
}
</style>
