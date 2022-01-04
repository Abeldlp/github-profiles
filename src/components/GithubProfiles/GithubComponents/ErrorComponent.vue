<template>
  <div>
    <div>
      <p class="font-bold text-2xl mb-3">Something went wrong :(</p>
      <button
        class="
          border-2
          p-2
          rounded
          hover:bg-blue-500 hover:text-white
          transition-all
          flex
          justify-between
          items-center
          bg-white
          m-auto
        "
        @click="reloadPage"
      >
        <p>Retry</p>
        <VueFeather type="heart" style="height: 15px; padding-left: 5px" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VueFeather from "vue-feather";

export default defineComponent({
  name: "ErrorComponent",
  components: {
    VueFeather,
  },
  setup(props, { emit }) {
    const reloadPage = () => {
      emit("retry");
    };

    return {
      reloadPage,
    };
  },
});
</script>

