class UnknownErrorReporterDriver extends Error {
  constructor(driver: string) {
    super(`Could not create error reporter due unknown driver '${driver}'`);

    this.name = 'UnknownErrorReporterDriver';
  }
}

export default UnknownErrorReporterDriver;
