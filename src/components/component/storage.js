class Storage {
  constructor() {
    this.storage = {};
    this.appName = 'app';
  }

  toLocalStorage() {
    const myStorage = window.localStorage;
    myStorage.setItem(this.appName, JSON.stringify(this.storage));
  }

  getLocalStorage() {
    const myStorage = window.localStorage;
    const { momentum } = myStorage;
    if (momentum) this.storage = JSON.parse(momentum);
  }

  getStorage() {
    return this.storage;
  }

  setAppName(appName) {
    this.appName = `${this.appName}${appName}`;
  }
}

const storage = new Storage();

export default storage;
