export interface PageResponseInterface<T> {
  records: T
  total: number
  size: number
  current: number
  pages: number
}
export interface MemberInfoInterface {
  id: number
  createTime: string
  phone: string | null
  password: string | null
  wxOpenId: string
  nickname: string
  avatarUrl: string
  isVip: number
  vipExpireTime: string | null
  gender: string | null
  birthday: string | null
  intro: string | null
  certificationType: string | null
  certificationStatus: string | null
  status: string
}

export interface MemberInfoQueryInterface {
  createTimeBegin: string
  createTimeEnd: string
  phone: string
  nickname: string
}
export interface MemberListInterfaceReq extends MemberInfoQueryInterface {
  pageNum: number
  pageSize: number
}
