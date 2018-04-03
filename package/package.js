Package.describe({
  name: 'meteortesting:mocha',
  summary: 'Run Meteor package or app tests with Mocha',
  git: 'https://github.com/meteortesting/meteor-mocha.git',
  documentation: '../README.md',
  version: '0.5.1',
  testOnly: true,
});

Package.onUse(function onUse(api) {
  api.use([
    'practicalmeteor:mocha-core@1.0.0',
    'ecmascript@0.3.0',
  ]);

  api.use([
    'browser-policy@1.0.0',
    'meteortesting:browser-tests@0.2.0'
  ], 'server');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});
