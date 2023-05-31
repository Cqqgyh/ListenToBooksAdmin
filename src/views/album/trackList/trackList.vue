<template>
  <el-card>
    <ProTable
      ref="proTable"
      :dataCallback="dataCallback"
      :columns="columns"
      :requestApi="getTrackList"
      :initParam="initParam"
    >
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button
          v-auth="[ButtonPermission.Album.TrackList.ViewTrackDetail]"
          type="primary"
          link
          icon="View"
          @click="handleView(scope.row)"
        >
          查看
        </el-button>
        <el-button
          v-auth="[ButtonPermission.Album.TrackList.PassAndNotPass]"
          v-if="scope.row.status === TrackApproveStatus.NOT_PASS"
          type="primary"
          link
          icon="CircleCheck"
          @click="handlePass(scope.row, TrackApproveStatus.PASS)"
        >
          通过
        </el-button>
        <el-button
          v-auth="[ButtonPermission.Album.TrackList.PassAndNotPass]"
          v-if="scope.row.status === TrackApproveStatus.PASS"
          type="primary"
          link
          icon="CircleClose"
          @click="handlePass(scope.row, TrackApproveStatus.NOT_PASS)"
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
import { getTrackList, trackApproval } from '@/api/album'
import {
  TrackApproveStatus,
  TrackApproveStatusMap,
  getLabelByValue,
  IsOpenMap,
  TrackSourceMap,
  ButtonPermission,
} from '@/enums/constEnums'
import { TrackInfoInterface } from '@/api/album/types'
const router = useRouter()

// *获取 ProTable 元素，调用其获取刷新数据方法
const proTable = ref<InstanceType<typeof ProTable>>()

// *表格配置项
const columns: ColumnProps[] = [
  { type: 'index', label: '序号' },
  {
    prop: 'trackTitle',
    label: '标题',
    width: 230,
    search: {
      el: 'input',
      props: { placeholder: '请输入标题' },
    },
  },
  {
    prop: 'coverUrl',
    label: '声音封面',
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
    enum: TrackApproveStatusMap,
    search: {
      el: 'select',
      props: { placeholder: '请选择声音状态', clearable: true },
    },
    render: ({ row }) => {
      return <span>{getLabelByValue(TrackApproveStatusMap, row.status)}</span>
    },
  },
  { prop: 'trackIntro', width: 250, label: '声音简介' },
  {
    prop: 'isOpen',
    label: '是否公开',
    width: 90,
    render: ({ row }) => {
      return <span>{getLabelByValue(IsOpenMap, row.isOpen)}</span>
    },
  },
  { prop: 'mediaDuration', label: '媒体时长（s）', width: 110 },
  { prop: 'mediaType', label: '媒体类型', width: 100 },
  {
    prop: 'isOpen',
    label: '声音来源',
    width: 100,
    render: ({ row }) => {
      return <span>{getLabelByValue(TrackSourceMap, row.source)}</span>
    },
  },
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
const handleView = (row: TrackInfoInterface) => {
  console.log(row)
  router.push({
    path: '/album/showTrackDetails',
    query: {
      id: row.id,
    },
  })
}
// 通过，不通过
const handlePass = async (
  row: TrackInfoInterface,
  flag: TrackApproveStatus,
) => {
  // status	0301-审核通过 0302-审核不通过
  await useHandleData(
    trackApproval,
    { id: row.id, status: flag },
    `${flag === TrackApproveStatus.PASS ? '通过' : '不通过'}`,
  )
  // 修改row
  // row.status = flag
  proTable.value?.getTableList()
}
</script>
