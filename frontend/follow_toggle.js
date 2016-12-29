const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("userId");
    this.followState = this.$el.data("initial-follow-state");
    this.$el.click(this.handleClick.bind(this));
    this.render();
  }

  render() {
    switch(this.followState){
      case "followed":
        this.$el.prop("disabled", false);
        this.$el.html("Unfollow!");
        break;
      case "unfollowed":
        this.$el.prop("disabled", false);
        this.$el.html("Follow!");
        break;
      case "following":
        this.$el.prop("disabled", true);
        this.$el.html("Following...");
        break;
      case "unfollowing":
        this.$el.prop("disabled", true);
        this.$el.html("Unfollowing...");
        break;
    }
  }

  handleClick(e) {
    e.preventDefault();
    if(this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      console.log(this.userId);
      APIUtil.followUser(this.userId).then( () => {
        this.followState = "followed";
        this.render();
      });
    } else if (this.followState === "followed") {
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userId).then( () => {
        this.followState = "unfollowed";
        this.render();
      });
    }

      // success: data => {
      //   this.followState = (this.followState === "unfollowed" ? "followed" : "unfollowed");
      //   this.render();
      // }
  }


}

module.exports = FollowToggle;
