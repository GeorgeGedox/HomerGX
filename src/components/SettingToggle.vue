<template>
  <a
    v-on:click="toggleSetting()"
    class="navbar-item navbar-item-nobg is-inline-block-mobile"
  >
    <span><i :class="['fas', 'fa-fw', value ? icon : secondaryIcon]"></i></span>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "SettingToggle",
  props: {
    name: String,
    icon: String,
    iconAlt: String,
    layoutSwitch: Object,
  },
  data: function () {
    return {
      secondaryIcon: null,
      value: true,
    };
  },
  created: function () {
    this.secondaryIcon = this.iconAlt || this.icon;

    if (this.name in localStorage) {
      this.value = JSON.parse(localStorage[this.name]);
    }

    if (this.layoutSwitch.layout) {
      switch (this.layoutSwitch.layout) {
        case "vertical":
          this.value = true;
          break;

        case "horizontal":
          this.value = false;
          break;

        default:
          console.error("Invalid layout mode defined in config.");
          break;
      }
    }

    this.$emit("updated", this.value);
  },
  methods: {
    toggleSetting: function () {
      this.value = !this.value;
      localStorage[this.name] = this.value;
      this.$emit("updated", this.value);
    },
  },
};
</script>
