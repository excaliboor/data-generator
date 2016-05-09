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
