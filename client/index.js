import axios from 'axios';

const uri = 'http://localhost:3000/';

const decrypt = (ciphers) => {
  // 11*13=143
  // d_a=10*12+1=121
  const d = 23;
  const a = 11;
  const b = 13;
  // eを求める
  let n = 1;
  while ((n * (a - 1) * (b - 1) + 1) % d !== 0) {
    n += 1;
  }
  const e = (n * (a - 1) * (b - 1) + 1) / d;
  console.log({
    e,
  });

  const D = 143;

  const plainTexts = [];
  ciphers.forEach((cipher) => {
    let val = 1;
    for (let i = 1; i <= e; i += 1) {
      val = (val * cipher) % D;
    }
    plainTexts.push(val);
  });

  return plainTexts;
};

axios.get(uri)
  .then((res) => {
    const { ciphers } = res.data;
    const plainTexts = decrypt(ciphers);
    console.log(`取得した暗号文 : ${ciphers.map((t) => (`00${t}`).slice(-2)).join(' ')}`);
    console.log(`暗号文を複合した結果 : ${plainTexts.map((t) => (`00${t}`).slice(-2)).join(' ')}`);
    console.log(`よって学生番号は 2${plainTexts.map((t) => (`00${t}`).slice(-2)).join('')}`);
  });

console.log('暗号文を取得しています');
