module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ["**/tests/**/*.ts?(x)"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
    '^react-router$': '<rootDir>/node_modules/react-router'
  }
};