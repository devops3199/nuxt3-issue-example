export const fetchJobs = async () => {
  const cookie = useRequestHeaders(["cookie"]);
  return await $fetch<{ title: string }[]>(
    "https://api.hnpwa.com/v0/jobs/1.json",
    {
      headers: { ...cookie },
    }
  );
};
