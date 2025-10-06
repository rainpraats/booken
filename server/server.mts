import { app } from './app.mjs';
import errorHandler from './middleware/errorHandler.mjs';
import orderRouter from './routes/orderRoutes.mjs';

const PORT = 3000;

app.use('/order', orderRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server now running at http://localhost:${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
