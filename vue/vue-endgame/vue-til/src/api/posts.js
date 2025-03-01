import { posts } from ".";

//  학습노트 데이터 목록을 조회하는 api
function fetchPosts() {
  return posts.get("/");
}

// 특정 학습노트 1개를 조회하는 api
function fetchPost(postId) {
  return posts.get(postId);
}

// 학습노트 생성 api
function createPost(postData) {
  return posts.post("/", postData);
}

// 학습 노트 데이터를 삭제하는 api
function deletePost(postId) {
  return posts.delete(postId);
}

//학습 노트 데이터를 수정하는  api
function editPost(postId, postData) {
  return posts.put(postId, postData);
}

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
