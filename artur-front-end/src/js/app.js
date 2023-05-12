/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить ART (Full Logging System) (в работе)
window['ART'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функціонал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp с css */
flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
// flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();
/* Модуль для роботи з меню (Бургер) */
flsFunctions.menuInit();
/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
// flsFunctions.fullVHfix();

// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Модуль роботи з select. */
//import './libs/select.js'

/*
Модуль "Показать еще"
Сніппет (HTML): showmore
*/
//flsFunctions.showMore();

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
/*
Модуль "Filter Gallery"
Документація: 
Сніппет (HTML): filter
	<ul class="filter">
		<li class="filter__list">
			<button class="filter__button active" data-filter="all" type="button">All</button>
		</li>
	</ul>
	<div class="product">
		<div class="product__box" data-item="all"></div>
	</div>
*/
//flsFunctions.filterGallery();
// ========================================================================================================================================================================================================================================================

/* Подключаем файлы со своим кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================