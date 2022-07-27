const config = require('./jest.config');
config.testRegex = 'unit\\.spec\\.[jt]sx?$';
console.log('🔥 RUNNING UNIT TESTS 🧪');
module.exports = config;
