let initialState = [
	{
		id: 'hair',
		title: 'Перукарські послуги',
		description: 'Ми надаємо послуги популяції по догляду за волоссям (різання, упряжування, створення волосся, фарбування, танення та іншого фарбування, стрижки, гоління та стрижки, стрижка та стрижка бороди та вус тощо) в номері обладнаному спеціально для цього.',
		subtitle1: 'Тонування сивини',
		subtitlePrice1: '2945',
		subSubTitle1: 'Якщо раніше вам доводилося миритися із сивиною або повністю тонувати все волосся, то сьогодні цього можна уникнути. Сучасні техніки фарбування волосся дають змогу домогтися природних переходів, що імітують натуральні відтінки. Наш салон пропонує приховане чоловіче фарбування і камуфлювання сивини.',
		subtitle2: 'Ламінування волосся',
		subtitlePrice2: '5345',
		subSubTitle2: 'Моментально зробити тьмяне, посічене і слабке волосся блискучим, сильним і гладким - це реальність, що стала можливою завдяки ламінуванню. Ця техніка творить справжнє диво! Вона дає змогу реанімувати і покращити зовнішній вигляд волосся всього за одну процедуру. Зробити ламінування волосся в Києві за світовими стандартами можна в салонах краси Kika-Style. Ми гарантуємо результат і його довговічність.',
		subtitle3: 'Корекція кольору волосся',
		subtitlePrice3: '2345',
		subSubTitle3: 'Все, що красиво в житті вимагає турботи і уваги, а з точки зору догляду і догляду, це завдання може бути довірено нам. Мережа салонів краси в Києві допоможе зберегти здоров\'я волосся завдяки кваліфікованим майстрам, які будуть раді надати вам догляд, стрижку, чистий колiр.',
		subtitle4: 'Стрижка волосся',
		subtitlePrice4: '1345',
		subSubTitle4: 'Техніка стрижки не існує як така. Вона має на меті - досягнення результату. Ми не хочемо викликати негативних емоцій у гостей салону. Дискутуємо з приводу бажаної форми, питаємо думку, вивчаємо звички та стиль. Наприклад, дівчина вперше приходить до майстра. Стиліст звертає увагу, в чому одягнена гостя, як лежить її волосся в момент, коли вона тільки прийшла. У розмові майстер дізнається більше, аналізує отриману інформацію, оцінює стан, структуру, колір волосся. Можливо, звичайний стиль гості відрізняється. Зараз вона має довіритися майстру, а майстер хоче виправдати очікування.',
		image: require("../../BLL/img/WWD/ab1.png"),
		image1: require("../../BLL/img/WWD/ab11.jpg"),
		image2: require("../../BLL/img/WWD/ab12.jpg"),
		image3: require("../../BLL/img/WWD/ab13.jpg"),
		image4: require("../../BLL/img/WWD/ab14.jpg"),
		alt: 'is top image',
	},
	{
		id: 'manicure',
		title: 'Манікюр',
		description: 'Турбота про красу і здоров’я нігтів – одна з найважливіших складових догляду за собою для всіх сучасних жінок і чоловіків, адже доглянуті нігтики на руках і ногах – незамінна деталь образу. Зовнішній вигляд рук говорить не тільки про вік людини, про його соціальний статус, а й про те, наскільки ретельно він за собою стежить і наскільки він охайний. Погодьтеся, нікому не сподобаються брудні нігті і суха, потріскана шкіра рук. Безумовно, без акуратного манікюру руки не можуть виглядати привабливо. Облуплений лак або недоглянуті нігті здатні зіпсувати будь-який самий продуманий образ.',
		subtitle1: 'Манікюр класичний',
		subtitlePrice1: '345',
		subSubTitle1: 'Класичний манікюр або, як його називають, вважається одним з найпопулярніших видів манікюру в Києві і Україні. У процесі кутикули і суміжних бічних роликів видаляються з росту за допомогою різання інструментів - ножиці або шматок для кутикули.',
		subtitle2: 'Манікюр апаратний',
		subtitlePrice2: '245',
		subSubTitle2: 'Манікюр апаратного забезпечення - це техніка манікюру, в якій майстер обробляє кутикулу і нігтьову пластину з фрезерним верстатом і сопла. Машина може завершити всі етапи, від видалення старого покриття до шліфування кутикули.',
		subtitle3: 'Манікюр європейський',
		subtitlePrice3: '395',
		subSubTitle3: 'Європейський манікюр відрізняється від класики тим, що кутикула не вирізана. Його видаляють, як і будь-який манікюр, але у випадку з європейським манікюром, не з ножицями. Хоча сенс манікюру як такого залишився, тобто догляд за нігтями і руками, європейський манікюр вважається більш ніжним методом.',
		subtitle4: 'Манікюр SPA',
		subtitlePrice4: '259',
		subSubTitle4: 'SPA - це водоочищення для здоров\'я організму, що проводиться в комплексі. SPA педикюр - це догляд за оздоровленням для ноги, пальців, нігтів, де активно використовуються лазні, трави і масло.',
		image: require("../../BLL/img/WWD/ab2.png"),
		image1: require("../../BLL/img/WWD/ab21.jpg"),
		image2: require("../../BLL/img/WWD/ab22.jpg"),
		image3: require("../../BLL/img/WWD/ab23.jpg"),
		image4: require("../../BLL/img/WWD/ab24.jpg"),
		alt: 'is top image',
	},
	{
		id: 'pedicure',
		title: 'Педикюр',
		description: 'Спеціальний догляд за ногами (наприклад, видалення кутикул, полірування нігтів) або покриття нігтів лаком. По суті це аналог манікюру ніг. Чоловічий ты жiночий педикюр – процедури, що забезпечують акуратність і охайність представникiв рiзноi статі.',
		subtitle1: 'Педикюр класичний',
		subtitlePrice1: '345',
		subSubTitle1: 'Класичний педикюр - це процедура, яка використовує залізо інструменти для обрізання надлишкової шкіри навколо нігтів, а товста, суха шкіра на нозі видаляється спеціальними пілісами.',
		subtitle2: 'Педикюр комбінований',
		subtitlePrice2: '745',
		subSubTitle2: 'Комбінований педикюр - це набір апаратних і ручних методів обробки шкіри нігтів і нігтьових пластин. У цій формі педикюр обробляється вручну, а стопа і пальці обробляються за допомогою обертових насадок спеціальної машини.',
		subtitle3: 'Видалення мозолів',
		subtitlePrice3: '935',
		subSubTitle3: 'Видалення мозолів скальпелем — це класичний метод видалення великих сухих мозолів та глибоких стрижневих мозолів на стопах і пальцях ніг. Процедура проводиться під місцевим наркозом та займає до 1 години. Реабілітаційний період триває 7-10 днів, а для досягнення результату, як правило, достатньо одного сеансу.',
		subtitle4: 'Педикюр SPA',
		subtitlePrice4: '165',
		subSubTitle4: 'SPA - це водоочищення для здоров\'я організму, що проводиться в комплексі. SPA педикюр - це догляд за оздоровленням для ноги, пальців, нігтів, де активно використовуються лазні, трави і масло.',
		image: require("../../BLL/img/WWD/ab3.png"),
		image1: require("../../BLL/img/WWD/ab31.jpg"),
		image2: require("../../BLL/img/WWD/ab32.jpg"),
		image3: require("../../BLL/img/WWD/ab33.jpg"),
		image4: require("../../BLL/img/WWD/ab34.jpg"),
		alt: 'is top image',
	},
	{
		id: 'cosmetology',
		title: 'Косметологія',
		description: 'Ін\'єкційна косметологія - це метод корекції віку або деформації змін в обличчі і організмі через ін\'єкції, які стимулюють кровоток, активується синтез колагену і еластину, а також посилюються захисні властивості шкіри.',
		subtitle1: 'Мезотерапія обличчя',
		subtitlePrice1: '2345',
		subSubTitle1: 'Мезотерапія обличчя – малоінвазивна процедура, при якій комплекс корисних мінералів і амінокислот доставляється в мезодерму шляхом ін’єкцій. Ціна вказана від ... і може збільшитися в залежності від того, який препарат ви вибираєте і скільки процедур ви хочете зробити. ',
		subtitle2: 'Біоревіталізація',
		subtitlePrice2: '3345',
		subSubTitle2: 'Біоревіталізація – процедура ін’єкційного або безін’єкційного введення гіалуронової кислоти під шкіру.  Ціна вказана від ... і може збільшитися в залежності від того, який препарат ви вибираєте і скільки процедур ви хочете зробити. ',
		subtitle3: 'Ін’єкції ботулотоксину',
		subtitlePrice3: '1500',
		subSubTitle3: 'Ін’єкції ботокса – найбільш ефективна і затребувана косметологічна процедура омолодження шкіри обличчя і боротьби з мімічними зморшками.  Ціна вказана від ... і може збільшитися в залежності від того, який препарат ви вибираєте і скільки процедур ви хочете зробити. ',
		subtitle4: 'Мезотерапія волосся',
		subtitlePrice4: '1345',
		subSubTitle4: 'Скажи стоп надмірному випадінню, ламкості волосся і посіченим кінчикам!  Ціна вказана від ... і може збільшитися в залежності від того, який препарат ви вибираєте і скільки процедур ви хочете зробити. ',
		image: require("../../BLL/img/WWD/ab4.png"),
		image1: require("../../BLL/img/WWD/ab41.jpg"),
		image2: require("../../BLL/img/WWD/ab42.jpg"),
		image3: require("../../BLL/img/WWD/ab43.jpg"),
		image4: require("../../BLL/img/WWD/ab44.jpg"),
		alt: 'is top image',
	},
	{
		id: 'massage',
		title: 'Естет із тіла',
		description: 'Масаж - одна з ручних методик,[2] набір механічних і рефлекторних впливів на тканини і органи, у вигляді тертя, тиску, вібрації здійснюється безпосередньо на поверхні людського тіла, як руками, так і з спеціальними апаратами через повітря, водні або інші середовища, з метою досягнення терапевтичного або іншого ефекту.',
		subtitle1: 'Стоун масаж (60 хв)',
		subtitlePrice1: '1100',
		subSubTitle1: 'Стоун-масаж – древня східна техніка, якої кілька тисяч років.',
		subtitle2: 'Класичний масаж',
		subtitlePrice2: '645',
		subSubTitle2: 'Класичний масаж – один з найсучасніших методів лікування та профілактики багатьох захворювань.',
		subtitle3: 'Лікувальний масаж',
		subtitlePrice3: '700',
		subSubTitle3: 'Лікувальний масаж – це одна з найбільш ефективних оздоровчих процедур, що полягає в мануальному впливі на різні ділянки тіла.',
		subtitle4: 'Антицелюлітний масаж',
		subtitlePrice4: '945',
		subSubTitle4: 'Антицелюлітний масаж допомагає зменшити відкладення жиру і вирівняти поверхню шкіри.',
		image: require("../../BLL/img/WWD/ab5.png"),
		image1: require("../../BLL/img/WWD/ab51.jpg"),
		image2: require("../../BLL/img/WWD/ab52.jpg"),
		image3: require("../../BLL/img/WWD/ab53.jpg"),
		image4: require("../../BLL/img/WWD/ab54.jpg"),
		alt: 'is top image',
	},
	{
		id: 'spa',
		title: 'SPA послуги',
		description: 'SPA - це набір розслабляючих процедур, спрямованих на омолодження і реабілітацію людського тіла: тілесні і духовні. Водорості, спеціальний бруд лікування, використовуються водоочищення.',
		subtitle1: 'Віскі-сповивання',
		subtitlePrice1: '845',
		subSubTitle1: 'Whiskey-shrinking - це процедура пов\'язування, заснована на австрійській косметиці бренду Aromaderm Styx Naturcosmetics. Інтригуюча процедура, яка допомагає в боротьбі із зайвою вагою.',
		subtitle2: 'Пілінг тіла',
		subtitlePrice2: '545',
		subSubTitle2: 'Пілінг тіла – ефективна і дуже приємна процедура, що дозволяє відновити і оздоровити поверхню шкіри.',
		subtitle3: 'Обгортання “Шоколадна акварель”',
		subtitlePrice3: '760',
		subSubTitle3: 'Шоколадне обгортання вважається кращим і, мабуть, найприємнішим способом позбавиться від целюліту, надати шкірі ніжність і бархатистість, а також омолодити її.',
		subtitle4: 'Антицелюлітне обгортання',
		subtitlePrice4: '695',
		subSubTitle4: 'Антицелюлітне обгортання – одна з найбільш затребуваних процедур корекції фігури і боротьби з ефектом «апельсинової кірки».',
		image: require("../../BLL/img/WWD/ab6.png"),
		image1: require("../../BLL/img/WWD/ab61.jpg"),
		image2: require("../../BLL/img/WWD/ab62.jpg"),
		image3: require("../../BLL/img/WWD/ab63.jpg"),
		image4: require("../../BLL/img/WWD/ab64.jpg"),
		alt: 'is top image',
	},
];

const whatWeDoReducer = (state = initialState, action) => {
	return state;
}

export default whatWeDoReducer;
