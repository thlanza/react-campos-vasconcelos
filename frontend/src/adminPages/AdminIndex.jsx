import { Link } from "react-router-dom";
import AdminLogged from "./AdminLogged";
import AdminNotLogged from "./AdminNotLogged";

function Admin() {
  const isLogged = false;

  return (
    <div>
      {isLogged ? <AdminLogged /> : <AdminNotLogged />}
    </div>
  );
}

export default Admin;