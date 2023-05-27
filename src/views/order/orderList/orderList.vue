<template>
  <el-card>
    <ProTable
      ref="proTable"
      :dataCallback="dataCallback"
      :columns="columns"
      :requestApi="getOrderList"
      :initParam="initParam"
    >
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button
          type="primary"
          link
          icon="View"
          @click="handleView(scope.row)"
        >
          查看
        </el-button>
      </template>
    </ProTable>
  </el-card>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue'
import { ColumnProps } from '@/components/ProTable/src/types'
import ProTable from '@/components/ProTable/src/ProTable.vue'
import { useRouter } from 'vue-router'
import { getOrderList } from '@/api/order'
import {
  getLabelByValue,
  OrderStatusTypeMap,
  PayItemTypeMap,
  PayWayTypeMap,
} from '@/enums/constEnums'
import { OrderInfoInterface } from '@/api/order/types'
const router = useRouter()

// *获取 ProTable 元素，调用其获取刷新数据方法
const proTable = ref<InstanceType<typeof ProTable>>()

// *表格配置项
const columns: ColumnProps[] = [
  { type: 'index', label: '序号' },
  {
    prop: 'createTimeBegin',
    label: '创建时间',
    isShow: false,
    search: {
      el: 'date-picker',
      props: {
        placeholder: '创建时间',
        format: 'YYYY-MM-DD',
        'value-format': 'YYYY-MM-DD',
      },
    },
  },
  {
    prop: 'createTimeEnd',
    label: '截止时间',
    isShow: false,
    search: {
      el: 'date-picker',
      props: {
        placeholder: '截止时间',
        format: 'YYYY-MM-DD',
        'value-format': 'YYYY-MM-DD',
      },
    },
  },
  // orderTitle	订单标题
  { prop: 'orderTitle', label: '订单标题', width: 160 },
  { prop: 'orderNo', label: '订单号', width: 270 },
  {
    prop: 'orderStatus',
    width: 90,
    label: '订单状态',
    render: ({ row }) => {
      return <span>{getLabelByValue(OrderStatusTypeMap, row.orderStatus)}</span>
    },
  },
  {
    prop: 'itemType',
    label: '付款类型',
    width: 90,
    render: ({ row }) => {
      return <span>{getLabelByValue(PayItemTypeMap, row.itemType)}</span>
    },
  },
  {
    prop: 'payWay',
    label: '支付方式',
    width: 90,
    render: ({ row }) => {
      return <span>{getLabelByValue(PayWayTypeMap, row.payWay)}</span>
    },
  },
  {
    prop: 'payWay',
    label: '订单商品数量',
    width: 90,
    render: ({ row }) => {
      return <span>{row.orderDetailList.length}</span>
    },
  },
  { prop: 'originalAmount', label: '订单原始金额', width: 90 },
  { prop: 'derateAmount', label: '减免总金额', width: 100 },
  { prop: 'orderAmount', label: '订单总价', width: 90 },
  { prop: 'orderStatusName', label: '状态' },
  { prop: 'createTime', label: '创建时间' },
  { prop: 'operation', label: '操作', fixed: 'right', width: 230 },
]

// *查询参数
const initParam = reactive({})

// 处理返回的数据格式
const dataCallback = (data: any) => {
  return {
    list: data?.records,
    total: data?.total,
  }
}
// 查看
const handleView = (row: OrderInfoInterface) => {
  console.log(row)
  router.push({
    path: '/order/showOrderDetails',
    query: {
      id: row.orderNo,
    },
  })
}
</script>
