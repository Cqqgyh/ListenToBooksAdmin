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
  status?: string
  userId?: number | string
}
// 请求专辑列表所需参数
export interface AlbumListInterfaceReq extends AlbumInfoQueryInterface {
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
