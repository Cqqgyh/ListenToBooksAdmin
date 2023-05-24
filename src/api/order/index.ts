import http from '@/utils/http'
import {
  PageResponseInterface,
  OrderInfoInterface,
  OrderListInterfaceReq,
} from '@/api/order/types'
/**
 * @description 获取订单列表
 * @param params
 */
export const getOrderList = (params: OrderListInterfaceReq) => {
  return http.get<PageResponseInterface<OrderInfoInterface[]>>(
    `/admin/order/orderInfo/findPage/${params.pageNum}/${params.pageSize}`,
    {
      createTimeBegin: params.createTimeBegin,
      createTimeEnd: params.createTimeEnd,
    },
  )
}
/**
 * @description 根据订单号获取订单信息
 * @param orderNo
 */
export const getOrderInfoByOrderNo = (orderNo: string) => {
  return http.get<OrderInfoInterface>(
    `/admin/order/orderInfo/getOrderInfo/${orderNo}`,
  )
}
