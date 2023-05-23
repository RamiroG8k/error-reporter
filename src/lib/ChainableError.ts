class ChainableError extends Error {
  constructor(cause: Error, ...args: Array<undefined> | any) {
    if (cause instanceof Error) {
      super(...args);
      this.cause = cause;
    } else {
      super(cause, ...args);
    }

    this.name = this.constructor.name;
  }
}

export default ChainableError;
