import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import generateRoute from './routes/generateRoute.js'


const app = express();

//Middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/', (req,res)=> res.send("API is working"))
app.use('/api/generate', generateRoute);


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
    
})
export default app;