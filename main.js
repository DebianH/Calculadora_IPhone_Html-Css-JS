//Elementos del DOM
const horaElemen = document.querySelector('.hora');
const minElemen = document.querySelector('.minutos');

const displayEl = document.querySelector('.display');


const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const porcentajeEl = document.querySelector('.porcentaje');


const divisionEl = document.querySelector('.division');
const sumaEl = document.querySelector('.suma');
const restaEl = document.querySelector('.resta');
const multiplicacionEl = document.querySelector('.multiplicacion');

const igualEl = document.querySelector('.igual');
const decimalEl = document.querySelector('.decimal');

const num1 = document.querySelector('.num-1');
const num2 = document.querySelector('.num-2');
const num3 = document.querySelector('.num-3');
const num4 = document.querySelector('.num-4');
const num5 = document.querySelector('.num-5');
const num6 = document.querySelector('.num-6');
const num7 = document.querySelector('.num-7');
const num8 = document.querySelector('.num-8');
const num9 = document.querySelector('.num-9');
const num0 = document.querySelector('.num-0');
const arrayNum = [
	num0, num1, num2, num3, num4,
	num5, num6, num7, num8,	num9 
];


//Funciones
const getNumString = () => displayEl.textContent.split(',').join('');


const getValorNum = () => {
	return parseFloat(getNumString());
}



const handleNumberClick = (numStr) => {
	const numEnDisplay = getNumString();
	if (numEnDisplay == '0') {
		displayEl.textContent = numStr;
	} else {
		displayEl.textContent = 
			parseFloat(numEnDisplay + numStr).toLocaleString();
	}
};


//Agregamos accion a los botones y decimal

for (let i=0; i < arrayNum.length; i++) {
	const num = arrayNum[i];
	num.addEventListener('click', () => {
		handleNumberClick(i.toString());
	});
}

decimalEl.addEventListener('click', () => {
	const numEnDisplay = getNumString();
	if (!numEnDisplay.includes('.')) {     //Incluir el punto solo una vez
	displayEl.textContent = numEnDisplay + '.';
}
});





//Configurar la hora

setInterval(() => {
	const horaActual = new Date();

	const horaA = horaActual.getHours();
	const minutoA = horaActual.getMinutes();

	horaElemen.textContent = horaA.toString();
	minElemen.textContent = minutoA.toString();

},1000);