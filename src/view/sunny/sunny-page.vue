<!--
 * @Description: 
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2021-12-31 14:32:19
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-06 18:53:28
-->
<template>
  <div class="all">
    <div class="top"></div>
    <div class="middle">
      <div class="m-content">
        <!-- <slotComponent>
           没有插槽，这里的内容不显示 
          <h1>我是slotComponent1中的插槽啊</h1>
        </slotComponent> -->
        <slotComponent>
          <template v-slot:left="slotProps">
            <h1>name属性为left</h1>
            <h1>{{ slotProps.users.name }}</h1>
          </template>
          <!-- 插槽参数解构 -->
          <!-- <template v-slot="{ users }">
            <h1>name属性为right</h1>
            <h1>{{ users.name }}</h1>
          </template> -->
        </slotComponent>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
import slotComponent from "../components/slot-component/slot-component1.vue";
export default {
  name: "Sunny",
  components: {
    slotComponent,
  },

  data() {
    return {};
  },
  methods: {
    sleep(second, param) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // console.log(param);
          // resolve(param);
          reject(param);
        }, second);
      });
    },
    async testError() {
      try {
        let result = await this.sleep(1000, "sleep1");
        console.log("result", result);
      } catch (err) {
        console.log("---------", err);
      }
    },
    async test() {
      let result1 = await this.sleep(1000, "sleep1");
      let result2 = await this.sleep(2000, "sleep2" + result1);
      let result3 = await this.sleep(3000, "sleep3" + result2);
      console.log("***********", `${result3},${result2},${result1}`);
    },
  },

  mounted() {
    // this.test();
    this.testError();
  },
};
</script>
<style lang="less" scoped>
.m-content {
  height: 1500px;
}
</style>