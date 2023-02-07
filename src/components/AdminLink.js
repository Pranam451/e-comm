import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminLink = () => {
  const [panelLink, setPanelLink] = useState();
  useEffect(() => {
    setPanelLink(window.location.pathname);
  }, []);

  return (
    <>
      {panelLink !== "/dashboard" && (
        <div className="text-center py-2 bg-gray-800 text-white ">
          Redirect To
          <Link to="/dashboard" className="underline mx-2">
            Admin Panel
          </Link>
        </div>
      )}
    </>
  );
};

export default AdminLink;
