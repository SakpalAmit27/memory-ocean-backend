import {express} from 'express'


// using express // 

const app = express();

// adding default demo port//

const PORT = 8000



app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})