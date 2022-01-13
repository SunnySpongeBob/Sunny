<!--
 * @Description:
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2022-01-12 15:42:23
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-12 18:59:34
-->
<template>
  <div class="all">
    <div class="top"></div>
    <div class="middle">
      <div>
        <Table border :columns="roleColumns" :data="roles">
          <template slot-scope="{ row }" slot="roleName">
            <strong>{{ row.roleName }}</strong>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <Button
              type="primary"
              size="small"
              style="margin-right: 5px"
              @click="show(index, row)"
              >编辑权限</Button
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
  mounted() {
    let menuList = this.$store.getters.menuList;
    this.menus = [];
    for (let i = 0; i < menuList.length; i++) {
      let children = [];

      menuList[i].children.map((item) => {
        children.push({ title: item.meta.title, nodeId: item.name });
      });
      this.menus.push({
        title: menuList[i].title,
        nodeId: menuList[i].name,
        children: children,
      });
    }

    console.log("menus-----", this.menus);
    // this.menus = menus;

    console.log("his.$store.getters.menuList", this.$store.getters.menuList);
  },

  methods: {
    show(index, row) {
      console.log("row", row);
      this.$refs.authmodal.changeAutModal(true, row, this.menus);
    },
    // remove(index) {
    //   this.data6.splice(index, 1);
    // },
  },
};
</script>
<style lang="less" scoped>
</style>
