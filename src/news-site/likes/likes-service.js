import axios from "axios";
const LIKES_API = "http://localhost:4000/api/likes";
const USERS_API = "http://localhost:4000/api/users";


export const userLikesArticle = async (userId, articleId) => {
    const response = await axios.post(`${USERS_API}/${userId}/likes/articles/${articleId}`);
    return response.data;
}
export const findLikesByUserId = async(userId) => {
    const response = await axios.get (`${USERS_API}/${userId}/likes`);
    return response.data;
}
export const findLikersByArticle = async(articleId) => {
    const response = await axios.get (`${USERS_API}/${articleId}/likers`);
    return response.data;
}