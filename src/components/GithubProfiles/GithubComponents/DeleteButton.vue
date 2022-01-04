<template>
  <div ref="deleteButton">
    <button
      @click="deleteProfile"
      class="
        flex
        justify-center
        items-center
        py-2
        px-4
        rounded
        text-white
        border border-white
        hover:bg-red-400 hover:border-red-400
        transition-all
      "
    >
      <VueFeather type="trash" class="mr-1" style="height: 15px" />
      Hide
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import VueFeather from "vue-feather";
import { useStore } from "vuex";

interface Props {
  profileId: number;
}

export default defineComponent({
  name: "DeleteButton",
  components: {
    VueFeather,
  },
  props: {
    profileId: {
      required: true,
      type: Number,
    },
  },
  setup(props: Props, { emit }) {
    const store = useStore();
    const deleteButton: Ref<HTMLElement | null> = ref(null);

    const deleteProfile = (): void => {
      setTimeout(() => {
        store.dispatch("removeGithubProfile", { id: props.profileId });
      }, 300);
      emit("deleteProfile");
    };

    return {
      deleteProfile,
      deleteButton,
    };
  },
});
</script>
