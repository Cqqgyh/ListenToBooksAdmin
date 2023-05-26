/*
 * @Author: cqq 945327638@qq.com
 * @Date: 2023-05-23 10:16:02
 * @LastEditors: cqq 945327638@qq.com
 * @LastEditTime: 2023-05-26 18:48:34
 * @FilePath: \listen-to-books-admin\src\api\album\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { AlbumApproveStatus, TrackApproveStatus } from '@/enums/constEnums'
// 分页请求响应接口
export interface PageResponseInterface<T> {
  records: T
  total: number
  size: number
  current: number
  pages: number
}
// 分页查询专辑需要专辑信息
export interface AlbumInfoQueryInterface {
  albumTitle?: string
  status?: AlbumApproveStatus
  userId?: number | string
}
// 请求专辑列表所需参数
export interface AlbumListInterfaceReq extends AlbumInfoQueryInterface {
  pageNum: number
  pageSize: number
}
// 分页查询声音需要专辑信息
export interface TrackInfoQueryInterface {
  trackTitle?: string
  status?: TrackApproveStatus
  userId?: number | string
}
// 请求声音列表所需参数
export interface TrackListInterfaceReq extends TrackInfoQueryInterface {
  pageNum: number
  pageSize: number
}
// 专辑详情信息
export interface AlbumInterface {
  id: number
  createTime: string
  userId: number
  albumTitle: string
  category3Id: number
  albumIntro: string
  coverUrl: string
  includeTrackCount: number
  isFinished: string
  estimatedTrackCount: number
  albumRichIntro: string
  qualityScore: string
  payType: string
  priceType: string
  price: number
  discount: number
  vipDiscount: number
  tracksForFree: number
  secondsForFree: number
  buyNotes: null | string
  sellingPoint: null | string
  isOpen: string
  status: string
  albumAttributeValueVoList: AlbumAttributeValueVoListInterface[]
}
export interface AlbumAttributeValueVoListInterface {
  id: number
  createTime: string
  albumId: number
  attributeId: number
  valueId: number
  attributeName: string
  valueName: string
}

export interface AlbumStatVoInterface {
  albumId: null | number
  playStatNum: number
  subscribeStatNum: null | number
  buyStatNum: number
  commentStatNum: null | number
}
export interface UserInfoVoInterface {
  id: number
  wxOpenId: string
  nickname: string
  avatarUrl: string
  isVip: number
  vipExpireTime: string | null
}
// 专辑信息详情
export interface AlbumDetailInterface {
  albumInfo: AlbumInterface
  albumStatVo: AlbumStatVoInterface
  userInfoVo: UserInfoVoInterface
  albumAttributeValueList: AlbumAttributeValueVoListInterface[]
}
// 声音信息接口
export interface TrackInfoInterface {
  id: number
  createTime: string
  userId: number
  albumId: number
  trackTitle: string
  orderNum: number
  trackIntro: string
  trackRichIntro: string
  coverUrl: string
  mediaDuration: number
  mediaFileId: string
  mediaUrl: string
  mediaSize: number
  mediaType: string
  source: string
  status: string
  isOpen: string
}
export interface TrackStatVoInterface {
  playStatNum: number
  collectStatNum: number
  praiseStatNum: number
  commentStatNum: number
}
// 声音信息详情
export interface TrackDetailInterface {
  albumInfo: AlbumInterface
  trackInfo: TrackInfoInterface
  userInfoVo: UserInfoVoInterface
  trackStatVo: TrackStatVoInterface
}
// 分类接口
// 分类
export interface CategoryTreeInterface {
  categoryId: number
  categoryName: string
  categoryChild?: CategoryTreeInterface[]
}
// 分类属性
export interface AttributeInterface {
  attributeId: number
  id: number
  valueName: string
}
export interface AttributeListInterface {
  id: number
  attributeName: string
  category1Id: number
  attributeValueList: AttributeInterface[]
}
export interface CategoryAttributeListInterface {
  id?: number
  name?: string
  attributeName?: string
  attributeValue?: string
  uniqueId?: string
  attributeId?: number
  attributeValueId?: number
  children: CategoryAttributeListInterface[]
}
