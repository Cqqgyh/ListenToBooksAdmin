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
