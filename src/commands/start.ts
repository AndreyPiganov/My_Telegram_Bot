import { Context } from 'telegraf';
import { Markup } from 'telegraf';

export const startCommand = async (ctx: Context) => {
    ctx.reply(
        'Привет! Выберите, куда хотите перейти:',
        Markup.inlineKeyboard([
            [Markup.button.url('Мой Telegram', 'https://t.me/terris23')],
            [Markup.button.url('Мой первый GitHub(в основном фронтенд)', 'https://github.com/AndreyPiganov')],
            [Markup.button.url('Мой второй Github(backend)', 'https://github.com/PiganovAndrey')],
            [
                Markup.button.url(
                    'Мой HH профиль',
                    'https://spb.hh.ru/resume/52bf7d2aff0dbdda270039ed1f334a4c4a6877?hhtmFrom=resume_list'
                )
            ],
            [Markup.button.url('Мой Хабр профиль', 'https://career.habr.com/terris261')]
        ])
    );
};
