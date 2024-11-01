import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from 'prisma/prisma.module'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [PrismaModule, ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsersModule]
})
export class AppModule {}
