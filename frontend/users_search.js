const APIUtil = require('./api_util');

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
      $userItem.append(`<a href="/users/${user.id}">${user.username}</a>`)
      this.$ul.append($userItem);
    });

  }
}

module.exports = UsersSearch;
