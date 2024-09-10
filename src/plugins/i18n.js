import Vue from 'vue';
import VueI18n from 'vue-i18n';
// import messages from './messages';

Vue.use(VueI18n);

export default new VueI18n({
	locale: 'ru', // default language
	// messages
    messages: {
        ru: {
            header: {
                login: 'Вход',
                register: 'Регистрация',
                back: 'Вернуться назад'
            },

            loginPart: {
                password: "Пароль",
                loginDown: "Войти",
                question: "Нет аккаунта?",
                routerText: "Зарегистрируйтесь"
            },

            registerPage: {
                againPassword: "Повторите пароль",
                name: "Имя",
                termOfUse: "Я согласен с уловиями пользования",
                inCorrectComments: ['Введите имя', 'Введите e-mail', 'Введите пароль', 'Введите пароль еще раз', 'Необходимо согласиться с условиями'],
                registerDown: 'Зарегистрироваться',
                question: 'Уже есть аккаунт?',
                routerText: 'Войти'
            },

            home: {
                all: 'Все',
                future: 'Ожидаемые',
                closed: 'Прошедшие',
                text: 'Мероприятий по вашему запросу не найдено',
                find: 'Поиск',
                open: 'Участвую',
                closedEvent: 'Закрыто'
            }, 

            event: {
                description: 'Описание',
                schedule: 'Программа'   
            }
        },
        en: {
            header: {
                login: 'Log-in',
                register: 'Registration',
                back: 'Go Back'
            },
            loginPart: {
                password: "Password",
                loginDown: "Log-in",
                question: "No account?",
                routerText: "Registration"
            },

            registerPage: {
                againPassword: "Repeat the password",
                name: "Name",
                termOfUse: "I agree with terms of use",
                inCorrectComments: ['Write name', 'Write e-mail', 'Write password', 'Repeat password', 'You must agree to the terms'],
                registerDown: 'Register',
                question: 'Do you have account?',
                routerText: 'Log-in'
            },

            home: {
                all: 'All',
                future: 'Future',
                closed: 'Closed',
                text: 'No events matching your request were found',
                find: 'Find',
                open: 'Participate',
                closedEvent: 'Closed'

            },

            event: {
                description: 'Description',
                schedule: 'Schedule'   
            }
        },
    }
});