const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.app.json',
      },
    ],
  },
};

// /** @type {import("jest").Config} **/
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   globals: {
//     'ts-jest': {
//       tsconfig: './tsconfig.app.json',
//     },
//   },
// };