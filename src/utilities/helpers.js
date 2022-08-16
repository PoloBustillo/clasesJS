import axios from "axios";
/**
 *
 * @returns regresa un numero aleatorio de -1 a 1
 */
export function random() {
  return 0.5 - Math.random();
}

export let getPhotosData = async (searchTerm) => {
  const URL =
    "https://api.unsplash.com/search/photos?client_id=GS9NJjBSqA2w3ak6AOHAIYWDNDCcjQQwPtLNtUNswqY&query=" +
    searchTerm;

  let photosResponse = await axios({
    method: "get",
    url: URL,
  });

  let urlArray = photosResponse.data.results.map((photoData) => {
    return photoData.urls.thumb;
  });
  let newArrayConcat = urlArray.concat(urlArray);
  let newArraySort = newArrayConcat.sort(random);

  return newArraySort;
};
