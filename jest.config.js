module.exports = {
	moduleDirectories: ['src', 'node_modules'],
	moduleNameMapper: {
		'^/@(.*)$': '<rootDir>/src/$1',
	},

	collectCoverage: true,
	collectCoverageFrom: ['./src/**'],
	coverageThreshold: {
		global: {
			lines: 90,
		},
	},
};
