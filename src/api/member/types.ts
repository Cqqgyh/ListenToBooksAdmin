/*
 * @Author: cqq 945327638@qq.com
 * @Date: 2023-05-24 11:00:15
 * @LastEditors: cqq 945327638@qq.com
 * @LastEditTime: 2023-05-26 18:49:20
 * @FilePath: \listen-to-books-admin\src\api\member\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
