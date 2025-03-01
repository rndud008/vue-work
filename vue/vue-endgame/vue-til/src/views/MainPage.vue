<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <div v-if="isLoading">
        <LoadingSpinner></LoadingSpinner>
      </div>
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
          @refresh="fetchData"
        ></PostListItem>
      </ul>
    </div>
    <RouterLink to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </RouterLink>
  </div>
</template>

<script>
import { fetchPosts } from "@/api/posts";
import PostListItem from "@/components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
export default {
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  components: {
    PostListItem,
    LoadingSpinner,
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      console.log(data);
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
