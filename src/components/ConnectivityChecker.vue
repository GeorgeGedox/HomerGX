<template>
  <article v-if="offline" class="offline-message message is-danger">
    <div class="message-header">
      <span>Network issues</span>
    </div>
    <div class="py-4">
      <p>
        No network connection found.
        <span @click="checkOffline">Retry <i class="fas fa-redo-alt"></i></span>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "ConnectivityChecker",
  data: function () {
    return {
      offline: false,
    };
  },
  created: function () {
    let that = this;
    this.checkOffline();

    document.addEventListener(
      "visibilitychange",
      function () {
        if (document.visibilityState == "visible") {
          that.checkOffline();
        }
      },
      false
    );
  },
  methods: {
    checkOffline: function () {
      let that = this;
      return fetch(window.location.href + "?alive", {
        method: "HEAD",
        cache: "no-store",
      })
        .then(function (response) {
          that.offline = !response.ok;
        })
        .catch(function () {
          that.offline = true;
        })
        .finally(function () {
          that.$emit("network-status-update", that.offline);
        });
    },
  },
};
</script>
