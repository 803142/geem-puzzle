import { importAll } from '../../helper';

const images = importAll(require.context('../../assets/images/full/', false, /\.(png|jpe?g|svg)$/));

class Storage {
  constructor() {
    this.storage = {};
    this.appName = 'app';
    this.images = images;
  }

  toLocalStorage() {
    const myStorage = window.localStorage;
    myStorage.setItem(this.appName, JSON.stringify(this.storage));
  }

  getLocalStorage() {
    const myStorage = window.localStorage;
    const storage = myStorage[this.appName];
    if (storage) {
      this.storage = JSON.parse(storage);
      return true;
    }
    return false;
  }

  getStorage() {
    return this.storage;
  }

  setAppName(appName) {
    this.appName = `${appName}`;
  }
}

const storage = new Storage();

export default storage;
