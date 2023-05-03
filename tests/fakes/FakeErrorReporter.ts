import { User } from '../../src/types';

class FakeErrorReporter {
  private readonly _reports: Array<any>;
  private _user: User | null;

  constructor() {
    this._reports = [];
  }

  warning(error: Error) {
    this._reports.push({ warning: error });
  }

  error(error: Error) {
    this._reports.push({ error: error });
  }

  critical(error: Error) {
    this._reports.push({ critical: error });
  }

  setUser(user: User) {
    this._user = user;
  }

  clearUser() {
    this._user = null;
  }

  getUser() {
    return this._user;
  }

  countReports() {
    return this._reports.length;
  }

  countWarningReports() {
    return this.getWarnings().length;
  }

  countErrorReports() {
    return this.getErrors().length;
  }

  countCriticalReports() {
    return this.getCriticals().length;
  }

  getWarnings() {
    return this._reports
      .filter(item => Object.getOwnPropertyNames(item).includes('warning'))
      .map(item => item.warning);
  }

  getErrors() {
    return this._reports
      .filter(item => Object.getOwnPropertyNames(item).includes('error'))
      .map(item => item.error);
  }

  getCriticals() {
    return this._reports
      .filter(item => Object.getOwnPropertyNames(item).includes('critical'))
      .map(item => item.critical);
  }
}

export default FakeErrorReporter;
