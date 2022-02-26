import { BINGBONG, COMMON_OG_IMAGE, DOMAIN } from 'constants/common';

import NextHead from 'next/head';
import React from 'react';

interface HeadProps {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  url: string;
}
type Props = Partial<HeadProps>;

const Head: React.FC<Props> = ({
  title = BINGBONG,
  subTitle,
  description = '요즘 일잘러들이 선택한 회고 방법',
  url = DOMAIN,
  image = COMMON_OG_IMAGE,
  children,
}) => {
  const ogTitle = subTitle ? `${subTitle} | ${title}` : title;

  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, user-scalable=no, maximum-scale=1, minimum-scale=1.0, width=device-width"
      />

      <title>{ogTitle}</title>
      <meta property="og:title" content={ogTitle} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta
        name="keywords"
        content="회고, 회고 방법, TIL, 기록, 암묵지, 성장, 일기, 일잘러, 넥스터즈, Nexters, 사람은 같은 실수를 반복한다"
      />
      <meta property="og:image" content={image} />

      <meta property="og:site_name" content={BINGBONG} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </NextHead>
  );
};

export default Head;
