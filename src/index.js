import { sum } from '#utils/math.js';

function main() {
  console.log('3 + 7 =', sum(3, 7));
}

process.on('unhandledRejection', (e) => {
  console.error('Unhandled rejection:', e);
});

process.on('uncaughtException', (e) => {
  console.error('Uncaught exception:', e);
});

main();
