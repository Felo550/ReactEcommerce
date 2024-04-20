import { Link } from 'react-router-dom'; // Importar Link para crear enlaces

const NavBar = () => {
  return (
    <nav>
      <h3>ECommerce</h3>
      <div>
        {/* Enlaces a diferentes páginas */}
        <Link to="/cursos/canto">Curso Canto</Link>
        <Link to="/cursos/bajo">Curso Bajo</Link>
        <Link to="/cursos/bateria">Curso Batería</Link>
      </div>
    </nav>
  );
};

export default NavBar;
