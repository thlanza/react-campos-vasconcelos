import { Link } from "react-router-dom";

function NotFoundPage() {

  return (
    <div>
      <p>404 - Não encontrado</p>
      <li>
        <Link to="/">Home</Link>
      </li>
    </div>
  );
}

export default NotFoundPage;