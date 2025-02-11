import { useState } from 'react'
import { useApiKey } from '../hooks/useApiKey'
import { useNavigate } from 'react-router';

const PageLogin = () => {
  const navigate = useNavigate();

  const { apiKey, setApiKey } = useApiKey();
  const [key, setKey] = useState<string>(apiKey);

  const onSubmit = () => {
    setApiKey(key);

    navigate('/app');
  };

  return (
    <>
      <h1>Login</h1>
      <p>Logged in as {apiKey}</p>
      <input value={key} onChange={(event) => setKey(event.target.value)} />
      <button onClick={() => onSubmit()}>
        Login
      </button>
      <p className="read-the-docs">
        Get your API Key <a target='_blank' href='https://www.torn.com/preferences.php#tab=api'>here</a>
      </p>
    </>
  )
}

export default PageLogin