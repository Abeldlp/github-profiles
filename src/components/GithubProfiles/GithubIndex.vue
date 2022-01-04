<template>
  <div>
    <div id="profile_header" class="flex flex-wrap justify-center items-center">
      <img class="w-20 m-3" src="@/assets/logo.svg" />
      <h1 class="text-6xl sm:text-6xl md:text-7xl lg:text-8xl mt-4 mb-3">
        Where it <i style="color: #2784ff">all</i> started
      </h1>
    </div>
    <div v-show="localPageLoading" class="loading_ring">
      <RingLoader id="loading_ring" color="#2784FF" />
    </div>
    <div v-show="!localPageLoading" id="card_container">
      <div
        v-if="positiveResponse && githubProfilesNotEmpty"
        id="github_card_container"
        class="container flex flex-wrap justify-center items-center m-auto"
      >
        <ProfileCardIndex
          class="profile_card_index"
          v-for="profile in githubProfiles"
          :key="profile.id"
          :profile="profile"
        />
      </div>
      <ReloadCardButton
        @reloadCards="reloadPage"
        id="error_section"
        v-if="positiveResponse && !githubProfilesNotEmpty"
      />
      <ErrorComponent
        @retry="reloadPage"
        v-if="!positiveResponse"
        id="error_section"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ErrorComponent from "./GithubComponents/ErrorComponent.vue";
import ProfileCardIndex from "./GithubComponents/ProfileCardIndex.vue";
import ReloadCardButton from "./GithubComponents/ReloadCardButton.vue";
import RingLoader from "vue-spinner/src/RingLoader.vue";
import { GithubProfile } from "@/store/state";
import { fetchGithubProfiles } from "@/apiCalls/githubApiCalls";
import { gsap } from "gsap";
import { useStore } from "vuex";
import {
  defineComponent,
  ref,
  Ref,
  onMounted,
  ComputedRef,
  computed,
} from "vue";

export default defineComponent({
  name: "GithubIndex",
  components: {
    ErrorComponent,
    ProfileCardIndex,
    ReloadCardButton,
    RingLoader,
  },
  setup() {
    const store = useStore();
    const localPageLoading: Ref<boolean> = ref(true);
    const positiveResponse: Ref<boolean> = ref(true);
    const githubProfiles: Ref<GithubProfile[]> = ref(
      store.state.githubProfiles
    );
    const githubProfilesNotEmpty: ComputedRef<boolean> = computed(
      () => githubProfiles.value.length > 0
    );
    const neededCards: Ref<number> = ref(10);

    const loadPage = (): void => {
      fetchGithubProfiles(neededCards.value).then((res) => {
        if (res === "error") {
          positiveResponse.value = false;
        }
        transitionToContent(0.5);
      });
    };

    const transitionToContent = (transitionDuration: number): void => {
      removeLoadingRingFromView(transitionDuration);
      renderProfileCardToView(transitionDuration);
    };

    const removeLoadingRingFromView = (duration: number): void => {
      gsap.to("#loading_ring", {
        opacity: 0,
        scale: -1,
        duration: duration,
      });
    };

    const renderProfileCardToView = (delay: number): void => {
      setTimeout(() => {
        localPageLoading.value = false;
        gsap.from("#github_card_container > .profile_card_index", {
          opacity: 0,
          y: 50,
          duration: 0.05,
          stagger: 0.02,
          overwrite: "auto",
        });
      }, delay * 1000);
    };

    const reloadPage = (): void => {
      localPageLoading.value = true;
      gsap.to("#loading_ring", {
        opacity: 1,
        scale: -1,
      });
      loadPage();
    };

    onMounted(() => {
      gsap.from("#profile_header", {
        opacity: 0,
        y: 30,
      });
    });

    loadPage();

    return {
      githubProfiles,
      githubProfilesNotEmpty,
      localPageLoading,
      positiveResponse,
      reloadPage,
    };
  },
});
</script>

<style scoped>
.loading_ring {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#error_section {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
