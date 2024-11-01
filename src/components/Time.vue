<template>
    <nav class="is-primary panel">
        {{ selectedPeriod }}
        <span class="panel-tabs">
            <a 
              v-for="period in periods" 
              :key="period" 
              :class="{ 'is-active': period === selectedPeriod }"
              @click="selectPeriod(period)">
                {{ period }}
            </a>
        </span>
        <div v-for="post in posts" :key="post.id" class="panel-block">
            <span> {{ post.title }}</span>
            <div>{{ post.created }}</div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Post, today, thisWeek, thisMonth } from "../posts";




// Define periods as a constant array with type safety
const periods = ["Today", "This Week", "This Month"] as const;
type Period = (typeof periods)[number];

// Reactive selected period
const selectedPeriod = ref<Period>("Today");

// Function to update the selected period
function selectPeriod(period: Period) {
  selectedPeriod.value = period;
}

// Array of posts
const posts: Post[] = [today, thisWeek, thisMonth];
</script>

<style>
</style>
