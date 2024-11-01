import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from '../prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ShortenedUrlsModule } from './shortened-urls/shortened-urls.module'

@Module({
	imports: [
		PrismaModule,
		ConfigModule.forRoot({ isGlobal: true }),
		AuthModule,
		UsersModule,
		ShortenedUrlsModule
	]
})
export class AppModule {}
