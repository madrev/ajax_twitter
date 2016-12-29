const APIUtil = {
  followUser: id => (
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: "json",
      method: "POST"
    })
  ),

  unfollowUser: id => (
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: "json",
      method: "DELETE"
    })
  ),

  searchUsers: queryVal => (
    $.ajax({
      url: '/users/search',
      dataType: "json",
      method: "GET",
      data: { query: queryVal }
    })
  )
};

module.exports = APIUtil;
