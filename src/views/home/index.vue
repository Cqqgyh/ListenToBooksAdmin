<template>
  <div class="home container">
    <el-card shadow="hover">
      <div class="page-header">
        <el-avatar :size="60" :src="userInfo?.avatar" />
        <div class="page-header-tip">
          <p class="page-header-tip-title">
            {{ timeFix() }}{{ userInfo?.name }}，{{ welcome() }}
          </p>
          <p class="page-header-tip-desc">谷粒随享后台管理系统</p>
        </div>
      </div>
    </el-card>

    <!--    <div class="welcome">-->
    <!--      <SvgIcon name="welcome" size="400px" />-->
    <!--    </div>-->
    <el-card class="welcome m-t-20">
      <div style="display: flex; flex-direction: column; align-items: center">
        <div style="text-indent: 2em; font-size: 24px">
          谷粒随享是一个音频分享平台，用户可以在平台轻松创建声音，随时分享好声音，
          用声音分享人类智慧，用声音服务美好生活。项目包括：在线声音制作、专辑管理、智能搜索、排行榜、声音播放、在线购买、多种支付渠道、订单管理、个人账户、音频直播、即时通讯等功能，全方位的为广大用户服务
        </div>
        <img src="@/assets/images/jiagou.png" alt="" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { timeFix, welcome } from '@/utils'
// import SvgIcon from '@/components/SvgIcon/src/SvgIcon.vue'
const userStore = useUserStore()
const userInfo = userStore.userInfo
</script>

<style scoped lang="scss">
.home {
  height: 100%;

  .page-header {
    display: flex;
    align-items: center;

    .page-header-tip {
      flex: 1;
      margin-left: 20px;
    }

    .page-header-tip-title {
      margin-bottom: 12px;
      font-size: 20px;
      font-weight: 700;
      color: #3c4a54;
    }

    .page-header-tip-desc {
      min-height: 20px;
      font-size: 14px;
      color: #808695;
    }
  }

  .welcome {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
