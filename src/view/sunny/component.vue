<!--
 * @Description: 
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2022-01-08 17:10:43
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-10 12:05:17
-->
<template >
  <div>
    <Button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab - button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </Button>
    <component :is="currentTabComponent" class="tab"></component>
  </div>
</template>
<script>
import { myMixin } from "@/mixins/mixins.js";
import Home from "./components/home.vue";
import Post from "./components/post.vue";
import Archive from "./components/archive.vue";
export default {
  components: { Home, Post, Archive },
  name: "comtext",
  mixins: [myMixin],

  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "Post", "Archive"],
    };
  },

  computed: {
    currentTabComponent() {
      return this.currentTab;
    },
  },
  mounted() {
    console.log(this.num);
  },

  methods: {},
};
</script>
<style lang="less" scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>