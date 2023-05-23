/**
 * DummyErrorReporter class.
 *
 * This error reporter is just for testing purposes and should not be used on local or production
 * code. All methods do nothing.
 *
 * @class DummyErrorReporter
 */
declare class DummyErrorReporter {
    warning(_error: Error): void;
    error(_error: Error): void;
    critical(_error: Error): void;
    setUser(): void;
    clearUser(): void;
}
export default DummyErrorReporter;
