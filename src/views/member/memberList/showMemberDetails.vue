<template>
  <el-card v-if="orderDetails.orderNo">
    <el-descriptions title="订单信息" :column="2" border>
      <el-descriptions-item
        label="订单标题"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ orderDetails.orderTitle }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="订单号"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ orderDetails.orderNo }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="订单状态"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(OrderStatusTypeMap, orderDetails.orderStatus) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="付款类型"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(PayItemTypeMap, orderDetails.itemType) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="支付方式"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(PayWayTypeMap, orderDetails.payWay) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="订单原始金额"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ orderDetails.originalAmount }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="减免总金额"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ orderDetails.derateAmount }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="订单总价"
        label-align="right"
        align="center"
        width="100px"
      >
        <span style="color: orangered">
          {{ orderDetails.orderAmount }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="创建时间"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ orderDetails.createTime }}
        </span>
      </el-descriptions-item>
    </el-descriptions>
    <el-divider></el-divider>
    <el-table
      :data="orderDetails.orderDetailList"
      stripe
      border
      style="width: 100%"
    >
      <el-table-column prop="itemName" label="商品名称" />
      <el-table-column prop="itemUrl" label="商品图片">
        <template #default="{ row }">
          <img
            :src="row.itemUrl"
            alt=""
            style="width: 60px; height: 60px; border-radius: 5px"
          />
        </template>
      </el-table-column>
      <el-table-column prop="itemPrice" label="商品价格" />
    </el-table>
    <div class="m-t-20 flex-center">
      <el-button style="width: 150px" type="primary" @click="router.back()">
        返回
      </el-button>
    </div>
  </el-card>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import {
  getLabelByValue,
  OrderStatusTypeMap,
  PayItemTypeMap,
  PayWayTypeMap,
} from '@/enums/constEnums'
import { OrderInfoInterface } from '@/api/order/types'
import { getOrderInfoByOrderNo } from '@/api/order'

const route = useRoute()
const router = useRouter()
console.log(route.query.id)
const orderDetails = ref({} as OrderInfoInterface)
// 请求医院详情
const getOrderDetailsHandle = async () => {
  try {
    const res = await getOrderInfoByOrderNo(route.query.id as string)
    orderDetails.value = res.data
  } catch (error) {
    console.log(error)
  }
}
/* 生命周期 */
onMounted(async () => {
  await getOrderDetailsHandle()
})
</script>

<style lang="scss" scoped></style>
