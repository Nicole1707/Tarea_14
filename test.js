import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5, // usuarios virtuales
  duration: '10s', // duración de la prueba
};

export default function () {
  // 1. Obtener todos los productos
  let res = http.get('https://fakestoreapi.com/products');
  check(res, {
    'status 200 - lista de productos': (r) => r.status === 200,
    'respuesta contiene productos': (r) => JSON.parse(r.body).length > 0,
  });

  // 2. Crear un nuevo producto
  let payload = JSON.stringify({
    title: "Producto de prueba",
    price: 29.99,
    description: "Este es un producto generado por k6",
    image: "https://i.pravatar.cc",
    category: "electronics"
  });

  let headers = { 'Content-Type': 'application/json' };
  let postRes = http.post('https://fakestoreapi.com/products', payload, { headers });
  check(postRes, {
    'status 200 - producto creado': (r) => r.status === 200,
    'tiene ID en la respuesta': (r) => !!JSON.parse(r.body).id,
  });

  let newProduct = JSON.parse(postRes.body);
  let newProductId = newProduct.id;

  // 3. Obtener el producto creado
  let getProduct = http.get(`https://fakestoreapi.com/products/${newProductId}`);
  check(getProduct, {
    'status 200 - producto recuperado': (r) => r.status === 200,
    'título coincide': (r) => JSON.parse(r.body).title === "Producto de prueba",
  });

  sleep(1);
}
