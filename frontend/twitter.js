const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
const TweetCompose = require('./tweet_compose.js');

$(function () {
  $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn) );
  $('nav.users-search').each( (i, nav) => new UsersSearch(nav) );
  $('form.tweet-compose').each( (i, form) => new TweetCompose(form) );
});
