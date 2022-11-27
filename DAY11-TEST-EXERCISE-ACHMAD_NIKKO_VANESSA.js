const QueueFood = require('./DAY11-EXERCISE-ACHMAD_NIKKO_VANESSA');

const queue = new QueueFood();
queue.enQueue('Nasi Padang');
queue.enQueue('Nasi Rames');
queue.enQueue('Gule Ayam');
queue.enQueue('Sate Ayam');

queue.executeOrder();