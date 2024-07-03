import MenuItem from '@/features/menu/MenuItem';
import { getMenu } from '@/services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';

function Menu() {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((item) => (
        <MenuItem pizza={item} key={item.id} />
      ))}
    </ul>
  );
}
// 1. Create loader
// 2. Provide loader: Connect loader to route
// 3. provide data to page
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
