import PropTypes from 'prop-types';

const ItemListContainer = ({ category }) => {
  // Array de cursos
  const courses = [
    { id: 1, title: "Curso de Batería", category: "Batería", description: "Aprende a tocar la batería desde cero.", price: 49.99 },
    { id: 2, title: "Curso de Guitarra", category: "Música", description: "Descubre los secretos de la guitarra eléctrica.", price: 59.99 },
    { id: 3, title: "Curso de Bajo", category: "Bajo", description: "Domina el bajo con técnicas avanzadas.", price: 39.99 },
    { id: 4, title: "Curso de Canto", category: "Voz", description: "Mejora tu técnica vocal con ejercicios prácticos.", price: 69.99 }
  ];

  // Filtrar cursos por categoría
  const filteredCourses = courses.filter(course => course.category === category);

  return (
    <div className="container">
      <h2>Bienvenido a nuestra tienda en línea</h2>
      <h3>{category}</h3>
      <div className="row">
        {filteredCourses.map(course => (
          <div key={course.id} className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <p className="card-text">${course.price}</p>
                <button className="btn btn-primary">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Definición de PropTypes
ItemListContainer.propTypes = {
  category: PropTypes.string.isRequired // Asegura que category sea un string y que sea requerido
};

export default ItemListContainer;
