export type Category = typeof CATEGORY_TEXT;

export const CATEGORY_TEXT = {
  learn: '배운 점',
  good: '잘한 점',
  improve: '개선할 점',
  curious: '궁금한 점',
} as const;

export const DOMAIN = 'https://bing-bong.today/';
export const BINGBONG = 'Bingbong(빙봉)';

export const COMMON_OG_IMAGE =
  'https://raw.githubusercontent.com/Nexters/TILTIL_FRONT/develop/public/images/common-og-image.png';
export const SHARE_OG_IMAGE =
  'https://raw.githubusercontent.com/Nexters/TILTIL_FRONT/develop/public/images/share-og-image.png';
