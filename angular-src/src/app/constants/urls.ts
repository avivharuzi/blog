const BASE_URL: any = 'http://localhost:3000';

export const DEFAULT_IMAGE_PATH: any = 'assets/images/defaults/default-image.png';
export const LOADING_GIF_PATH: any = 'assets/images/tools/loading.gif';

export const LOGIN_URL: any = `${BASE_URL}/auth/login`;
export const CHECK_TOKEN_URL: any = `${BASE_URL}/auth/check`;

export const BASE_CATEGORY_URL: any = `${BASE_URL}/api/category`;
export const CATEGORY_HIGHEST_POSTS_URL: any = `${BASE_URL}/api/category/highest`;

export const BASE_POST_URL: any = `${BASE_URL}/api/post`;

export const BASE_IMAGE_PATH: any = `https://s3.eu-central-1.amazonaws.com/avivharuzi-blog`;

const BASE_BLOG_URL: any = `${BASE_URL}/api/blog`;

export const GET_BLOG_POSTS_URL: any = `${BASE_BLOG_URL}/posts`;
export const GET_BLOG_CATEGORIES_URL: any = `${BASE_BLOG_URL}/categories`;
export const GET_BLOG_TAGS_URL: any = `${BASE_BLOG_URL}/tags`;
export const GET_RECENT_POSTS_URL: any = `${BASE_BLOG_URL}/posts/recent`;
export const GET_POST_BY_SLUG_URL: any = `${BASE_BLOG_URL}/post`;
export const GET_OVERALL_DATA_URL: any = `${BASE_BLOG_URL}/overall`;
export const GET_POSTS_BY_CATEGORY_SLUG_URL: any = `${BASE_BLOG_URL}/posts/category`;
export const GET_POSTS_BY_TAG_URL: any = `${BASE_BLOG_URL}/posts/tag`;
export const GET_POSTS_BY_SEARCH_URL: any = `${BASE_BLOG_URL}/posts/search`;
