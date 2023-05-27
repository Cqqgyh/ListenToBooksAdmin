<template>
  <el-card>
    <ProTable
      ref="proTable"
      :dataCallback="dataCallback"
      :columns="columns"
      :requestApi="getUserList"
      :initParam="initParam"
    ></ProTable>
  </el-card>
</template>

<script setup lang="tsx">
import { reactive, ref } from 'vue'
import { ColumnProps } from '@/components/ProTable/src/types'
import ProTable from '@/components/ProTable/src/ProTable.vue'
import { getUserList } from '@/api/member'
import {
  GenderTypeMap,
  getLabelByValue,
  VipStatusMap,
} from '@/enums/constEnums'

// *获取 ProTable 元素，调用其获取刷新数据方法
const proTable = ref<InstanceType<typeof ProTable>>()

// *表格配置项
const columns: ColumnProps[] = [
  { type: 'index', label: '序号' },
  {
    prop: 'nickname',
    label: '昵称',
    width: 230,
    search: {
      el: 'input',
      props: { placeholder: '请输入昵称' },
    },
  },
  {
    prop: 'phone',
    label: '手机号',
    width: 230,
    search: {
      el: 'input',
      props: { placeholder: '请输入手机号' },
    },
  },
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
  {
    prop: 'avatarUrl',
    label: '头像',
    width: 80,
    render: ({ row }) => {
      return <img style="width:60px;height:60px" src={row.avatarUrl} alt="" />
    },
  },
  {
    prop: 'gender',
    label: '性别',
    width: 80,
    render: ({ row }) => {
      return (
        <span>{getLabelByValue(GenderTypeMap, row.gender) || '未设置'}</span>
      )
    },
  },
  { prop: 'birthday', label: '生日', width: 160 },
  {
    prop: 'birthday',
    label: 'VIP状态',
    width: 90,
    render: ({ row }) => {
      return <span>{getLabelByValue(VipStatusMap, row.isVip)}</span>
    },
  },
  { prop: 'vipExpireTime', label: 'VIP到期时间', width: 160 },
  { prop: 'createTime', label: '创建时间' },
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
</script>
