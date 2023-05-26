/*
 * @Author: cqq 945327638@qq.com
 * @Date: 2023-05-24 09:14:29
 * @LastEditors: cqq 945327638@qq.com
 * @LastEditTime: 2023-05-26 18:49:38
 * @FilePath: \listen-to-books-admin\src\api\order\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface PageResponseInterface<T> {
  records: T
  total: number
  size: number
  current: number
  pages: number
}
export interface OrderInfoInterface {
  id: number
  createTime: string
  userId: number
  orderTitle: string
  orderNo: string
  orderStatus: string
  originalAmount: number
  derateAmount: number
  orderAmount: number
  itemType: string
  payWay: string
  orderDetailList: OrderDetail[]
  orderDerateList: null
  orderStatusName: string
  payWayName: string
}

export interface OrderDetail {
  id: number
  createTime: string
  orderId: number
  itemId: number
  itemName: string
  itemUrl: string
  itemPrice: number
}
export interface OrderInfoQueryInterface {
  createTimeBegin: string
  createTimeEnd: string
}
export interface OrderListInterfaceReq extends OrderInfoQueryInterface {
  pageNum: number
  pageSize: number
}
