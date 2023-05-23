import http from '@/utils/http'
import {
  AlbumDetailInterface,
  AlbumInterface,
  AlbumListInterfaceReq,
} from '@/api/album/types'
import { ApproveStatus } from '@/enums/constEnums'
/**
 * @description 请求专辑列表
 * @param params
 */
export const getAlbumList = (params: AlbumListInterfaceReq) => {
  return http.get<AlbumInterface[]>(
    `/admin/album/albumInfo/findAlbumPage/${params.pageNum}/${params.pageSize}`,
    {
      albumTitle: params.albumTitle,
      status: params.status,
    },
  )
}
/**
 * @description 审批专辑
 * @param params
 */
export const albumApproval = (params: {
  id: number
  status: ApproveStatus
}) => {
  return http.get<AlbumInterface[]>(
    `/admin/album/albumInfo/approve/${params.id}/${params.status}`,
  )
}
/**
 * @description 获取专辑详情接口
 * @param id
 */
export const getAlbumDetail = (id: number | string) => {
  return http.get<AlbumDetailInterface>(
    `/admin/album/albumInfo/getAlbumDetail/${id}`,
  )
}
