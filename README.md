# Simple RSA
2019年度 ネットワークセキュリティ 第1回レポートのRSA暗号実装

## 概要
簡単なRSA暗号を実装したリポジトリです。
サーバから得た暗号文をクライアントで復号できます。

## 必須環境
node.js v12.13.1

## 実行方法
### ソースコードビルド(共通)
各ディレクトリに移動してから以下のコマンドを実行してください
```bash
$ npm install
$ npm run build
```
### サーバサイド
```bash
$ STUDENT_NO=<Student Number> node dist/app.js
```

### クライアントサイド
```bash
$ npm run run
```
または
```bash
$ node dist/index.js
```

## ディレクトリ構造
```
├── README.md
├── client
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
└── server
    ├── app.js
    ├── package-lock.json
    └── package.json
```

## ライセンス
MIT