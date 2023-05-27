/*
 * @Author: cqq 945327638@qq.com
 * @Date: 2023-05-24 14:39:06
 * @LastEditors: cqq 945327638@qq.com
 * @LastEditTime: 2023-05-26 18:51:03
 * @FilePath: \listen-to-books-admin\src\api\system\types.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface PageResponseInterface<T> {
  records: T
  total: number
  size: number
  current: number
  pages: number
}
export interface ReqPage {
  pageNum: number
  pageSize: number
}
export interface SysUserListParams extends ReqPage {
  username?: string
  roleId?: number
  postId?: number
  deptId?: number
}
export interface SysUserInterfaceRes {
  id?: number
  createTime?: string
  updateTime?: string
  isDeleted?: number
  param?: Record<string, any>
  username?: string
  password?: string
  name?: string
  phone?: string
  headUrl?: string
  deptId?: number
  postId?: number
  description?: string | null
  status?: number
  roleList?: Role[]
  postName?: string
  deptName?: string
}

export interface Role {
  id: number
  createTime: string | null
  updateTime?: string | null
  isDeleted?: number | null
  param?: Record<string, any>
  roleName: string
  roleCode: string
  description: string | null
}
// 岗位接口
export interface PostInterfacesRes {
  id: number
  postCode: string
  name: string
  description: string
  status: number
  createTime?: string
  isDeleted?: number
  param?: object
  updateTime?: string
}
// 部门接口
export interface DeptInterfacesRes {
  id: number
  createTime: string
  name: string
  parentId: number
  treePath: string
  sortValue: number
  leader: string
  phone: string
  status: number
  isDeleted?: number
  param?: object
  children: DeptInterfacesRes[]
}
export interface UserRolesListInterfaceRes {
  allRolesList: Role[]
  assignRoles: Role[]
}
export interface AssignRolesInterfaceReq {
  userId: string
  roleIdList: string[]
}
export interface RoleListParamsInterfaceReq extends ReqPage {
  roleName?: string
}
// 权限列表
export interface PermissionListInterfaceRes {
  children?: PermissionListInterfaceRes[]
  id?: number | null
  createTime?: string
  updateTime?: string
  isDeleted?: number
  param?: object
  parentId?: number
  name?: string | null
  type?: number
  path?: string | null
  component?: string | null
  perms?: string
  icon?: string | null
  sortValue?: number
  status?: number
  activeMenu?: string
  isHide?: boolean | 0 | 1
  select?: boolean
}
// 分配权限列表请求
export interface AssignPermissionInterfaceReq {
  roleId: number | string
  menuIdList: number[]
}
// 岗位搜索
export interface SysPostListParamsInterfaceReq extends ReqPage {
  name?: string
  postCode?: number
  status?: number
}
