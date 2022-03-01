require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT

const fs = require('fs')
app.engine('hypatia', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#image#', '<img src =' + options.image + '>')
    return callback(null, rendered)
  })
})
app.set('views', './views')
app.set('view engine', 'hypatia')

app.get('/1', (req, res) => {
    res.render('template1', { title: 'Route 1', message: 'Hello there! Welcome to Route 1.', content: 'Route 1 is connected to template 1' })
})
  
app.get('/2', (req, res) => {
    res.render('template1', { title: 'Route 2', message: 'This is Route 2', content: 'Moooooooo' })
})
  
app.get('/3', (req, res) => {
    res.render('template2', { title: 'Route 3', message: 'Andddd, Route 3', content: 'For Dale!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRnEUBk--MmoOdVCmm-E-nVVQoxBVVoNinA&usqp=CAU' })
})

app.get('/4', (req, res) => {
    res.render('template1', { title: 'Route 4', message: 'Route 4', content: 'Get on the floor' })
})
  
app.get('/5', (req, res) => {
    res.render('template2', { title: 'Route 5', message: 'Route 5', content: 'Welcome to the Hive', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqO06t8BchT5_TfIj_tnr8t-JrqtuRwVgTcg&usqp=CAU'})
})
  
app.get('/6', (req, res) => {
    res.render('template2', { title: 'Route 6', message: 'Route 6', content: 'Add 60 to get your kicks',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvqHZ5oNmPHG7W-m3ioyW4bVPFtBemH8mKA&usqp=CAU' })
})

app.get('/7', (req, res) => {
    res.render('template2', { title: 'Route 7', message: 'Here is Route 7', content: 'Lucky you!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzwW3RQLW4-L61tKiA-d2-lumW3A3xEp3Gg&usqp=CAU' })
})

app.get('/8', (req, res) => {
    res.render('template1', { title: 'Route 8', message: 'This is Route 8', content: 'This class is great!' })
})
  
app.get('/9', (req, res) => {
    res.render('template2', { title: 'Route 9', message: 'Route 9', content: 'We must dine!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwalxZVnJUkv_1OcWvu_t6Y683v8N-5M2VKQ&usqp=CAU' })
})
  
app.get('/10', (req, res) => {
    res.render('template1', { title: 'Route 10', message: 'Route 10!', content: 'Begin again!' })
})

app.listen(port,() => {
    console.log('I am listening on port' , port);
}); 