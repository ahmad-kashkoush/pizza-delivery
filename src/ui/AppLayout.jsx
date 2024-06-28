import CartOverview from "@/features/cart/CartOverview";
import SearchOrders from "@/features/order/SearchOrders";
import { Header, Loader } from "@/ui";

import { Link, Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        {/* <h1>app content</h1> */}
      <SearchOrders />
        <Outlet />
        <Link to="/menu">Menu</Link>
      </main>
      <CartOverview />
    </div>
  );
}
export default AppLayout;
