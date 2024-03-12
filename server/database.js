import { connect } from "mongoose"

(async() => {
    try{
        await connect('mongodb://127.0.0.1/chat')
        console.log('DB is connected')
    }catch(error){
        console.error(error)
    }
})()