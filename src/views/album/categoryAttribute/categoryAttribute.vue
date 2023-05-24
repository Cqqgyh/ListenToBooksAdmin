<template>
  <el-card>
    <ProTable
      ref="proTable"
      :columns="columns"
      row-key="uniqueId"
      :dataCallback="dataCallback"
      :requestApi="getCategoryAttributeListHandle"
      :initParam="initParam"
      :tree-props="{
        children: 'children',
        hasChildren: 'hasChildren',
      }"
    ></ProTable>
  </el-card>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import ProTable from '@/components/ProTable/src/ProTable.vue'
import { ColumnProps } from '@/components/ProTable/src/types'
import { getCategory1List, getCategoryAttributeList } from '@/api/album'
import { CategoryAttributeListInterface } from '@/api/album/types'

// *获取 ProTable 元素，调用其获取刷新数据方法
const proTable = ref<InstanceType<typeof ProTable>>()

// *表格配置项
const columns: ColumnProps[] = [
  { prop: 'name', label: '一级分类名称', align: 'left' },
  { prop: 'attributeName', label: '属性名称', align: 'left' },
  { prop: 'attributeValue', label: '属性值', align: 'left' },
  { prop: 'id', label: '分类id', align: 'left' },
  { prop: 'attributeId', label: '属性id', align: 'left' },
  { prop: 'attributeValueId', label: '属性值id', align: 'left' },
]
const category1List = ref([] as CategoryAttributeListInterface[])
// *查询参数
const initParam = reactive({})

// 处理返回的数据格式
const dataCallback = (data: any) => {
  return {
    list: data,
  }
}
// 获取全部一级分类
const getCategory1ListHandle = async () => {
  const res = await getCategory1List()
  category1List.value = res.data
}
// 获取全部属性值
const getCategoryAttributeListHandle = async () => {
  const res = await getCategoryAttributeList()
  res.data.forEach((item: CategoryAttributeListInterface) => {
    item.uniqueId = item.name && item.id + item.name
    item.children.forEach((item2: CategoryAttributeListInterface) => {
      item2.attributeName = item2.name
      item2.attributeId = item2.id
      item2.uniqueId = item2.name && item2.id + item2.name
      delete item2.name
      delete item2.id
      item2.children.forEach((item3: CategoryAttributeListInterface) => {
        item3.attributeValue = item3.name
        item3.attributeValueId = item3.id
        item3.uniqueId = item3.name && item3.id + item3.name
        delete item3.name
        delete item3.id
      })
    })
  })
  return res
}

onMounted(() => {
  getCategory1ListHandle()
})
</script>

<style lang="scss" scoped></style>
