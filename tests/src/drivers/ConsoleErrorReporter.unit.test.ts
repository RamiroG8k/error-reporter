import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi
} from 'vitest';

import ChainableError from '../../../src/lib';
import { ConsoleErrorReporter } from '../../../src/drivers';

describe('ConsoleErrorReporter', () => {
  let reporter;

  beforeEach(() => {
    reporter = new ConsoleErrorReporter();
  });

  describe('#warning', () => {
    let warn;

    beforeEach(() => {
      warn = vi.spyOn(console, 'warn');
    });

    afterEach(() => {
      warn.mockReset();
    });

    it('should print the error as warning', () => {
      reporter.warning(new Error('Fake error'));

      expect(warn).toHaveBeenCalledTimes(1);
    });

    it('should show warning text on console', () => {
      reporter.warning(new Error('Fake error'));

      expect(warn.mock.lastCall[0]).toEqual('WARNING');
    });

    it('should show the error', () => {
      const expectedError = new Error('Fake error');

      reporter.warning(expectedError);

      expect(warn.mock.lastCall[1]).toEqual(expectedError);
    });

    it('should show chained errors as caused by', () => {
      const chainedError = new Error('Original error');
      const expectedError = new ChainableError(chainedError, 'Fake error');

      reporter.warning(expectedError);

      expect(warn).toHaveBeenCalledTimes(2);

      expect(warn.mock.calls[0][0]).toEqual('WARNING');
      expect(warn.mock.calls[1][0]).toEqual('Caused by');
    });

    it('should show chained errors', () => {
      const chainedError = new Error('Original error');
      const expectedError = new ChainableError(chainedError, 'Fake error');

      reporter.warning(expectedError);

      expect(warn).toHaveBeenCalledTimes(2);

      expect(warn.mock.calls[0][1]).toEqual(expectedError);
      expect(warn.mock.calls[1][1]).toEqual(chainedError);
    });
  });

  describe('#error', () => {
    let error;

    beforeEach(() => {
      error = vi.spyOn(console, 'error');
    });

    afterEach(() => {
      error.mockReset();
    });

    it('should print the error as error', () => {
      reporter.error(new Error('Fake error'));

      expect(error).toHaveBeenCalledTimes(1);
    });

    it('should show error text on console', () => {
      reporter.error(new Error('Fake error'));

      expect(error.mock.lastCall[0]).toEqual('ERROR');
    });

    it('should show the error', () => {
      const expectedError = new Error('Fake error');

      reporter.error(expectedError);

      expect(error.mock.lastCall[1]).toEqual(expectedError);
    });

    it('should show chained errors as caused by', () => {
      const chainedError = new Error('Original error');
      const expectedError = new ChainableError(chainedError, 'Fake error');

      reporter.error(expectedError);

      expect(error).toHaveBeenCalledTimes(2);

      expect(error.mock.calls[0][0]).toEqual('ERROR');
      expect(error.mock.calls[1][0]).toEqual('Caused by');
    });

    it('should show chained errors', () => {
      const chainedError = new Error('Original error');
      const expectedError = new ChainableError(chainedError, 'Fake error');

      reporter.error(expectedError);

      expect(error).toHaveBeenCalledTimes(2);

      expect(error.mock.calls[0][1]).toEqual(expectedError);
      expect(error.mock.calls[1][1]).toEqual(chainedError);
    });
  });

  describe('#critical', () => {
    let error;

    beforeEach(() => {
      error = vi.spyOn(console, 'error');
    });

    afterEach(() => {
      error.mockReset();
    });

    it('should print the error as error', () => {
      reporter.critical(new Error('Fake error'));

      expect(error).toHaveBeenCalledTimes(1);
    });

    it('should show error text on console', () => {
      reporter.critical(new Error('Fake error'));

      expect(error.mock.lastCall[0]).toEqual('ERROR');
    });

    it('should show the error', () => {
      const expectedError = new Error('Fake error');

      reporter.critical(expectedError);

      expect(error.mock.lastCall[1]).toEqual(expectedError);
    });

    it('should show chained errors as caused by', () => {
      const chainedError = new Error('Original error');
      const expectedError = new ChainableError(chainedError, 'Fake error');

      reporter.critical(expectedError);

      expect(error).toHaveBeenCalledTimes(2);

      expect(error.mock.calls[0][0]).toEqual('ERROR');
      expect(error.mock.calls[1][0]).toEqual('Caused by');
    });

    it('should show chained errors', () => {
      const chainedError = new Error('Original error');
      const expectedError = new ChainableError(chainedError, 'Fake error');

      reporter.critical(expectedError);

      expect(error).toHaveBeenCalledTimes(2);

      expect(error.mock.calls[0][1]).toEqual(expectedError);
      expect(error.mock.calls[1][1]).toEqual(chainedError);
    });
  });
});
