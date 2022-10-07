const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],

	moduleDirectories: ['src', 'node_modules'],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>/src/',
	}),

	collectCoverage: false,
	collectCoverageFrom: ['./src/**'],
	coverageThreshold: {
		global: {
			lines: 90,
		},
	},
};
