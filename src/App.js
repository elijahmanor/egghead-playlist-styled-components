import React, { useState } from 'react'
import faker from 'faker'
import Profile from './Profile'
import './styles.css'

const user = faker.helpers.userCard()
user.aboutMe = faker.hacker.phrase()
user.avatar = faker.image.avatar()
user.backgroundUrl = `http://placeimg.com/640/480/tech?t=${Date.now()}`

export default function App() {
  return (
    <div className="App">
      <Profile user={user} />
    </div>
  )
}
