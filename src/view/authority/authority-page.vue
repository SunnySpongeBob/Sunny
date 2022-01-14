<!--
 * @Description:
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2022-01-12 15:42:23
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-14 10:42:32
-->
<template>
  <div class="all">
    <div class="top">
      <common-header :smg="smg1"></common-header>
    </div>
    <div class="middle">
      <div>
        <Button type="primary" class="button">新增角色</Button>
      </div>
      <div>
        <Table border :columns="roleColumns" :data="roles">
          <template slot-scope="{ row }" slot="roleName">
            <strong>{{ row.roleName }}</strong>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <Button
              type="primary"
              size="small"
              style="margin-right: 20px"
              @click="show(index, row)"
              >编辑角色</Button
            >
            <Button type="error" size="small" @click="remove(index)"
              >删除</Button
            >
          </template>
        </Table>
      </div>
      <Authmodal ref="authmodal"></Authmodal>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
import Authmodal from "./components/authority-modal.vue";

export default {
  name: "MyOwenAuthority",
  components: {
    Authmodal,
  },

  data() {
    return {
      smg1: "111111",
      roleColumns: [
        {
          title: "RoleName",
          slot: "roleName",
        },
        {
          title: "RoleKey",
          key: "roleKey",
        },
        {
          title: "Description",
          key: "description",
        },
        {
          title: "Action",
          slot: "action",
          width: 250,
          align: "center",
        },
      ],
      roles: [
        {
          roleName: "super_admin",
          roleKey: "super_admin",
          description: "超级管理员，有全部权限",
        },
        {
          roleName: "admin",
          roleKey: "admin",
          description: "管理员",
        },
        {
          roleName: "visitor",
          roleKey: "visitor",
          description: "游客",
        },
      ],
      menus: [],
    };
  },
  computed: {
    // ...mapGetters(["errorCount"]),
    menulist() {
      return this.$store.getters.menuList;
    },
  },
  mounted() {},

  methods: {
    show(index, row) {
      console.log("row", row);
      this.$refs.authmodal.changeAutModal(true, row);
    },
    remove(index) {
      this.$Modal.confirm({
        title: "删除",
        content: `<p>您确定要删除角色${this.roles[index].roleName}吗？</p>`,
        onOk: () => {
          this.roles.splice(index, 1);
        },
        onCancel: () => {
          this.$Message.info("取消删除");
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.button {
  margin-bottom: 20px;
}
</style>
