<template>
  <div class="mx-auto px-3 mt-5">
    <v-card
      v-for="item in articles"
      :key="item.link"
      :to="item.link"
      class="mx-auto mb-6"
      max-width="800"
      hover
      nuxt
    >
      <v-img class="white--text align-end" height="160px" :src="item.image">
        <v-card-title>{{ item.title }}</v-card-title>
      </v-img>

      <v-card-subtitle>
        <div>
          <span v-if="!loading">
            <v-icon dense left>mdi-comment-outline</v-icon> 0 条评论
          </span>
          <span>
            <v-icon dense left :right="!loading">mdi-update</v-icon>
          </span>
          {{ item.modifiedAt }}
        </div></v-card-subtitle
      >
    </v-card>
  </div>
</template>

<script>
import articles from '@/assets/articles.json'
export default {
  data() {
    return {
      articles,
      loading: true,
    }
  },
  head() {
    return {
      title: '首页',
    }
  },
}
</script>
