const crypto = require('crypto');

function genRelationKay(keyLength) {
   let key_gen = crypto
      .randomUUID()
      .replace(/-/g, '')
      .slice(0, keyLength || 6);
   return key_gen;
}

module.exports={genRelationKay}