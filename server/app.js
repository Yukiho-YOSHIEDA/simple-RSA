import express from 'express';

const app = express();

const studentNo = process.env.STUDENT_NO;

/**
 * 簡易的な学生番号チェッカー
 * @param {String} stuNo
 */
const checkStudentNo = (stuNo) => {
  // 学生番号ではなければ異常終了
  if (stuNo.length !== 11) {
    console.error('学生番号が正しくありません');
    process.exit(1);
  }
};

checkStudentNo(studentNo);

/**
 * 暗号化する関数
 * @returns 暗号化した配列
 */
const encrypt = () => {
  // 配列に変換
  const plainTexts = [];
  for (let i = 1; i < studentNo.length - 1; i += 2) {
    // 2文字分を切り出す
    plainTexts.push(Number(studentNo.substring(i, i + 2)));
  }

  // 暗号化
  const d = 23;
  const D = 143;
  const ciphers = [];
  plainTexts.forEach((plainText) => {
    let val = 1;
    for (let i = 1; i <= d; i += 1) {
      val = (val * plainText) % D;
    }
    ciphers.push(val);
  });
  console.log(`平文 : ${plainTexts.map((t) => (`00${t}`).slice(-2)).join(' ')}`);
  console.log(`暗号文 : ${ciphers.map((t) => (`00${t}`).slice(-2)).join(' ')}`);

  return ciphers;
};

app.get('/', (req, res) => {
  const data = {
    ciphers: encrypt(),
  };
  res.send(data);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
