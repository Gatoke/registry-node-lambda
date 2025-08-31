const instances: any = [];

/**
 * Decorator function to keep instance created in the global context.
 * Making instance reusable between AWS Lambda invokes in a warm state.
 *
 * Usage:
 * ```
 *     @Memorized()
 *     static ExampleService(): ExampleService {
 *         return new ExampleService();
 *     }
 * ```
 *
 * Explanation:
 * Storing instance is based on the method name. An object with index "ExampleService" will be put into instances array.
 */
export function Memorized() {
    return function (_: unknown, methodName: string, descriptor: PropertyDescriptor) : PropertyDescriptor {
        const targetMethod = descriptor.value;
        descriptor.value = function (...args: []) {
            if (instances[methodName]) {
                return instances[methodName];
            }
            instances[methodName] = targetMethod.apply(this, args);
            return instances[methodName];
        };
        return descriptor;
    }
}
