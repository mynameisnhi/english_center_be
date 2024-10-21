import { Sequelize } from 'sequelize-typescript';
import { Classroom } from 'src/modules/classroom/database/classroom.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Classroom]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
