import isEmpty from 'lodash.isempty';

import ErrorReporterContext from './ErrorReporterContext';
import { ErrorReporterProviderProps } from '../types';

const ErrorReporterProvider = ({ children, reporter, user }: ErrorReporterProviderProps) => {
  /*
   * Not all error reporters support user profiles, because of that we should ensure that the
   * provided reporter has support user profiles support before setting up
   */
  if (isEmpty(user)) {
    reporter.clearUser();
  } else {
    reporter.setUser(user);
  }

  return (
    <ErrorReporterContext.Provider value={reporter}>
      {children}
    </ErrorReporterContext.Provider>
  );
};

export default ErrorReporterProvider;
