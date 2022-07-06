import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getHealth: build.query<GetHealthApiResponse, GetHealthApiArg>({
      query: () => ({ url: `/health` }),
    }),
    getPing: build.query<GetPingApiResponse, GetPingApiArg>({
      query: () => ({ url: `/ping` }),
    }),
    postLogin: build.mutation<PostLoginApiResponse, PostLoginApiArg>({
      query: (queryArg) => ({
        url: `/login`,
        method: "POST",
        body: queryArg.userLogin,
      }),
    }),
    postFamily: build.mutation<PostFamilyApiResponse, PostFamilyApiArg>({
      query: (queryArg) => ({
        url: `/family`,
        method: "POST",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getFamily: build.query<GetFamilyApiResponse, GetFamilyApiArg>({
      query: (queryArg) => ({
        url: `/family`,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getFamilyByFamilyId: build.query<
      GetFamilyByFamilyIdApiResponse,
      GetFamilyByFamilyIdApiArg
    >({
      query: (queryArg) => ({
        url: `/family/${queryArg.familyId}`,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    putFamilyByFamilyId: build.mutation<
      PutFamilyByFamilyIdApiResponse,
      PutFamilyByFamilyIdApiArg
    >({
      query: (queryArg) => ({
        url: `/family/${queryArg.familyId}`,
        method: "PUT",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    deleteFamilyByFamilyId: build.mutation<
      DeleteFamilyByFamilyIdApiResponse,
      DeleteFamilyByFamilyIdApiArg
    >({
      query: (queryArg) => ({
        url: `/family/${queryArg.familyId}`,
        method: "DELETE",
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getMe: build.query<GetMeApiResponse, GetMeApiArg>({
      query: (queryArg) => ({
        url: `/me`,
        headers: { idp_sub: queryArg.idpSub, idp_token: queryArg.idpToken },
      }),
    }),
    postMe: build.mutation<PostMeApiResponse, PostMeApiArg>({
      query: (queryArg) => ({
        url: `/me`,
        method: "POST",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    putMe: build.mutation<PutMeApiResponse, PutMeApiArg>({
      query: (queryArg) => ({
        url: `/me`,
        method: "PUT",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getMeCompany: build.query<GetMeCompanyApiResponse, GetMeCompanyApiArg>({
      query: (queryArg) => ({
        url: `/me/company`,
        headers: { idp_sub: queryArg.idpSub, idp_token: queryArg.idpToken },
      }),
    }),
    postInsurance: build.mutation<
      PostInsuranceApiResponse,
      PostInsuranceApiArg
    >({
      query: (queryArg) => ({
        url: `/insurance`,
        method: "POST",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getInsurance: build.query<GetInsuranceApiResponse, GetInsuranceApiArg>({
      query: (queryArg) => ({
        url: `/insurance`,
        headers: { idp_sub: queryArg.idpSub },
        params: {
          search: queryArg.search,
          page: queryArg.page,
          limit: queryArg.limit,
        },
      }),
    }),
    getInsuranceByInsuranceId: build.query<
      GetInsuranceByInsuranceIdApiResponse,
      GetInsuranceByInsuranceIdApiArg
    >({
      query: (queryArg) => ({
        url: `/insurance/${queryArg.insuranceId}`,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    deleteInsuranceByInsuranceId: build.mutation<
      DeleteInsuranceByInsuranceIdApiResponse,
      DeleteInsuranceByInsuranceIdApiArg
    >({
      query: (queryArg) => ({
        url: `/insurance/${queryArg.insuranceId}`,
        method: "DELETE",
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    putInsuranceByInsuranceId: build.mutation<
      PutInsuranceByInsuranceIdApiResponse,
      PutInsuranceByInsuranceIdApiArg
    >({
      query: (queryArg) => ({
        url: `/insurance/${queryArg.insuranceId}`,
        method: "PUT",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    postAddress: build.mutation<PostAddressApiResponse, PostAddressApiArg>({
      query: (queryArg) => ({
        url: `/address`,
        method: "POST",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getAddress: build.query<GetAddressApiResponse, GetAddressApiArg>({
      query: (queryArg) => ({
        url: `/address`,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    deleteAddressByAddressId: build.mutation<
      DeleteAddressByAddressIdApiResponse,
      DeleteAddressByAddressIdApiArg
    >({
      query: (queryArg) => ({
        url: `/address/${queryArg.addressId}`,
        method: "DELETE",
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    putAddressByAddressId: build.mutation<
      PutAddressByAddressIdApiResponse,
      PutAddressByAddressIdApiArg
    >({
      query: (queryArg) => ({
        url: `/address/${queryArg.addressId}`,
        method: "PUT",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getAddressByAddressId: build.query<
      GetAddressByAddressIdApiResponse,
      GetAddressByAddressIdApiArg
    >({
      query: (queryArg) => ({
        url: `/address/${queryArg.addressId}`,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getAddressMain: build.query<
      GetAddressMainApiResponse,
      GetAddressMainApiArg
    >({
      query: (queryArg) => ({
        url: `/address/main`,
        headers: { idp_sub: queryArg.idpSub },
        params: { is_main: queryArg.isMain },
      }),
    }),
    postRole: build.mutation<PostRoleApiResponse, PostRoleApiArg>({
      query: (queryArg) => ({
        url: `/role`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getRole: build.query<GetRoleApiResponse, GetRoleApiArg>({
      query: (queryArg) => ({
        url: `/role`,
        params: {
          search: queryArg.search,
          page: queryArg.page,
          limit: queryArg.limit,
          date_start: queryArg.dateStart,
          date_end: queryArg.dateEnd,
          permissions: queryArg.permissions,
          status: queryArg.status,
        },
      }),
    }),
    getRolePermissionById: build.query<
      GetRolePermissionByIdApiResponse,
      GetRolePermissionByIdApiArg
    >({
      query: (queryArg) => ({ url: `/role-permission/${queryArg.id}` }),
    }),
    putRolePermissionById: build.mutation<
      PutRolePermissionByIdApiResponse,
      PutRolePermissionByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/role-permission/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteRolePermissionById: build.mutation<
      DeleteRolePermissionByIdApiResponse,
      DeleteRolePermissionByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/role-permission/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getFavoriteMenu: build.query<
      GetFavoriteMenuApiResponse,
      GetFavoriteMenuApiArg
    >({
      query: (queryArg) => ({
        url: `/favorite-menu`,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    postFavoriteMenu: build.mutation<
      PostFavoriteMenuApiResponse,
      PostFavoriteMenuApiArg
    >({
      query: (queryArg) => ({
        url: `/favorite-menu`,
        method: "POST",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    deleteFavoriteMenuByMenuId: build.mutation<
      DeleteFavoriteMenuByMenuIdApiResponse,
      DeleteFavoriteMenuByMenuIdApiArg
    >({
      query: (queryArg) => ({
        url: `/favorite-menu/${queryArg.menuId}`,
        method: "DELETE",
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getMenu: build.query<GetMenuApiResponse, GetMenuApiArg>({
      query: (queryArg) => ({
        url: `/menu`,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    postMenu: build.mutation<PostMenuApiResponse, PostMenuApiArg>({
      query: (queryArg) => ({
        url: `/menu`,
        method: "POST",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    postHealthProfile: build.mutation<
      PostHealthProfileApiResponse,
      PostHealthProfileApiArg
    >({
      query: (queryArg) => ({
        url: `/health-profile`,
        method: "POST",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getHealthProfile: build.query<
      GetHealthProfileApiResponse,
      GetHealthProfileApiArg
    >({
      query: (queryArg) => ({
        url: `/health-profile`,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    deleteHealthProfile: build.mutation<
      DeleteHealthProfileApiResponse,
      DeleteHealthProfileApiArg
    >({
      query: (queryArg) => ({
        url: `/health-profile`,
        method: "DELETE",
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    putHealthProfile: build.mutation<
      PutHealthProfileApiResponse,
      PutHealthProfileApiArg
    >({
      query: (queryArg) => ({
        url: `/health-profile`,
        method: "PUT",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getOnboardingProgress: build.query<
      GetOnboardingProgressApiResponse,
      GetOnboardingProgressApiArg
    >({
      query: (queryArg) => ({
        url: `/onboarding/progress`,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    putUserById: build.mutation<PutUserByIdApiResponse, PutUserByIdApiArg>({
      query: (queryArg) => ({
        url: `/user/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    postPin: build.mutation<PostPinApiResponse, PostPinApiArg>({
      query: (queryArg) => ({
        url: `/pin`,
        method: "POST",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getPin: build.query<GetPinApiResponse, GetPinApiArg>({
      query: (queryArg) => ({
        url: `/pin`,
        headers: { idp_sub: queryArg.idpSub },
        params: { pin: queryArg.pin },
      }),
    }),
    putPin: build.mutation<PutPinApiResponse, PutPinApiArg>({
      query: (queryArg) => ({
        url: `/pin`,
        method: "PUT",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    postCompany: build.mutation<PostCompanyApiResponse, PostCompanyApiArg>({
      query: (queryArg) => ({
        url: `/company`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getCompany: build.query<GetCompanyApiResponse, GetCompanyApiArg>({
      query: (queryArg) => ({
        url: `/company`,
        params: {
          page: queryArg.page,
          limit: queryArg.limit,
          date: queryArg.date,
          company_name: queryArg.companyName,
          status: queryArg.status,
        },
      }),
    }),
    getCompanyById: build.query<
      GetCompanyByIdApiResponse,
      GetCompanyByIdApiArg
    >({
      query: (queryArg) => ({ url: `/company/${queryArg.id}` }),
    }),
    putCompanyById: build.mutation<
      PutCompanyByIdApiResponse,
      PutCompanyByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/company/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    deleteCompanyById: build.mutation<
      DeleteCompanyByIdApiResponse,
      DeleteCompanyByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/company/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    postEmployee: build.mutation<PostEmployeeApiResponse, PostEmployeeApiArg>({
      query: (queryArg) => ({
        url: `/employee`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getEmployee: build.query<GetEmployeeApiResponse, GetEmployeeApiArg>({
      query: (queryArg) => ({
        url: `/employee`,
        params: {
          page: queryArg.page,
          limit: queryArg.limit,
          date: queryArg.date,
          id_company: queryArg.idCompany,
        },
      }),
    }),
    putEmployeeByUserId: build.mutation<
      PutEmployeeByUserIdApiResponse,
      PutEmployeeByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/employee/${queryArg.userId}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          full_name: queryArg.fullName,
          date_start: queryArg.dateStart,
          date_end: queryArg.dateEnd,
          role_id: queryArg.roleId,
          status: queryArg.status,
        },
      }),
    }),
    postUsers: build.mutation<PostUsersApiResponse, PostUsersApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.body,
        headers: { idp_sub: queryArg.idpSub },
      }),
    }),
    getUsersByUserId: build.query<
      GetUsersByUserIdApiResponse,
      GetUsersByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}` }),
    }),
    putUsersByUserId: build.mutation<
      PutUsersByUserIdApiResponse,
      PutUsersByUserIdApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    postRefreshToken: build.mutation<
      PostRefreshTokenApiResponse,
      PostRefreshTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/refresh-token`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    getDashboardMenu: build.query<
      GetDashboardMenuApiResponse,
      GetDashboardMenuApiArg
    >({
      query: (queryArg) => ({
        url: `/dashboard_menu`,
        params: { id_role: queryArg.idRole },
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as petApi };
export type GetHealthApiResponse = /** status 200 Success */ {
  message?: string;
  data?: Health;
};
export type GetHealthApiArg = void;
export type GetPingApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type GetPingApiArg = void;
export type PostLoginApiResponse = /** status 200 Success */ {
  message?: string;
  data?: UserAccessToken;
};
export type PostLoginApiArg = {
  /** Login body */
  userLogin: UserLogin;
};
export type PostFamilyApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PostFamilyApiArg = {
  idpSub: string;
  /** Create new family */
  body: {
    full_name?: string;
    birth_date?: string;
    family_relationship?: string;
    gender?: string;
    ktp_no?: string;
    address?: string;
    phone_number?: string;
    email?: string;
    no_emergency?: string;
    address_id?: string;
    allergy?: string[];
    medicine_allergy?: string[];
    diagnosis_treatment?: string;
    comorbid?: string;
    surgery_history?: string;
    personal_medical_history?: string;
    family_medical_history?: {
      family?: string;
      disease?: string;
    }[];
  };
};
export type GetFamilyApiResponse = /** status 200 Success */ {
  message?: string;
  data?: Family[];
};
export type GetFamilyApiArg = {
  idpSub: string;
};
export type GetFamilyByFamilyIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: Family;
};
export type GetFamilyByFamilyIdApiArg = {
  /** The id of family */
  familyId: string;
  idpSub: string;
};
export type PutFamilyByFamilyIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PutFamilyByFamilyIdApiArg = {
  /** The id of family */
  familyId: string;
  idpSub: string;
  /** Create new family */
  body: {
    full_name?: string;
    birth_date?: string;
    family_relationship?: string;
    gender?: string;
    ktp_no?: string;
    address?: string;
    phone_number?: string;
    email?: string;
    no_emergency?: string;
    address_id?: string;
    allergy?: string[];
    medicine_allergy?: string[];
    diagnosis_treatment?: string;
    comorbid?: string;
    surgery_history?: string;
    personal_medical_history?: string;
    family_medical_history?: {
      family?: string;
      disease?: string;
    }[];
  };
};
export type DeleteFamilyByFamilyIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type DeleteFamilyByFamilyIdApiArg = {
  /** The id of family */
  familyId: string;
  idpSub: string;
};
export type GetMeApiResponse = /** status 200 Success */ {
  message?: string;
  data?: UserData;
};
export type GetMeApiArg = {
  idpSub: string;
  idpToken?: string;
};
export type PostMeApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PostMeApiArg = {
  idpSub: string;
  /** Update profile */
  body: {
    full_name?: string;
    birth_date?: string;
    gender?: string;
    ktp_no?: string;
    address?: string;
    phone_number?: string;
    email?: string;
    no_emergency?: string;
    profile_photo?: string;
    study?: string;
    ktp_photo?: string;
  };
};
export type PutMeApiResponse = /** status 200 Success */
  | {
      message?: string;
      data?: object;
    }
  | /** status 204 updated */ undefined;
export type PutMeApiArg = {
  idpSub: string;
  /** Update profile */
  body: {
    full_name?: string;
    birth_date?: string;
    gender?: string;
    ktp_no?: string;
    address?: string;
    phone_number?: string;
    email?: string;
    no_emergency?: string;
    profile_photo?: string;
    study?: string;
    ktp_photo?: string;
  };
};
export type GetMeCompanyApiResponse = /** status 200 Success */ {
  message?: string;
  data?: Company[];
};
export type GetMeCompanyApiArg = {
  idpSub: string;
  idpToken?: string;
};
export type PostInsuranceApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PostInsuranceApiArg = {
  idpSub: string;
  /** The body of insurance */
  body: {
    polis_number?: string;
    name?: string;
    company_name?: string;
    employee_no?: string;
    photo?: string;
    document?: string;
    type?: string;
    logo?: string;
    expired_date?: string;
  };
};
export type GetInsuranceApiResponse = /** status 200 Success */ {
  message?: string;
  data?: Insurance[];
  metadata?: Metadata;
};
export type GetInsuranceApiArg = {
  idpSub: string;
  /** The filter search by name. */
  search?: string;
  /** The number of items to skip before starting to collect the result set. */
  page?: number;
  /** The numbers of items to return. */
  limit?: number;
};
export type GetInsuranceByInsuranceIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: Insurance;
};
export type GetInsuranceByInsuranceIdApiArg = {
  /** The id of insurance */
  insuranceId: string;
  idpSub: string;
};
export type DeleteInsuranceByInsuranceIdApiResponse =
  /** status 200 Success */ {
    message?: string;
    data?: object;
  };
export type DeleteInsuranceByInsuranceIdApiArg = {
  /** The id of insurance */
  insuranceId: string;
  idpSub: string;
};
export type PutInsuranceByInsuranceIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PutInsuranceByInsuranceIdApiArg = {
  idpSub: string;
  insuranceId: string;
  /** The body of insurance */
  body: {
    polis_number?: string;
    name?: string;
    company_name?: string;
    employee_no?: string;
    photo?: string;
    document?: string;
    type?: string;
    logo?: string;
    expired_date?: string;
  };
};
export type PostAddressApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PostAddressApiArg = {
  idpSub: string;
  /** Create new family */
  body: {
    phone_number?: string;
    label?: string;
    province?: string;
    city?: string;
    districs?: string;
    postal_code?: string;
    detail?: string;
    notes?: string;
    is_main?: boolean;
    same_as_ktp?: boolean;
    longitude?: string;
    latitude?: string;
    receiver?: string;
  };
};
export type GetAddressApiResponse = /** status 200 successful operation */ {
  message?: string;
  data?: Address[];
};
export type GetAddressApiArg = {
  idpSub: string;
};
export type DeleteAddressByAddressIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type DeleteAddressByAddressIdApiArg = {
  /** The id of address */
  addressId: string;
  idpSub: string;
};
export type PutAddressByAddressIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PutAddressByAddressIdApiArg = {
  addressId: string;
  idpSub: string;
  /** Address body */
  body: {
    phone_number?: string;
    label?: string;
    province?: string;
    city?: string;
    districs?: string;
    postal_code?: string;
    detail?: string;
    notes?: string;
    is_main?: boolean;
    same_as_ktp?: boolean;
    longitude?: string;
    latitude?: string;
    receiver?: string;
  };
};
export type GetAddressByAddressIdApiResponse =
  /** status 200 successful operation */ {
    message?: string;
    data?: Address;
  };
export type GetAddressByAddressIdApiArg = {
  /** The id of address */
  addressId: string;
  idpSub: string;
};
export type GetAddressMainApiResponse = /** status 200 successful operation */ {
  message?: string;
  data?: Address;
};
export type GetAddressMainApiArg = {
  idpSub: string;
  isMain: boolean;
};
export type PostRoleApiResponse = /** status 200 Success */ {
  message?: string;
  data?: RolePost;
};
export type PostRoleApiArg = {
  /** Create new Role */
  body: {
    name?: string;
  };
};
export type GetRoleApiResponse = /** status 200 Success */ {
  message?: string;
  data?: Role[];
  metadata?: Metadata;
};
export type GetRoleApiArg = {
  /** The filter search by name. */
  search?: string;
  /** The number of items to skip before starting to collect the result set. */
  page?: number;
  /** The numbers of items to return. */
  limit?: number;
  /** The date created filter. */
  dateStart?: string;
  /** The date created filter. */
  dateEnd?: string;
  /** The permission array filter. */
  permissions?: number[];
  /** The status filter. */
  status?: boolean;
};
export type GetRolePermissionByIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: RolePermissionDetail[];
};
export type GetRolePermissionByIdApiArg = {
  /** The id of Role Permission */
  id: number;
};
export type PutRolePermissionByIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: RolePermissionUpdate;
};
export type PutRolePermissionByIdApiArg = {
  /** The id of Role Permission */
  id: number;
  /** Update Role Permission */
  body: {
    id?: number;
    role_id?: number;
    menu_id?: number;
    is_read?: boolean;
    is_create?: boolean;
    is_update?: boolean;
    is_delete?: boolean;
  };
};
export type DeleteRolePermissionByIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: RolePermissionDelete;
};
export type DeleteRolePermissionByIdApiArg = {
  /** The id of Role Permission */
  id: string;
};
export type GetFavoriteMenuApiResponse = /** status 200 Success */ {
  message?: string;
  data?: FavoriteMenuList[];
};
export type GetFavoriteMenuApiArg = {
  /** The idp_sub of User */
  idpSub: string;
};
export type PostFavoriteMenuApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PostFavoriteMenuApiArg = {
  /** The idp_sub of User */
  idpSub: string;
  body: {
    menu_id?: number;
  }[];
};
export type DeleteFavoriteMenuByMenuIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type DeleteFavoriteMenuByMenuIdApiArg = {
  /** The idp_sub of User */
  idpSub: string;
  menuId: number;
};
export type GetMenuApiResponse = /** status 200 Success */ {
  message?: string;
  data?: MenuDetail[];
};
export type GetMenuApiArg = {
  /** The idp_sub of User */
  idpSub: string;
};
export type PostMenuApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PostMenuApiArg = {
  /** The idp_sub of User */
  idpSub?: string;
  body: {
    name?: string;
    order?: number;
    status?: boolean;
    modul?: string;
    is_mobile?: boolean;
    parent_id?: number;
  };
};
export type PostHealthProfileApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PostHealthProfileApiArg = {
  idpSub: string;
  /** Health Profile body */
  body: {
    height?: string;
    weight?: string;
    blood_type?: string;
    allergy?: string[];
    medicine_allergy?: string[];
    diagnosis_treatment?: string;
    comorbid?: string;
    waist_size?: string;
    surgery_history?: string;
    personal_medical_history?: string;
    family_medical_history?: {
      family?: string;
      disease?: string;
    }[];
    smoking_option?: string;
    smoking_amount?: string;
    last_smoking?: {
      mounth?: number;
      year?: number;
    }[];
    alcohol_consume?: string;
    alcohol_amount?: {
      alcohol_type?: string;
      amount?: string;
    }[];
  };
};
export type GetHealthProfileApiResponse =
  /** status 200 successful operation */ {
    message?: string;
    data?: HealthProfile;
  };
export type GetHealthProfileApiArg = {
  idpSub: string;
};
export type DeleteHealthProfileApiResponse =
  /** status 200 successful operation */ {
    message?: string;
    data?: object;
  };
export type DeleteHealthProfileApiArg = {
  idpSub: string;
};
export type PutHealthProfileApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PutHealthProfileApiArg = {
  idpSub: string;
  /** Health Profile body */
  body: {
    height?: string;
    weight?: string;
    blood_type?: string;
    waist_size?: string;
    allergy?: string[];
    medicine_allergy?: string[];
    diagnosis_treatment?: string;
    comorbid?: string;
    surgery_history?: string;
    personal_medical_history?: string;
    family_medical_history?: {
      family?: string;
      disease?: string;
    }[];
    smoking_option?: string;
    smoking_amount?: string;
    last_smoking?: {
      mounth?: number;
      year?: number;
    }[];
    alcohol_consume?: string;
    alcohol_amount?: {
      alcohol_type?: string;
      amount?: string;
    }[];
  };
};
export type GetOnboardingProgressApiResponse =
  /** status 200 successful operation */ {
    message?: string;
    data?: OnboardingProgress;
  };
export type GetOnboardingProgressApiArg = {
  idpSub: string;
};
export type PutUserByIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: UpdateUser;
};
export type PutUserByIdApiArg = {
  /** The id of User */
  id: string;
  /** Update User */
  body: {
    operation?: string;
    field?: string;
    value?: string;
  }[];
};
export type PostPinApiResponse = /** status 200 successful operation */ {
  message?: string;
  data?: object;
};
export type PostPinApiArg = {
  idpSub: string;
  /** body request */
  body: {
    pin?: string;
  };
};
export type GetPinApiResponse = /** status 200 successful operation */ {
  message?: string;
  data?: boolean;
};
export type GetPinApiArg = {
  idpSub: string;
  pin: string;
};
export type PutPinApiResponse = /** status 200 successful operation */ {
  message?: string;
  data?: object;
};
export type PutPinApiArg = {
  idpSub: string;
  /** body request */
  body: {
    pin?: string;
  };
};
export type PostCompanyApiResponse = /** status 200 Success */ {
  message?: string;
  data?: CompanyPost;
};
export type PostCompanyApiArg = {
  /** Create new Company */
  body: {
    id_company?: string;
    name_company?: string;
  };
};
export type GetCompanyApiResponse = /** status 200 Success */ {
  message?: string;
  data?: Company[];
  metadata?: Metadata;
};
export type GetCompanyApiArg = {
  /** The number of items to skip before starting to collect the result set. */
  page?: number;
  /** The numbers of items to return. */
  limit?: number;
  /** The date created filter. */
  date?: string;
  /** The status filter. */
  companyName?: boolean;
  /** The status filter. */
  status?: boolean;
};
export type GetCompanyByIdApiResponse = /** status 200 successful operation */ {
  message?: string;
  data?: CompanyDetail;
};
export type GetCompanyByIdApiArg = {
  /** The id of Company */
  id: number;
};
export type PutCompanyByIdApiResponse = /** status 200 successful operation */ {
  message?: string;
  data?: CompanyUpdate;
};
export type PutCompanyByIdApiArg = {
  /** The id of Company */
  id: number;
  /** Update Company */
  body: {
    id_company?: string;
  };
};
export type DeleteCompanyByIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type DeleteCompanyByIdApiArg = {
  /** The id of Company */
  id: number;
};
export type PostEmployeeApiResponse = /** status 200 Success */ {
  message?: string;
  data?: EmployeePost;
};
export type PostEmployeeApiArg = {
  /** Create new Employee */
  body: {
    id_company?: string;
    name_company?: string;
    name?: string;
    nik?: string;
    no_employee?: string;
    position?: string;
  };
};
export type GetEmployeeApiResponse = /** status 200 Success */ {
  message?: string;
  data?: EmployeeList[];
  metadata?: Metadata;
};
export type GetEmployeeApiArg = {
  /** The number of items to skip before starting to collect the result set. */
  page?: number;
  /** The numbers of items to return. */
  limit?: number;
  /** The date created filter. */
  date?: string;
  /** The ID Company */
  idCompany: string;
};
export type PutEmployeeByUserIdApiResponse =
  /** status 200 successful operation */ {
    message?: string;
    data?: EmployeeStatusUpdate;
  };
export type PutEmployeeByUserIdApiArg = {
  /** The id of User */
  userId: string;
  /** Update Employee */
  body: {
    id_company?: string;
    status_employee?: boolean;
  };
};
export type GetUsersApiResponse = /** status 200 Success */ {
  message?: string;
  data?: Users[];
  metadata?: Pagination;
};
export type GetUsersApiArg = {
  /** The numbers of items to return. */
  limit?: number;
  /** The number of items to skip before starting to collect the result set. */
  page?: number;
  /** The Name filter. */
  fullName?: string;
  /** The date created filter. */
  dateStart?: string;
  /** The date created filter. */
  dateEnd?: string;
  /** The Role id filter */
  roleId?: number;
  /** The Status filter. */
  status?: boolean;
};
export type PostUsersApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PostUsersApiArg = {
  idpSub: string;
  /** create user */
  body: {
    full_name?: string;
    birth_date?: string;
    gender?: string;
    ktp_no?: string;
    address?: string;
    phone_number?: string;
    email?: string;
    no_emergency?: string;
    profile_photo?: string;
    study?: string;
    ktp_photo?: string;
  };
};
export type GetUsersByUserIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: UserRoleDetail;
};
export type GetUsersByUserIdApiArg = {
  /** The ID role of users */
  userId: string;
};
export type PutUsersByUserIdApiResponse = /** status 200 Success */ {
  message?: string;
  data?: object;
};
export type PutUsersByUserIdApiArg = {
  /** The id of user */
  userId: string;
  /** Update data user role */
  body: {
    full_name?: string;
    suspend_date?: string;
    role_id?: number;
    status?: boolean;
    email?: string;
  };
};
export type PostRefreshTokenApiResponse = /** status 200 Success */ {
  message?: string;
  data?: RefreshToken;
};
export type PostRefreshTokenApiArg = {
  body: {
    refresh_token?: string;
  };
};
export type GetDashboardMenuApiResponse = /** status 200 Success */ {
  message?: string;
  data?: ListMenuRole[];
};
export type GetDashboardMenuApiArg = {
  /** The id of role */
  idRole?: number;
};
export type Health = {
  status?: string;
};
export type Error = {
  code?: string;
  message?: string;
};
export type UserAccessToken = {
  access_token?: string;
  refresh_token?: string;
  scope?: string;
  token_type?: string;
  expires_in?: number;
  role?: {
    id?: number;
    name?: string;
  };
  permissions?: {
    id?: number;
    menu?: string;
    is_read?: boolean;
    is_create?: boolean;
    is_update?: boolean;
    is_delete?: boolean;
  }[];
};
export type UserLogin = {
  username: string;
  password: string;
};
export type Family = {
  family_id?: string;
  full_name?: string;
  birth_date?: string;
  family_relationship?: string;
  gender?: string;
  ktp_no?: string;
  address?: string;
  phone_number?: string;
  email?: string;
  no_emergency?: string;
  address_id?: string;
  user_id?: string;
  is_deleted?: boolean;
  allergy?: string[];
  medicine_allergy?: string[];
  diagnosis_treatment?: string;
  comorbid?: string;
  surgery_history?: string;
  personal_medical_history?: string;
  family_medical_history?: {
    family?: string;
    disease?: string;
  }[];
};
export type UserData = {
  username?: string;
  accountStatus?: string;
  phone_number?: string;
  givenName?: string;
  sn?: string;
  mail?: string;
  user_id?: string;
  idp_sub?: string;
  profile_photo?: string;
  birth_date?: string;
  gender?: string;
  ktp_no?: string;
  study?: string;
  no_emergency?: string;
  ktp_photo?: string;
};
export type Company = {
  id?: number;
  id_company?: string;
  name?: string;
  count_user?: number;
  created_date?: string;
  status?: boolean;
};
export type Insurance = {
  insurance_id?: string;
  name?: string;
  polis_number?: string;
  photo?: string;
  company_name?: string;
  employee_no?: string;
  user_id?: string;
  is_deleted?: boolean;
  idp_sub?: string;
  document?: string;
  full_name?: string;
  type?: string;
  logo?: string;
  expired_date?: string;
};
export type Metadata = {
  page?: number;
  per_page?: number;
  total_row?: number;
  total_page?: number;
};
export type Address = {
  address_id?: string;
  user_id?: string;
  phone_number?: string;
  label?: string;
  province?: string;
  city?: string;
  districs?: string;
  postal_code?: string;
  detail?: string;
  notes?: string;
  is_main?: boolean;
  same_as_ktp?: boolean;
  created_at?: string;
  updated_at?: string;
  longitude?: string;
  latitude?: string;
  receiver?: string;
};
export type RolePost = {
  status?: string;
};
export type Role = {
  id?: number;
  name?: string;
  count_user?: number;
  created_date?: string;
  status?: boolean;
};
export type RolePermissionDetail = {
  id?: number;
  permission?: string;
  is_read?: boolean;
  is_create?: boolean;
  is_update?: boolean;
  is_delete?: boolean;
  status?: boolean;
};
export type RolePermissionUpdate = {
  status?: string;
};
export type RolePermissionDelete = {
  status?: string;
};
export type FavoriteMenuList = {
  id?: number;
  menu_id?: number;
  user_id?: string;
  idp_sub?: string;
  name?: string;
  modul?: string;
};
export type MenuDetail = {
  id?: number;
  name?: string;
  modul?: string;
  is_mobile?: boolean;
};
export type HealthProfile = {
  health_profile_users_id?: string;
  user_id?: string;
  height?: string;
  waist_size?: string;
  weight?: string;
  blood_type?: string;
  allergy?: string[];
  medicine_allergy?: string[];
  diagnosis_treatment?: string;
  comorbid?: string;
  surgery_history?: string;
  personal_medical_history?: string;
  family_medical_history?: {
    family?: string;
    disease?: string;
  }[];
  smoking_option?: string;
  smoking_amount?: string;
  last_smoking?: {
    mounth?: number;
    year?: number;
  }[];
  alcohol_consume?: string;
  alcohol_amount?: {
    alcohol_type?: string;
    amount?: string;
  }[];
  is_deleted?: boolean;
};
export type OnboardingProgress = {
  overall?: number;
  items?: {
    type?: string;
    progress?: number;
  }[];
};
export type UpdateUser = {
  _id?: string;
  _rev?: string;
  userName?: string;
  accountStatus?: string;
  givenName?: string;
  sn?: string;
  telephoneNumber?: string;
  mail?: string;
};
export type CompanyPost = {
  status?: string;
};
export type CompanyDetail = {
  id?: number;
  id_company?: string;
  name?: string;
  count_user?: number;
  created_date?: string;
  status?: boolean;
};
export type CompanyUpdate = {
  status?: string;
};
export type EmployeePost = {
  status?: string;
};
export type EmployeeList = {
  full_name?: string;
  no_ktp?: string;
  no_employee?: string;
  position?: string;
  status?: boolean;
};
export type EmployeeStatusUpdate = {
  status?: string;
};
export type Users = {
  user_id?: string;
  full_name?: string;
  status?: boolean;
  created_at?: string;
  role_name?: string;
};
export type Pagination = {
  page?: number;
  totalPage?: number;
  size?: number;
  totalData?: number;
};
export type UserRoleDetail = {
  user_id?: string;
  full_name?: string;
  email?: string;
  profile_photo?: string;
  birth_date?: string;
  gender?: string;
  ktp_no?: string;
  study?: string;
  no_emergency?: string;
  ktp_photo?: string;
  is_active?: boolean;
  role_name?: string;
  status?: boolean;
  suspend_date?: string;
};
export type RefreshToken = {
  access_token?: string;
  refresh_token?: string;
  scope?: string;
  token_type?: string;
  expires_in?: number;
};
export type ListMenuRole = {
  id?: number;
  name?: string;
  module?: string;
  key?: string;
  role_and_permission?: {
    read?: boolean;
    create?: boolean;
    update?: boolean;
    delete?: boolean;
  };
};
export const {
  useGetHealthQuery,
  useGetPingQuery,
  usePostLoginMutation,
  usePostFamilyMutation,
  useGetFamilyQuery,
  useGetFamilyByFamilyIdQuery,
  usePutFamilyByFamilyIdMutation,
  useDeleteFamilyByFamilyIdMutation,
  useGetMeQuery,
  usePostMeMutation,
  usePutMeMutation,
  useGetMeCompanyQuery,
  usePostInsuranceMutation,
  useGetInsuranceQuery,
  useGetInsuranceByInsuranceIdQuery,
  useDeleteInsuranceByInsuranceIdMutation,
  usePutInsuranceByInsuranceIdMutation,
  usePostAddressMutation,
  useGetAddressQuery,
  useDeleteAddressByAddressIdMutation,
  usePutAddressByAddressIdMutation,
  useGetAddressByAddressIdQuery,
  useGetAddressMainQuery,
  usePostRoleMutation,
  useGetRoleQuery,
  useGetRolePermissionByIdQuery,
  usePutRolePermissionByIdMutation,
  useDeleteRolePermissionByIdMutation,
  useGetFavoriteMenuQuery,
  usePostFavoriteMenuMutation,
  useDeleteFavoriteMenuByMenuIdMutation,
  useGetMenuQuery,
  usePostMenuMutation,
  usePostHealthProfileMutation,
  useGetHealthProfileQuery,
  useDeleteHealthProfileMutation,
  usePutHealthProfileMutation,
  useGetOnboardingProgressQuery,
  usePutUserByIdMutation,
  usePostPinMutation,
  useGetPinQuery,
  usePutPinMutation,
  usePostCompanyMutation,
  useGetCompanyQuery,
  useGetCompanyByIdQuery,
  usePutCompanyByIdMutation,
  useDeleteCompanyByIdMutation,
  usePostEmployeeMutation,
  useGetEmployeeQuery,
  usePutEmployeeByUserIdMutation,
  useGetUsersQuery,
  usePostUsersMutation,
  useGetUsersByUserIdQuery,
  usePutUsersByUserIdMutation,
  usePostRefreshTokenMutation,
  useGetDashboardMenuQuery,
} = injectedRtkApi;
