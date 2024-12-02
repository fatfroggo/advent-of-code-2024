module.exports = [
  [7, 6, 4, 2, 1], //safe
  [1, 2, 7, 8, 9], //unsafe
  [9, 7, 6, 2, 1], //unsafe
  [1, 3, 2, 4, 5], //safe w/ removal of 3 OR 2
  [8, 6, 4, 4, 1], //safe w/ removal of 4 OR 4
  [1, 3, 6, 7, 9], //safe w/ removing 7
  [1, 3, 2, 6, 8], //safe w/ remove 2nd - INC
  [8, 6, 7, 3, 1], //safe w/ remove 2nd - DEC
  [5, 7, 3, 2, 1], //safe w/ removing 7 - INC -> DEC
  [7, 5, 9, 10, 11], //safe w/ removing 5 - DEC => INC
  [1, 6, 5, 3, 2], //remove first
];
