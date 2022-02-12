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

export interface GrantedAuthority {
  authority?: string;
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

  /** 제목(20자) */
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

export interface UserDetails {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: GrantedAuthority[];
  credentialsNonExpired?: boolean;
  enabled?: boolean;
  password?: string;
  username?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "//api.bing-bong.today";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
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
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
        body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
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
  test = {
    /**
     * No description
     *
     * @tags test
     * @name TestOAuthUsingGet
     * @summary oauth success test
     * @request GET:/test/success
     * @secure
     */
    testOAuthUsingGet: (query?: { token?: string }, params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/test/success`,
        method: "GET",
        query: query,
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
    readMyTilsUsingGet: (query?: { page?: number; size?: number }, params: RequestParams = {}) =>
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
     * No description
     *
     * @tags auth-user
     * @name UserUsingGet
     * @summary user
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
      this.request<UserDetails, void>({
        path: `/users/me`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
