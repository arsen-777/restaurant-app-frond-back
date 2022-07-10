const Restaurant = require("../models/Restaurant");


const getAllRestaurants= async (req,res)=>{    
    const allRestaurants = await Restaurant.find()
    res.send({data:allRestaurants})

}

const getRestaurantById= async (req,res)=>{
    try {
        const restaurantId = req.params.id
        const restaurant = await Restaurant.findById(restaurantId)
        res.send(restaurant)
    } catch (err) {
        return res.json({message: 'Restaurant not found'})
    }
}

const createRestaurant = async (req,res)=>{
    try {
        const {name, description,} = req.body
        const restaurant = await new Restaurant({
            name,
            description
        })
        const addedRestaurant = await restaurant.save()
        res.send(addedRestaurant)
    } catch (err) {
        return res.json({message: 'Check sent data and try again'})
    }
}
const updateReastaurantById = async (req,res)=>{
    const {ratings,feedback} = req.body
    try{
        const restaurantId = req.params.id
        const restaurant = await Restaurant.findById(restaurantId)
        if(!restaurant){
            return res.status(403).json({message: 'Restaurant not found'})
        }
            if(ratings){
                await restaurant.updateOne({$push: {ratings:ratings}})
            }else if(feedback){
                await restaurant.updateOne({$push: {feedbacks:{text:feedback.text, updated:feedback.updated}}})
            }
        
        const updatedRestaurant = await Restaurant.findById(restaurantId)
        return res.status(200).json(updatedRestaurant)


    }catch(err){
        console.log(err)
    }

}

const deleteReastaurantById = async (req,res)=>{
    try{
        const restaurantId = req.params.id
        const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId)
        return res.status(200).json(deletedRestaurant)
    }catch(err){
        console.log(err)
    }

}

module.exports ={
    getAllRestaurants,
    getRestaurantById,
    createRestaurant,
    updateReastaurantById,
    deleteReastaurantById
}