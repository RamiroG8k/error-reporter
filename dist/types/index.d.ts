/**
 * Type definitions for ErrorReporter package.
 * @packageDocumentation
 */
/// <reference types="react" />
import { ConsoleErrorReporter, DummyErrorReporter, SentryErrorReporter } from '../drivers';
/**
 * Represents a user with an id and email fields.
 * This type is meant to be used to represent any kind of user across multiple platforms.
 *
 * @example
 * ```typescript
 * const user: User = {
 *   id: '123',
 *   email: 'username@domain.com'
 * }
 * ```
 */
export type User = {
    id: string;
    email: string;
};
/**
 * The error reporting driver to use.
 */
export type ErrorReporterDriver = ConsoleErrorReporter | DummyErrorReporter | SentryErrorReporter;
type ErrorReporterProps = {
    /**
     * The user object to associate with error reports.
     */
    user: User;
    /**
     * The child React node to render.
     */
    children: React.ReactNode;
};
/**
 * Props for the ErrorReporter component.
 */
export interface ErrorReporterComponentProps extends ErrorReporterProps {
    /**
     * The error reporting driver to use.
     * Must be one of "console", "dummy", or "sentry".
     */
    driver: 'console' | 'dummy' | 'sentry';
    /**
     * Error reporter provider configuration.
     */
    config?: ErrorReporterConfig;
}
/**
 * Props for the ErrorReporterProvider component.
 */
export interface ErrorReporterProviderProps extends ErrorReporterProps {
    /**
     * The error reporting driver to use.
     */
    reporter: ErrorReporterDriver;
}
export type ErrorReporterConfig = {
    /**
     * Data Source Name (DSN)
     * A DSN tells the error reporter provider where to send events,
     * so these are associated with the correct project.
     */
    dsn: string;
    /**
     * This is a tag that you can (and should) add to your SDK.
     * Generally, the tag accepts any value, but it's intended to refer to your code deployments
     * naming convention, such as development, testing, staging, or production.
     */
    environment: string;
    /**
     * Options used to configure the transport.
     * */
    transport?: any;
};
export type KeyValue = {
    /**
     * Key-value pairs to be added to the error report.
     * */
    [key: string]: any;
};
export {};
