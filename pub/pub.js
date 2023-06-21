var mqtt = require('mqtt');

var publish = 0;

// conectarce al dispositovo Emilio
var client = mqtt.connect(
  'mqtt://mqtt.thingsboard.cloud',
  { username: "CrQsX8vOwDjkKc9F2a7V" } // token del dispositivo 
);

/// publicar datos de telemetria.
/// mandar el dato de temperatura 
var random1 = getRandomArbitrary(20, 50);
client.publish(
  'v1/devices/me/telemetry',
  `{ "temperature": ${random1}}`,
  () => {
    console.log(`telemetry :: {"temperature": ${random1}}`);
    close();
  }
);

// publicar datos de atributos.
// mandar los atrivutos del dispositivo como la clave y si esta activo o no
client.publish(
  'v1/devices/me/attributes',
  '{"clave": "4as4s7sasda445s", "activo": true}',
  () => {
    close();
    console.log(`atributos cliente :: {"attribute1": "value1", "attribute2": true}`);
  }
)


// publicar datos de rpc
client.publish(
  'v1/devices/me/rpc/response/2',
  '{"adsd":"asds"}',
  () => {
    close();
    console.log(`atributos :: {"adsd":"asds"}`);
  }
);




function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function close() {
  publish++;
  if (publish == 3) {
    client.end();
  }
}

