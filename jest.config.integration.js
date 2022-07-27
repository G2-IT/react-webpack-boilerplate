const config = require('./jest.config');
config.testRegex = 'unit\\.spec\\.[jt]sx?$';
console.log('🔥 RUNNING INTEGRATION TESTS 🧪');
module.exports = config;
