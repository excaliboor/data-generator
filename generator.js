var first_names = [
	"Ronald",
	"Christopher",
	"Gerard",
	"Lee",
	"Arsen",
	"Satoru",
	"James",
	"Rick",
	"Marko",
	"Fabrizio",
	"Napoleon",
	"Denis",
	"Yen-Yeoun",
	"Ahmed",
	"Vitaly",
	"Renes",
	"Tina",
	"Jane",
	"Louane",
	"Alicia",
	"Marie",
	"Rosa"
];

var last_names = [
	"Jones",
	"Connor",
	"Frankenstein",
	"Putin",
	"O'Bama",
	"Iwata",
	"Shinichi",
	"Kim",
	"Horvat",
	"Podolski",
	"Messner",
	"the Great",
	"the IIIrd",
	"King Jr."
];

function randomDate () {
	var d = new Date();
	d.setSeconds( Math.round(Math.random()*60)+1 );
	d.setMinutes( Math.round(Math.random()*60)+1 );
	d.setHours( Math.round(Math.random()*24)+1 );
	d.setDate( Math.round(Math.random()*31)+1 );
	d.setMonth( Math.round(Math.random()*12) );
	d.setYear( Math.round(Math.random()*3000) );
	return d;
}

function randomElementFrom (array) {
	if (array.length)
		return array[Math.floor(Math.random()*array.length)];
	else
		return "";
};

function generate_name () {
	return randomElementFrom(first_names)+" "+randomElementFrom(last_names);
}

function mod10 (value) {
	value = parseInt(value).toString().split('');
	if (value.length === 0)
		return -1;

	var checksum = 0;
	value.reverse();
	var temp;
	for (var i = 0; i < value.length; ++i)
	{
		temp = parseInt(value[i]);
		if (i%2 === 0)
		{
			temp *= 2;
			if (10 <= temp)
				temp -= 9;
		}
		checksum += parseInt(temp);
	}
	return (checksum*9)%10;
}

function generateCreditCardNumber () {
	var random_number = ""+Math.floor( Math.random()*1000000000000000 );
	while (random_number.length < 15)
		random_number+=Math.floor(Math.random()*10);
	return random_number+mod10(random_number);
}
