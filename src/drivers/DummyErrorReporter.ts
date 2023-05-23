/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * DummyErrorReporter class.
 *
 * This error reporter is just for testing purposes and should not be used on local or production
 * code. All methods do nothing.
 *
 * @class DummyErrorReporter
 */
class DummyErrorReporter {
  warning(_error: Error) { }

  error(_error: Error) { }

  critical(_error: Error) { }

  setUser() { }

  clearUser() { }
}

export default DummyErrorReporter;
