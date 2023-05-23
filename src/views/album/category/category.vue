<template>
  <el-card>
    <!--    row-key="categoryId"-->
    <ProTable
      ref="proTable"
      :columns="columns"
      row-key="categoryId"
      :dataCallback="dataCallback"
      :requestApi="getCategoryList"
      :initParam="initParam"
      :tree-props="{ children: 'categoryChild', hasChildren: 'hasChildren' }"
    ></ProTable>
  </el-card>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import ProTable from '@/components/ProTable/src/ProTable.vue'
import { ColumnProps } from '@/components/ProTable/src/types'
import { getCategoryList } from '@/api/album'

// *获取 ProTable 元素，调用其获取刷新数据方法
const proTable = ref<InstanceType<typeof ProTable>>()

// *表格配置项
const columns: ColumnProps[] = [
  { prop: 'categoryName', label: '分类名称', align: 'left' },
  { prop: 'categoryId', label: '分类id', align: 'left' },
]

// *查询参数
const initParam = reactive({})

// 处理返回的数据格式
const dataCallback = (data: any) => {
  return {
    list: data,
  }
}
</script>

<style lang="scss" scoped></style>
