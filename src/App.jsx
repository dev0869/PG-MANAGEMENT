
import Layout from "./layout/Layout";
import Admin from "./components/admin/Admin";
import { Routes, Route } from "react-router-dom";
import Front from "./components/Front/Front";
import Login from "./components/auth/Login";
import Example from "./components/modal/Example";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDetails } from "./features/bookingSlice";
import ForgotPasswordPage from "./components/auth/ForgotPasswordPage";
import ResetPassword from "./components/auth/ResetPassword";
function App() {
  const dispatch = useDispatch();
  const data = useSelector((st) => st.booking.user);
  console.log(data);

  useEffect(() => {
  dispatch(fetchDetails());
  }, [])
  
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/example" element={<Example />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </Layout>
  );
}

export default App;
