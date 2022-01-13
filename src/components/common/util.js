/*
 * @Description:
 * @Company: huqu
 * @Author: Sunny
 * @Date: 2022-01-04 18:11:41
 * @LastEditors: Sunny
 * @LastEditTime: 2022-01-12 16:10:25
 */
export const showTitle = (item, vm) => {
  console.log('item', item);
  console.log('vm', vm);
  return vm.$config.useI18n ? vm.$t(item.name) : ((item.meta && item.meta.title) || item.name)
}
