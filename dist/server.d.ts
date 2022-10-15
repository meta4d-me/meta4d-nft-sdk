export declare const signWithWallet: (msg: string) => Promise<string>;
export declare type RequestMethod = "GET" | "POST" | "DELETE" | "PUT";
export interface RequestParams {
    url: string;
    method: RequestMethod;
    data?: any;
    headers?: any;
}
export declare const axiosRequest: (requestParams: RequestParams) => Promise<any>;
