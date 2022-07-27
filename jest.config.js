module.exports = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	moduleNameMapper: {
		'^@react-webpack-boilerplate/(.*)$': '<rootDir>/src/$1',
	},
};
