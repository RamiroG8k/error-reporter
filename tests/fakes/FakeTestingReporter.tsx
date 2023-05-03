import React, { useContext } from 'react';

import { ErrorReporterContext } from '../../src/context';

type ProviderProps = {
  simulateErrorLevel?: string;
  error?: Error;
}

const FakeTestingReporter = ({ simulateErrorLevel, error = new Error() }: ProviderProps) => {
  const reporter = useContext(ErrorReporterContext);

  switch (simulateErrorLevel) {
    case 'warning':
      reporter?.warning(error);
      break;

    case 'error':
      reporter?.error(error);
      break;

    case 'critical':
      reporter?.critical(error);
      break;

    default:
      break;
  }

  return <h1>This is just a test component</h1>;
};

export default FakeTestingReporter;
