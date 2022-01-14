<!--
 * @Description:
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2022-01-14 10:22:08
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-14 10:44:33
-->
<template>
  <div style="width: 100px; height: 40px">{{ smg }}</div>
</template>
<script>
export default {
  name: "SunnyHead",
  props: {
    smg: {
      type: String,
      default: "",
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
