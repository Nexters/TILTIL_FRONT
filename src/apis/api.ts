/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BooleanResponse {
  isSuccess: boolean;
}

export interface GreetingMessageResponse {
  /** 메시지 내용 */
  content?: string;

  /** 유저 닉네임 */
  nickname?: string;

  /**
   * 회원가입일 수
   * @format int64
   */
  signUpDays?: number;
}

export interface OkResponse {
  /** @format int64 */
  code: number;
  message: string;
}

export interface TilDetailResponse {
  /**
   * 글 작성 날짜/시간
   * @format date-time
   */
  createAt?: string;

  /**
   * 회고 날짜
   * @format date
   */
  date?: string;

  /**
   * TIL ID
   * @format int64
   */
  id?: number;

  /** 개선할 점 */
  improveContent?: string;

  /** 배운 점 */
  learnContent?: string;

  /** 궁금한 점 */
  questionContent?: string;

  /** 제목 */
  title?: string;

  /**
   * 글 수정 날짜/시간
   * @format date-time
   */
  updatedAt?: string;

  /** 잘한 점 */
  wellContent?: string;
}

export interface TilLogResponse {
  /**
   * 게시글 작성 개수
   * @format int32
   */
  count?: number;

  /**
   * 날짜
   * @format date
   */
  date?: string;

  /**
   * Til id값(count가 0이면 null)
   * @format int64
   */
  id?: number;
}

export interface TilPageResponse {
  /** 다음 페이지 존재 여부 */
  hasNext?: boolean;

  /** TIL 리스트 데이터 */
  tils?: TilSimpleResponse[];

  /**
   * 전체 데이터 개수
   * @format int64
   */
  totalElements?: number;

  /**
   * 총 페이지 수
   * @format int32
   */
  totalPages?: number;
}

export interface TilRecentLogsResponse {
  /**
   * 지금까지 작성한 글(하루당 1개)
   * @format int32
   */
  sumOfTil?: number;

  /** TIL 로그 데이터(회원가입 30일 이전 : 회원가입일로부터 30개, 이후 : 최근 30개) */
  tilLogs?: TilLogResponse[];
}

export interface TilRequest {
  /** 개선할 점(1000자) */
  improveContent?: string;

  /** 배운 점(1000자) */
  learnContent?: string;

  /** 궁금한 점(1000자) */
  questionContent?: string;

  /** 제목(24자) */
  title?: string;

  /** 잘한 점(1000자) */
  wellContent?: string;
}

export interface TilSimpleResponse {
  /**
   * 글 작성 날짜/시간
   * @format date-time
   */
  createAt?: string;

  /**
   * 회고 날짜
   * @format date
   */
  date?: string;

  /** 개선할 점 */
  hasImproveContent?: boolean;

  /** 배운 점 */
  hasLearnContent?: boolean;

  /** 궁금한 점 */
  hasQuestionContent?: boolean;

  /** 잘한 점 */
  hasWellContent?: boolean;

  /**
   * TIL ID
   * @format int64
   */
  id?: number;

  /** 제목 */
  title?: string;

  /**
   * 글 수정 날짜/시간
   * @format date-time
   */
  updatedAt?: string;
}

export interface TilStatisticsResponse {
  /** 가장 많이 쓰는 요일 */
  mostDay?: ("MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY")[];

  /** 가장 많이 쓴 카테고리 */
  mostTilCategories?: ("LEARN" | "WELL" | "IMPROVE" | "QUESTION")[];

  /**
   * 연속으로 쓴 일수
   * @format int32
   */
  mostWriteDay?: number;
}

export interface UserResponse {
  /** Email */
  email?: string;

  /**
   * 유저 ID
   * @format int64
   */
  id?: number;

  /** 이름 */
  name?: string;

  /** 프로필 이미지 */
  profileImage?: string;

  /** 로그인한 SNS 타입 */
  providerType?: "GOOGLE" | "FACEBOOK" | "NAVER" | "KAKAO" | "LOCAL";
}

export interface UserUpdateRequest {
  name: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "//api.bing-bong.today",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Api Documentation
 * @version 1.0
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 * @termsOfService urn:tos
 * @baseUrl //api.bing-bong.today
 * @contact
 *
 * Api Documentation
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags root-controller
   * @name WelcomeUsingGet
   * @summary welcome
   * @request GET:/
   * @secure
   */
  welcomeUsingGet = (params: RequestParams = {}) =>
    this.request<string, void>({
      path: `/`,
      method: "GET",
      secure: true,
      ...params,
    });

  open = {
    /**
     * @description 클라이언트에서 참고할 에러 코드 - 20404, 유저를 찾을 수 없습니다.
     *
     * @tags open-user
     * @name GetUserGreetingMessageUsingGet
     * @summary 유저 인사 메시지(isShare는 default false)
     * @request GET:/open/users/{userId}/greeting-message
     * @secure
     */
    getUserGreetingMessageUsingGet: (
      userId: string,
      query?: { isShare?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<GreetingMessageResponse, void>({
        path: `/open/users/${userId}/greeting-message`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 클라이언트에서 참고할 에러 코드 - 20404, 유저를 찾을 수 없습니다.
     *
     * @tags open-user
     * @name GetUserTilStatisticsUsingGet
     * @summary 나의 암묵지(TIL) 통계 정보
     * @request GET:/open/users/{userId}/statistics/til
     * @secure
     */
    getUserTilStatisticsUsingGet: (userId: string, params: RequestParams = {}) =>
      this.request<TilStatisticsResponse, void>({
        path: `/open/users/${userId}/statistics/til`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description 클라이언트에서 참고할 에러 코드 - 20404, 유저를 찾을 수 없습니다.
     *
     * @tags open-til
     * @name GetRecentTilLogsUsingGet
     * @summary 최근 TIL 기록
     * @request GET:/open/users/{userId}/tils/logs/recent
     * @secure
     */
    getRecentTilLogsUsingGet: (userId: string, params: RequestParams = {}) =>
      this.request<TilRecentLogsResponse, void>({
        path: `/open/users/${userId}/tils/logs/recent`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  tils = {
    /**
     * @description 클라이언트에서 참고할 에러 코드 - 30401, TIL이 이미 존재합니다.
     *
     * @tags auth-til
     * @name WriteTilUsingPost
     * @summary TIL 작성하기
     * @request POST:/tils
     * @secure
     */
    writeTilUsingPost: (tilRequest: TilRequest, params: RequestParams = {}) =>
      this.request<TilDetailResponse, void>({
        path: `/tils`,
        method: "POST",
        body: tilRequest,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth-til
     * @name CanWriteTilUsingGet
     * @summary 오늘 TIL 작성할 수 있는지 여부
     * @request GET:/tils/can-write
     * @secure
     */
    canWriteTilUsingGet: (params: RequestParams = {}) =>
      this.request<BooleanResponse, void>({
        path: `/tils/can-write`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description 클라이언트에서 참고할 에러 코드 - 10400, 유효하지 않은 page/size입니다. page/size는 0 이하가 될 수 없습니다.
     *
     * @tags auth-til
     * @name ReadMyTilsUsingGet
     * @summary 나의 TIL 리스트 조회
     * @request GET:/tils/me
     * @secure
     */
    readMyTilsUsingGet: (
      query?: { page?: number; size?: number; sort?: string[] },
      params: RequestParams = {},
    ) =>
      this.request<TilPageResponse, void>({
        path: `/tils/me`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 클라이언트에서 참고할 에러 코드 - 10403, 해당 컨텐츠에 대한 접근 권한이 존재하지 않습니다. - 20404, 유저를 찾을 수 없습니다. - 30404, TIL이 존재하지 않습니다.
     *
     * @tags auth-til
     * @name ReadTilUsingGet
     * @summary TIL 상세보기
     * @request GET:/tils/{tilId}
     * @secure
     */
    readTilUsingGet: (tilId: number, params: RequestParams = {}) =>
      this.request<TilDetailResponse, void>({
        path: `/tils/${tilId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description 클라이언트에서 참고할 에러 코드 - 10403, 해당 컨텐츠에 대한 접근 권한이 존재하지 않습니다. - 30404, TIL이 존재하지 않습니다.
     *
     * @tags auth-til
     * @name UpdateTilUsingPut
     * @summary TIL 수정하기
     * @request PUT:/tils/{tilId}
     * @secure
     */
    updateTilUsingPut: (tilId: number, tilRequest: TilRequest, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/tils/${tilId}`,
        method: "PUT",
        body: tilRequest,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 클라이언트에서 참고할 에러 코드 - 10403, 해당 컨텐츠에 대한 접근 권한이 존재하지 않습니다. - 30404, TIL이 존재하지 않습니다.
     *
     * @tags auth-til
     * @name DeleteTilUsingDelete
     * @summary TIL 삭제하기
     * @request DELETE:/tils/{tilId}
     * @secure
     */
    deleteTilUsingDelete: (tilId: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/tils/${tilId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  users = {
    /**
     * @description 클라이언트에서 참고할 에러 코드 - 20404, 존재하지 않는 유저인 경우
     *
     * @tags auth-user
     * @name UpdateUsingPut
     * @summary 유저 이름 변경
     * @request PUT:/users
     * @secure
     */
    updateUsingPut: (
      userUpdateRequest: UserUpdateRequest,
      query?: {
        accountNonExpired?: boolean;
        accountNonLocked?: boolean;
        "authorities[0].authority"?: string;
        credentialsNonExpired?: boolean;
        enabled?: boolean;
        password?: string;
        username?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<OkResponse, void>({
        path: `/users`,
        method: "PUT",
        query: query,
        body: userUpdateRequest,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 클라이언트에서 참고할 에러 코드 - 20404, 존재하지 않는 유저인 경우
     *
     * @tags auth-user
     * @name UserUsingGet
     * @summary 나의 유저 정보 조회
     * @request GET:/users/me
     * @secure
     */
    userUsingGet: (
      query?: {
        accountNonExpired?: boolean;
        accountNonLocked?: boolean;
        "authorities[0].authority"?: string;
        credentialsNonExpired?: boolean;
        enabled?: boolean;
        password?: string;
        username?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserResponse, void>({
        path: `/users/me`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
