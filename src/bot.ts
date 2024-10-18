import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { startCommand } from './commands/start';
import logger from './config/logger';

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN as string);

bot.start(startCommand);

bot.launch()
    .then(() => logger.info('Бот запущен...'))
    .catch((error) => logger.error('Ошибка при запуске бота', error));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
