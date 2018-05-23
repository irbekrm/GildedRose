({ updateState } = require('./updateHelper'));

module.exports = {
  brieUpdate: item => {
    updateState(item,1);
  }
}
