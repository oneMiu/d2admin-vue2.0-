import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath (menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}
// 顶部菜单
export const menuHeader = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '系统管理',
    icon: 'cog',
    children: [
      { path: '/user', title: '用户管理',icon: 'user' },
      { path: '/menu', title: '菜单管理',icon: 'th-large' },
      { path: '/dict', title: '字典管理',icon:'database' }
    ]
  },
  {
    title: '演示页面',
    icon: 'file-text',
    children: [
      { path: '/page1', title: '演示页面1'},
      { path: '/page2', title: '演示页面2'},
      { path: '/page3', title: '演示页面3'}
    ]
  }
])
// 左侧菜单
export const menuAside = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '系统管理',
    icon: 'cog',
    children: [
      { path: '/user', title: '用户管理',icon: 'user' },
      { path: '/menu', title: '菜单管理',icon: 'th-large' },
      { path: '/dict', title: '字典管理',icon:'database' }
    ]
  },
  {
    title: '演示页面',
    icon: 'file-text',
    children: [
      { path: '/page1', title: '演示页面1'},
      { path: '/page2', title: '演示页面2'},
      { path: '/page3', title: '演示页面3'}
    ]
  }
])
