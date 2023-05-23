/**
 * Custom hook that provides access to the error reporter context.
 * @returns {Object} The value of the ErrorReporterContext.
 */
declare const useErrorReporter: () => import("../types").ErrorReporterDriver | null;
export default useErrorReporter;
