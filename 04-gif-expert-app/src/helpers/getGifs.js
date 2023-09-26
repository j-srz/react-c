export const getGifs = async (category, limit = 10) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=wBIwdrrT0fQwGGgJW6uNiZhOFz34PDxJ&q=${category}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
