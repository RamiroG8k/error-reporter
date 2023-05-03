import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { ConsoleErrorReporter, DummyErrorReporter, SentryErrorReporter } from '../../../src/drivers';

import { ErrorReporter, useErrorReporter } from '../../../src';
import { screen } from '@testing-library/react';

const TestingErrorReporter = () => {
  const errorReporter = useErrorReporter();

  let reporterClass;

  if (errorReporter instanceof ConsoleErrorReporter) {
    reporterClass = 'ConsoleErrorReporter';
  } else if (errorReporter instanceof SentryErrorReporter) {
    reporterClass = 'SentryErrorReporter';
  } else if (errorReporter instanceof DummyErrorReporter) {
    reporterClass = 'DummyErrorReporter';
  } else {
    reporterClass = 'No error reporter';
  }

  return (
    <p>{`Error reporter class is ${reporterClass}`}</p>
  );
};

const defaultProps = {
  environment: 'develop',
  user: {
    id: '1',
    email: 'XXXXXXXXXXXXX'
  }
} as const;

const renderErrorReporter = driver => render(
  <ErrorReporter {...defaultProps} driver={driver}>
    <TestingErrorReporter />
  </ErrorReporter>
);

describe('ErrorReporter', () => {
  it('should provide console error reporter when console driver', () => {
    renderErrorReporter('console');

    const reporterType = screen.getByText('Error reporter class is ConsoleErrorReporter');

    expect(reporterType).toBeTruthy();
  });

  it('should provide sentry error reporter when sentry driver', () => {
    renderErrorReporter('sentry');

    const reporterType = screen.getByText('Error reporter class is SentryErrorReporter');

    expect(reporterType).toBeTruthy();
  });

  it('should provide dummy error reporter when dummy driver', () => {
    renderErrorReporter('dummy');

    const reporterType = screen.getByText('Error reporter class is DummyErrorReporter');

    expect(reporterType).toBeTruthy();
  });

  it('should crash when unknown error reporter', () => {
    expect(() => renderErrorReporter('unknown')).toThrow();
  });
});
