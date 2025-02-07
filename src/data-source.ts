import { DataSource } from 'typeorm';
import { config } from 'dotenv';

// Load environment variables
config();

// Determine the environment
const env = process.env.NODE_ENV || 'development';

// Base configuration
const dbConfig: any = {
  synchronize: true,
  migrations: ['migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
};

// Environment-specific configuration
switch (env) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
    });
    break;
  case 'production':
    Object.assign(dbConfig, {
      type: 'postgres',
      url: "postgres://hassan:codesy123@139.59.49.135:5432/testing", // Use DATABASE_URL from environment variables
      entities: ['**/*.entity.js'],
      ssl: { rejectUnauthorized: false }, // Enable SSL for production
    });
    break;
  default:
    throw new Error(`Unknown environment: ${env}`);
}

// Export the DataSource configuration
export const AppDataSource = new DataSource(dbConfig);