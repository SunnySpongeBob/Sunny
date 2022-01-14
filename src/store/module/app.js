import {
  getBreadCrumbList,
  setTagNavListInLocalstorage,
  getMenuByRouter,
  getTagNavListFromLocalstorage,
  getHomeRoute,
  getNextRoute,
  routeHasExist,
  routeEqual,
  getRouteTitleHandled,
  localSave,
  localRead
} from '@/libs/util'
import { saveErrorLogger } from '@/api/data'
import router from '@/router'
import routers from '@/router/routers'
import config from '@/config'
const { homeName } = config

const closePage = (state, route) => {
  const nextRoute = getNextRoute(state.tagNavList, route)
  state.tagNavList = state.tagNavList.filter(item => {
    return !routeEqual(item, route)
  })
  router.push(nextRoute)
}

export default {
  state: {
    breadCrumbList: [],
    tagNavList: [],
    homeRoute: {},
    local: localRead('local'),
    errorList: [],
    hasReadErrorPage: false,
    menus: [
      {
        name: "_home",
        title: "首页",
        meta: {
          icon: "",
        },
        children: [
          {
            icon: "md-home",
            name: "home",
            meta: {
              title: "首页",
              icon: "md-home",
            },
          },
        ],
      },
      {
        name: "authority",
        title: "权限管理",
        meta: {
          icon: "md-rainy",

        },
        children: [
          {
            name: "authority_page",
            meta: {
              title: "权限管理",
              icon: "md-rainy",

            },
          },
        ],
      },
      {
        name: "sunny",
        title: "晴天",
        meta: {
          title: "晴天",
          access: ["admin"],
          icon: "logo-buffer",
        },
        children: [
          {
            path: "sunny_page",
            name: "sunny_page",
            meta: {
              title: "组件插槽",
              access: ["super_admin"],
              icon: "md-arrow-dropdown-circle",
            },
          },
          {
            path: "sunny_pagess",
            name: "sunny_pagess",
            meta: {
              title: "动态加载组件",
              icon: "md-arrow-dropdown-circle",
            },
          },
          {
            path: "sunny_mixins",
            name: "sunny_mixins",
            meta: {
              title: "混合机制",
              icon: "md-arrow-dropdown-circle",
            },
          },
        ],
      },
      {
        name: "join",
        title: "QQ群",
        meta: {
          icon: "",
        },
        children: [
          {
            path: "join_page",
            name: "join_page",
            meta: {
              title: "QQ群",
              icon: "_qq",
            },
          },
        ],
      },
      {
        name: "components",
        title: "组件",

        meta: {
          title: "组件",
          access: ["admin"],
          icon: "logo-buffer",

        },
        children: [
          {
            path: "tree_select_page",
            name: "tree_select_page",
            meta: {
              title: "树状下拉选择器",
              access: ["super_admin"],
              icon: "md-arrow-dropdown-circle",
            },
          },
          {
            path: "count_to_page",
            name: "count_to_page",
            meta: {
              title: "数字渐变",
              icon: "md-arrow-dropdown-circle",

            },
          },
        ],
      },
    ]
  },
  getters: {
    menuList: (state, getters, rootState) => {
      console.log('rootState', rootState);

      return getMenuByRouter(state.menus, rootState.user.access)
      // return getMenuByRouter(routers, rootState.user.access)

    },
    errorCount: state => state.errorList.length
  },
  mutations: {
    setBreadCrumb(state, route) {
      state.breadCrumbList = getBreadCrumbList(route, state.homeRoute)
    },
    setHomeRoute(state, routes) {
      state.homeRoute = getHomeRoute(routes, homeName)
    },
    setTagNavList(state, list) {
      let tagList = []
      if (list) {
        tagList = [...list]
      } else tagList = getTagNavListFromLocalstorage() || []
      if (tagList[0] && tagList[0].name !== homeName) tagList.shift()
      let homeTagIndex = tagList.findIndex(item => item.name === homeName)
      if (homeTagIndex > 0) {
        let homeTag = tagList.splice(homeTagIndex, 1)[0]
        tagList.unshift(homeTag)
      }
      state.tagNavList = tagList
      setTagNavListInLocalstorage([...tagList])
    },
    closeTag(state, route) {
      let tag = state.tagNavList.filter(item => routeEqual(item, route))
      route = tag[0] ? tag[0] : null
      if (!route) return
      closePage(state, route)
    },
    addTag(state, { route, type = 'unshift' }) {
      let router = getRouteTitleHandled(route)
      if (!routeHasExist(state.tagNavList, router)) {
        if (type === 'push') state.tagNavList.push(router)
        else {
          if (router.name === homeName) state.tagNavList.unshift(router)
          else state.tagNavList.splice(1, 0, router)
        }
        setTagNavListInLocalstorage([...state.tagNavList])
      }
    },
    setLocal(state, lang) {
      localSave('local', lang)
      state.local = lang
    },
    addError(state, error) {
      state.errorList.push(error)
    },
    setHasReadErrorLoggerStatus(state, status = true) {
      state.hasReadErrorPage = status
    }
  },
  actions: {
    addErrorLog({ commit, rootState }, info) {
      if (!window.location.href.includes('error_logger_page')) commit('setHasReadErrorLoggerStatus', false)
      const { user: { token, userId, userName } } = rootState
      let data = {
        ...info,
        time: Date.parse(new Date()),
        token,
        userId,
        userName
      }
      saveErrorLogger(info).then(() => {
        commit('addError', data)
      })
    }
  }
}
