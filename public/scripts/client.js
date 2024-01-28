/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const createTweetElement = function(tweet) {
  let $tweet = $(`
    <article class="tweet">
      <header>
        <img src="${tweet.user.avatars}" alt="User Avatar">
        <h2>${tweet.user.name}</h2>
        <h4>${tweet.user.handle}</h4>
      </header>
      <p>${tweet.content.text}</p>
      <footer>
        <span>${new Date(tweet.created_at).toLocaleString()}</span>
        <div>
          <i class="fa fa-flag"></i>
          <i class="fa fa-retweet"></i>
          <i class="fa fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
  return $tweet;
}

const renderTweets = function(tweets) {
  for(let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }
}

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

renderTweets(data);