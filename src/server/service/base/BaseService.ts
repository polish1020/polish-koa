import {Method} from "../../types";

export default class BaseService {
    public readonly name: string;
    public readonly method: Method;

    constructor({name, method = Method.ALL}: {name: string, method?: Method}) {
        this.name = name;
        this.method = method;
    }
}
