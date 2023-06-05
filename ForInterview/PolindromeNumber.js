// Учитывая целое число x, вернуть, true если x это
// палиндром , и false в противном случае .

// Пример 1:
// Ввод: x = 121
//  Вывод: true
//  Объяснение: 121 читается как 121 слева направо и справа налево.

// Пример 2:
// Ввод: x = -121
//  Вывод: false
//  Объяснение: Слева направо читается -121. Справа налево получается 121-. Следовательно, это не палиндром.

// Пример 3:
// Ввод: x = 10
//  Вывод: false
//  Объяснение: 01 читается справа налево. Следовательно, это не палиндром.

const isPalindrome = (num) => {
	let numToStr = num.toString();
	return numToStr == numToStr.split('').reverse().join('')
};

console.log(isPalindrome(121))