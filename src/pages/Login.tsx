import { useState } from 'react'

function PageLogin() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Login</h1>
      <div className="card">
        <input />
        <button onClick={() => setCount((count) => count + 1)}>
          Login
        </button>
      </div>
      <p className="read-the-docs">
        Get your API Key <a target='_blank' href='https://www.torn.com/preferences.php#tab=api'>here</a>
      </p>
    </>
  )
}

export default PageLogin