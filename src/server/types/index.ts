

export type ServiceResponse = string | number | JSON;

export interface Service {
    execute(): Promise<ServiceResponse>
}


export enum Method {
    GET,
    POST,
    ALL,
}
