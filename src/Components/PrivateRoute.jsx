import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Cart from "../Cart/Cart"
function PrivateRoute() {
  const { state } = useContext(AppContext);
  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }
   else {
    return <Cart />;
  }
}

export default PrivateRoute;