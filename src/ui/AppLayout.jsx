import CartOverview from "@/features/cart/CartOverview";
import Header from "@/ui/Header";
import Loader from "@/ui/Loader";

import { Link, Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <h1>app content</h1>
        <Outlet />
        <Link to="/menu">Menu</Link>
      </main>
      <CartOverview />
    </div>
  );
}
export default AppLayout;
