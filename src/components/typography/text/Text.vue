<template>
  <div class="text-demo">
    <h2 class="mb-4">Essential Body Text Classes (1-10)</h2>

    <!-- Base body text -->
    <div class="mb-6">
      <h3 class="mb-2 text-lg font-semibold">Base Body Text</h3>
      <p class="tuey-body">
        This is the base body text using default settings.
      </p>
    </div>

    <!-- Essential Body Text Classes -->
    <div class="mb-6">
      <h3 class="mb-2 text-lg font-semibold">Body Text Variations</h3>
      <div class="space-y-4">
        <div class="p-4 border rounded">
          <h4 class="font-semibold mb-2">
            Body 1 - Small Font + Normal Line Height
          </h4>
          <p class="tuey-body-1">
            Small font size (0.75rem) with normal line height (1.5) - Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div class="p-4 border rounded">
          <h4 class="font-semibold mb-2">
            Body 2 - Medium Font + Bold + Tight Line Height
          </h4>
          <p class="tuey-body-2">
            Medium font size (1.25rem) with bold weight and tight line height
            (1.2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div class="p-4 border rounded">
          <h4 class="font-semibold mb-2">
            Body 3 - Large Font + Normal Line Height
          </h4>
          <p class="tuey-body-3">
            Large font size (1.5rem) with normal line height (1.5) - Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div class="p-4 border rounded">
          <h4 class="font-semibold mb-2">Body 4 - Wide Letter Spacing</h4>
          <p class="tuey-body-4">
            Wide letter spacing (0.025em) - Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>

        <div class="p-4 border rounded">
          <h4 class="font-semibold mb-2">Body 5 - Large Line Height</h4>
          <p class="tuey-body-5">
            Large line height (1.5rem) - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div class="p-4 border rounded">
          <h4 class="font-semibold mb-2">
            Body 6 - Small Font + Tight Spacing
          </h4>
          <p class="tuey-body-6">
            Small font with tight letter spacing (-0.025em) - Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div class="p-4 border rounded">
          <h4 class="font-semibold mb-2">
            Body 7 - Medium Font + Medium Line Height
          </h4>
          <p class="tuey-body-7">
            Medium font with medium line height (1.25rem) - Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div class="p-4 border rounded">
          <h4 class="font-semibold mb-2">
            Body 8 - Wider Letter Spacing + Medium Line Height
          </h4>
          <p class="tuey-body-8">
            Wider letter spacing (0.05em) with medium line height - Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div class="p-4 border rounded">
          <h4 class="font-semibold mb-2">
            Body 9 - Large Font + Medium Weight + Tight Spacing
          </h4>
          <p class="tuey-body-9">
            Large font with medium weight and tight letter spacing - Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div class="p-4 border rounded">
          <h4 class="font-semibold mb-2">
            Body 10 - Extra Large Font + Wide Spacing + Large Line Height
          </h4>
          <p class="tuey-body-10">
            Extra large font (2rem) with wide letter spacing and large line
            height - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>

    <hr class="mt-6 mb-4" />
    <SimpleResponsiveTest />
  </div>
</template>

<script setup>
import SimpleResponsiveTest from "./SimpleResponsiveTest.vue";
</script>
