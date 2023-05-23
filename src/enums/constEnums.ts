export function getLabelByValue(
  arr: {
    label: string
    value: string
  }[],
  value: string,
): string {
  const item = arr.find((item) => item.value === value)
  return item ? item.label : ''
}
// 专辑审核状态 0301-审核通过 0302-审核不通过
export enum AlbumApproveStatus {
  PASS = '0301',
  NOT_PASS = '0302',
}
export const AlbumApproveStatusMap = [
  { label: '审核通过', value: '0301' },
  { label: '审核不通过', value: '0302' },
]
// 付费类型 0101-免费 0102-VIP免费 0103-付费
export enum PayType {
  Free = '0101',
  VipFree = '0102',
  NotFree = '0103',
}

export const PayTypeMap = [
  { label: '免费', value: '0101' },
  { label: 'VIP免费', value: '0102' },
  { label: '付费', value: '0103' },
]
// 完结类型 0-未完结 1-完结
export enum FinishType {
  NotFinish = '0',
  Finish = '1',
}
export const FinishTypeMap = [
  { label: '未完结', value: '0' },
  { label: '完结', value: '1' },
]
// isOpen "是否公开：0-否 1-是"
export enum IsOpen {
  No = '0',
  Yes = '1',
}
export const IsOpenMap = [
  { label: '否', value: '0' },
  { label: '是', value: '1' },
]
//priceType 价格类型： 0201-单集 0202-整专辑
export enum PriceType {
  Single = '0201',
  Album = '0202',
}
export const PriceTypeMap = [
  { label: '单集', value: '0201' },
  { label: '整专辑', value: '0202' },
]
// source	声音来源，1-用户原创 2-上传
export enum TrackSource {
  User = '1',
  Upload = '2',
}
export const TrackSourceMap = [
  { label: '用户原创', value: '1' },
  { label: '上传', value: '2' },
]
// 声音审核状态 0501-审核通过 0502-审核不通过
export enum TrackApproveStatus {
  PASS = '0501',
  NOT_PASS = '0502',
}
export const TrackApproveStatusMap = [
  { label: '审核通过', value: '0501' },
  { label: '审核不通过', value: '0502' },
]
