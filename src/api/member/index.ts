/*
 * @Author: cqq 945327638@qq.com
 * @Date: 2023-05-24 11:00:15
 * @LastEditors: cqq 945327638@qq.com
 * @LastEditTime: 2023-05-26 18:49:14
 * @FilePath: \listen-to-books-admin\src\api\member\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
