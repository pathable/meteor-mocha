export default function setArgs() {
  const {
    CLIENT_TEST_REPORTER,
    MOCHA_GREP,
    MOCHA_INVERT,
    MOCHA_REPORTER,
    SERVER_TEST_REPORTER,
    TEST_BROWSER_DRIVER,
    TEST_CLIENT,
    TEST_PARALLEL,
    TEST_SERVER,
    TEST_WATCH,
    XUNIT_FILE,
    COVERAGE,
    COVERAGE_VERBOSE,
    COVERAGE_IN_COVERAGE,
    COVERAGE_OUT_COVERAGE,
    COVERAGE_OUT_LCOVONLY,
    COVERAGE_OUT_HTML,
    COVERAGE_OUT_JSON,
    COVERAGE_OUT_JSON_SUMMARY,
    COVERAGE_OUT_TEXT_SUMMARY,
    COVERAGE_OUT_REMAP,
  } = process.env;

  const runtimeArgs = {
    mochaOptions: {
      grep: MOCHA_GREP || false,
      invert: !!MOCHA_INVERT,
      reporter: MOCHA_REPORTER,
      serverReporter: SERVER_TEST_REPORTER,
      clientReporter: CLIENT_TEST_REPORTER,
      xUnitOutput: XUNIT_FILE,
    },
    runnerOptions: {
      runClient: (TEST_CLIENT !== 'false' && TEST_CLIENT !== '0'),
      runServer: (TEST_SERVER !== 'false' && TEST_SERVER !== '0'),
      browserDriver: TEST_BROWSER_DRIVER,
      testWatch: TEST_WATCH,
      runParallel: !!TEST_PARALLEL,
    },
  };

  if (COVERAGE === '1') {
    runtimeArgs.coverageOptions = {
      verbose: COVERAGE_VERBOSE === '1',
      in: {
        coverage: COVERAGE_IN_COVERAGE === 'true' || COVERAGE_IN_COVERAGE === '1',
      },
      out: {
        coverage: COVERAGE_OUT_COVERAGE === 'true' || COVERAGE_OUT_COVERAGE === '1',
        lcovonly: COVERAGE_OUT_LCOVONLY === 'true' || COVERAGE_OUT_LCOVONLY === '1',
        html: COVERAGE_OUT_HTML === 'true' || COVERAGE_OUT_HTML === '1',
        json: COVERAGE_OUT_JSON === 'true' || COVERAGE_OUT_JSON === '1',
        json_summary: COVERAGE_OUT_JSON_SUMMARY === 'true' || COVERAGE_OUT_JSON_SUMMARY === '1',
        text_summary: COVERAGE_OUT_TEXT_SUMMARY === 'true' || COVERAGE_OUT_TEXT_SUMMARY === '1',
        remap: COVERAGE_OUT_REMAP === 'true' || COVERAGE_OUT_REMAP === '1',
      },
    };
  }

  // Set the variables for the client to access as well.
  Meteor.settings.public = Meteor.settings.public || {};
  Meteor.settings.public.mochaRuntimeArgs = runtimeArgs;

  return runtimeArgs;
}
