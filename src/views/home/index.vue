<template>
  <div>Home</div>

  <h1>----{{ double }}</h1>
  <h2 class="count">{{ count }}</h2>
  <h2>msg: {{ msg }}</h2>
  <el-button class="btn" type="primary" @click="handleIncrement"
    >增加</el-button
  >
</template>

<script lang="ts" setup>
import { useUserStore } from "../../store/user";
import { computed } from "vue";

defineProps<{
  msg?: string;
}>();

const userStore = useUserStore();
const count = computed(() => userStore.count);
const double = computed(() => userStore.doubleCount);

function handleIncrement() {
  userStore.increment();
}
</script>
