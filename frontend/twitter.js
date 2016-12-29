const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(function () {
  $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn) );
  $('nav.users-search').each( (i, nav) => new UsersSearch(nav) );
});
