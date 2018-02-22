Package.describe({
  name: 'meteortesting:mocha',
  summary: 'Run Meteor package or app tests with Mocha',
  git: 'https://github.com/meteortesting/meteor-mocha.git',
  documentation: '../README.md',
  version: '0.5.0',
  testOnly: true,
});

Package.onUse(function onUse(api) {
  api.use([
    'practicalmeteor:mocha-core@1.0.0',
    'ecmascript@0.3.0',
    'lmieulet:meteor-coverage@1.1.4',
  ]);

  api.use([
    'http@1.1.1',
    'meteortesting:browser-tests@0.1.2',
  ], 'server');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});
