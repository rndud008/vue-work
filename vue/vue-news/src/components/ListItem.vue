<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="(item, index) in listItems" :key="index">
        <div class="points">
          {{ item.points || 0}}
        </div>
        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <RouterLink :to="`item/${item.id}`">
                {{ item.title }}
              </RouterLink>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <RouterLink v-if="item.user" :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </RouterLink>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {

  computed: {
    listItems() {
    
      return this.$store.state.list

    },
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
