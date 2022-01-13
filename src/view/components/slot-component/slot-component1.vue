<!--
 * @Description:
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2022-01-06 18:12:37
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-12 18:32:46
-->
]
<template>
  <div class="">
    <div class="">
      <Tree :data="data2" show-checkbox @on-check-change="treeSelect"></Tree>
    </div>
    <!-- <div class="slotTxt">
      <slot></slot>
    </div> -->
    <div class="hello">
      <h1>我是组件</h1>
      <h2>我是组件的公共部分</h2>
      <div class="slotLeft">
        <span>我是插槽1</span>

        <slot name="left" :users="user"></slot>
      </div>
      <!-- 插槽参数解构 要匿名 -->

      <div class="slotRight">
        <span>我是插槽2</span>
        <slot :users="user"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sunny",

  data() {
    return {
      user: {
        name: "hello world",
        age: 18,
      },
      data2: [
        {
          title: "parent 1",
          nodeId: 1,
          // children: [
          //   {
          //     title: "parent 1-1",
          //     nodeId: 1 - 1,
          //     children: [
          //       {
          //         title: "leaf 1-1-1",
          //         nodeId: 1 - 1 - 1,
          //       },
          //       {
          //         title: "leaf 1-1-2",
          //         nodeId: 1 - 1 - 2,
          //       },
          //     ],
          //   },
          //   {
          //     title: "parent 1-2",
          //     nodeId: 1 - 2,
          //     children: [
          //       {
          //         title: "leaf 1-2-1",
          //         nodeId: 1 - 2 - 1,
          //       },
          //       {
          //         title: "leaf 1-2-1",
          //         nodeId: 1 - 2 - 1,
          //       },
          //     ],
          //   },
          // ],
        },
        {
          title: "parent 1",
          nodeId: 1,
          // children: [
          //   {
          //     title: "parent 1-1",
          //     nodeId: 1 - 1,
          //     children: [
          //       {
          //         title: "leaf 1-1-1",
          //         nodeId: 1 - 1 - 1,
          //       },
          //       {
          //         title: "leaf 1-1-2",
          //         nodeId: 1 - 1 - 2,
          //       },
          //     ],
          //   },
          //   {
          //     title: "parent 1-2",
          //     nodeId: 1 - 2,
          //     children: [
          //       {
          //         title: "leaf 1-2-1",
          //         nodeId: 1 - 2 - 1,
          //       },
          //       {
          //         title: "leaf 1-2-1",
          //         nodeId: 1 - 2 - 1,
          //       },
          //     ],
          //   },
          // ],
        },
      ],
    };
  },

  mounted() {},

  methods: {
    treeSelect(data) {
      console.log("data", data);
    },
  },
};
</script>
<style lang="less" scoped>
.m-content {
  height: 1500px;
}
.slotTxt {
  width: 500px;
  height: 200px;
  margin: 30px auto;
  background: red;
}
.hello {
  width: 700px;
  height: 300px;
  background: #ccc;
  margin: 0 auto;
  margin-top: 50px;
  .slotLeft {
    width: 300px;
    height: 200px;
    float: left;
    background: red;
  }
  .slotRight {
    width: 300px;
    height: 200px;
    float: right;
    background: pink;
  }
}
</style>
