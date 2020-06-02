import React, { useState } from 'react'
import { Button, Checkbox, Input, Typography } from 'antd'

import './App.scss'

const { Title } = Typography

export const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  
  const onSignin = () => {
    console.log(email, password, remember)
  }

  return (
    <div className="App">
      <div className="form">
        <Title className="form__title">Sign in</Title>

        <div className="form-line">
          <Input 
            className="form-line__input"
            placeholder="input email" 
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Input.Password 
            className="form-line__input"
            placeholder="input password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        
        <div className="form-line">
          <div className="form-line__checkbox">
            <Checkbox 
              onChange={(e) => setRemember(e.target.checked)}
            >
              Remember me
            </Checkbox>
          </div>

          <Button 
            type="primary"
            onClick={onSignin}
          >
            Sign in
          </Button>
        </div>
      </div>

    </div>
  )
}
