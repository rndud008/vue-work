import axios from 'axios'



function fetchProductById(id){
  return $fetch(`http://localhost:3000/products/${id}`)
}

export {fetchProductById}