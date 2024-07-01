import Button from '@/ui/Button';
import { useState } from 'react';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4">👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        className="rounded-2xl px-4 py-2 focus:outline-yellow-500"
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div className="mt-6">
          <Button type="primary">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
