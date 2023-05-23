<template>
  <el-card v-if="albumDetails.albumInfo">
    <el-descriptions title="专辑信息" :column="2" border>
      <el-descriptions-item
        label="专辑标题"
        label-align="right"
        align="center"
        width="100px"
        :span="2"
      >
        <span>
          {{ albumDetails.albumInfo.albumTitle }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑简介"
        label-align="right"
        align="center"
        width="100px"
        :span="2"
      >
        <span>
          {{ albumDetails.albumInfo.albumIntro }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑封面"
        label-align="right"
        align="center"
        width="100px"
      >
        <img
          :src="albumDetails.albumInfo.coverUrl"
          style="width: 80px; height: 80px"
        />
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑状态"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(ApproveStatusMap, albumDetails.albumInfo.status) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑包含声音总数"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ albumDetails.albumInfo.includeTrackCount }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="预计更新多少集"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ albumDetails.albumInfo.estimatedTrackCount }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑是否完结"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{
            getLabelByValue(FinishTypeMap, albumDetails.albumInfo.isFinished)
          }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑是否公开"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(IsOpenMap, albumDetails.albumInfo.isOpen) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑评分"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ albumDetails.albumInfo.qualityScore }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="付费类型"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(PayTypeMap, albumDetails.albumInfo.payType) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="价格类型"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(PriceTypeMap, albumDetails.albumInfo.priceType) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="原价"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ albumDetails.albumInfo.price }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="折扣"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ albumDetails.albumInfo.discount }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="会员折扣"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ albumDetails.albumInfo.vipDiscount }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="免费试听集数"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ albumDetails.albumInfo.tracksForFree }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="每集免费试听秒数"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ albumDetails.albumInfo.secondsForFree }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑标签"
        label-align="right"
        align="center"
        width="100px"
        :span="2"
        v-if="albumDetails.albumAttributeValueList.length"
      >
        <div class="flex-wrap">
          <el-tag
            v-for="(item, index) in albumDetails.albumAttributeValueList"
            :key="item.id"
            style="margin: 5px"
            type="success"
            effect="dark"
          >
            {{ `${index + 1}. ${item.attributeName}:${item.valueName}` }}
          </el-tag>
        </div>
      </el-descriptions-item>
    </el-descriptions>
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
import { getAlbumDetail } from '@/api/album'
import { AlbumDetailInterface } from '@/api/album/types'
import {
  ApproveStatusMap,
  FinishTypeMap,
  getLabelByValue,
  IsOpenMap,
  PayTypeMap,
  PriceTypeMap,
} from '../../../enums/constEnums'

const route = useRoute()
const router = useRouter()
console.log(route.query.id)
const albumDetails = ref({} as AlbumDetailInterface)
// 请求医院详情
const getAlbumDetailHandle = async () => {
  try {
    const res = await getAlbumDetail(route.query.id as string)
    albumDetails.value = res.data
  } catch (error) {
    console.log(error)
  }
}
/* 生命周期 */
onMounted(() => {
  getAlbumDetailHandle()
})
</script>

<style lang="scss" scoped></style>
