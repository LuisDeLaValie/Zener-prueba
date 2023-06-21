const mqtt = require('mqtt')

var client = mqtt.connect(
  'mqtt://mqtt.thingsboard.cloud',
  { username: "CrQsX8vOwDjkKc9F2a7V" }
);


client.on('connect', function () {
  console.log(" ::::::::Conectado ::::::::");

  /* /// atributos desde el servidor 
  client.subscribe('v1/devices/me/attributes', () => {
    console.log("atributos => /attributes");
  }); */

  /// atriburos cliente
  /// nos mantenemos escuchando los cambio de los atributos del dispositivo
  client.subscribe('v1/devices/me/attributes/response/+', () => {
    console.log("attributes => /attributes/response/+");
    /// indicadmos que atributos que remos escuhar
    client.publish(
      'v1/devices/me/attributes/request/1',
      '{"clientKeys":"clave,activo", "sharedKeys":"shared1,shared2"}'
    )
  });


  /// RPC
  /// nos mantenesmos escuchando los cambios de los procedimintos remotos 
  client.subscribe('v1/devices/me/rpc/request/+', () => {
    console.log("RPC => /rpc/request/+");
    client.publish('v1/devices/me/rpc/response/1', '{"method":"valorr","params":true}');

  });

})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(`${topic} - ${message.toString()}`);
  if (topic.includes("v1/devices/me/rpc/request/")) {
    var requestId = topic.slice('v1/devices/me/rpc/request/'.length);
    client.publish('v1/devices/me/rpc/response/' + requestId, message);
    //   client.end()
  }
})

