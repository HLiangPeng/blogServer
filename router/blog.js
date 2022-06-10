const express = require('express')
const router = express.Router()
const { Article } = require('../db')
const {setRedis,getRedis} = require('../redis')
const jwt = require('jsonwebtoken')

// 获取所有文章
// router.post('/api/blog/article', (req, res) => {
//   getRedis(req.headers.token).then(name=>{
//     db.User.find({name: name}, (err, docs) => {
//       if (err) {
//         console.error(err)
//         return
//       }
//       db.Article.find({userId: docs[0]._id}, (err, docs) => {
//         if (err) {
//           console.error(err)
//           return
//         }
//         let data = []
//         docs.forEach((item)=>{
//           console.log(item)
//           data.push({
//             title: item.title,
//             content: item.content,
//             summary: item.summary,
//             date: item.date
//           })
//         })
//         res.json({ code: 200, data })
//       })
//     })
//   })
// })

// 获取文章
router.get('/api/blog/article', (req, res) => {
  Article.find((err, data) => {
    if (err) {
      res.status(500).send()
      return
    }
    res.json({ code: 200, data })
  })
})

module.exports = router