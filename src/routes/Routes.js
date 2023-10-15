import React from "react";
import {
  BrowserRouter,
  Route,
  Routes as ReactDomRoutes,
  Navigate,
} from "react-router-dom";
import Home from "../components/Home";
import PagePreset from "../components/PagePreset";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound";
import Profile from "../components/Profile";
const Routes = () => {
  return (
    <BrowserRouter>
      <PagePreset>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="*"
            element={
              <>
                <NotFound />
              </>
            }
          />
        </ReactDomRoutes>
      </PagePreset>
    </BrowserRouter>
  );
};

export default Routes;
