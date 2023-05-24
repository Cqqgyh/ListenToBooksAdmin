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
  updateTime: string | null
  isDeleted: number | null
  param: Record<string, any>
  roleName: string
  roleCode: string
  description: string | null
}
// 岗位接口
export interface PostInterfacesRes {
  id: number
  createTime: string
  postCode: string
  name: string
  description: string
  status: number
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
  children: DeptInterfacesRes[]
}
export interface UserRolesListInterfaceRes {
  allRolesList: Role[]
  assignRoles: Role[]
}
