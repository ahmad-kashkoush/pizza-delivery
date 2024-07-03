import { getUsername, updateName } from '@/features/user/userSlice';
import Button from '@/ui/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CreateUser() {
  const dispatch = useDispatch();
  const currentUsername = useSelector(getUsername);
  const [username, setUsername] = useState(currentUsername);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username));
    setUsername('');
  }
  if (currentUsername)
    return (
      <Button to={'/menu'} type="primary">
        Continue Ordering
      </Button>
    );
  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4">👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        onChange={(e) => setUsername(e.target.value)}
        className="rounded-2xl px-4 py-2 focus:outline-yellow-500"
      />

      {username !== '' && (
        <div className="mt-6">
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
