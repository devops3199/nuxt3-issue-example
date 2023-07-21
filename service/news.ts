export const fetchNews = async () => {
  const cookie = useRequestHeaders(["cookie"]);
  return await $fetch<{ title: string }[]>(
    "https://api.hnpwa.com/v0/news/1.json",
    {
      headers: { ...cookie },
    }
  );
};
