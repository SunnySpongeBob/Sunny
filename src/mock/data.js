/*
 * @Description: 
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2021-12-29 16:53:37
 * @LastEditors: Sunny
 * @LastEditTime: 2021-12-31 16:55:32
 */
import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
import orgData from './data/org-data'
import { treeData } from './data/tree-select'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(5, () => {
    tableData.push(Mock.mock({
      name: '@name',
      email: '@email',
      createTime: '@date'
    }))
  })
  return tableData
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}

export const uploadImage = req => {
  return Promise.resolve()
}

export const getOrgData = req => {
  return orgData
}

export const getTreeSelectData = req => {
  return treeData
}
