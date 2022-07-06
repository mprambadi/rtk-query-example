import { emptySplitApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<GetPostsApiResponse, GetPostsApiArg>({
      query: (queryArg) => ({
        url: `/posts`,
        params: { id: queryArg.id, userId: queryArg.userId },
      }),
    }),
    getPostsById: build.query<GetPostsByIdApiResponse, GetPostsByIdApiArg>({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}` }),
    }),
    getPostsByIdComments: build.query<
      GetPostsByIdCommentsApiResponse,
      GetPostsByIdCommentsApiArg
    >({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}/comments` }),
    }),
    getComments: build.query<GetCommentsApiResponse, GetCommentsApiArg>({
      query: (queryArg) => ({
        url: `/comments`,
        params: { id: queryArg.id, postId: queryArg.postId },
      }),
    }),
    getComment: build.query<GetCommentApiResponse, GetCommentApiArg>({
      query: (queryArg) => ({ url: `/comments/${queryArg.id}` }),
    }),
    getAlbums: build.query<GetAlbumsApiResponse, GetAlbumsApiArg>({
      query: (queryArg) => ({
        url: `/albums`,
        params: { id: queryArg.id, userId: queryArg.userId },
      }),
    }),
    getAlbumsById: build.query<GetAlbumsByIdApiResponse, GetAlbumsByIdApiArg>({
      query: (queryArg) => ({ url: `/albums/${queryArg.id}` }),
    }),
    getAlbumsByIdPhotos: build.query<
      GetAlbumsByIdPhotosApiResponse,
      GetAlbumsByIdPhotosApiArg
    >({
      query: (queryArg) => ({ url: `/albums/${queryArg.id}/photos` }),
    }),
    getPhotos: build.query<GetPhotosApiResponse, GetPhotosApiArg>({
      query: (queryArg) => ({
        url: `/photos`,
        params: { id: queryArg.id, albumId: queryArg.albumId },
      }),
    }),
    getPhoto: build.query<GetPhotoApiResponse, GetPhotoApiArg>({
      query: (queryArg) => ({ url: `/photos/${queryArg.id}` }),
    }),
    getTodos: build.query<GetTodosApiResponse, GetTodosApiArg>({
      query: (queryArg) => ({
        url: `/todos`,
        params: { id: queryArg.id, userId: queryArg.userId },
      }),
    }),
    getTodo: build.query<GetTodoApiResponse, GetTodoApiArg>({
      query: (queryArg) => ({ url: `/todos/${queryArg.id}` }),
    }),
    getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
      query: (queryArg) => ({
        url: `/users`,
        params: { id: queryArg.id, email: queryArg.email },
      }),
    }),
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as jsonPlaceholderApi };
export type GetPostsApiResponse = /** status 200 successful operation */ Post[];
export type GetPostsApiArg = {
  /** Filter by post ID */
  id?: number;
  /** Filter by user ID */
  userId?: number;
};
export type GetPostsByIdApiResponse =
  /** status 200 successful operation */ Post;
export type GetPostsByIdApiArg = {
  /** The ID of the post to retrieve */
  id: number;
};
export type GetPostsByIdCommentsApiResponse =
  /** status 200 successful operation */ Comment[];
export type GetPostsByIdCommentsApiArg = {
  /** post id */
  id: number;
};
export type GetCommentsApiResponse =
  /** status 200 successful operation */ Comment[];
export type GetCommentsApiArg = {
  /** Filter by comment ID */
  id?: number;
  /** Filter by post ID */
  postId?: number;
};
export type GetCommentApiResponse =
  /** status 200 successful operation */ Comment;
export type GetCommentApiArg = {
  /** The ID of the comment to retrieve */
  id: number;
};
export type GetAlbumsApiResponse =
  /** status 200 successful operation */ Album[];
export type GetAlbumsApiArg = {
  /** Filter by album ID */
  id?: number;
  /** Filter by user ID */
  userId?: number;
};
export type GetAlbumsByIdApiResponse =
  /** status 200 successful operation */ Album;
export type GetAlbumsByIdApiArg = {
  /** The ID of the album to retrieve */
  id: number;
};
export type GetAlbumsByIdPhotosApiResponse =
  /** status 200 successful operation */ Photo[];
export type GetAlbumsByIdPhotosApiArg = {
  /** post id */
  id: number;
};
export type GetPhotosApiResponse =
  /** status 200 successful operation */ Photo[];
export type GetPhotosApiArg = {
  /** Filter by photo ID */
  id?: number;
  /** Filter by album ID */
  albumId?: number;
};
export type GetPhotoApiResponse = /** status 200 successful operation */ Photo;
export type GetPhotoApiArg = {
  /** The ID of the photo to retrieve */
  id: number;
};
export type GetTodosApiResponse = /** status 200 successful operation */ Todo[];
export type GetTodosApiArg = {
  /** Filter by todo ID */
  id?: number;
  /** Filter by user ID */
  userId?: number;
};
export type GetTodoApiResponse = /** status 200 successful operation */ Todo;
export type GetTodoApiArg = {
  /** The ID of the todo to retrieve */
  id: number;
};
export type GetUsersApiResponse = /** status 200 successful operation */ User[];
export type GetUsersApiArg = {
  /** Filter by user ID */
  id?: number;
  /** Filter by user email address */
  email?: number;
};
export type GetUserApiResponse = /** status 200 successful operation */ User;
export type GetUserApiArg = {
  /** The ID of the user to retrieve */
  id: number;
};
export type Post = {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
};
export type NotFoundError = object;
export type Comment = {
  id?: number;
  postId?: number;
  name?: string;
  email?: string;
  body?: string;
};
export type Album = {
  id?: number;
  userId?: number;
  title?: string;
};
export type Photo = {
  id?: number;
  albumId?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
};
export type Todo = {
  id?: number;
  userId?: number;
  title?: string;
  completed?: boolean;
};
export type User = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
};
export const {
  useGetPostsQuery,
  useGetPostsByIdQuery,
  useGetPostsByIdCommentsQuery,
  useGetCommentsQuery,
  useGetCommentQuery,
  useGetAlbumsQuery,
  useGetAlbumsByIdQuery,
  useGetAlbumsByIdPhotosQuery,
  useGetPhotosQuery,
  useGetPhotoQuery,
  useGetTodosQuery,
  useGetTodoQuery,
  useGetUsersQuery,
  useGetUserQuery,
} = injectedRtkApi;
