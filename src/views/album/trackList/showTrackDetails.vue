<template>
  <el-card v-if="TrackDetails.albumInfo">
    <el-descriptions title="声音信息" :column="2" border>
      <el-descriptions-item
        label="声音标题"
        label-align="right"
        align="center"
        width="100px"
        :span="2"
      >
        <span>
          {{ TrackDetails.trackInfo.trackTitle }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="声音简介"
        label-align="right"
        align="center"
        width="100px"
        :span="2"
      >
        <span>
          {{ TrackDetails.trackInfo.trackIntro }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="声音封面"
        label-align="right"
        align="center"
        width="100px"
      >
        <img
          :src="TrackDetails.trackInfo.coverUrl"
          style="width: 80px; height: 80px"
        />
      </el-descriptions-item>
      <el-descriptions-item
        label="声音状态"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{
            getLabelByValue(
              TrackApproveStatusMap,
              TrackDetails.trackInfo.status,
            )
          }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="声音是否公开"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(IsOpenMap, TrackDetails.trackInfo.isOpen) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="媒体时长"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ TrackDetails.trackInfo.mediaDuration }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="媒体类型"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ TrackDetails.trackInfo.mediaType }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="声音来源"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(TrackSourceMap, TrackDetails.trackInfo.source) }}
        </span>
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="声音所属专辑信息" :column="2" class="m-t-40" border>
      <el-descriptions-item
        label="专辑标题"
        label-align="right"
        align="center"
        width="100px"
        :span="2"
      >
        <span>
          {{ TrackDetails.albumInfo.albumTitle }}
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
          {{ TrackDetails.albumInfo.albumIntro }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑封面"
        label-align="right"
        align="center"
        width="100px"
      >
        <img
          :src="TrackDetails.albumInfo.coverUrl"
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
          {{
            getLabelByValue(
              AlbumApproveStatusMap,
              TrackDetails.albumInfo.status,
            )
          }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑包含声音总数"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ TrackDetails.albumInfo.includeTrackCount }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="预计更新多少集"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ TrackDetails.albumInfo.estimatedTrackCount }}
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
            getLabelByValue(FinishTypeMap, TrackDetails.albumInfo.isFinished)
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
          {{ getLabelByValue(IsOpenMap, TrackDetails.albumInfo.isOpen) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="专辑评分"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ TrackDetails.albumInfo.qualityScore }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="付费类型"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(PayTypeMap, TrackDetails.albumInfo.payType) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="价格类型"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ getLabelByValue(PriceTypeMap, TrackDetails.albumInfo.priceType) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="原价"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ TrackDetails.albumInfo.price }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="折扣"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ TrackDetails.albumInfo.discount }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="会员折扣"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ TrackDetails.albumInfo.vipDiscount }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="免费试听集数"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ TrackDetails.albumInfo.tracksForFree }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item
        label="每集免费试听秒数"
        label-align="right"
        align="center"
        width="100px"
      >
        <span>
          {{ TrackDetails.albumInfo.secondsForFree }}
        </span>
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
import { getTrackDetail } from '@/api/album'
import { TrackDetailInterface } from '@/api/album/types'
import {
  AlbumApproveStatusMap,
  FinishTypeMap,
  getLabelByValue,
  IsOpenMap,
  PayTypeMap,
  PriceTypeMap,
  TrackApproveStatusMap,
  TrackSourceMap,
} from '@/enums/constEnums'

const route = useRoute()
const router = useRouter()
console.log(route.query.id)
const TrackDetails = ref({} as TrackDetailInterface)
// 请求医院详情
const getTrackDetailHandle = async () => {
  try {
    const res = await getTrackDetail(route.query.id as string)
    TrackDetails.value = res.data
  } catch (error) {
    console.log(error)
  }
}
/* 生命周期 */
onMounted(async () => {
  await getTrackDetailHandle()
})
</script>

<style lang="scss" scoped></style>
