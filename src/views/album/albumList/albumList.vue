<template>
  <el-card>
    <ProTable
      ref="proTable"
      :dataCallback="dataCallback"
      :columns="columns"
      :requestApi="getAlbumList"
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
        <el-button
          v-if="scope.row.status === ApproveStatus.NOT_PASS"
          type="primary"
          link
          icon="CircleCheck"
          @click="handlePass(scope.row, ApproveStatus.PASS)"
        >
          通过
        </el-button>
        <el-button
          v-if="scope.row.status === ApproveStatus.PASS"
          type="primary"
          link
          icon="CircleClose"
          @click="handlePass(scope.row, ApproveStatus.NOT_PASS)"
        >
          不通过
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
import { useHandleData } from '@/hooks/useHandleData'
import { albumApproval, getAlbumList } from '@/api/album'
import {
  ApproveStatus,
  ApproveStatusMap,
  FinishTypeMap,
  getLabelByValue,
  IsOpenMap,
  PayTypeMap,
} from '@/enums/constEnums'
import { AlbumInterface } from '@/api/album/types'
const router = useRouter()

// *获取 ProTable 元素，调用其获取刷新数据方法
const proTable = ref<InstanceType<typeof ProTable>>()

// *表格配置项
const columns: ColumnProps[] = [
  { type: 'index', label: '序号' },
  {
    prop: 'albumTitle',
    label: '标题',
    width: 230,
    search: {
      el: 'input',
      props: { placeholder: '请输入标题' },
    },
  },
  {
    prop: 'coverUrl',
    label: '医院LOGO',
    width: 100,
    render: ({ row }) => {
      return <img style="width:60px;height:60px" src={row.coverUrl} alt="" />
    },
  },
  {
    prop: 'status',
    label: '状态',
    width: 150,
    // 审核状态 0301-审核通过 0302-审核不通过
    enum: [
      { label: '审核通过', value: '0301' },
      { label: '审核不通过', value: '0302' },
    ],
    search: {
      el: 'select',
      props: { placeholder: '请选择订单状态', clearable: true },
    },
    render: ({ row }) => {
      return (
        <span>
          {row.status === ApproveStatus.PASS ? '审核通过' : '审核不通过'}
        </span>
      )
    },
  },
  { prop: 'albumIntro', width: 250, label: '专辑简介' },
  {
    prop: 'payType',
    label: '价格类型',
    width: 150,
    render: ({ row }) => {
      return <span>{getLabelByValue(ApproveStatusMap, row.status)}</span>
    },
  },
  {
    prop: 'payType',
    label: '付费类型',
    width: 90,
    render: ({ row }) => {
      return <span>{getLabelByValue(PayTypeMap, row.payType)}</span>
    },
  },
  {
    prop: 'isFinished',
    label: '是否完结',
    width: 90,
    render: ({ row }) => {
      return <span>{getLabelByValue(FinishTypeMap, row.isFinished)}</span>
    },
  },
  {
    prop: 'isOpen',
    label: '是否公开',
    width: 90,
    render: ({ row }) => {
      return <span>{getLabelByValue(IsOpenMap, row.isOpen)}</span>
    },
  },
  { prop: 'createTime', label: '创建时间', width: 160 },
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
const handleView = (row: AlbumInterface) => {
  console.log(row)
  router.push({
    path: '/album/showAlbumDetails',
    query: {
      id: row.id,
    },
  })
}
// 通过，不通过
const handlePass = async (row: AlbumInterface, flag: ApproveStatus) => {
  // status	0301-审核通过 0302-审核不通过
  await useHandleData(
    albumApproval,
    { id: row.id, status: flag },
    `${flag === ApproveStatus.PASS ? '通过' : '不通过'}`,
  )
  // 修改row
  // row.status = flag
  proTable.value?.getTableList()
}
</script>
