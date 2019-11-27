const os = require('os');

exports.getIPAddress = () => {
  const interfaces = os.networkInterfaces();
  for (let key in interfaces) {
    let iface = interfaces[key];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1') {
        return alias.address;
      }
    }
  }
};
