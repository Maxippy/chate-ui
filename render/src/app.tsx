import { App } from "electron";
import React from "react";
import { useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('')
  return <div>
    <h1>Hello Electron</h1>
    <h3>{message}</h3>
  </div>;
}

