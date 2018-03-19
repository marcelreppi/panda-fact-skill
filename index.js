const Alexa = require('alexa-sdk');

const facts = [
	'Der Panda gehört zur Überfamilie der Hundeartigen.',
	'Die Ernährung eines Großen Pandas besteht zu 99 Prozent aus Bambus.',
	'Bambus enthält nicht viel Energie. Aus diesem Grund können sich Pandas nur langsam bewegen. Jegliche anstrengenden Tätigkeiten werden vermieden.',
	'Pandas sind keine reinen Vegetarier. Wenn sich die Chance ergibt, fressen sie auch kleine Tiere wie zum Beispiel Bambusratten.',
	'Ein ausgewachsener Panda verbringt täglich 12 bis 16 Stunden mit Essen.',
	'Ein Panda isst täglich zwischen 10 und 18 Kilogramm Bambus',
	'Der Große Panda produziert pro Tag 10 Kilogramm Kot.',
	'Pandas pflanzen sich nur sehr langsam fort. Das Weibchen ist nur einmal im Jahr für 24 bis 72 Stunden fruchtbar.',
	'In den meisten Fällen werden Pandas im August geboren, da die Paarungsmonate zwischen März und Mai liegen und die Schwangerschaft zwischen 3 und 5 Monaten dauert.',
	'Zur Geburt wiegt ein Panda nur 100 Gramm.',
	'Nach einem Jahr wiegt ein Babypanda schon 45 Kilogramm.',
	'Pandas haben ähnliche Pupillen wie Katzen. Auch sie können in der Nacht gut sehen.',
	'Pandas haben 6 Finger. Seine zwei Daumen ermöglichen es ihm, die Bambusstangen besser festhalten zu können.',
	'Die Speiseröhre eines Pandas ist mit einem Horn ausgekleidet. So können ihn die scharfkantigen Bambusstücke beim Schlucken nicht kratzen.',
	'Im Gegensatz zu anderen Bären halten Pandas keine Winterruhe, sie wandern lediglich in tiefer gelegene und somit etwas wärmere Regionen.',
	'Damit Forscher die Tiere besser studieren können, verkleiden sie sich selbst als Pandas, um näher an die echten Bären herankommen zu können.',
	'In China wird die Jagd auf Pandas mit der Todesstrafe geahndet.'
]

const handlers = {
	'LaunchRequest': function () {
		this.emit('GetFactIntent');
	},
	'GetFactIntent': function () {
		const i = Math.floor(Math.random() * facts.length);
		const randomFact = facts[i];

		this.emit(':tell', 'Wusstest du schon? ' + randomFact);
	},
	'AMAZON.HelpIntent': function () {
		this.emit(':ask', 'Sag einfach: Nenn mir einen Fakt! Was kann ich für dich tun?');
	},
	'AMAZON.CancelIntent': function () {
		this.emit(':tell', 'Okay! Tschüss!');
	},
	'AMAZON.StopIntent': function () {
		this.emit(':tell', 'Okay! Tschüss!');
	},
};

exports.handler = function (event, context) {
	const alexa = Alexa.handler(event, context);
	alexa.registerHandlers(handlers);
	alexa.execute();
};