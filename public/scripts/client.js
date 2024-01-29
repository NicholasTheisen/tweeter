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
        <span>${timeago.format(tweet.created_at)}</span>
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
  // Clear the tweets container before appending new tweets
  $('#tweets-container').empty();
  for(let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }
}

const loadTweets = function() {
  $.get('/tweets', function(data) {
    renderTweets(data);
  });
}

$(document).ready(function() {
  loadTweets();

  $('form').on('submit', function(event) {
    event.preventDefault();
    let formData = $(this).serialize();
    $.post('/tweets', formData, function() {
      loadTweets();
    });
  });
});