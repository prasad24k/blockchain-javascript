//genesis Block
const MINE_RATE = 1000; //1S
const INITIAL_DIFFICULTY = 2;
const GENESIS_DATA = {
  timestamp: 1,
  prevHash: 0x00,
  hash: "0x123",
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  Data: [],
};
module.exports = { GENESIS_DATA, MINE_RATE };
