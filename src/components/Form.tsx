import React, { ReactNode } from 'react'
import Button from "./Button"
import Input from "./Input"
import Tabs from './Tabs'

interface FormProps {
  content : ReactNode
}

export default function LoginForm() {

  const forms = [
    <>
    <Input placeholder='James John' label='Email Address' type='email'/>
    <Input placeholder='**********' label='Password' type='password'/>
    <Button text="Login" variant='primary'/>
    </>
    ,
    <>
    <Input placeholder='James John' label='Email Address' type='email'/>
    <Input placeholder='**********' label='Password' type='password'/>
      <Input placeholder='**********' label='Confirm Password' type='password'/>
    <Button text="Sign up" variant='primary'/>
    </>
    ,
  ]
  return (
    <div>

        <h1 className='text-center text-2xl font-bold'>Welcome to Datagen</h1>
        <Tabs defaultActive={0} tabs={["Login", "Signup"]} tabContent={forms}/> 
          
    </div>
  )
}
