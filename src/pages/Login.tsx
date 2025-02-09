import { useState } from 'react'
import { useUser } from '../hooks/useUser'
import { useNavigate } from 'react-router';

const PageLogin = () => {
  const navigate = useNavigate();

  const { user, setUser } = useUser();
  const [key, setKey] = useState<string | undefined>(undefined);

  const onSubmit = () => {
    if (key === undefined) {
      alert('no key');
      return;
    }

    setUser(key);

    navigate('/basic');
  };

  return (
    <>
      <h1>Login</h1>
      <p>Logged in as {user}</p>
      <input onChange={(event) => setKey(event.target.value)} />
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