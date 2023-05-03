/* eslint-disable max-classes-per-file */
import sentryTestkit from 'sentry-testkit/dist/browser';
import {
  beforeEach,
  describe,
  expect,
  it
} from 'vitest';
import ChainableError from '../../../src/lib';
import { SentryErrorReporter } from '../../../src/drivers';

class ChainableErrorWithAttributes extends ChainableError {
  meta: any;
  data: any;

  constructor(cause, meta, data) {
    super(cause, meta, data);

    this.meta = meta;
    this.data = data;
  }
}

class ErrorWithAttributes extends Error {
  foo: any;
  bar: any;

  constructor(foo, bar) {
    super();

    this.foo = foo;
    this.bar = bar;
  }
}

const FAKE_DSN = 'https://zxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@xxxxxxx.ingest.sentry.io/0000000';

describe('SentryErrorReporter', () => {
  let reporter;
  let testkit;

  beforeEach(() => {
    const mock = sentryTestkit();

    testkit = mock.testkit;

    reporter = new SentryErrorReporter({
      dsn: FAKE_DSN,
      environment: 'test',
      transport: mock.sentryTransport
    });
  });

  describe('#warning', () => {
    it('should send the report to Sentry', () => {
      const expectedError = new Error('Fake error');

      reporter.warning(expectedError);

      expect(testkit.reports()).toHaveLength(1);
      expect(testkit.findReport(expectedError)).toBeDefined();
    });

    it('should send the report as warning level', () => {
      const expectedError = new Error('Fake error');

      reporter.warning(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.level).toEqual('warning');
    });

    it('should not send user identification when not set', () => {
      const expectedError = new Error('Fake error');

      reporter.warning(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.user).toBeUndefined();
    });

    it('should send user identification when is set', () => {
      const expectedError = new Error('Fake error');

      reporter.setUser({
        id: '70ba6d83-fe3b-427e-8bc2-570647d4181c',
        email: 'john.doe@example.com'
      });

      reporter.warning(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.user).toBeDefined();
      expect(report.user.id).toEqual('70ba6d83-fe3b-427e-8bc2-570647d4181c');
      expect(report.user.email).toEqual('john.doe@example.com');
    });

    it('should not send user identification when is cleared', () => {
      const expectedError = new Error('Fake error');

      reporter.setUser({
        id: '70ba6d83-fe3b-427e-8bc2-570647d4181c',
        email: 'john.doe@example.com'
      });

      reporter.clearUser();
      reporter.warning(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.user).toBeUndefined();
    });

    it('should send extra context when error has attributes', () => {
      const expectedError = new ErrorWithAttributes('this is foo', 'this is bar');

      reporter.warning(expectedError);

      expect(testkit.reports()).toHaveLength(1);

      const { contexts } = testkit.reports()[0].originalReport;

      expect(contexts).toHaveProperty('ErrorWithAttributes');
      expect(contexts.ErrorWithAttributes).toHaveProperty('foo');
      expect(contexts.ErrorWithAttributes).toHaveProperty('bar');
      expect(contexts.ErrorWithAttributes.foo).toEqual('this is foo');
      expect(contexts.ErrorWithAttributes.bar).toEqual('this is bar');
    });

    it('should send extra context when error has attributes and is chained', () => {
      const chainedError = new ErrorWithAttributes('this is foo', 'this is bar');
      const expectedError = new ChainableErrorWithAttributes(
        chainedError,
        'this is meta',
        'this is data'
      );

      reporter.warning(expectedError);

      expect(testkit.reports()).toHaveLength(1);

      const { contexts } = testkit.reports()[0].originalReport;

      expect(contexts).toHaveProperty('ErrorWithAttributes');
      expect(contexts.ErrorWithAttributes).toHaveProperty('foo');
      expect(contexts.ErrorWithAttributes).toHaveProperty('bar');
      expect(contexts.ErrorWithAttributes.foo).toEqual('this is foo');
      expect(contexts.ErrorWithAttributes.bar).toEqual('this is bar');

      expect(contexts).toHaveProperty('ChainableErrorWithAttributes');
      expect(contexts.ChainableErrorWithAttributes).toHaveProperty('meta');
      expect(contexts.ChainableErrorWithAttributes).toHaveProperty('data');
      expect(contexts.ChainableErrorWithAttributes.meta).toEqual('this is meta');
      expect(contexts.ChainableErrorWithAttributes.data).toEqual('this is data');
    });
  });

  describe('#error', () => {
    it('should send the report to Sentry', () => {
      const expectedError = new Error('Fake error');

      reporter.error(expectedError);

      expect(testkit.reports()).toHaveLength(1);
      expect(testkit.findReport(expectedError)).toBeDefined();
    });

    it('should send the report as error level', () => {
      const expectedError = new Error('Fake error');

      reporter.error(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.level).toEqual('error');
    });

    it('should not send user identification when not set', () => {
      const expectedError = new Error('Fake error');

      reporter.error(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.user).toBeUndefined();
    });

    it('should send user identification when is set', () => {
      const expectedError = new Error('Fake error');

      reporter.setUser({
        id: '70ba6d83-fe3b-427e-8bc2-570647d4181c',
        email: 'john.doe@example.com'
      });

      reporter.error(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.user).toBeDefined();
      expect(report.user.id).toEqual('70ba6d83-fe3b-427e-8bc2-570647d4181c');
      expect(report.user.email).toEqual('john.doe@example.com');
    });

    it('should not send user identification when is cleared', () => {
      const expectedError = new Error('Fake error');

      reporter.setUser({
        id: '70ba6d83-fe3b-427e-8bc2-570647d4181c',
        email: 'john.doe@example.com'
      });

      reporter.clearUser();
      reporter.error(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.user).toBeUndefined();
    });

    it('should send extra context when error has attributes', () => {
      const expectedError = new ErrorWithAttributes('this is foo', 'this is bar');

      reporter.error(expectedError);

      expect(testkit.reports()).toHaveLength(1);

      const { contexts } = testkit.reports()[0].originalReport;

      expect(contexts).toHaveProperty('ErrorWithAttributes');
      expect(contexts.ErrorWithAttributes).toHaveProperty('foo');
      expect(contexts.ErrorWithAttributes).toHaveProperty('bar');
      expect(contexts.ErrorWithAttributes.foo).toEqual('this is foo');
      expect(contexts.ErrorWithAttributes.bar).toEqual('this is bar');
    });

    it('should send extra context when error has attributes and is chained', () => {
      const chainedError = new ErrorWithAttributes('this is foo', 'this is bar');
      const expectedError = new ChainableErrorWithAttributes(
        chainedError,
        'this is meta',
        'this is data'
      );

      reporter.error(expectedError);

      expect(testkit.reports()).toHaveLength(1);

      const { contexts } = testkit.reports()[0].originalReport;

      expect(contexts).toHaveProperty('ErrorWithAttributes');
      expect(contexts.ErrorWithAttributes).toHaveProperty('foo');
      expect(contexts.ErrorWithAttributes).toHaveProperty('bar');
      expect(contexts.ErrorWithAttributes.foo).toEqual('this is foo');
      expect(contexts.ErrorWithAttributes.bar).toEqual('this is bar');

      expect(contexts).toHaveProperty('ChainableErrorWithAttributes');
      expect(contexts.ChainableErrorWithAttributes).toHaveProperty('meta');
      expect(contexts.ChainableErrorWithAttributes).toHaveProperty('data');
      expect(contexts.ChainableErrorWithAttributes.meta).toEqual('this is meta');
      expect(contexts.ChainableErrorWithAttributes.data).toEqual('this is data');
    });
  });

  describe('#critical', () => {
    it('should send the report to Sentry', () => {
      const expectedError = new Error('Fake error');

      reporter.critical(expectedError);

      expect(testkit.reports()).toHaveLength(1);
      expect(testkit.findReport(expectedError)).toBeDefined();
    });

    it('should send the report as critical level', () => {
      const expectedError = new Error('Fake error');

      reporter.critical(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.level).toEqual('fatal');
    });

    it('should not send user identification when not set', () => {
      const expectedError = new Error('Fake error');

      reporter.critical(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.user).toBeUndefined();
    });

    it('should send user identification when is set', () => {
      const expectedError = new Error('Fake error');

      reporter.setUser({
        id: '70ba6d83-fe3b-427e-8bc2-570647d4181c',
        email: 'john.doe@example.com'
      });

      reporter.critical(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.user).toBeDefined();
      expect(report.user.id).toEqual('70ba6d83-fe3b-427e-8bc2-570647d4181c');
      expect(report.user.email).toEqual('john.doe@example.com');
    });

    it('should not send user identification when is cleared', () => {
      const expectedError = new Error('Fake error');

      reporter.setUser({
        id: '70ba6d83-fe3b-427e-8bc2-570647d4181c',
        email: 'john.doe@example.com'
      });

      reporter.clearUser();
      reporter.critical(expectedError);

      const report = testkit.findReport(expectedError);

      expect(report.user).toBeUndefined();
    });

    it('should send extra context when error has attributes', () => {
      const expectedError = new ErrorWithAttributes('this is foo', 'this is bar');

      reporter.critical(expectedError);

      expect(testkit.reports()).toHaveLength(1);

      const { contexts } = testkit.reports()[0].originalReport;

      expect(contexts).toHaveProperty('ErrorWithAttributes');
      expect(contexts.ErrorWithAttributes).toHaveProperty('foo');
      expect(contexts.ErrorWithAttributes).toHaveProperty('bar');
      expect(contexts.ErrorWithAttributes.foo).toEqual('this is foo');
      expect(contexts.ErrorWithAttributes.bar).toEqual('this is bar');
    });

    it('should send extra context when error has attributes and is chained', () => {
      const chainedError = new ErrorWithAttributes('this is foo', 'this is bar');
      const expectedError = new ChainableErrorWithAttributes(
        chainedError,
        'this is meta',
        'this is data'
      );

      reporter.critical(expectedError);

      expect(testkit.reports()).toHaveLength(1);

      const { contexts } = testkit.reports()[0].originalReport;

      expect(contexts).toHaveProperty('ErrorWithAttributes');
      expect(contexts.ErrorWithAttributes).toHaveProperty('foo');
      expect(contexts.ErrorWithAttributes).toHaveProperty('bar');
      expect(contexts.ErrorWithAttributes.foo).toEqual('this is foo');
      expect(contexts.ErrorWithAttributes.bar).toEqual('this is bar');

      expect(contexts).toHaveProperty('ChainableErrorWithAttributes');
      expect(contexts.ChainableErrorWithAttributes).toHaveProperty('meta');
      expect(contexts.ChainableErrorWithAttributes).toHaveProperty('data');
      expect(contexts.ChainableErrorWithAttributes.meta).toEqual('this is meta');
      expect(contexts.ChainableErrorWithAttributes.data).toEqual('this is data');
    });
  });
});
