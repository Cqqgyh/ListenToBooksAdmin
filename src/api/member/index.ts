import http from '@/utils/http'
import {
  MemberInfoInterface,
  MemberListInterfaceReq,
  PageResponseInterface,
} from '@/api/member/types'
/**
 * @description 获取用户列表
 * @param params
 */
export const getUserList = (params: MemberListInterfaceReq) => {
  return http.get<PageResponseInterface<MemberInfoInterface[]>>(
    `/admin/user/userInfo/findPage/${params.pageNum}/${params.pageSize}`,
    {
      createTimeBegin: params.createTimeBegin,
      createTimeEnd: params.createTimeEnd,
      phone: params.phone,
      nickname: params.nickname,
    },
  )
}
