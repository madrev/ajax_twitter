const APIUtil = require('./api_util');
const FollowToggle = require('./follow_toggle');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $(this.$el.children('input')[0]);
    this.$input.on("input", this.handleInput.bind(this));
    this.$ul = $(this.$el.children('ul.users')[0]);
  }

  handleInput(e) {
    APIUtil.searchUsers(this.$input.val()).then(data => this.renderResults(data));
  }

  renderResults(data){
    console.log(data);
    this.$ul.empty();
    data.forEach( user => {
      let $userItem = $(`<li></li>`);
      $userItem.append(`<a href="/users/${user.id}">${user.username}</a> `);
      let $followToggle = $('<button></button>');
      new FollowToggle($followToggle, {
        userId: user.id,
        followState: (user.followed ? "followed" : "unfollowed")
      });
      $userItem.append($followToggle);
      this.$ul.append($userItem);
    });

  }
}

module.exports = UsersSearch;
