import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './entities/user.entity';
import { Plug } from './entities/plugs.entity';
import { GetPlugModule } from './modules/plugs/get-plug/get-plug.module';
import { AddPlugModule } from './modules/plugs/add-plug/add-plug.module';
import { UpdatePlugModule } from './modules/plugs/update-plug/update-plug.module';
import { DeletePlugModule } from './modules/plugs/delete-plug/delete-plug.module';
import { ListPlugModule } from './modules/plugs/list-plug/list-plug.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        entities: [User, Plug],
        dbName: configService.get('MYSQL_DATABASE'),
        type: 'mysql',
        host: configService.get('DB_HOST'),
        user: configService.get('MYSQL_USER'),
        password: configService.get('MYSQL_PASSWORD'),
        port: Number(configService.get('DB_PORT')),
        migrations: {
          tableName: 'migrations', // name of database table with log of executed transactions
          path: './migrations', // path to the folder with migrations
          pathTs: undefined, // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
          glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
          transactional: true, // wrap each migration in a transaction
          disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
          allOrNothing: true, // wrap all migrations in master transaction
          dropTables: true, // allow to disable table dropping
          safe: false, // allow to disable table and column dropping
          snapshot: true, // save snapshot when creating new migrations
          emit: 'ts', // migration generation mode
          filename: (timestamp, name) => `${timestamp}_${name}`,
        },
      }),
    }),
    UsersModule,
    GetPlugModule,
    AddPlugModule,
    UpdatePlugModule,
    DeletePlugModule,
    ListPlugModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
