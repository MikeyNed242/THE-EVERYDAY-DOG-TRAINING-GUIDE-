const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.get('/health', (_,res)=>res.json({ok:true,app:'Everyday Dog Training Guide'}));
app.listen(port,()=>console.log(`Listening on ${port}`));
