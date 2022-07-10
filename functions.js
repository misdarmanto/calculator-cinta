const Insta = require("scraper-instagram");
const InstaClient = new Insta();

export default function getHashtags () {
    InstaClient.searchHashtag("nature")
  .then((hashtags) => {
    console.log(hashtags)
  })
  .catch((err) => console.log(err))
}
