import { useState, useEffect } from "react";

const useFetchUsers = (url) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [url]);

  return { users: users };
};

export default useFetchUsers;

// Pasos para crear y usar este custom hook
// 1. Crear una constante (en este caso, "useFetchUsers") y hacer una exportación por default
// 2. Importar el useState y el useEffect: ambos vamos a utilizarlos
// 3. Crear un estado que comience siendo un array vacío (en este caso para los usuarios, que es la data que queremos traernos de la API)
// 4. Dentro del useEffect hacer un fetch a la API, y luego rellenar el array de usuarios con la data que nos traemos de la API, haciendo setUsers(data)
// 5. Por último, retornar users
