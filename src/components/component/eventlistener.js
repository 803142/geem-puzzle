class EventEmitter {
  constructor() {
    this.events = {};
  }

  addEventList(event, callback) {
    if (event === undefined || callback === undefined) {
      return false;
    }
    if (this.events[event]) {
      this.events[event] = [...this.events[event], ...callback];
    } else {
      this.events[event] = [...callback];
    }

    return false;
  }

  dispatchEvent(event) {
    if (event === undefined) {
      return false;
    }
    if (this.events[event]) {
      this.events[event].forEach(e => {
        e();
      });
    }
    return false;
  }

  getEvents() {
    return this.events;
  }
}

const events = new EventEmitter();

export default events;
