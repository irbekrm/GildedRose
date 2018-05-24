({ updateState } = require('./updateHelper'));

module.exports = {
  conjuredUpdate: item => {
    updateState(item, -2);
  }
}
