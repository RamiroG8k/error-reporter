import React from 'react';
import {
  beforeEach,
  describe,
  expect,
  it,
  vi
} from 'vitest';

import FakeErrorReporter from '../../fakes/FakeErrorReporter';
import { render } from '@testing-library/react';

import { ErrorReporterProvider } from '../../../src/context';

import { FakeTestingReporter } from '../../fakes';

const renderWithProvider = (children, reporter, user?) => render(
  <ErrorReporterProvider reporter={reporter} user={user}>
    {children}
  </ErrorReporterProvider>
);

describe('useErrorReporter', () => {
  let reporter;

  beforeEach(() => {
    reporter = new FakeErrorReporter();
  });

  describe('error reporting', () => {
    it('should report warnings', () => {
      const expectedError = new Error('Fake error');

      renderWithProvider(
        <FakeTestingReporter simulateErrorLevel="warning" error={expectedError} />,
        reporter
      );

      expect(reporter.countReports()).toEqual(1);
      expect(reporter.countWarningReports()).toEqual(1);
      expect(reporter.getWarnings()[0]).toEqual(expectedError);
    });

    it('should report errors', () => {
      const expectedError = new Error('Fake error');

      renderWithProvider(
        <FakeTestingReporter simulateErrorLevel="error" error={expectedError} />,
        reporter
      );

      expect(reporter.countReports()).toEqual(1);
      expect(reporter.countErrorReports()).toEqual(1);
      expect(reporter.getErrors()[0]).toEqual(expectedError);
    });

    it('should report criticals', () => {
      const expectedError = new Error('Fake error');

      renderWithProvider(
        <FakeTestingReporter simulateErrorLevel="critical" error={expectedError} />,
        reporter
      );

      expect(reporter.countReports()).toEqual(1);
      expect(reporter.countCriticalReports()).toEqual(1);
      expect(reporter.getCriticals()[0]).toEqual(expectedError);
    });
  });

  it('should set the user when it is provided', () => {
    const user = {
      id: '123abc',
      email: 'john.doe@example.com'
    } as const;

    renderWithProvider(<FakeTestingReporter />, reporter, user);

    const currentUser = reporter.getUser();

    expect(currentUser.id).toEqual('123abc');
    expect(currentUser.email).toEqual('john.doe@example.com');
  });

  it('should clear user when it not provided', () => {
    const clearUser = vi.spyOn(reporter, 'clearUser');

    renderWithProvider(<FakeTestingReporter />, reporter);

    expect(clearUser).toBeCalledTimes(1);
    expect(reporter.getUser()).toBeNull();
  });
});
