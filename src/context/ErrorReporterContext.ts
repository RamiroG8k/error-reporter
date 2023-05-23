import { createContext } from 'react';
import { ErrorReporterDriver } from '../types';

/**
 * A React context for the error reporter driver.
 */
const ErrorReporterContext = createContext<ErrorReporterDriver | null>(null);

export default ErrorReporterContext;
