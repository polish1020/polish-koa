import {Service} from "../../types";
import BaseService from "../base/BaseService";

export default class HelloTest extends BaseService implements Service {

    constructor() {
        super({name: 'HelloTest'});
    }

    async execute(): Promise<string> {
        return 'hello world'
    }
}
