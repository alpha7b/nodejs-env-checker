const { checkVersions, checkNodeEnv } = require('../src/envChecker');
const execSync = require('child_process').execSync;

// Mock execSync to return specific versions for testing
jest.mock('child_process', () => ({
  execSync: jest.fn()
}));

// Setup console mocks
beforeAll(() => {
  global.console = {
    log: jest.fn(),
    warn: jest.fn(),
    error: console.error // Keep the original console.error (optional)
  };
});

describe('envChecker Tests', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    console.log.mockClear();
    console.warn.mockClear();
    execSync.mockClear();
  });

  it('should print versions correctly', () => {
    // Mock implementation to return specific version
    execSync.mockImplementation(() => '6.14.4');

    checkVersions('v10.0.0', '6.0.0');

    // Expect console.log to have been called with specific messages
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Current Node.js version:'));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Current npm version: 6.14.4'));
    expect(console.log).toHaveBeenCalledWith('Node.js version check passed');
    expect(console.log).toHaveBeenCalledWith('npm version check passed');
  });

  it('should warn if NODE_ENV is not set', () => {
    // Mock process.env.NODE_ENV to be undefined
    const originalNodeEnv = process.env.NODE_ENV;
    delete process.env.NODE_ENV;

    checkNodeEnv();

    // Expect console.warn to have been called with the specific message
    expect(console.warn).toHaveBeenCalledWith('Warning: NODE_ENV is not set. It is recommended to set this variable to "development", "production", or "test".');

    // Restore process.env.NODE_ENV after test
    process.env.NODE_ENV = originalNodeEnv;
  });
});
