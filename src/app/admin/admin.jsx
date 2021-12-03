import React from "react";
import {
  AppFooter,
  AppSidebar,
  AppHeader,
  AppContent,
} from "./components/index";
import { ToastProvider } from "../../contexts/ToastProvider";
const admin = () => {
  return (
    <ToastProvider>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3 ">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    </ToastProvider>
  );
};

export default admin;
