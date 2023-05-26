/*
 * @Author: cqq 945327638@qq.com
 * @Date: 2023-05-23 10:16:02
 * @LastEditors: cqq 945327638@qq.com
 * @LastEditTime: 2023-05-26 18:48:42
 * @FilePath: \listen-to-books-admin\src\api\album\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import http from '@/utils/http'
import {
  AlbumDetailInterface,
  AlbumInterface,
  AlbumListInterfaceReq,
  AttributeListInterface,
  CategoryAttributeListInterface,
  CategoryTreeInterface,
  PageResponseInterface,
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
  return http.get<PageResponseInterface<AlbumInterface[]>>(
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
  return http.get<PageResponseInterface<TrackInfoInterface[]>>(
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
  return http.get<CategoryAttributeListInterface[]>(
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
/**
 * @description 获取全部分类属性
 */
export const getCategoryAttributeList = () => {
  return http.get<CategoryAttributeListInterface[]>(
    `/admin/album/category/findCategoryAttribute`,
  )
}
