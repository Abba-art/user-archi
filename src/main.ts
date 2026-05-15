import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
// import { AuthGuard } from './common/guard/auth.guard'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())
    app.enableCors({
        origin: ['http://localhost:3000', 'http://localhost:4200'],
        method: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedOrigin: ['Content-Type', 'Authorization'],
        exposedHeaders: ['Content-Range', 'X-Total-Count'],
        maxAge: 600,
        optionsSucessStatus: 204,
        credential: true,
        preflightContinue: false,
    })
    // app.useGlobalGuards(new AuthGuard())
    app.setGlobalPrefix('api')

    const { doubleCsrfProtection } = doubleCsrf({
        cookiesOption: {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 30,
        },
        getSecret: () => process.env.CSRF_SECRET as string,
        getSessionsIdentifier: (req) => req.sessionID as string,
    })
    app.use(doubleCsrfProtection``)
    await app.listen(process.env.PORT ?? 3000)
}
void bootstrap()
