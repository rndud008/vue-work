//  로그인, 회원가입, 회원탈퇴

import { instance } from '.';

// 회원가입 api
function registerUser(userData) {
  // const url = "http://localhost:3000/signup";
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

// 로그인 api
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
