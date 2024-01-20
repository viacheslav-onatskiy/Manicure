import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    fallbackNS: 'common',
    react: { useSuspense: false },
    interpolation: {
      escapeValue: true
    },
    resources: {
      en: {
        translation: {
          home: {
            imageTextDescription1: 'Best Nails for',
            imageTextDescription2: 'Best Moments',
            aboutMeHeading: 'About me',
            aboutMeDescription: 'About me description',
            aboutMeButton: 'Read more',
            orderHeading: 'Do you want a perfect manicure?',
            advantages: {
              heading: 'Benefits of working with me',
              advantage1: 'Ukrainian quality',
              advantage2: 'Individual approach',
              advantage3: 'Cozy atmosphere',
              advantage4: 'Sterile instruments'
            },
            reviews: {
              seeAllReviews: 'See All Reviews',
              client: 'Client'
            }
          },

          about: {
            presentDescription: 'The best nail master',
            infoHeading: '123 Добро пожаловать в мир красоты и ухоженности!',
            infoDescription: `123 Привет! Меня зовут Яна, и я - сертифицированный мастер маникюра с 2016 года. Мое призвание - создавать произведения искусства на ваших ногтях. \n Я стремлюсь к индивидуальному подходу к каждому клиенту, предоставляя высококачественные услуги c использованием лучших материалов. \n Все используемые инструменты проходят тщательную обработку и стерилизацию, чтобы обеспечить вашу безопасность. \n Давайте вместе создадим неповторимый облик ваших ногтей!`,
            facts: {
              1: {
                heading: 'Over 7 years of experience',
                description: 'Working in the beauty industry since 2016.'
              },
              2: {
                heading: 'Over 5000 completed services',
                description: 'Successfully conducted 5000+ manicure procedures.'
              },
              3: {
                heading: '90% of clients return after the first visit',
                description:
                  'Quality and individual approach are key factors in client retention.'
              },
              4: {
                heading: '100% sterility',
                description:
                  'Guaranteeing the safety of every client by using only sterile instruments.'
              }
            },
            subscribeInstagram: 'Subscribe to my Instagram',
            gratitude1: 'Thank you for watching!',
            gratitude2: 'I will be happy with your likes❤️, subscriptions✅, and comments'
          },

          portfolio: {
            description:
              'Over 7 years of work, I have done more than 1500 manicures. Here are just some of them.'
          },

          reviews: {
            leaveReview: 'Leave review',
            updateReview: 'Update review',
            removeReview: 'Remove review',
            noReviews: 'No reviews'
          },

          services: {
            heading: 'My Services',
            cards: {
              1: {
                heading: 'Manicure',
                shortDescription: `
              - Classic manicure
              - European manicure
              - Spa manicure
              `,
                description: 'description'
              },
              2: {
                heading: 'Pedicure',
                shortDescription: `
              - Classic Pedicure
              - Spa Pedicure`,
                description: 'description'
              },
              3: {
                heading: 'Nail Art',
                shortDescription: `
              - French
              - Art design`,
                description: 'description'
              },
              4: {
                heading: 'Nail Extension',
                shortDescription: `Description 
                -Gel Extensions`,
                description: 'description'
              },
              5: {
                heading: 'Skin Care',
                shortDescription: `Description
                 Skin Careeee`,
                description: 'description'
              },
              6: {
                heading: 'Massage',
                shortDescription: `Description
                Massageeee`,
                description: 'description'
              }
            },
            schedule: {
              heading: 'Schedule',
              mondaySaturday: 'Monday-Saturday',
              time: '9AM - 5PM',
              sunday: 'Sunday',
              closed: 'Closed',
              description: 'I will be glad to see you anytime at our salon.'
            },
            pricing: {
              heading: 'Pricing',
              1: { heading: 'Manicure', description: 'FROM $60.00' },
              2: { heading: 'Pedicure', description: 'FROM $50.00' },
              3: { heading: 'Nail Extension', description: 'FROM $70.00' },
              4: { heading: 'Gel Pedicure', description: 'FROM $80.00' },
              5: { heading: 'Nail Design', description: 'FROM 70.00$' }
            }
          },

          contact: {
            contactMe: 'Contact me',
            contactMeDescription: `You can contact me in any way convenient for you. I am available 24/7 by email.\nYou can also use the quick contact form and I will contact you within 24 hours or visit our salon in person.`,
            contactForm: {
              name: 'Name',
              email: 'Email',
              phoneNumber: 'Phone Number',
              review: 'Review'
            },
            contactList: {
              address: 'Address',
              phone: 'Phone',
              email: 'Email',
              openingHours: 'Opening Hours',
              openTime: 'Opening Hours',
              monSat: 'Mon-Sat',
              sunday: 'Sunday',
              closed: 'Closed'
            }
          },

          register: {
            title: 'Sign Up',
            createAccount: 'Create Your Account',
            registerButton: 'Register',
            alreadyHaveAnAccount: 'Already have an account',
            signIn: 'Sign In',
            fields: {
              name: {
                placeholder: 'Enter Your Name',
                label: 'Name'
              },
              email: {
                placeholder: 'Email Address',
                label: 'Email'
              },
              password: {
                placeholder: 'Create a Password',
                label: 'Password'
              },
              password2: {
                placeholder: 'Confirm Your Password',
                label: 'Password2'
              }
            }
          },

          login: {
            title: 'Login',
            header: 'Create Your Account',
            loginButton: 'Login',
            noAccount: "Don't have an account",
            signUp: 'Sign Up',
            fields: {
              email: {
                placeholder: 'Email Address',
                label: 'Email'
              },
              password: {
                placeholder: 'Create a Password',
                label: 'Password'
              }
            }
          },

          notFoundPage: {
            title: 'Page Not Found',
            description:
              "The Requested page couldn't be found - this could be due to a spelling error in the URL or a removed page.",
            button: 'Back to home page'
          },

          modals: {
            description: 'Description',
            fillDescription: 'Please fill description.',
            logInToLeaveReview: 'Please log in to leave review.'
          },

          pagination: {
            first: 'First',
            last: 'Last'
          },

          common: {
            name: 'Yana',
            surname: 'Ivankhnenko',
            yanaNameSurname: 'Yana Ivankhnenko',
            makeAnAppointment: 'Make an appointment',
            book: 'Book now',
            writeMe: 'Write me',
            showMore: 'Show more',
            hide: 'Hide',
            update: 'Update',
            remove: 'Remove',
            maxLength: 'Max length is {{count}} symbols',
            logout: 'Logout',
            callMe: 'Call me'
          },

          pages: {
            home: 'Home',
            about: 'About',
            portfolio: 'Portfolio',
            reviews: 'Reviews',
            services: 'Services',
            contact: 'Contact',
            register: 'Register',
            login: 'Login',
            logout: 'Logout'
          },

          header: {
            callMe: 'Call me',
            schedule: 'Opening hours',
            monSat: 'Mon-Sat',
            time: '9am - 5pm'
          },

          toast: {
            loginToLeaveReview: 'Please log in to leave a review',
            passwordDontMatch: 'Passwords do not match'
          }
        }
      },
      ru: {
        translation: {
          home: {
            imageTextDescription1: 'Лучшие ногти для',
            imageTextDescription2: 'Лучших моментов',
            aboutMeHeading: 'Обо мне',
            aboutMeDescription:
              'Приветствую вас в мире красоты и элегантности. Я – мастер маникюра с преданностью к красоте и стилю, где каждая деталь имеет значение. Давайте вместе создадим уникальный облик ваших рук, чтобы подчеркнуть вашу индивидуальность и красоту.',
            aboutMeButton: 'Читать больше',
            orderHeading: 'Желаешь идеальный маникюр?',
            advantages: {
              heading: 'Преимущества работы со мной',
              advantage1: 'Украинское качество',
              advantage2: 'Индивидуальный подход',
              advantage3: 'Уютная атмосфера',
              advantage4: 'Стерильный инструмент'
            },
            reviews: {
              seeAllReviews: 'Читать все отзывы',
              client: 'Клиент'
            }
          },

          about: {
            presentDescription: 'Лучший мастер маникюра',
            infoHeading: 'Добро пожаловать в мир красоты и ухоженности!',
            infoDescription: `Привет! Меня зовут Яна, и я - сертифицированный мастер маникюра с 2016 года.Мое призвание - создавать произведения искусства на ваших ногтях. \n Я стремлюсь к индивидуальному подходу к каждому клиенту, предоставляя высококачественные услуги c использованием лучших материалов. \n Все используемые инструменты проходят тщательную обработку и стерилизацию, чтобы обеспечить вашу безопасность. \n Давайте вместе создадим неповторимый облик ваших ногтей!`,
            facts: {
              1: {
                heading: 'Более 7 лет опыта',
                description: 'Работаю в бьюти индустрии с 2016 года.'
              },
              2: {
                heading: 'Более 5000 выполненных услуг',
                description: 'Успешно провела 5000+ маникюрных процедур.'
              },
              3: {
                heading: '90% клиентов возвращаются после первого визита',
                description:
                  'Качество и индивидуальный подход – ключевые моменты возврата клиентов.'
              },
              4: {
                heading: '100% стерильность',
                description:
                  'Гарантирую безопасность каждого клиента, используя только стерильные инструменты.'
              }
            },
            subscribeInstagram: 'Подписывайся на мой Инстаграм',
            gratitude1: 'Спасибо за просмотр!',
            gratitude2: 'Буду рада вашим лайкам❤️, подпискам✅ и комментариям'
          },

          portfolio: {
            description:
              'За 7 лет работы я сделала более 1500 маникюров. Вот лишь некоторые из них.'
          },

          reviews: {
            leaveReview: 'Оставить отзыв',
            updateReview: 'Обновить отзыв',
            removeReview: 'Удалить отзыв',
            noReviews: 'Отзывов нет'
          },

          services: {
            heading: 'Мои услуги',
            cards: {
              1: {
                heading: 'Маникюр',
                shortDescription: `
              - Классический маникюр
              - Европейский маникюр
              - Спа маникюр
              `,
                description: 'description'
              },
              2: {
                heading: 'Педикюр',
                shortDescription: `
              - Классический Педикюр
              - Спа Педикюр`,
                description: 'description'
              },
              3: {
                heading: 'Дизайн ногтей',
                shortDescription: `
              - Френч-маникюр
              - Художественный дизайн`,
                description: 'description'
              },
              4: {
                heading: 'Наращивание ногтей',
                shortDescription: `Описание -Gel Extensions`,
                description: 'description'
              },
              5: {
                heading: 'Уход за кожей',
                shortDescription: 'Описание Skin Careeee',
                description: 'description'
              },
              6: {
                heading: 'Массаж',
                shortDescription: 'Описание Massageeee',
                description: 'description'
              }
            },
            schedule: {
              heading: 'График работы',
              mondaySaturday: 'Понедельник-Суббота',
              time: '9:00 - 17:00',
              sunday: 'Воскресенье',
              closed: 'Закрыто',
              description: 'Буду рада видеть тебя в любое время в нашем салоне.'
            },
            pricing: {
              heading: 'Цены',
              1: { heading: 'Маникюр', description: 'ОТ 60.00$' },
              2: { heading: 'Педикюр', description: 'ОТ 50.00$' },
              3: { heading: 'Наращивание', description: 'ОТ 70.00$' },
              4: { heading: 'Гель-педикюр', description: 'ОТ 80.00$' },
              5: { heading: 'Дизайн ногтей', description: 'ОТ 70.00$' }
            }
          },

          contact: {
            contactMe: 'Связаться со мной',
            contactMeDescription: `Вы можете связаться со мной любым удобным для вас способом. Я доступна по электронной почте круглосуточно и без выходных.\n Вы также можете использовать форму быстрой связи, и я свяжусь с вами в течение 24 часов или посетите салон лично.`,
            contactForm: {
              name: 'Имя',
              email: 'Email',
              phoneNumber: 'Номер телефона',
              review: 'Комментарий'
            },
            contactList: {
              address: 'Адрес',
              phone: 'Номер телефона',
              email: 'Email',
              openingHours: 'Время работы',
              openTime: '9:00 - 17:00',
              monSat: 'Пн - Сб',
              sunday: 'Воскресенье',
              closed: 'Закрыто'
            }
          },

          register: {
            title: 'Регистрация',
            createAccount: 'Создай свой аккаунт',
            registerButton: 'Зарегистрироваться',
            alreadyHaveAnAccount: 'Уже есть аккаунт',
            signIn: 'Войти',
            fields: {
              name: {
                placeholder: 'Введите имя',
                label: 'Имя'
              },
              email: {
                placeholder: 'Введите адрес электронной почты',
                label: 'Электронная почта'
              },
              password: {
                placeholder: 'Введите пароль',
                label: 'Пароль'
              },
              password2: {
                placeholder: 'Подтвердите пароль',
                label: 'Пароль2'
              }
            }
          },

          login: {
            title: 'Авторизироваться',
            header: 'Войти в аккаунт',
            loginButton: 'Войти',
            noAccount: 'Нет аккаунта',
            signUp: 'Зарегистрируйтесь',
            fields: {
              email: {
                placeholder: 'Введите адрес электронной почты',
                label: 'Электронная почта'
              },
              password: {
                placeholder: 'Введите пароль',
                label: 'Пароль'
              }
            }
          },

          notFoundPage: {
            title: 'Страница не найдена',
            description: 'Запрашиваемая страница не найдена.',
            button: 'Вернуться на главную'
          },

          modals: {
            description: 'Описание',
            fillDescription: 'Пожалуйста заполните описание.',
            logInToLeaveReview: 'Пожалуйста войдите в аккаунт, чтобы оставить отзыв.'
          },

          pagination: {
            first: 'Первая',
            last: 'Последняя'
          },

          common: {
            name: 'Яна',
            surname: 'Ивахненко',
            yanaNameSurname: 'Яна Ивахненко',
            makeAnAppointment: 'Записаться',
            book: 'Записаться',
            writeMe: 'Напиши мне',
            showMore: 'Показать больше',
            hide: 'Скрыть',
            update: 'Обновить',
            remove: 'Удалить',
            maxLength: 'Максимальная длина {{count}} символов',
            logout: 'Выйти',
            callMe: 'Позвони мне'
          },

          pages: {
            home: 'Главная',
            about: 'Обо мне',
            portfolio: 'Портфолио',
            reviews: 'Отзывы',
            services: 'Услуги',
            contact: 'Контакты',
            register: 'Регистрация',
            login: 'Войти',
            logout: 'Выйти'
          },

          header: {
            callMe: 'Позвони мне',
            schedule: 'Время работы',
            monSat: 'ПН-СБ',
            time: '9:00 - 17:00'
          },

          toast: {
            loginToLeaveReview: 'Пожалуйста зарегистрируйтесь, чтобы оставить отзыв',
            passwordDontMatch: 'Пароли не совпадают'
          }
        }
      }
    }
  });

export default i18n;
