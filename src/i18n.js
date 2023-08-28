import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as i18 from 'i18next';

const resources = {
	ua: {
		translation: {
			navLiEntrance: 'Вхід',
			navLiMain: 'Головна',
			navLiMasters: 'Майстри',
			navLiGoods: 'Товари',
			navLiStocks: 'Акції',
			navLiBlog: 'Блог',
			navLiContacts: 'Контакти',
			title1: 'Наші послуги',
			whoWeAre: {
				explanation1: 'З першого дня нашими основними принципами роботи стали доброзичливість, чутливе ставлення до кожного клієнта і високий рівень професіоналізму у всіх сферах наданих послуг. З перших секунд вашого перебування в салоні ви зануритеся в атмосферу догляду і доброї волі. Відчуйте себе вільно від повсякденної суєти, відкриваючи нові почуття і задоволення від віртуозної майстерності наших фахівців!',
				explanation2: 'Наші майстри створять справжній шедевр, будь то простий або наймодніший стрижка, весілля або вечірнє укладання – все це та інший виглядатимуть не тільки досконалим, але і природним! Для досягнення яскравого кольору і красивих зачісок ми приділяємо велику увагу здоров\'ю волосся, проведення процедур лікування шкіри голови та відновлення шкіри за унікальними методами.',
				explanation3: 'Шкіра рук і ніг допоможе вам зробити останні дотики. Ми можемо зробити не тільки класичний і європейський манікюр і педикюр (включаючи апаратне забезпечення), але і спа-манікюр, який також пропонується чоловікам.',
			}
		},
	},
	en: {
		translation: {
			navLiEntrance: 'Entrance',
			navLiMain: 'Home',
			navLiMasters: 'Masters',
			navLiGoods: 'Goods',
			navLiStocks: 'Stocks',
			navLiBlog: 'Blog',
			navLiContacts: 'Contacts',
			title1: 'Our servers',
			whoWeAre: {
				explanation1: 'From day one, the basic principles of work have been friendliness, sensitivity to each client and high level of professionalism in all areas of service. From the first seconds of your stay in the salon, you will plunge into an atmosphere of care and good will. Feel free from everyday bustle, opening up new feelings and pleasure from the skill of virtuoso specialists!',
				explanation2: 'Our masterpieces will create a real masterpiece, whether it\'s a simple or fashionable haircut, a wedding or a evening styling - all of this and the other will look not only perfect, but also natural! To achieve bright colour and beautiful hair, we pay great attention to hair health, treat skin and restore the skin through unique methods.',
				explanation3: 'The skin of your hands and legs will help you make the last touches. We can not only classic and European manicure and pedicure (including hardware), but also spa manicure, which is also offered to men.',
			}
		},
	},
	ru: {
		translation: {
			navLiEntrance: 'Вход',
			navLiMain: 'Главная',
			navLiMasters: 'Мастера',
			navLiGoods: 'Товары',
			navLiStocks: 'Акции',
			navLiBlog: 'Блог',
			navLiContacts: 'Контакты',
			title1: 'Наши услуги',
			whoWeAre: {
				explanation1: 'С первого дня основными принципами работы были дружелюбность, чувствительность к каждому клиенту и высокий уровень профессионализма во всех сферах предоставляемых услуг. С первых секунд вашего пребывания в салоне вы окунетесь в атмосферу заботы и доброй воли. Чувствуйте себя свободными от повседневной суеты, открывая новые чувства и удовольствие от мастерства виртуозных специалистов!',
				explanation2: 'Наши мастера создадут настоящий шедевр, будь то простой или модный стрижка, свадьба или вечернее укладка - все это и другое будет выглядеть не только идеально, но и естественно! Чтобы достичь яркого цвета и красивых причесок, мы уделяем большое внимание здоровью волос, проводим процедуры лечения кожи и восстанавливаем кожу по уникальным методам.',
				explanation3: 'Кожа рук и ног поможет вам сделать последние штрихи. Мы можем не только классический и европейский маникюр и педикюр (включая аппаратное обеспечение), но и спа-маникюр, который также предлагается мужчинам.',
			}
		},
	},
}

i18.use(initReactI18next).init({
	lng: 'ua',
	fallbackLng: 'ua',
	interpolation: {
		escapeValue: false,
	},
	resources,
});

export default i18n;

