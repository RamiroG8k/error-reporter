import { useContext } from 'react';

import { ErrorReporterContext } from '../context';

/**
 * Custom hook that provides access to the error reporter context.
 * @returns {Object} The value of the ErrorReporterContext.
 */
const useErrorReporter = () => useContext(ErrorReporterContext);

export default useErrorReporter;
