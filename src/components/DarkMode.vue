<template>
  <a
    v-on:click="toggleTheme()"
    aria-label="Toggle dark mode"
    class="navbar-item navbar-item-nobg is-inline-block-mobile"
  >
    <i
      :class="`${faClasses[mode]}`"
      class="fa-fw"
      :title="`${titles[mode]}`"
    ></i>
  </a>
</template>

<script>
export default {
  name: "Darkmode",
  props: {
    colorSwitch: Object,
  },
  data: function () {
    return {
      isDark: null,
      faClasses: null,
      titles: null,
      mode: null,
    };
  },
  created: function () {
    this.faClasses = ["fas fa-adjust", "fas fa-sun", "fas fa-moon"];
    this.titles = ["Auto", "Light Theme", "Dark Theme"];
    this.mode = 0;
    if ("overrideDark" in localStorage) {
      // Light theme is 1 and Dark theme is 2
      this.mode = JSON.parse(localStorage.overrideDark) ? 2 : 1;
    }
    // Force specific color mode if defined
    if (this.colorSwitch.forceMode) {
      this.mode = this.colorSwitch.forceMode;
    }
    this.isDark = this.getIsDark();
    this.$emit("updated", this.isDark);
  },
  methods: {
    toggleTheme: function () {
      this.mode = (this.mode + 1) % 3;
      switch (this.mode) {
        // Default behavior
        case 0:
          localStorage.removeItem("overrideDark");
          break;
        // Force light theme
        case 1:
          localStorage.overrideDark = false;
          break;
        // Force dark theme
        case 2:
          localStorage.overrideDark = true;
          break;
        default:
          // Should be unreachable
          break;
      }

      this.isDark = this.getIsDark();
      this.$emit("updated", this.isDark);
    },

    getIsDark: function () {
      const values = [
        matchMedia("(prefers-color-scheme: dark)").matches,
        false,
        true,
      ];
      return values[this.mode];
    },
  },
};
</script>
