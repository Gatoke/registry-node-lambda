import {ExampleService} from "../service/ExampleService";
import {Memorized} from "./Memorized";

export class Registry {

    @Memorized()
    static ExampleService(): ExampleService {
        return new ExampleService();
    }
}
