<template>
  <main>
    <section v-if="error">
      <h1>error</h1>
      <div>{{ error }}</div>
    </section>
    <section v-else>
      <h1>News</h1>
      <div>
        {{ data?.news[0].title }}
      </div>
    </section>
    <section>
      <h1>Jobs</h1>
      <div>
        {{ data?.jobs[0].title }}
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { fetchNews } from "~/service/news";
import { fetchJobs } from "~/service/jobs";

const { data, error } = await useAsyncData("init", async () => {
  let jobs: any = [];

  // Error
  const news = await fetchNews();

  if (news.length > 0) {
    jobs = await fetchJobs();
  }

  // // Works 👍
  // const news = await $fetch<any>("https://api.hnpwa.com/v0/news/1.json");

  // if (news.length > 0) {
  //   jobs = await $fetch<any>("https://api.hnpwa.com/v0/jobs/1.json");
  // }

  return { news, jobs };
});
</script>
