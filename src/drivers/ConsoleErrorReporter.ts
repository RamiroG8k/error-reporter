/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * ConsoleErrorReporter class
 *
 * Logs error messages as console warnings or errors.
 *
 * @class ConsoleErrorReporter
 */
class ConsoleErrorReporter {
  warning(error: Error) {
    this.printAsWarning(error);
  }

  error(error: Error) {
    this.printAsError(error);
  }

  critical(error: Error) {
    this.printAsError(error);
  }

  setUser() { }

  clearUser() { }

  private printAsWarning(error: Error) {
    console.warn('WARNING', error);

    if (error.cause && error.cause instanceof Error) {
      this.printChainedWarnings(error.cause);
    }
  }

  private printChainedWarnings(error: Error) {
    console.warn('Caused by', error);

    if (error.cause && error.cause instanceof Error) {
      this.printChainedWarnings(error.cause);
    }
  }

  private printAsError(error: Error) {
    console.error('ERROR', error);

    if (error.cause && error.cause instanceof Error) {
      this.printChainedErrors(error.cause);
    }
  }

  private printChainedErrors(error: Error) {
    console.error('Caused by', error);

    if (error.cause && error.cause instanceof Error) {
      this.printChainedErrors(error.cause);
    }
  }
}

export default ConsoleErrorReporter;
