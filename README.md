#### node v18.16.0

Informacion de https://thingsboard.io/docs/reference/mqtt-api/ 


Posicionarse dentro de las carpetas sub, pub y ejecutar el siguinte comando
```
npm i
```
Esto instalara las dependencias necesarias

Corrar lso comandos `node sub.js` y `node pub.js` en terminal 

------

# Usar thingsboard swagger
https://thingsboard.cloud/swagger-ui/#/ 

ThingsBoard proporciona la siguiente API REST para obtener datos de la entidad: 

> NOTA: La API está disponible a través de la interfaz de usuario de Swagger. Consulte la documentación general de la API REST para obtener más detalles. La API es compatible con versiones anteriores de TB v1.0+ y esta es la razón principal por la que las URL de llamadas a la API contienen "complemento".


### get telemetria del dispositivo
https://thingsboard.cloud/swagger-ui/#/telemetry-controller/getLatestTimeseriesUsingGET

```shell
curl -X 'GET' \
  'https://thingsboard.cloud:443/api/plugins/telemetry/DEVICE/c35e6a40-0f02-11ee-ae24-771b6d708e64/values/timeseries?keys=temperature%2Cpas%2Ctemp' \
  -H 'accept: application/json' \
  -H 'X-Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZHR4bGVAZ21haWwuY29tIiwidXNlcklkIjoiMmFlZTI2ODAtMDY2OC0xMWVlLWEyMTItNGQ5NGY5ZTBjMGI5Iiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJzZXNzaW9uSWQiOiI1ZjIyMzU3NS00OGM4LTQ4MDQtOTMwMC0zYjUwMDFhMGExM2QiLCJpc3MiOiJ0aGluZ3Nib2FyZC5jbG91ZCIsImlhdCI6MTY4NzM5Mjc5OCwiZXhwIjoxNjg3NDIxNTk4LCJmaXJzdE5hbWUiOiJFbWlsaW8iLCJsYXN0TmFtZSI6IlBhcnRpZGEiLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsImlzQmlsbGluZ1NlcnZpY2UiOmZhbHNlLCJwcml2YWN5UG9saWN5QWNjZXB0ZWQiOnRydWUsInRlcm1zT2ZVc2VBY2NlcHRlZCI6dHJ1ZSwidGVuYW50SWQiOiIyOWMxYjQ3MC0wNjY4LTExZWUtYTIxMi00ZDk0ZjllMGMwYjkiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIn0.pB-MayQckDhjaQYYT1kD1o3o-vzFfFBFQb-u6zHdpJlGyfIdH1bIFtnFiLs8mkmo7W_bWD_sR_8VEGHZMDrczg'
```
