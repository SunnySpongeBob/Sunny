<!--
 * @Description:
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2022-01-12 17:18:25
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-12 19:00:37
-->
<template>
  <div>
    <div>
      <Modal class="modal" width="60%" v-model="autModal" title="权限设置">
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
                :data="formItem.menus"
                show-checkbox
                @on-check-change="treeSelect"
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
export default {
  name: "MyOwenAuthorityModal",

  data() {
    return {
      autModal: false,
      formItem: {
        name: "",
        desc: "",
        menus: [],
      },
    };
  },

  methods: {
    treeSelect(data) {
      console.log("data", data);
    },
    changeAutModal(tem, item, menus) {
      console.log("menus77777", menus);
      this.autModal = tem;
      this.formItem.name = item.roleName;
      this.formItem.desc = item.description;
      this.formItem.menus = menus;
    },
    confirm() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
      this.changeAutModal(false);
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
