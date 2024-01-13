require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 4000
const githubData={
  "login": "saptadipa77",
  "id": 119239540,
  "node_id": "U_kgDOBxtzdA",
  "avatar_url": "https://avatars.githubusercontent.com/u/119239540?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/saptadipa77",
  "html_url": "https://github.com/saptadipa77",
  "followers_url": "https://api.github.com/users/saptadipa77/followers",
  "following_url": "https://api.github.com/users/saptadipa77/following{/other_user}",
  "gists_url": "https://api.github.com/users/saptadipa77/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/saptadipa77/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/saptadipa77/subscriptions",
  "organizations_url": "https://api.github.com/users/saptadipa77/orgs",
  "repos_url": "https://api.github.com/users/saptadipa77/repos",
  "events_url": "https://api.github.com/users/saptadipa77/events{/privacy}",
  "received_events_url": "https://api.github.com/users/saptadipa77/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 19,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-11-27T17:49:32Z",
  "updated_at": "2024-01-13T07:47:51Z"
}
app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>')
})
app.get('/youtube',(req,res)=>{
  res.send("<h2>chai</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})