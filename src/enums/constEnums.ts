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
// 审核状态 0301-审核通过 0302-审核不通过
export enum ApproveStatus {
  PASS = '0301',
  NOT_PASS = '0302',
}
export const ApproveStatusMap = [
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
