import express from 'express';
import 'dotenv/config'
import  cors from 'cors'
import connectDB from './configs/db.js'



const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
    res.send('API is running....');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;