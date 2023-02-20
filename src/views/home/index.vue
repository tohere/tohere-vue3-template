<template>
  <div>Home</div>

  <h1>{{ count }}----{{ double }}</h1>
  <button @click="handleIncrement">增加</button>
</template>

<script lang="ts" setup>
import { useUserStore } from "../../store/user";
import { computed } from "vue";
const userStore = useUserStore();
const count = computed(() => userStore.count);
const double = computed(() => userStore.doubleCount);

function handleIncrement() {
  userStore.increment();
}
</script>
