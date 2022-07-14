const REST_API_KEY = "af71ea101800fd5aa3ce4f77c43e17c0";
const REDIRECT_URI =  "http://localhost:3000/login";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;