import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import sequelize from './config/database.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

sequelize.sync().then(() => {
  console.log('Modelos sincronizados com sucesso!');
  app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT}`);
  });
}).catch(err => {
  console.error('Erro ao sincronizar os modelos com o banco de dados:', err);
});