import React from 'react';

interface Props {
  count: number;
}

const Zero = 0;
const ONE = 1;
const TWO = 2;
const Three = 3;

const CountIcsIcon = ({ count }: Props) => {
  return <IcePiece count={count} />;
};

const IcePiece = ({ count }: Props) =>
  ({
    [Zero]: <ZeroCommit />,
    [ONE]: <OneCommit />,
    [TWO]: <TwoCommit />,
    [Three]: <ThreeCommit />,
  }[count] ?? <ZeroCommit />);

export const ZeroCommit: React.VFC<React.SVGProps<SVGSVGElement>> = ({ stroke }) => {
  return (
    <svg width="45" height="80" viewBox="0 0 45 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.1121 75.3514C23.9651 77.3904 21.0294 77.3903 19.8826 75.3512L0.826189 41.4689C0.312579 40.5557 0.312601 39.4407 0.826247 38.5275L19.8826 4.64823C21.0295 2.60931 23.965 2.6092 25.112 4.64804L44.1716 38.5273C44.6853 39.4406 44.6854 40.5557 44.1716 41.469L25.1121 75.3514Z"
        fill="white"
        {...(stroke && { stroke })}
      />
      <path
        d="M19.3786 38.3003C20.1876 38.3003 20.845 37.4575 20.845 36.4181C20.845 35.3787 20.1876 34.5303 19.3786 34.5303C18.5695 34.5303 17.8896 35.3562 17.8896 36.4181C17.8896 37.48 18.5639 38.3003 19.3786 38.3003Z"
        fill="#CDCED7"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1418 43.0247C18.0468 43.0941 17.9391 43.1439 17.8248 43.1713C17.7105 43.1987 17.5919 43.2031 17.4758 43.1843C17.3598 43.1655 17.2487 43.1238 17.1489 43.0617C17.0491 42.9996 16.9626 42.9183 16.8944 42.8225C16.7102 42.5716 16.4695 42.3677 16.1918 42.2271C15.9141 42.0865 15.6073 42.0133 15.296 42.0133C14.9848 42.0133 14.6779 42.0865 14.4002 42.2271C14.1225 42.3677 13.8818 42.5716 13.6975 42.8225C13.6286 42.9177 13.5415 42.9983 13.4413 43.0599C13.3412 43.1214 13.2299 43.1626 13.1138 43.1811C12.9977 43.1996 12.8791 43.1951 12.7648 43.1678C12.6505 43.1405 12.5426 43.0909 12.4474 43.0219C12.3523 42.953 12.2716 42.8659 12.2101 42.7657C12.1485 42.6656 12.1073 42.5543 12.0888 42.4382C12.0703 42.3221 12.0748 42.2035 12.1021 42.0892C12.1294 41.9748 12.179 41.867 12.248 41.7718C12.6008 41.2989 13.0586 40.9142 13.5852 40.6481C14.1152 40.3787 14.7014 40.2383 15.296 40.2383C15.8906 40.2383 16.4768 40.3787 17.0068 40.6481C17.5334 40.9142 17.9912 41.2989 18.344 41.7718C18.4135 41.8672 18.4634 41.9754 18.4909 42.0901C18.5184 42.2049 18.5229 42.324 18.5041 42.4405C18.4852 42.5569 18.4435 42.6686 18.3814 42.7688C18.3192 42.8691 18.2377 42.9561 18.1418 43.0247Z"
        fill="#CDCED7"
      />
      <path
        d="M11.1004 38.6373C11.8675 38.6373 12.4864 37.7096 12.4864 36.5654C12.4864 35.4212 11.8675 34.4873 11.1004 34.4873C10.3334 34.4873 9.71973 35.4212 9.71973 36.5654C9.71973 37.7096 10.3387 38.6373 11.1004 38.6373Z"
        fill="#CDCED7"
      />
    </svg>
  );
};

const OneCommit = () => {
  return (
    <svg width="45" height="80" viewBox="0 0 45 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.1125 75.3513C23.9655 77.3903 21.0297 77.3902 19.8829 75.3511L0.827126 41.4688C0.313539 40.5556 0.313561 39.4407 0.827185 38.5275L19.883 4.64838C21.0298 2.60941 23.9654 2.60932 25.1124 4.6482L44.1713 38.5273C44.6851 39.4406 44.6851 40.5557 44.1714 41.469L25.1125 75.3513Z"
        fill="#C1E1FF"
      />
      <path
        d="M11.223 38.2887C12.0327 38.2887 12.6906 37.4452 12.6906 36.405C12.6906 35.3647 12.0327 34.5156 11.223 34.5156C10.4133 34.5156 9.75537 35.3422 9.75537 36.405C9.75537 37.4677 10.4076 38.2887 11.223 38.2887Z"
        fill="black"
      />
      <path
        d="M19.3697 38.2887C20.1795 38.2887 20.843 37.4452 20.843 36.405C20.843 35.3647 20.1795 34.5156 19.3697 34.5156C18.56 34.5156 17.8965 35.3647 17.8965 36.405C17.8965 37.4452 18.5544 38.2887 19.3697 38.2887Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4359 40.4034C12.6285 40.2638 12.8685 40.2061 13.1035 40.243C13.3385 40.2799 13.5493 40.4083 13.6898 40.6002C13.8707 40.8537 14.1099 41.06 14.3871 41.2019C14.6661 41.3426 14.9743 41.4157 15.2868 41.4156C15.5985 41.4159 15.9059 41.3421 16.1835 41.2003C16.4611 41.0586 16.7011 40.8529 16.8837 40.6002C16.9493 40.4957 17.0357 40.4058 17.1375 40.3361C17.2393 40.2663 17.3544 40.2183 17.4756 40.195C17.5968 40.1716 17.7214 40.1734 17.8419 40.2003C17.9623 40.2272 18.0759 40.2786 18.1757 40.3513C18.2754 40.4239 18.3591 40.5164 18.4216 40.6228C18.4841 40.7292 18.524 40.8473 18.5389 40.9698C18.5538 41.0923 18.5434 41.2166 18.5082 41.3348C18.473 41.4531 18.4139 41.5629 18.3345 41.6574C17.9818 42.1311 17.5236 42.5162 16.9962 42.782C16.4737 43.0487 15.8959 43.1892 15.3093 43.1925C14.714 43.193 14.127 43.0526 13.5964 42.7829C13.0657 42.5132 12.6064 42.1217 12.256 41.6405C12.1184 41.4517 12.0602 41.2165 12.0938 40.9853C12.1274 40.7541 12.2502 40.5452 12.4359 40.4034Z"
        fill="black"
      />
    </svg>
  );
};

const TwoCommit = () => {
  return (
    <svg width="45" height="80" viewBox="0 0 45 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.1206 75.351C23.974 77.3901 21.0382 77.3906 19.8911 75.3517L0.826791 41.4693C0.312834 40.5559 0.312857 39.4404 0.82685 38.527L19.8911 4.64776C21.0383 2.60904 23.9739 2.60946 25.1205 4.64851L44.1722 38.5278C44.6856 39.4408 44.6856 40.5555 44.1722 41.4686L25.1206 75.351Z"
        fill="#8BDCFF"
      />
      <path
        d="M11.1926 38.3958C11.9855 38.3958 12.6297 37.5698 12.6297 36.5512C12.6297 35.5326 11.9855 34.7012 11.1926 34.7012C10.3997 34.7012 9.75 35.5326 9.75 36.5512C9.75 37.5698 10.3942 38.3958 11.1926 38.3958Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.474 40.4078C12.8847 40.2091 13.3788 40.381 13.5775 40.7918C13.7267 41.1003 13.9599 41.3604 14.2502 41.5425C14.5404 41.7245 14.8762 41.8211 15.2188 41.8211C15.5615 41.8211 15.8972 41.7245 16.1875 41.5425C16.4778 41.3604 16.7109 41.1003 16.8601 40.7918C17.0588 40.381 17.5529 40.2091 17.9637 40.4078C18.3744 40.6065 18.5464 41.1006 18.3477 41.5114C18.0632 42.0994 17.6188 42.5954 17.0654 42.9424C16.512 43.2895 15.872 43.4736 15.2188 43.4736C14.5656 43.4736 13.9256 43.2895 13.3722 42.9424C12.8188 42.5954 12.3744 42.0994 12.09 41.5114C11.8913 41.1006 12.0632 40.6065 12.474 40.4078Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7638 35.9991C17.1024 35.6933 17.6249 35.72 17.9307 36.0587C18.0526 36.1937 18.2014 36.3016 18.3676 36.3754C18.5338 36.4493 18.7137 36.4875 18.8956 36.4875C19.0774 36.4875 19.2573 36.4493 19.4235 36.3754C19.5897 36.3016 19.7385 36.1937 19.8604 36.0587C20.1662 35.72 20.6887 35.6933 21.0274 35.9991C21.3661 36.3049 21.3927 36.8274 21.0869 37.1661C20.8101 37.4727 20.472 37.7178 20.0946 37.8855C19.7171 38.0533 19.3086 38.1399 18.8956 38.1399C18.4825 38.1399 18.074 38.0533 17.6965 37.8855C17.3191 37.7177 16.981 37.4726 16.7042 37.1661C16.3984 36.8274 16.4251 36.3049 16.7638 35.9991Z"
        fill="black"
      />
    </svg>
  );
};

const ThreeCommit = () => {
  return (
    <svg width="45" height="80" viewBox="0 0 45 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.1115 75.3513C23.9645 77.3903 21.0287 77.3902 19.8819 75.3511L0.826149 41.4688C0.312562 40.5556 0.312584 39.4407 0.826207 38.5275L19.882 4.64838C21.0288 2.60941 23.9644 2.60932 25.1114 4.6482L44.1704 38.5273C44.6841 39.4406 44.6841 40.5557 44.1704 41.469L25.1115 75.3513Z"
        fill="#51BFFE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9597 35.8211C19.7403 35.8211 19.5234 35.8673 19.323 35.9569C19.1227 36.0464 18.9434 36.1772 18.7971 36.3407C18.5106 36.6607 18.0189 36.6878 17.6989 36.4013C17.3789 36.1148 17.3517 35.6231 17.6383 35.3031C17.9305 34.9767 18.2884 34.7156 18.6884 34.5368C19.0884 34.358 19.5216 34.2656 19.9597 34.2656C20.3979 34.2656 20.8311 34.358 21.2311 34.5368C21.6312 34.7156 21.989 34.9767 22.2812 35.3031C22.5678 35.6231 22.5406 36.1148 22.2206 36.4013C21.9006 36.6878 21.4089 36.6607 21.1224 36.3407C20.9761 36.1772 20.7968 36.0464 20.5965 35.9569C20.3962 35.8673 20.1792 35.8211 19.9597 35.8211Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7122 35.8211C11.4928 35.8211 11.2758 35.8673 11.0754 35.9569C10.8751 36.0464 10.6959 36.1772 10.5495 36.3407C10.263 36.6607 9.77133 36.6878 9.45133 36.4013C9.13133 36.1148 9.10419 35.6231 9.3907 35.3031C9.68297 34.9767 10.0408 34.7156 10.4408 34.5368C10.8408 34.358 11.274 34.2656 11.7122 34.2656C12.1503 34.2656 12.5836 34.358 12.9836 34.5368C13.3836 34.7156 13.7414 34.9767 14.0337 35.3031C14.3202 35.6231 14.2931 36.1148 13.9731 36.4013C13.6531 36.6878 13.1614 36.6607 12.8749 36.3407C12.7285 36.1772 12.5493 36.0464 12.3489 35.9569C12.1486 35.8673 11.9316 35.8211 11.7122 35.8211Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4967 39.1289C15.4394 39.1264 15.3828 39.1429 15.3358 39.176C15.2889 39.209 15.2542 39.2567 15.2373 39.3116C15.2204 39.3665 15.2222 39.4254 15.2424 39.4791C15.2626 39.5329 15.3001 39.5784 15.3489 39.6085C15.7145 39.8341 15.8279 40.3133 15.6024 40.6788C15.3768 41.0443 14.8976 41.1578 14.5321 40.9322C14.1901 40.7212 13.9278 40.4026 13.7864 40.0263C13.645 39.6501 13.6325 39.2376 13.7509 38.8536C13.8692 38.4695 14.1117 38.1356 14.4403 37.9042C14.7689 37.6728 15.165 37.557 15.5665 37.5751C15.9956 37.5943 16.3278 37.9578 16.3085 38.3869C16.2893 38.816 15.9258 39.1482 15.4967 39.1289Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6173 39.8685C15.839 40.2364 15.7206 40.7144 15.3527 40.9361C15.3032 40.966 15.265 41.0115 15.2444 41.0656C15.2237 41.1196 15.2218 41.179 15.2387 41.2343C15.2557 41.2895 15.2907 41.3376 15.3382 41.3707C15.3856 41.4038 15.4427 41.4201 15.5005 41.417C15.9294 41.3939 16.2958 41.7229 16.3189 42.1518C16.342 42.5807 16.013 42.9471 15.5841 42.9702C15.1798 42.9919 14.7798 42.8779 14.4478 42.6461C14.1158 42.4143 13.8709 42.0782 13.7519 41.6911C13.633 41.3041 13.6469 40.8884 13.7915 40.5102C13.9361 40.132 14.203 39.813 14.5497 39.6039C14.9176 39.3822 15.3956 39.5007 15.6173 39.8685Z"
        fill="black"
      />
    </svg>
  );
};

export default CountIcsIcon;
