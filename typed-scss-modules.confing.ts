export const config = {
  exportType: 'default',
  nameFormat: 'none',
  implementation: 'sass',
  additionalData: `@use "./src/styles/variables.scss" as *;`,
  ignore: ['**/variables.scss', '**/variables/**'],
};
