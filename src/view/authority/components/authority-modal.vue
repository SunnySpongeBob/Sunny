<!--
 * @Description:
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2022-01-12 17:18:25
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-14 11:01:17
-->
<template>
  <div>
    <div>
      <Modal class="modal" width="60%" v-model="autModal" title="角色设置">
        <div class="content">
          <Form :model="formItem" :label-width="80" label-position="left">
            <FormItem label="Name">
              <Input
                v-model="formItem.name"
                placeholder="Enter something..."
              ></Input>
            </FormItem>
            <FormItem label="Desc">
              <Input
                v-model="formItem.desc"
                placeholder="Enter something..."
              ></Input>
            </FormItem>
            <FormItem label="Menus">
              <Tree
                ref="tree"
                :data="formItem.menus"
                show-checkbox
                @on-check-change="treeCheck"
              ></Tree>
            </FormItem>
          </Form>
        </div>
        <div slot="footer">
          <Button type="primary" @click="confirm">确定</Button>
          <Button type="default" @click="cancel">取消</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>
<script>
import { tools } from "@/libs/util";
export default {
  name: "MyOwenAuthorityModal",

  data() {
    return {
      autModal: false,
      // row:{},
      formItem: {
        name: "",
        desc: "",
        menus: [],
      },
    };
  },

  methods: {
    treeCheck(data) {
      // console.log("data", data);
    },

    changeAutModal(tem, item) {
      // this.row=item
      this.autModal = tem;
      this.formItem.name = item.roleName;
      this.formItem.desc = item.description;
      let menuList = this.$store.state.app.menus;
      this.formItem.menus = tools(menuList, item.roleName);
    },

    confirm() {
      let checkNodes = this.$refs.tree.getCheckedNodes();
      console.log(checkNodes, "///////");
      // console.log("formItem", this.formItem);
    },
    cancel() {
      this.autModal = false;
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.modal {
  .content {
    height: 600px;
    overflow-y: auto;
  }
}
</style>
