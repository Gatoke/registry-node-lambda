import {Registry} from "./registry/Registry";
import {ExampleService} from "./service/ExampleService";

export function standardWay() {
    const service = new ExampleService()
    service.helloWorld();
    return service;
}

export function registryWay() {
    const service = Registry.ExampleService();
    service.helloWorld();
    return service;
}
