import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((store) => store.userReducer.username);
  if (!username) return <></>;
  return <p className="hidden text-sm font-semibold md:block">{username}</p>;
}
export default Username;
