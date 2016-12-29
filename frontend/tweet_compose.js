const APIUtil = require('./api_util');

class TweetCompose {
  constructor(form) {
    this.$form = $(form);
    this.$form.on("submit", this.submit.bind(this));

  }

  submit(e) {
    e.preventDefault();
    let formData = this.$form.serializeJSON();
    this.$form.find(":input").prop("disabled", true);
    APIUtil.createTweet(formData).then( data => this.handleSuccess(data));
  }

  clearInput(){
    let $inputs = this.$form.find(":input");
    $inputs.empty();
    $inputs.prop("disabled", false);
  }

  handleSuccess(data) {
    console.log(data);
    this.clearInput();
    let targetSelector = this.$form.data("tweets-ul");
    let $targetUl = $(targetSelector);
    let $newTweet = $(`<li>${JSON.stringify(data)}</li>`);
    $targetUl.append($newTweet);
  }
}

module.exports = TweetCompose;
