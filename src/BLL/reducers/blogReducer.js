let initialState = [
	{
		id: '1',
		title: 'Лазерна епіляція',
		header: 'Як підготуватись до процедури лазерної епіляції?',
		text: 'Ті зони, де проводитиметься процедура лазерної епіляції, потрібно поголити за 4 – 8 годин до процедури, щоб не було щетини. Таким чином, процедура лазерної епіляції буде максимально безболісною та ефективною.',
	},
	{
		id: '2',
		title: 'Лазерна епіляція',
		header: 'Який догляд за шкірою після процедури лазерної епіляції?',
		text: 'Після процедури не можна 2 тижні засмагати, відвідувати солярій, відвідувати сауни, лазні, басейни, приймати гарячу ванну, а також протягом трьох днів після процедури лазерної епіляції на оброблені ділянки шкіри наносити ввечері Пантенол або Бепантен.',
	},
	{
		id: '3',
		title: 'Лазерна епіляція',
		header: 'Який лазер використовується у Салоні?',
		text: 'Laser 22 зупинив свій вибір на діодному американському лазері Lumenis Light Sheer ET, тому що цей лазер - схвалений американською асоціацією FDA, яка є найсуворішою організацією у своїх вимогах щодо сертифікації медичних технологій, та виявив себе на практиці, як найефективніший лазер з видалення волосся і продовжує бути лідером серед усіх апаратів для лазерної епіляції.',
	},
	{
		id: '4',
		title: 'Волосся',
		header: 'Як вибрати і де придбати професійні засоби по догляду за волоссям?',
		text: 'Погана екологія, нездоровий спосіб життя, нестача вітамінів і мінералів в щоденному раціоні дуже згубно впливають на стан наших волосся. Якщо додати до цього списку постійну сушіння гарячим феном і використання засобів для укладання, то стає зрозумілим, чому більшості жінок необхідна професійна косметика для волосся під час щоденного догляду. Найчастіше тільки професійні засоби для волосся здатні повернути волоссю здоров\'я, шовковистість, природну м\'якість і блиск.',
	},
	{
		id: '5',
		title: 'Косметологія',
		header: 'З якого віку рекомендується мезотерапія?',
		text: 'Вік залежить від розв\'язуваної проблеми. Якщо ми намагаємося лікувати якесь захворювання, то можна застосовувати мезотерапевтический метод введення препаратів практично з 18-річного віку. Частота процедур - один-два курси на рік для омолодження. Невблаганне наближення віку сорокаріччя у більшості жінок викликає занепокоєння і навіть паніку. Звичайно, щоб добре виглядати в 40 років, слід починати замислюватися про турботу про свою шкірі ще з 25 років, доглядати за обличчям, шиєю і областю декольте, приділяти увагу своєму зовнішньому вигляду. Омолодження обличчя в 40 років стане набагато результативніше, якщо всі ці роки жінка належним чином дбала про свою шкіру.',
	},
	{
		id: '6',
		title: 'Косметологія',
		header: 'Чи правда те, що ін\'єкції БОТОКС можуть відучити від шкідливої звички хмуритися?',
		text: 'З\'явитися вони можуть і в 18 років – зазвичай тому, що ви щурітесь на сонці, хмурите брови на роботі або морщите лоб, коли смієтеся. Ваша зовнішність не змінюється. Просто корекція зморшок за допомогою введення Ботокса або Диспорту дозволяє вам виглядати молодше. При тому що Ботокс зберігає міміку обличчя. Ефект від уколів Ботоксу (Botox) і Диспорту (Dysport) триває 4-6 місяців. Після цього мімічні зморшки повертаються в початковий стан. І перед вами постає вибір: або залишити все, як є, або повторити процедуру корекції зморшок і зробити Ботокс знову. Повторні ін\'єкції Ботокса часто забезпечують триваліший ефект, ніж перші. ',
	},
	{
		id: '7',
		title: 'Косметологія',
		header: 'Яку вибрати і де краще придбати косметику для обличчя?',
		text: 'Щоб правильно підібрати косметичні засоби, в першу чергу потрібно визначити, який у вас тип шкіри! Для визначення типу шкіри обов\'язково проконсультуйтеся у професійного косметолога, так як і суха і жирна шкіра має свої, візуально визначаються характеристики. Існує також змішаний тип шкіри і чутлива шкіра обличчя. У випадку з проблемною шкірою питання пошуку засобів догляду за проблемною шкірою може бути вирішений лише шляхом ретельного вибору. Такий вибір допоможуть зробити фахівці косметологи.',
	},
	{
		id: '8',
		title: 'Косметологія',
		header: 'Хто такий косметолог?',
		text: 'Косметологія- (від грецького κοσμητικός, kosmētikos, «кваліфікований у прикрасі» і - λογία,-logia-«вчення») наука про красу. - фахівець, що займається вивченням догляду за обличчям і тілом, а також методів, засобів призначених його підтримувати в прекрасній формі. Косметолог рекомендує засоби по догляду за шкірою, розповідає як піклуватися про проблемні зони. У нашій країні людина без білого халата (і відповідних скоринок) косметологом працювати не може, цією справою займаються тільки громадяни з медичною освітою!',
	},
	{
		id: '9',
		title: 'Волосся',
		header: 'Плюси і мінуси при виборі домашнього або салонного фарбування волосся?',
		text: 'Пропонуємо Вам розібратися в явно хвилює багатьох питанні щодо підрозділи фарб на професійні та непрофесійні. Мова йде про фарбування волосся, як правило, в салонах краси, в першому випадку, і про фарбування в домашніх умовах – у другому. Слід спочатку відзначити, що професійні фарби для волосся не продаються в звичайних магазинах, так як виробники наполягають на поширення тільки в салонах краси та перукарнях. Також перукар звертає увагу на проявляється в процесі фарбування результат і вносить корективи по ходу процесу.',
	},
	{
		id: '10',
		title: 'Косметологія',
		header: 'Як розшифрувати дату виробництва косметики?',
		text: 'Дата виробництва зашифрована спеціальним чином і може бути нанесена на картонну упаковку, сполучний шов туби, дно скляної або пластикової баночки. Для засобів домашньої лінії, як правило, шифр виглядає наступним чином: ГММПП, де Г – остання цифра року виробництва; ПП – номер партії. На деяких артикулах професійної лінії і на ампульною продукції шифр виглядає по-іншому, і тоді за його розшифровкою слід звернутися до вашого косметолога.',
	},
	{
		id: '11',
		title: 'Косметологія',
		header: 'З якого віку рекомендується мезотерапія?',
		text: 'Вік залежить від розв\'язуваної проблеми. Якщо ми намагаємося лікувати якесь захворювання, то можна застосовувати мезотерапевтический метод введення препаратів практично з 18-річного віку. Частота процедур - один-два курси на рік для омолодження. Невблаганне наближення віку сорокаріччя у більшості жінок викликає занепокоєння і навіть паніку. Звичайно, щоб добре виглядати в 40 років, слід починати замислюватися про турботу про свою шкірі ще з 25 років, доглядати за обличчям, шиєю і областю декольте, приділяти увагу своєму зовнішньому вигляду. Омолодження обличчя в 40 років стане набагато результативніше, якщо всі ці роки жінка належним чином дбала про свою шкіру.',
	},
	{
		id: '12',
		title: 'Косметологія',
		header: 'Чи правда те, що ін\'єкції БОТОКС можуть відучити від шкідливої звички хмуритися?',
		text: 'З\'явитися вони можуть і в 18 років – зазвичай тому, що ви щурітесь на сонці, хмурите брови на роботі або морщите лоб, коли смієтеся. Ваша зовнішність не змінюється. Просто корекція зморшок за допомогою введення Ботокса або Диспорту дозволяє вам виглядати молодше. При тому що Ботокс зберігає міміку обличчя. Ефект від уколів Ботоксу (Botox) і Диспорту (Dysport) триває 4-6 місяців. Після цього мімічні зморшки повертаються в початковий стан. І перед вами постає вибір: або залишити все, як є, або повторити процедуру корекції зморшок і зробити Ботокс знову. Повторні ін\'єкції Ботокса часто забезпечують триваліший ефект, ніж перші. ',
	},
	{
		id: '13',
		title: 'Косметологія',
		header: 'Яку вибрати і де краще придбати косметику для обличчя?',
		text: 'Щоб правильно підібрати косметичні засоби, в першу чергу потрібно визначити, який у вас тип шкіри! Для визначення типу шкіри обов\'язково проконсультуйтеся у професійного косметолога, так як і суха і жирна шкіра має свої, візуально визначаються характеристики. Існує також змішаний тип шкіри і чутлива шкіра обличчя. У випадку з проблемною шкірою питання пошуку засобів догляду за проблемною шкірою може бути вирішений лише шляхом ретельного вибору. Такий вибір допоможуть зробити фахівці косметологи.',
	},
	{
		id: '14',
		title: 'Косметологія',
		header: 'Хто такий косметолог?',
		text: 'Косметологія- (від грецького κοσμητικός, kosmētikos, «кваліфікований у прикрасі» і - λογία,-logia-«вчення») наука про красу. - фахівець, що займається вивченням догляду за обличчям і тілом, а також методів, засобів призначених його підтримувати в прекрасній формі. Косметолог рекомендує засоби по догляду за шкірою, розповідає як піклуватися про проблемні зони. У нашій країні людина без білого халата (і відповідних скоринок) косметологом працювати не може, цією справою займаються тільки громадяни з медичною освітою!',
	},
	{
		id: '15',
		title: 'Волосся',
		header: 'Плюси і мінуси при виборі домашнього або салонного фарбування волосся?',
		text: 'Пропонуємо Вам розібратися в явно хвилює багатьох питанні щодо підрозділи фарб на професійні та непрофесійні. Мова йде про фарбування волосся, як правило, в салонах краси, в першому випадку, і про фарбування в домашніх умовах – у другому. Слід спочатку відзначити, що професійні фарби для волосся не продаються в звичайних магазинах, так як виробники наполягають на поширення тільки в салонах краси та перукарнях. Також перукар звертає увагу на проявляється в процесі фарбування результат і вносить корективи по ходу процесу.',
	},
	{
		id: '16',
		title: 'Косметологія',
		header: 'Як розшифрувати дату виробництва косметики?',
		text: 'Дата виробництва зашифрована спеціальним чином і може бути нанесена на картонну упаковку, сполучний шов туби, дно скляної або пластикової баночки. Для засобів домашньої лінії, як правило, шифр виглядає наступним чином: ГММПП, де Г – остання цифра року виробництва; ПП – номер партії. На деяких артикулах професійної лінії і на ампульною продукції шифр виглядає по-іншому, і тоді за його розшифровкою слід звернутися до вашого косметолога.',
	},
	{
		id: '17',
		title: 'Косметологія',
		header: 'Яку вибрати і де краще придбати косметику для обличчя?',
		text: 'Щоб правильно підібрати косметичні засоби, в першу чергу потрібно визначити, який у вас тип шкіри! Для визначення типу шкіри обов\'язково проконсультуйтеся у професійного косметолога, так як і суха і жирна шкіра має свої, візуально визначаються характеристики. Існує також змішаний тип шкіри і чутлива шкіра обличчя. У випадку з проблемною шкірою питання пошуку засобів догляду за проблемною шкірою може бути вирішений лише шляхом ретельного вибору. Такий вибір допоможуть зробити фахівці косметологи.',
	},
	{
		id: '18',
		title: 'Косметологія',
		header: 'Хто такий косметолог?',
		text: 'Косметологія- (від грецького κοσμητικός, kosmētikos, «кваліфікований у прикрасі» і - λογία,-logia-«вчення») наука про красу. - фахівець, що займається вивченням догляду за обличчям і тілом, а також методів, засобів призначених його підтримувати в прекрасній формі. Косметолог рекомендує засоби по догляду за шкірою, розповідає як піклуватися про проблемні зони. У нашій країні людина без білого халата (і відповідних скоринок) косметологом працювати не може, цією справою займаються тільки громадяни з медичною освітою!',
	},
	{
		id: '19',
		title: 'Волосся',
		header: 'Плюси і мінуси при виборі домашнього або салонного фарбування волосся?',
		text: 'Пропонуємо Вам розібратися в явно хвилює багатьох питанні щодо підрозділи фарб на професійні та непрофесійні. Мова йде про фарбування волосся, як правило, в салонах краси, в першому випадку, і про фарбування в домашніх умовах – у другому. Слід спочатку відзначити, що професійні фарби для волосся не продаються в звичайних магазинах, так як виробники наполягають на поширення тільки в салонах краси та перукарнях. Також перукар звертає увагу на проявляється в процесі фарбування результат і вносить корективи по ходу процесу.',
	},
	{
		id: '20',
		title: 'Косметологія',
		header: 'Як розшифрувати дату виробництва косметики?',
		text: 'Дата виробництва зашифрована спеціальним чином і може бути нанесена на картонну упаковку, сполучний шов туби, дно скляної або пластикової баночки. Для засобів домашньої лінії, як правило, шифр виглядає наступним чином: ГММПП, де Г – остання цифра року виробництва; ПП – номер партії. На деяких артикулах професійної лінії і на ампульною продукції шифр виглядає по-іншому, і тоді за його розшифровкою слід звернутися до вашого косметолога.',
	},
	{
		id: '21',
		title: 'Косметологія',
		header: 'З якого віку рекомендується мезотерапія?',
		text: 'Вік залежить від розв\'язуваної проблеми. Якщо ми намагаємося лікувати якесь захворювання, то можна застосовувати мезотерапевтический метод введення препаратів практично з 18-річного віку. Частота процедур - один-два курси на рік для омолодження. Невблаганне наближення віку сорокаріччя у більшості жінок викликає занепокоєння і навіть паніку. Звичайно, щоб добре виглядати в 40 років, слід починати замислюватися про турботу про свою шкірі ще з 25 років, доглядати за обличчям, шиєю і областю декольте, приділяти увагу своєму зовнішньому вигляду. Омолодження обличчя в 40 років стане набагато результативніше, якщо всі ці роки жінка належним чином дбала про свою шкіру.',
	},
	{
		id: '22',
		title: 'Косметологія',
		header: 'Чи правда те, що ін\'єкції БОТОКС можуть відучити від шкідливої звички хмуритися?',
		text: 'З\'явитися вони можуть і в 18 років – зазвичай тому, що ви щурітесь на сонці, хмурите брови на роботі або морщите лоб, коли смієтеся. Ваша зовнішність не змінюється. Просто корекція зморшок за допомогою введення Ботокса або Диспорту дозволяє вам виглядати молодше. При тому що Ботокс зберігає міміку обличчя. Ефект від уколів Ботоксу (Botox) і Диспорту (Dysport) триває 4-6 місяців. Після цього мімічні зморшки повертаються в початковий стан. І перед вами постає вибір: або залишити все, як є, або повторити процедуру корекції зморшок і зробити Ботокс знову. Повторні ін\'єкції Ботокса часто забезпечують триваліший ефект, ніж перші. ',
	},
	{
		id: '23',
		title: 'Косметологія',
		header: 'Яку вибрати і де краще придбати косметику для обличчя?',
		text: 'Щоб правильно підібрати косметичні засоби, в першу чергу потрібно визначити, який у вас тип шкіри! Для визначення типу шкіри обов\'язково проконсультуйтеся у професійного косметолога, так як і суха і жирна шкіра має свої, візуально визначаються характеристики. Існує також змішаний тип шкіри і чутлива шкіра обличчя. У випадку з проблемною шкірою питання пошуку засобів догляду за проблемною шкірою може бути вирішений лише шляхом ретельного вибору. Такий вибір допоможуть зробити фахівці косметологи.',
	},
	{
		id: '24',
		title: 'Косметологія',
		header: 'Хто такий косметолог?',
		text: 'Косметологія- (від грецького κοσμητικός, kosmētikos, «кваліфікований у прикрасі» і - λογία,-logia-«вчення») наука про красу. - фахівець, що займається вивченням догляду за обличчям і тілом, а також методів, засобів призначених його підтримувати в прекрасній формі. Косметолог рекомендує засоби по догляду за шкірою, розповідає як піклуватися про проблемні зони. У нашій країні людина без білого халата (і відповідних скоринок) косметологом працювати не може, цією справою займаються тільки громадяни з медичною освітою!',
	},
	{
		id: '25',
		title: 'Волосся',
		header: 'Плюси і мінуси при виборі домашнього або салонного фарбування волосся?',
		text: 'Пропонуємо Вам розібратися в явно хвилює багатьох питанні щодо підрозділи фарб на професійні та непрофесійні. Мова йде про фарбування волосся, як правило, в салонах краси, в першому випадку, і про фарбування в домашніх умовах – у другому. Слід спочатку відзначити, що професійні фарби для волосся не продаються в звичайних магазинах, так як виробники наполягають на поширення тільки в салонах краси та перукарнях. Також перукар звертає увагу на проявляється в процесі фарбування результат і вносить корективи по ходу процесу.',
	},
	{
		id: '26',
		title: 'Косметологія',
		header: 'Як розшифрувати дату виробництва косметики?',
		text: 'Дата виробництва зашифрована спеціальним чином і може бути нанесена на картонну упаковку, сполучний шов туби, дно скляної або пластикової баночки. Для засобів домашньої лінії, як правило, шифр виглядає наступним чином: ГММПП, де Г – остання цифра року виробництва; ПП – номер партії. На деяких артикулах професійної лінії і на ампульною продукції шифр виглядає по-іншому, і тоді за його розшифровкою слід звернутися до вашого косметолога.',
	},
];

const blogReducer = (state = initialState, action ) => {
	return state;
}

export default blogReducer;