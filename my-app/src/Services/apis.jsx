const BASE_URL = "http://localhost:8000/api/v1";

export const endPoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    CREATE_POST: BASE_URL + "/post/CreatePost",
    DELETE_POST: BASE_URL + "/post/DeletePost",
    SHOW_POSTS: BASE_URL + "/post/ShowAllPost",
    LIKE_POST: BASE_URL + "/like/LikePost",
    UNLIKE_POST: BASE_URL + "/like/unLikePost",
    COMMENT_ON_POST: BASE_URL + "/comment/CommentOnPost",
    DELETE_COMMENT: BASE_URL + "/comment/deleteComment",
    SHOW_COMMENTS: BASE_URL + "/comment/ShowComments",
} 