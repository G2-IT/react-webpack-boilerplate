const config = require('./jest.config');
config.testRegex = 'int\\.spec\\.[jt]sx?$';
console.log('🔥 RUNNING INTEGRATION TESTS 🧪');
module.exports = config;
