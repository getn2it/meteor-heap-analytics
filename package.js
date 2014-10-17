Package.describe({
  name: 'hexsprite:heap-analytics',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('undefined');
  api.addFiles('hexsprite:heap-analytics.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('hexsprite:heap-analytics');
  api.addFiles('hexsprite:heap-analytics-tests.js');
});
