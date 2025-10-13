<template>
  <div class="grid-showcase">
    <!-- Introduction -->
    <section class="showcase-section">
      <div class="row">
        <div class="col-12-xs">
          <p class="lead">
            Our responsive grid system uses SCSS loops and breakpoint mixins to
            generate 60 column classes (12 columns × 5 breakpoints) from just a
            few lines of code.
          </p>
        </div>
      </div>
    </section>

    <!-- SCSS Loops for Grid Generation -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">🎨 SCSS @for Loop: Column Generation</h2>
      <p class="mb-4">
        A single <code class="demo-code-inline">@for</code> loop generates all
        12 column classes. This loop runs once per breakpoint!
      </p>

      <div class="function-info-box mb-4">
        <h3 class="h5 mb-3">🔧 How it works:</h3>
        <p class="mb-2">
          The <code class="demo-code-inline">@for</code> loop iterates from 1 to
          12, creating classes like
          <code class="demo-code-inline">.col-1-md</code>,
          <code class="demo-code-inline">.col-2-md</code>, etc.
        </p>
        <p class="mb-0">
          <strong>Result:</strong> 12 lines of SCSS → 60 CSS classes (12 cols ×
          5 breakpoints)
        </p>
      </div>

      <div class="code-showcase mb-4">
        <h4 class="h6 mb-3">📝 Loop Example:</h4>
        <pre class="code-block"><code>// Inside a breakpoint mixin
@include md {
  @for $i from 1 through $grid-columns {  // $grid-columns = 12
    .col-#{$i}-md {
      width: math.div($i * 100%, $grid-columns);
    }
  }
}

// Generates:
// .col-1-md { width: 8.333%; }
// .col-2-md { width: 16.666%; }
// .col-3-md { width: 25%; }
// ... up to col-12-md { width: 100%; }</code></pre>
      </div>

      <!-- Visual Demo of Column Sizes -->
      <div class="row g-4">
        <div class="col-12-xs">
          <h3 class="h5 mb-3">Column Sizes (Desktop View):</h3>
        </div>
        <div class="col-3-xs">
          <div class="grid-demo-box bg-primary-light-8">
            <code class="small">.col-3</code>
            <p class="small mb-0">25%</p>
          </div>
        </div>
        <div class="col-3-xs">
          <div class="grid-demo-box bg-secondary-light-8">
            <code class="small">.col-3</code>
            <p class="small mb-0">25%</p>
          </div>
        </div>
        <div class="col-3-xs">
          <div class="grid-demo-box bg-info-light-6">
            <code class="small">.col-3</code>
            <p class="small mb-0">25%</p>
          </div>
        </div>
        <div class="col-3-xs">
          <div class="grid-demo-box bg-error-light-8">
            <code class="small">.col-3</code>
            <p class="small mb-0">25%</p>
          </div>
        </div>
        <div class="col-4-xs">
          <div class="grid-demo-box bg-usa-primary-light-8">
            <code class="small">.col-4</code>
            <p class="small mb-0">33.333%</p>
          </div>
        </div>
        <div class="col-8-xs">
          <div class="grid-demo-box bg-eu-primary-light-8">
            <code class="small">.col-8</code>
            <p class="small mb-0">66.666%</p>
          </div>
        </div>
        <div class="col-6-xs">
          <div class="grid-demo-box bg-primary-light-7">
            <code class="small">.col-6</code>
            <p class="small mb-0">50%</p>
          </div>
        </div>
        <div class="col-6-xs">
          <div class="grid-demo-box bg-secondary-light-7">
            <code class="small">.col-6</code>
            <p class="small mb-0">50%</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Breakpoint Mixins -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">🎨 Breakpoint Mixins with @content</h2>
      <p class="mb-4">
        Breakpoint mixins use the <code class="demo-code-inline">@content</code>
        directive to inject styles at specific screen sizes.
      </p>

      <div class="function-info-box mb-4">
        <h3 class="h5 mb-3">🔧 The @content Directive:</h3>
        <p class="mb-2">
          <code class="demo-code-inline">@content</code> is a placeholder that
          gets replaced with whatever styles you pass to the mixin.
        </p>
        <p class="mb-0">
          <strong>Magic:</strong> Write styles once, apply them at any
          breakpoint!
        </p>
      </div>

      <div class="code-showcase mb-4">
        <h4 class="h6 mb-3">📝 Breakpoint Mixin Definition:</h4>
        <pre class="code-block"><code>// Mixin definition with @content
@mixin md {
  @media (min-width: 720px) {
    @content;  // ← Your styles get injected here!
  }
}

// Usage - pass styles INTO the mixin
@include md {
  .my-element {
    font-size: 2rem;
    color: blue;
  }
}

// Compiles to:
@media (min-width: 720px) {
  .my-element {
    font-size: 2rem;
    color: blue;
  }
}</code></pre>
      </div>

      <!-- Breakpoint Reference -->
      <div class="row g-4">
        <div class="col-12-xs">
          <h3 class="h5 mb-3">Our Breakpoints:</h3>
        </div>
        <div class="col-12-xs col-6-sm col-4-lg">
          <div class="card card-rounded">
            <div class="card-body">
              <h4 class="h6 mb-2">
                <span class="badge bg-primary text-white">XS</span> Extra Small
              </h4>
              <code class="demo-code-inline">0px and up</code>
              <p class="small mt-2 mb-0">Mobile phones</p>
            </div>
          </div>
        </div>
        <div class="col-12-xs col-6-sm col-4-lg">
          <div class="card card-rounded">
            <div class="card-body">
              <h4 class="h6 mb-2">
                <span class="badge bg-secondary text-white">SM</span> Small
              </h4>
              <code class="demo-code-inline">480px and up</code>
              <p class="small mt-2 mb-0">Large phones</p>
            </div>
          </div>
        </div>
        <div class="col-12-xs col-6-sm col-4-lg">
          <div class="card card-rounded">
            <div class="card-body">
              <h4 class="h6 mb-2">
                <span class="badge bg-info">MD</span> Medium
              </h4>
              <code class="demo-code-inline">720px and up</code>
              <p class="small mt-2 mb-0">Tablets</p>
            </div>
          </div>
        </div>
        <div class="col-12-xs col-6-sm col-4-lg">
          <div class="card card-rounded">
            <div class="card-body">
              <h4 class="h6 mb-2">
                <span class="badge bg-error text-white">LG</span> Large
              </h4>
              <code class="demo-code-inline">960px and up</code>
              <p class="small mt-2 mb-0">Desktops</p>
            </div>
          </div>
        </div>
        <div class="col-12-xs col-6-sm col-4-lg">
          <div class="card card-rounded">
            <div class="card-body">
              <h4 class="h6 mb-2">
                <span class="badge bg-gray text-white">XL</span> Extra Large
              </h4>
              <code class="demo-code-inline">1200px and up</code>
              <p class="small mt-2 mb-0">Large desktops</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Responsive Demo -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">Responsive Grid in Action</h2>
      <p class="mb-4">
        Resize your browser to see these columns adapt! Each uses multiple
        breakpoint classes.
      </p>

      <div class="card card-rounded-lg mb-4">
        <div class="card-body">
          <h4 class="h5 mb-3">Example: Responsive Product Grid</h4>
          <div class="code-snippet mb-3">
            <code
              >.col-12-xs .col-6-sm .col-4-md .col-3-lg<br />Mobile: 100% |
              Tablet: 50% | Desktop: 33% | Large: 25%</code
            >
          </div>
        </div>
      </div>

      <div class="row gap-2">
        <div class="col-12-xs col-6-sm col-4-md col-3-lg">
          <div class="card card-elevated">
            <div class="card-body text-center">
              <div class="demo-icon">📱</div>
              <h5 class="h6 mb-1">Product 1</h5>
              <p class="small mb-0">Responsive card</p>
            </div>
          </div>
        </div>
        <div class="col-12-xs col-6-sm col-4-md col-3-lg">
          <div class="card card-elevated">
            <div class="card-body text-center">
              <div class="demo-icon">💻</div>
              <h5 class="h6 mb-1">Product 2</h5>
              <p class="small mb-0">Responsive card</p>
            </div>
          </div>
        </div>
        <div class="col-12-xs col-6-sm col-4-md col-3-lg">
          <div class="card card-elevated">
            <div class="card-body text-center">
              <div class="demo-icon">🖥️</div>
              <h5 class="h6 mb-1">Product 3</h5>
              <p class="small mb-0">Responsive card</p>
            </div>
          </div>
        </div>
        <div class="col-12-xs col-6-sm col-4-md col-3-lg">
          <div class="card card-elevated">
            <div class="card-body text-center">
              <div class="demo-icon">⌨️</div>
              <h5 class="h6 mb-1">Product 4</h5>
              <p class="small mb-0">Responsive card</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It All Works Together -->
    <section class="showcase-section mb-0">
      <div class="card card-elevated-lg bg-primary-light-8">
        <div class="card-body p-4">
          <h3 class="h4 text-primary mb-3">💡 How It All Works Together</h3>
          <div class="row">
            <div class="col-12-xs col-6-lg">
              <h4 class="h6 mb-2">1. @for Loop</h4>
              <p class="mb-3">
                Generates column width classes (col-1 through col-12)
              </p>
              <h4 class="h6 mb-2">2. Breakpoint Mixins</h4>
              <p class="mb-3">
                Wrap the @for loop in media queries using @content
              </p>
            </div>
            <div class="col-12-xs col-6-lg">
              <h4 class="h6 mb-2">3. Result</h4>
              <p class="mb-3">
                60 responsive column classes generated automatically
              </p>
              <h4 class="h6 mb-2">4. Maintenance</h4>
              <p class="mb-0">
                Change $grid-columns once → updates all 60 classes instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.grid-showcase {
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
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  border-left: 4px solid #667eea;
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

.code-snippet {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 0.75rem;
}

.code-snippet code {
  font-family: "Courier New", Consolas, monospace;
  font-size: 0.875rem;
  color: #d63384;
  line-height: 1.6;
}

.grid-demo-box {
  padding: 1.5rem 0.5rem;
  border-radius: 8px;
  text-align: center;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.grid-demo-box:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.demo-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
</style>
