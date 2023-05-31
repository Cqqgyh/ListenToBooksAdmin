/*
 * @Author: cqq 945327638@qq.com
 * @Date: 2023-05-23 10:34:35
 * @LastEditors: cqq 945327638@qq.com
 * @LastEditTime: 2023-05-26 18:48:05
 * @FilePath: \listen-to-books-admin\src\enums\constEnums.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function getLabelByValue(
  arr: {
    label: string
    value: string | number
  }[],
  value: string,
): string {
  const item = arr.find((item) => item.value === value)
  return item ? item.label : ''
}
// 专辑审核状态 0301-审核通过 0302-审核不通过
export enum AlbumApproveStatus {
  PASS = '0301',
  NOT_PASS = '0302',
}
export const AlbumApproveStatusMap = [
  { label: '审核通过', value: '0301' },
  { label: '审核不通过', value: '0302' },
]
// 付费类型 0101-免费 0102-VIP免费 0103-付费
export enum PayType {
  Free = '0101',
  VipFree = '0102',
  NotFree = '0103',
}

export const PayTypeMap = [
  { label: '免费', value: '0101' },
  { label: 'VIP免费', value: '0102' },
  { label: '付费', value: '0103' },
]
// 完结类型 0-未完结 1-完结
export enum FinishType {
  NotFinish = '0',
  Finish = '1',
}
export const FinishTypeMap = [
  { label: '未完结', value: '0' },
  { label: '完结', value: '1' },
]
// isOpen "是否公开：0-否 1-是"
export enum IsOpen {
  No = '0',
  Yes = '1',
}
export const IsOpenMap = [
  { label: '否', value: '0' },
  { label: '是', value: '1' },
]
//priceType 价格类型： 0201-单集 0202-整专辑
export enum PriceType {
  Single = '0201',
  Album = '0202',
}
export const PriceTypeMap = [
  { label: '单集', value: '0201' },
  { label: '整专辑', value: '0202' },
]
// source	声音来源，1-用户原创 2-上传
export enum TrackSource {
  User = '1',
  Upload = '2',
}
export const TrackSourceMap = [
  { label: '用户原创', value: '1' },
  { label: '上传', value: '2' },
]
// 声音审核状态 0501-审核通过 0502-审核不通过
export enum TrackApproveStatus {
  PASS = '0501',
  NOT_PASS = '0502',
}
export const TrackApproveStatusMap = [
  { label: '审核通过', value: '0501' },
  { label: '审核不通过', value: '0502' },
]
//	付款项目类型: 1001-专辑 1002-声音 1003-vip会员
export enum PayItemType {
  Album = '1001',
  Track = '1002',
  Vip = '1003',
}
export const PayItemTypeMap = [
  { label: '专辑', value: '1001' },
  { label: '声音', value: '1002' },
  { label: 'vip会员', value: '1003' },
]
// 	支付方式：1101-微信 1102-支付宝 1103-账户余额
export enum PayWayType {
  WeChat = '1101',
  Alipay = '1102',
  Balance = '1103',
}
export const PayWayTypeMap = [
  { label: '微信', value: '1101' },
  { label: '支付宝', value: '1102' },
  { label: '账户余额', value: '1103' },
]
// orderStatus	订单状态：0901-未支付 0902-已支付 0903-已取消
export enum OrderStatusType {
  Unpaid = '0901',
  Paid = '0902',
  Cancelled = '0903',
}
export const OrderStatusTypeMap = [
  { label: '未支付', value: '0901' },
  { label: '已支付', value: '0902' },
  { label: '已取消', value: '0903' },
]
// gender 性别：1-女 0-男
export enum GenderType {
  Man = 0,
  Woman = 1,
}
export const GenderTypeMap = [
  { label: '男', value: 0 },
  { label: '女', value: 1 },
]
// 用户状态：0-正常 1-禁用
export enum UserStatus {
  Normal = 0,
  Disabled = 1,
}
export const UserStatusMap = [
  { label: '正常', value: 0 },
  { label: '禁用', value: 1 },
]
// Vip 会员状态：0-非会员 1-会员
export enum VipStatus {
  NotVip = 0,
  Vip = 1,
}
export const VipStatusMap = [
  { label: '非会员', value: 0 },
  { label: '会员', value: 1 },
]
// 按钮权限
export const ButtonPermission = {
  // 用户管理
  SysUser: {
    List: 'bnt.sysUser.list',
    Add: 'bnt.sysUser.add',
    Update: 'bnt.sysUser.update',
    Remove: 'bnt.sysUser.remove',
    AssignRole: 'bnt.sysUser.assignRole',
  },
  // 角色管理
  SysRole: {
    List: 'bnt.sysRole.list',
    Add: 'bnt.sysRole.add',
    Update: 'bnt.sysRole.update',
    Remove: 'bnt.sysRole.remove',
    AssignAuth: 'bnt.sysRole.assignAuth',
  },
  // 菜单管理
  SysMenu: {
    List: 'bnt.sysMenu.list',
    Add: 'bnt.sysMenu.add',
    Update: 'bnt.sysMenu.update',
    Remove: 'bnt.sysMenu.remove',
  },
  // 部门管理
  SysDept: {
    List: 'bnt.sysDept.list',
    Add: 'bnt.sysDept.add',
    Update: 'bnt.sysDept.update',
    Remove: 'bnt.sysDept.remove',
  },
  // 岗位管理
  SysPost: {
    List: 'bnt.sysPost.list',
    Add: 'bnt.sysPost.add',
    Update: 'bnt.sysPost.update',
    Remove: 'bnt.sysPost.remove',
  },
  // 操作日志
  SysLog: {
    OperLogList: 'bnt.sysOperLog.list',
    LoginLogList: 'bnt.sysLoginLog.list',
  },
  //  专辑管理
  Album: {
    //  专辑列表
    AlbumList: {
      ViewDetail: 'bnt.album.viewDetail',
      PassAndNotPass: 'bnt.album.passAndNotPass',
    },
    //  声音列表
    TrackList: {
      ViewTrackDetail: 'bnt.track.viewTrackDetail',
    },
  },
  //  订单管理
  Order: {
    //  专辑列表
    OrderList: {
      ViewOrderDetail: 'bnt.order.viewOrderDetail',
    },
  },
}
