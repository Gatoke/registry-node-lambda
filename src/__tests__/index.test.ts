import {describe, expect, it} from "@jest/globals";
import {registryWay, standardWay} from "../index";
import type {ExampleService} from "../service/ExampleService";

describe('Registry vs Standard test', () => {

    it('Registry - should create instance only once', () => {
        const instances: Set<ExampleService> = new Set<ExampleService>();
        for (let i = 0; i<5; i++) {
            const result = registryWay();
            instances.add(result);
        }
        expect(instances.size).toBe(1);
    })

    it('Standard - should create 5 instances', () => {
        const instances: Set<ExampleService> = new Set<ExampleService>();
        for (let i = 0; i<5; i++) {
            const result = standardWay();
            instances.add(result);
        }
        expect(instances.size).toBe(5);
    })
});
