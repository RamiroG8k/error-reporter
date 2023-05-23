import isEmpty from 'lodash.isempty';

import * as Sentry from '@sentry/react';
import { ErrorReporterConfig, KeyValue, User } from '../types';

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
class SentryErrorReporter {
  private readonly _dsn: string;
  private readonly _environment: string;
  private readonly _transport: any;

  constructor(config?: ErrorReporterConfig) {
    this._dsn = config?.dsn ?? '';
    this._environment = config?.environment ?? '';
    this._transport = config?.transport ?? {};

    this._initializeSentry();
  }

  warning(error: Error) {
    this._sendToSentry('warning', error);
  }

  error(error: Error) {
    this._sendToSentry('error', error);
  }

  critical(error: Error) {
    this._sendToSentry('fatal', error);
  }

  setUser(user: User) {
    Sentry.setUser(user);
  }

  clearUser() {
    Sentry.setUser(null);
  }

  private _initializeSentry() {
    const config = {
      dsn: this._dsn,
      environment: this._environment,
      integrations: [new Sentry.Integrations.LinkedErrors()]
    };

    if (this._transport) {
      Sentry.init({ ...config, transport: this._transport });
    } else {
      Sentry.init(config);
    }
  }

  private _sendToSentry(level: Sentry.SeverityLevel, error: Error) {
    Sentry.withScope(scope => {
      scope.setLevel(level);

      try {
        const metadata = this._extractErrorMetadata(error);

        if (!isEmpty(metadata)) {
          Object.keys(metadata).forEach(key => scope.setContext(key, metadata[key]));
        }
      } catch (metadataError) {
        Sentry.captureException(metadataError);
      }

      Sentry.captureException(error);
    });
  }

  private _extractErrorMetadata(error: Error): KeyValue {
    const result: KeyValue = {};
    const ignoredProperties = ['cause', 'message', 'name', 'stack'];

    const metadata = Object.getOwnPropertyNames(error)
      .filter((key: string) => !ignoredProperties.includes(key))
      .reduce((acc: KeyValue, key: string) => {
        acc[key] = error[key as keyof Error];
        return acc;
      }, {});

    result[error.constructor.name] = metadata;

    if (error.cause && error.cause instanceof Error) {
      return { ...result, ...this._extractErrorMetadata(error.cause) };
    }

    return result;
  }
}

export default SentryErrorReporter;
