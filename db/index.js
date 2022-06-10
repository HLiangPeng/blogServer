const mongoose = require('mongoose')

mongoose.connect('mongodb://120.48.52.210:27017/blog', (err) => {
  if (err) {
    console.log("连接失败");
    return
  }
  console.log('数据库链接成功！')
})

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  date: String
},{versionKey: false})

// 创建一个Schema的实例
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  summary: String,
  date: String
},{versionKey: false})

const Models = {
  // Mongoose 会自动找到名称是 model 名字 复数 形式的 collection 。（比如Article实际上就是数据库中的articles集合）
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema)
}

module.exports = Models
