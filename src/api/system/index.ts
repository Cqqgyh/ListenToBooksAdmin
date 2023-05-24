import http from '@/utils/http'
import {
  DeptInterfacesRes,
  PageResponseInterface,
  PostInterfacesRes,
  Role,
  SysUserInterfaceRes,
  SysUserListParams,
  UserRolesListInterfaceRes,
} from '@/api/system/types'
/**
 * @description 获取后台用户分页列表(带搜索)
 * @param params
 */
export function getSysUserList(params: SysUserListParams) {
  return http.get<PageResponseInterface<SysUserInterfaceRes>>(
    `/admin/system/sysUser/${params.pageNum}/${params.pageSize}`,
    {
      username: params.username,
      roleId: params.roleId,
      postId: params.postId,
      deptId: params.deptId,
    },
  )
}
/**
 * @description 更新用户状态
 * @param id
 * @param status
 */
export function updateSysUserStatus(id: number, status: number) {
  return http.get(`/admin/system/sysUser/updateStatus/${id}/${status}`)
}
/**
 * @description 获取全部角色列表
 */
export function getSysRoleList() {
  return http.get<Role>(`/admin/system/sysRole/findAll`)
}
/**
 * @description 获取全部岗位列表
 */
export function getSysPostList() {
  return http.get<PostInterfacesRes[]>(`/admin/system/sysPost/findAll`)
}
/**
 * @description 获取全部部门节点
 */
export function getSysDeptTree() {
  return http.get<DeptInterfacesRes[]>(`/admin/system/sysDept/findNodes`)
}
/**
 * @description 新增用户
 */
export function addSysUser(params: SysUserInterfaceRes) {
  return http.post(`/admin/system/sysUser/save`, params)
}
/**
 * @description 更新用户
 */
export function updateSysUser(params: SysUserInterfaceRes) {
  return http.put(`/admin/system/sysUser/update`, params)
}
/**
 * @description 删除用户
 * @param id
 */
export function deleteSysUserById(id: number | string) {
  return http.delete(`/admin/system/sysRole/remove/${id}`)
}
/**
 * @description:   获取某个用户的所有角色
 * @param {string} userId
 */
export function getUserRolesListByUserId(userId: string) {
  return http.get<PageResponseInterface<UserRolesListInterfaceRes>>(
    `/admin/system/sysRole/toAssign/${userId}`,
  )
}
/**
 * @description: 批量删除用户
 * @param {string[]} ids
 * @returns {<PageRes<any>>}
 */
export function batchSysUser(ids: string[]) {
  return http.delete<PageResponseInterface<any>>(
    `/admin/system/sysRole/batchRemove`,
    ids,
  )
}
