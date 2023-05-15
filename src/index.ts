import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../ormconfig";
import routes from "./routes";


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const start = async () => {
    try {
      AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err: any) => {
        console.error("Error during Data Source initialization", err)
    })

      app.use(express.json());
      app.use(express.urlencoded({ extended: true }));
      app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
      app.get('/', (req, res) => {
        res.send('Hello World!');
      });
      app.use('/users', routes);
  
      app.listen(9000, () => console.log(`> Server started on port 9000`));
    } catch (error) {
      console.log(error);
    }

    }
start();