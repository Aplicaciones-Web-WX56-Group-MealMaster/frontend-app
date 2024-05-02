import http from "../../axios/axios.js";
async function getMealsList(){
    try {
        const response = await http.get(`/getRecipes`)
        if(response.status === 200 && response.data && response.data.length > 0){
            return response.data
        }
        throw new Error("No meals information found.")
    } catch (error){
        console.error(error)
        throw error
    }
}
async function getMeal(id){
    try {
        const response = await http.get(`/getRecipe/${id}`)
        if(response.status === 200 && response.data){
            return response.data
        }
        throw new Error("No meal information found.")
    } catch (error){
        console.error(error)
        throw error
    }
}
export {getMealsList, getMeal}