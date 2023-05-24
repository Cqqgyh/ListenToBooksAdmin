import http from '@/utils/http'
import {
  AlbumDetailInterface,
  AlbumInterface,
  AlbumListInterfaceReq,
  AttributeListInterface,
  CategoryTreeInterface,
  TrackDetailInterface,
  TrackInfoInterface,
  TrackListInterfaceReq,
} from '@/api/album/types'
import { AlbumApproveStatus, TrackApproveStatus } from '@/enums/constEnums'
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
  status: AlbumApproveStatus
}) => {
  return http.get(
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
/**
 * @description 请求声音列表
 * @param params
 */
export const getTrackList = (params: TrackListInterfaceReq) => {
  return http.get<TrackInfoInterface[]>(
    `/admin/album/trackInfo/findTrackPage/${params.pageNum}/${params.pageSize}`,
    {
      trackTitle: params.trackTitle,
      status: params.status,
    },
  )
}
/**
 * @description 审批声音
 * @param params
 */
export const trackApproval = (params: {
  id: number
  status: TrackApproveStatus
}) => {
  return http.get(
    `/admin/album/trackInfo/approve/${params.id}/${params.status}`,
  )
}
/**
 * @description 获取声音详情接口
 * @param id
 */
export const getTrackDetail = (id: number | string) => {
  return http.get<TrackDetailInterface>(
    `/admin/album/trackInfo/getTrackDetail/${id}`,
  )
}
/**
 * @description 获取全部分类信息
 */
export const getCategoryList = () => {
  return http.get<CategoryTreeInterface[]>(
    `/admin/album/category/getBaseCategoryList`,
  )
}
/**
 * @description 获取一级分类信息
 */
export const getCategory1List = () => {
  return http.get<CategoryTreeInterface[]>(
    `/admin/album/category/findAllCategory1`,
  )
}
/**
 * @description 根据一级分类Id查询分类属性数据
 * @param category1Id
 */
export const getCategoryAttributeListByCategory1Id = (
  category1Id: number | string,
) => {
  return http.get<AttributeListInterface[]>(
    `/admin/album/category/findAttribute/${category1Id}`,
  )
}
