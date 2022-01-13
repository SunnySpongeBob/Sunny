<!--
 * @Description: 
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2022-01-10 11:43:30
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-10 15:09:20
-->
<template>
  <div>组件1里面的num:{{ num }}</div>
</template>
<script>
import { myMixin } from "@/mixins/mixins.js";
export default {
  name: "mixins1",
  mixins: [myMixin],

  data() {
    return {};
  },
  methods: {
    func_self() {
      console.log("func_self from 组件");
    },
    func_two() {
      console.log("func_two from 组件");
    },
  },

  mounted() {
    this.num++;
    this.func_self();
    this.func_one();
    this.func_two();
  },
  created() {
    console.log("啦啦啦啦_self");
  },
};
</script>