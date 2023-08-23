//requerimiento principal

async function fetchAndDisplayCategories() {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
//hago el intento de despliegue  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Error al obtener las categorías');
      }
  
      const data = await response.json();
  
      const categories = data.categories;

      const selectElement = document.getElementById('categorias');

      console.log('Categorías de recetas:');

//requerimiento opcional
      categories.forEach((category) => {
        console.log(category.strCategory);
      });
      categories.sort((a, b) => a.strCategory.localeCompare(b.strCategory));

        console.log('Categorías de recetas ordenadas por "strCategory":');
        categories.forEach((category) => {
        console.log(category.strCategory);
      });

//muestro en el html
    categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category.strCategory;
        option.textContent = category.strCategory;
        selectElement.appendChild(option);
      });
 
//atrapo el error      
    } catch (error) {
      console.error(error);
    }
  }
  
  //invoco la funcion
  fetchAndDisplayCategories();