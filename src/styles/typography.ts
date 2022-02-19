import { css } from '@emotion/react';

const typography = {
  h1: css`
    font-family: GmarketSansBold;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.015em;
  `,
  h2: css`
    font-family: GmarketSansMedium;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.015em;
  `,
  h3: css`
    font-family: GmarketSansBold;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.015em;
  `,
  h4: css`
    font-family: GmarketSansMedium;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.015em;
  `,
  h5: css`
    font-family: Spoqa Han Sans Neo;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.015em;
  `,
  h6: css`
    font-family: Spoqa Han Sans Neo;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.015em;
  `,

  title: css`
    font-family: GmarketSansMedium;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.015em;
  `,
  subTitle1: css`
    font-family: Spoqa Han Sans Neo;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: -0.015em;
  `,
  subTitle2: css`
    font-family: Spoqa Han Sans Neo;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: -0.015em;
  `,
  subTitle3: css`
    font-family: GmarketSansBold;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -0.015em;
  `,

  body1: css`
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: -0.015em;
  `,
  body2: css`
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.015em;
  `,
  body3: css`
    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.015em;
  `,
  body4: css`
    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.015em;
  `,
  body5: css`
    font-family: Spoqa Han Sans Neo Regular;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.015em;
  `,
  body6: css`
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    letter-spacing: -0.015em;
  `,

  buttonL: css`
    font-family: Spoqa Han Sans Neo;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.04em;
  `,
  buttonM: css`
    font-family: Spoqa Han Sans Neo;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.04em;
  `,
  buttonS: css`
    font-family: Spoqa Han Sans Neo;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.04em;
  `,

  listMenu: css`
    font-family: Spoqa Han Sans Neo;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    letter-spacing: -0.04em;
  `,

  caption1: css`
    font-family: Spoqa Han Sans Neo;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.015em;
  `,
  caption2: css`
    font-family: Spoqa Han Sans Neo;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: -0.015em;
  `,
  caption3: css`
    font-family: Gmarket Sans;
    font-size: 16px;
    line-height: 38px;
    letter-spacing: -0.04em;
  `,
} as const;

export type Typography = keyof typeof typography;

export default typography;
