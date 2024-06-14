
import axios from "axios"

export const getAllPhotos = ()=> {
    return axios('https://jsonplaceholder.typicode.com/photos')
}