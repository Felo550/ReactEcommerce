export const products = [
    {
      id: 1,
      name: 'Curso Bajo',
      description: 'Curso completo de bajo para principiantes y avanzados.',
      price: 150,
      stock: 100,  // Stock máximo permitido
      category: ["cuerdas"],
      image: 'https://res.cloudinary.com/dz5bk4fbm/image/upload/v1716329767/bajo_a3vi3w.png',  // Imagen de un bajo
    },
    {
      id: 2,
      name: 'Curso Batería',
      description: 'Aprende a tocar la batería desde cero con este curso.',
      price: 200,
      stock: 100,  // Stock máximo permitido
      category: ["percusion"],
      image: 'https://res.cloudinary.com/dz5bk4fbm/image/upload/v1716329767/bateria_wneax9.png',  // Imagen de una batería
    },
    {
      id: 3,
      name: 'Curso Piano',
      description: 'Curso de piano para todos los niveles, con lecciones prácticas.',
      price: 180,
      stock: 100,  // Stock máximo permitido
      category: ["cuerdas"],
      image: 'https://res.cloudinary.com/dz5bk4fbm/image/upload/v1716329767/piano_jm4csi.png',  // Imagen de un piano
    },
    {
      id: 4,
      name: 'Curso Voz',
      description: 'Mejora tu técnica vocal con este curso especializado.',
      price: 130,
      stock: 100,  // Stock máximo permitido
      category: ["humana"],
      image: 'https://res.cloudinary.com/dz5bk4fbm/image/upload/v1716329767/canto_r7wzhl.png',  // Imagen de una persona cantando
    },
  ];
  

  export const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve (products)

            },2000)

        })
  }
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredProducts = products.filter((elem) => {
          let isMatch = false;
          elem.category.find((elem) => {
            if (elem === categoryId) {
              isMatch = true;
            }
          });
          return isMatch; // true o false
        });
        resolve(filteredProducts);
        // reject('No se pudo traer los productos')
      }, 1000);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find((elem) => elem.id === parseInt(productId));
        resolve(product);
        // reject('No se pudo traer los productos')
      }, 1000);
    });
  };