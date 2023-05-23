import { ErrorReporterConfig, User } from '../types';
/**
 * SentryErrorReporter class
 *
 * An error reporter that reports errors to Sentry.io. It supports the "warning",
 * "error", and "critical" levels of severity. It can also associate user data with
 * errors by setting a user ID and email. Additionally, it supports extracting
 * metadata from errors and including it in the reports sent to Sentry.
 *
 * @class SentryErrorReporter
 */
declare class SentryErrorReporter {
    private readonly _dsn;
    private readonly _environment;
    private readonly _transport;
    constructor(config?: ErrorReporterConfig);
    warning(error: Error): void;
    error(error: Error): void;
    critical(error: Error): void;
    setUser(user: User): void;
    clearUser(): void;
    private _initializeSentry;
    private _sendToSentry;
    private _extractErrorMetadata;
}
export default SentryErrorReporter;
