import axios from "axios";

const API_URL ='http://localhost:3001/products/'
async function getAllProducts(){
    return await axios.get(API_URL)
}

async function getProductByid(id){
    return await axios.get(`${API_URL}${id}`)
}

async function deleteProduct(id){
    return await axios.delete(`${API_URL}${id}`)
}

function postAddProduct(data){
    return axios.post(`${API_URL}`,data)

}

function editProduct(id,data){
    return axios.put(`${API_URL}${id}`,data)
}

export {getAllProducts,deleteProduct,editProduct,postAddProduct,getProductByid}

