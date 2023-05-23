/**
 * ConsoleErrorReporter class
 *
 * Logs error messages as console warnings or errors.
 *
 * @class ConsoleErrorReporter
 */
declare class ConsoleErrorReporter {
    warning(error: Error): void;
    error(error: Error): void;
    critical(error: Error): void;
    setUser(): void;
    clearUser(): void;
    private printAsWarning;
    private printChainedWarnings;
    private printAsError;
    private printChainedErrors;
}
export default ConsoleErrorReporter;
