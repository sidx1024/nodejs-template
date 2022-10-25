#! /usr/bin/env node

// Source: https://github.com/NickColley/check-nvmrc/blob/master/bin/check-nvmrc.js

'use strict';
import fs from 'node:fs';

assertCorrectNodeVersion();

function assertCorrectNodeVersion() {
  fs.readFile(new URL('../.nvmrc', import.meta.url), 'utf8', function (error, data) {
    if (error) throw error;
    const expectedVersion = data.trim().replace('v', '');
    const currentVersion = process.version.replace('v', '');

    const versionMatchesExactly = expectedVersion === currentVersion;
    const versionMatchesMajor = expectedVersion.split('.')[0] === currentVersion.split('.')[0];
    if (versionMatchesExactly) {
      process.exit();
    }

    const nvmInstallText =
      'To do this you can install nvm (https://github.com/nvm-sh/nvm) then run `nvm install`.';

    if (versionMatchesMajor) {
      console.log(
        '' +
          'Warning: You are using Node.js version ' +
          currentVersion +
          ' which we do not use. ' +
          '\n\n' +
          'You may encounter issues, consider installing Node.js version ' +
          expectedVersion +
          '.' +
          '\n\n' +
          nvmInstallText +
          '',
      );
      process.exit();
    }

    console.log(
      '' +
        'You are using Node.js version ' +
        currentVersion +
        ' which we do not support. ' +
        '\n\n' +
        'Please install Node.js version ' +
        expectedVersion +
        ' and try again.' +
        '\n\n' +
        nvmInstallText +
        '',
    );
    process.exit(1); // exit with a failure mode
  });
}
