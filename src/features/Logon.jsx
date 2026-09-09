import React from 'react'
import {useState} from 'react'

export default function Logon({onSetEmail=()=>{}, onSetToken=()=>{}}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authError, setAuthError] = useState('');
    const [isLoggingOn, setIsLoggingOn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsLoggingOn(true)
        try {
          const response = await fetch("/api/users/logon", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email, password }),
          });
          const data = await response.json();
          if (response.status === 200 && data.name && data.csrfToken) {
            onSetEmail(data.name);
            onSetToken(data.csrfToken);
          } else {
            setAuthError(`Authentication failed: ${data?.message}`);
          }
        } catch (error) {
          setAuthError(`Error: ${error.name} | ${error.message}`);
        } finally {
          setIsLoggingOn(false);
        }
    }

  return (
    <></>
  )
}
