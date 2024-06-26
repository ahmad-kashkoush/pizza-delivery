import { getMenu } from "@/services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

function Menu() {
  const data=useLoaderData();
  console.log(data);
  return <h1>Menu</h1>;
}
// 1. Create loader
// 2. Provide loader: Connect loader to route
// 3. provide data to page
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
