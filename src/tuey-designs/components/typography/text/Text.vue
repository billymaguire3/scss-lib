<template>
  <div class="typography-showcase">
    <!-- Introduction -->
    <section class="showcase-section">
      <div class="row">
        <div class="col-12">
          <p class="lead">
            Our typography system uses SCSS mixins with optional parameters,
            allowing you to override only what you need while keeping defaults
            for the rest.
          </p>
        </div>
      </div>
    </section>

    <!-- SCSS Mixin Showcase -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">🎨 SCSS Mixin: body-text()</h2>
      <p class="mb-4">
        The <code class="demo-code-inline">body-text()</code> mixin accepts 5
        optional parameters. You only need to override the ones you want to
        change!
      </p>

      <div class="function-info-box mb-4">
        <h3 class="h5 mb-3">🔧 How it works:</h3>
        <p class="mb-2">
          The mixin has default values for all parameters. Call it with only the
          parameters you want to customize.
        </p>
        <p class="mb-0">
          <strong>Benefits:</strong> Write less code • Flexible styling •
          Consistent defaults
        </p>
      </div>

      <div class="code-showcase mb-4">
        <h4 class="h6 mb-3">📝 Mixin Definition:</h4>
        <pre class="code-block"><code>@mixin body-text(
  $font-size: $base-font-size,        // Default: 1rem
  $font-weight: $font-weight-normal,  // Default: 400
  $letter-spacing: $base-letter-spacing,  // Default: 0
  $line-height: $base-line-height,    // Default: 1.5
  $color: $text-color                 // Default: #333
) {
  font-size: $font-size;
  font-weight: $font-weight;
  letter-spacing: $letter-spacing;
  line-height: $line-height;
  color: $color;
}</code></pre>
      </div>

      <div class="row g-4">
        <div class="col-12">
          <h3 class="h5 mb-3">Mixin Parameter Override Examples:</h3>
        </div>

        <!-- Example 1: All defaults -->
        <div class="col-12 col-lg-6">
          <div class="card card-rounded">
            <div class="card-body">
              <h4 class="h6 mb-2">
                Example 1: All Defaults
                <span class="badge bg-primary text-white">No Parameters</span>
              </h4>
              <div class="code-snippet mb-3">
                <code>@include body-text();</code>
              </div>
              <p class="tuey-body demo-text">
                This text uses all default values: 1rem size, 400 weight, 0
                letter spacing, 1.5 line height, and default text color. Perfect
                for standard body copy.
              </p>
            </div>
          </div>
        </div>

        <!-- Example 2: Override font-size only -->
        <div class="col-12 col-lg-6">
          <div class="card card-rounded">
            <div class="card-body">
              <h4 class="h6 mb-2">
                Example 2: Override Font Size
                <span class="badge bg-secondary text-white">1 Parameter</span>
              </h4>
              <div class="code-snippet mb-3">
                <code>@include body-text($font-size: $font-size-sm);</code>
              </div>
              <p class="tuey-body-1 demo-text">
                Only font-size changed to 0.75rem. All other parameters (weight,
                spacing, line-height, color) remain at their default values.
                Great for captions and small text.
              </p>
            </div>
          </div>
        </div>

        <!-- Example 3: Override multiple parameters -->
        <div class="col-12 col-lg-6">
          <div class="card card-rounded">
            <div class="card-body">
              <h4 class="h6 mb-2">
                Example 3: Multiple Overrides
                <span class="badge bg-info">3 Parameters</span>
              </h4>
              <div class="code-snippet mb-3">
                <code
                  >@include body-text(<br />&nbsp;&nbsp;$font-size:
                  $font-size-md,<br />&nbsp;&nbsp;$font-weight:
                  $font-weight-bold,<br />&nbsp;&nbsp;$line-height:
                  $line-height-tight<br />);</code
                >
              </div>
              <p class="tuey-body-2 demo-text">
                This text overrides three parameters: larger font (1.25rem),
                bold weight (700), and tight line-height (1.2). Letter spacing
                and color stay default.
              </p>
            </div>
          </div>
        </div>

        <!-- Example 4: Letter spacing override -->
        <div class="col-12 col-lg-6">
          <div class="card card-rounded">
            <div class="card-body">
              <h4 class="h6 mb-2">
                Example 4: Letter Spacing
                <span class="badge bg-error text-white">2 Parameters</span>
              </h4>
              <div class="code-snippet mb-3">
                <code
                  >@include body-text(<br />&nbsp;&nbsp;$letter-spacing:
                  $letter-spacing-wide,<br />&nbsp;&nbsp;$line-height:
                  $line-height-relaxed<br />);</code
                >
              </div>
              <p class="tuey-body-4 demo-text">
                Wider letter spacing with relaxed line-height (1.75). Font size,
                weight, and color use defaults. Perfect for headings or
                emphasis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- More Examples -->
    <section class="showcase-section">
      <h2 class="h2 mb-4">Additional Typography Classes</h2>
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <div class="card card-rounded-lg">
            <div class="card-body">
              <h4 class="h5 mb-3 text-primary">Large Display Text</h4>
              <p class="tuey-body-10 demo-text">
                Extra large font (2rem) with wide letter spacing - perfect for
                hero sections and display text.
              </p>
              <div class="code-snippet mt-3">
                <code
                  >@include body-text(<br />&nbsp;&nbsp;$font-size:
                  $font-size-xl,<br />&nbsp;&nbsp;$letter-spacing:
                  $letter-spacing-wide,<br />&nbsp;&nbsp;$line-height:
                  $line-height-loose<br />);</code
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="card card-rounded-lg">
            <div class="card-body">
              <h4 class="h5 mb-3 text-secondary">Compact Dense Text</h4>
              <p class="tuey-body-6 demo-text">
                Small font with tight letter spacing (-0.025em) and tight
                line-height. Ideal for data-dense interfaces and fine print.
              </p>
              <div class="code-snippet mt-3">
                <code
                  >@include body-text(<br />&nbsp;&nbsp;$font-size:
                  $font-size-sm,<br />&nbsp;&nbsp;$letter-spacing:
                  $letter-spacing-tight,<br />&nbsp;&nbsp;$line-height:
                  $line-height-tight<br />);</code
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Concept -->
    <section class="showcase-section mb-0">
      <div class="card card-elevated-lg bg-primary-light-8">
        <div class="card-body p-4">
          <h3 class="h4 text-primary mb-3">💡 Key Concept: Named Parameters</h3>
          <p class="mb-3">
            SCSS mixins with default parameters let you write clean,
            maintainable code:
          </p>
          <ul class="concept-list">
            <li>
              <strong>Write less:</strong> Only specify what changes from the
              default
            </li>
            <li>
              <strong>Stay consistent:</strong> Defaults ensure uniformity
              across your design
            </li>
            <li>
              <strong>Easy updates:</strong> Change defaults in one place,
              updates everywhere
            </li>
            <li>
              <strong>Self-documenting:</strong> Named parameters make code
              readable
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No imports needed for this demo
</script>

<style scoped>
.typography-showcase {
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

.demo-text {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #667eea;
}

.concept-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.concept-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.concept-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #bf0a30;
  font-weight: bold;
}
</style>
