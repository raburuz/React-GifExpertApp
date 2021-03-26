export const getGifs = async (category) => {
      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
            category
      )}&limit=10&api_key=Apg9qmIfeSgdQEba4nRpwg2Vlef8LnnA`;

      const resp = await fetch(url);
      const { data } = await resp.json();

      console.log(data);
      const gifs = data.map((img) => {
            return {
                  id: img.id,
                  title: img.title,
                  url: img.images?.downsized_medium.url,
            };
      });

      return gifs;
};
