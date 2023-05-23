import {
  ConsoleErrorReporter,
  DummyErrorReporter,
  SentryErrorReporter
} from '../drivers';

import UnknownErrorReporterDriver from '../errors';
import { ErrorReporterProvider } from '../context';

import { ErrorReporterComponentProps, ErrorReporterDriver } from '../types';

const createErrorReporter = (props: Partial<ErrorReporterComponentProps>): ErrorReporterDriver => {
  const { driver = '', config } = props;

  switch (driver) {
    case 'console':
      return new ConsoleErrorReporter();
    case 'dummy':
      return new DummyErrorReporter();
    case 'sentry':
      return new SentryErrorReporter(config);
    default:
      throw new UnknownErrorReporterDriver(driver);
  }
};

const ErrorReporter = (props: ErrorReporterComponentProps) => {
  const {
    children,
    config,
    driver,
    user
  } = props;

  const reporter = createErrorReporter({ driver, config });

  return (
    <ErrorReporterProvider reporter={reporter} user={user}>
      {children}
    </ErrorReporterProvider>
  );
};

export default ErrorReporter;
