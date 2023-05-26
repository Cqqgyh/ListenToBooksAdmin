/**
 * @description 📚 路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isLink ==> 是否外链
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面)
 * @param meta.isAffix ==> 是否固定在 tabs nav
 * @param meta.isKeepAlive ==> 是否缓存
 * */

import { RouteRecordRaw } from 'vue-router'
import { HOME_URL, LOGIN_URL } from '@/config/config'

const LAYOUT = () => import('@/layouts/index.vue')

/**
 * @description 静态路由
 */
export const staticRoutes: RouteRecordRaw[] = [
  {
    path: LOGIN_URL,
    name: 'login',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/error/error-404.vue'),
  },
  {
    path: '/',
    name: 'LAYOUT',
    component: LAYOUT,
    redirect: HOME_URL,
    meta: {
      title: '首页',
      icon: 'HomeFilled',
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          affix: true,
        },
      },
    ],
  },
  // 系统权限管理
  {
    name: 'system',
    path: '/system',
    component: LAYOUT,
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: 'Lock',
    },
    children: [
      {
        name: 'System/User',
        path: '/system/user',
        component: () => import('@/views/system/user/user.vue'),
        meta: {
          title: '用户管理',
          icon: 'UserFilled',
        },
      },
      {
        name: 'System/Role',
        path: '/system/role',
        component: () => import('@/views/system/role/role.vue'),
        meta: {
          title: '角色管理',
          icon: 'Avatar',
        },
      },
      {
        name: 'System/Permision',
        path: '/system/permission',
        component: () => import('@/views/system/permission/permission.vue'),
        meta: {
          title: '菜单管理',
          icon: 'Menu',
        },
      },
    ],
  },
  // 专辑管理
  {
    name: 'album',
    path: '/album',
    component: LAYOUT,
    redirect: '/album/albumList',
    meta: {
      title: '专辑管理',
      icon: 'Film',
    },
    children: [
      {
        name: 'album/albumInfo',
        path: '/album',
        redirect: '/album/albumList',
        meta: {
          title: '专辑信息',
          icon: 'List',
        },
        children: [
          {
            name: 'album/albumList',
            path: '/album/albumList',
            component: () => import('@/views/album/albumList/albumList.vue'),
            meta: {
              title: '专辑列表',
              icon: 'List',
            },
          },
          {
            name: 'album/showAlbumDetails',
            path: '/album/showAlbumDetails',
            component: () =>
              import('@/views/album/albumList/showAlbumDetails.vue'),
            meta: {
              title: '专辑详情',
              icon: 'Document',
              isHide: true,
              activeMenu: '/album/albumList',
            },
          },
        ],
      },
      {
        name: 'album/trackList',
        path: '/album',
        redirect: '/album/trackList',
        meta: {
          title: '声音管理',
          icon: 'Headset',
        },
        children: [
          {
            name: 'album/trackList',
            path: '/album/trackList',
            component: () => import('@/views/album/trackList/trackList.vue'),
            meta: {
              title: '声音列表',
              icon: 'Headset',
            },
          },
          {
            name: 'album/showTrackDetails',
            path: '/album/showTrackDetails',
            component: () =>
              import('@/views/album/trackList/showTrackDetails.vue'),
            meta: {
              title: '声音详情',
              icon: 'Document',
              isHide: true,
              activeMenu: '/album/trackList',
            },
          },
        ],
      },
      {
        name: 'album/category',
        path: '/album/category',
        component: () => import('@/views/album/category/category.vue'),
        meta: {
          title: '分类管理',
          icon: 'Menu',
        },
      },
      {
        name: 'album/categoryAttribute',
        path: '/album/categoryAttribute',
        component: () =>
          import('@/views/album/categoryAttribute/categoryAttribute.vue'),
        meta: {
          title: '分类属性管理',
          icon: 'Grid',
        },
      },
    ],
  },
  // 订单管理
  {
    name: 'order',
    path: '/order',
    component: LAYOUT,
    redirect: '/order/orderList',
    meta: {
      title: '订单管理',
      icon: 'Setting',
    },
    children: [
      {
        name: 'order/orderInfo',
        path: '/order/orderList',
        redirect: '/order/orderList',
        meta: {
          title: '订单列表',
          icon: 'List',
        },
        children: [
          {
            name: 'order/orderList',
            path: '/order/orderList',
            component: () => import('@/views/order/orderList/orderList.vue'),
            meta: {
              title: '订单列表',
              icon: 'List',
            },
          },
          {
            name: 'order/showOrderDetails',
            path: '/order/showOrderDetails',
            component: () =>
              import('@/views/order/orderList/showOrderDetails.vue'),
            meta: {
              title: '订单详情',
              icon: 'Document',
              isHide: true,
              activeMenu: '/order/orderList',
            },
          },
        ],
      },
    ],
  },
  // 会员管理
  {
    name: 'member',
    path: '/member',
    component: LAYOUT,
    redirect: '/member/memberList',
    meta: {
      title: '会员管理',
      icon: 'UserFilled',
    },
    children: [
      {
        name: 'member/memberInfo',
        path: '/member/memberList',
        redirect: '/member/memberList',
        meta: {
          title: '会员列表',
          icon: 'UserFilled',
        },
        children: [
          {
            name: 'member/memberList',
            path: '/member/memberList',
            component: () => import('@/views/member/memberList/memberList.vue'),
            meta: {
              title: '会员列表',
              icon: 'UserFilled',
            },
          },
          {
            name: 'member/showMemberDetails',
            path: '/member/showMemberDetails',
            component: () =>
              import('@/views/member/memberList/showMemberDetails.vue'),
            meta: {
              title: '会员详情',
              icon: 'Document',
              isHide: true,
              activeMenu: '/member/memberList',
            },
          },
        ],
      },
    ],
  },
  // 此路由防止控制台出现No match found for location with path的警告
  {
    path: '/:catchAll(.*)',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/error/error-404.vue'), //这个是我自己的路径
  },
]

/**
 * @description 路由未找到
 */
export const notFoundRouter = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  redirect: '404',
}
