mongodb CRUD
# node -v
v16.4.0
# npm install mongodb

$ npm list mongodb
mongNode@ /root/projects/nde/CRUD/mongNode
└── mongodb@3.6.9

Connect Atlas:
mongodb+srv://<username>:<password>@cluster-yu.ixch7.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

create file demo.js

[理解 exports的用法，在ab.js=>bb.js 这两个文件中
#####   bb.js  #####
const abc = require('./ab.js');
abc.hei ----用ab.js文件中的hei function()
abc.tei2 ====同上一个概念
abc.test1  ====异步function async 
abc.client =====引用变量
######  ab.js #####
module.exports.hei = hei;
module.exports.tei2 = tei2;
module.exports.test1 = test1;
module.exports.client = client;

 ]