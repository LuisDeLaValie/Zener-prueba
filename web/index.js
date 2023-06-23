const tocken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJURFR4QG91dGxvb2suY29tIiwidXNlcklkIjoiNGViZmJjNzAtMGZjMC0xMWVlLTk0NjItMTkyM2FhZmM0NTVmIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJzZXNzaW9uSWQiOiI4NzFhNTFjNS1jODY4LTRkNDctOGM0NS0yZWUwYWNlNmM0NzAiLCJpc3MiOiJ0aGluZ3Nib2FyZC5jbG91ZCIsImlhdCI6MTY4NzQ1NDIwMiwiZXhwIjoxNjg3NDgzMDAyLCJmaXJzdE5hbWUiOiJFbWlsaW8iLCJsYXN0TmFtZSI6IlBhcnRpZGEiLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsImlzQmlsbGluZ1NlcnZpY2UiOmZhbHNlLCJwcml2YWN5UG9saWN5QWNjZXB0ZWQiOnRydWUsInRlcm1zT2ZVc2VBY2NlcHRlZCI6dHJ1ZSwidGVuYW50SWQiOiJjYTg4MjEzMC1hYmI2LTExZWQtOWYyOC01MzU4ZTAyZjliODIiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIn0.XOXLBdvJz6xjnMJOaSR4dMnGHuKnQOhyd3ZYkKc75ZRF8Qsb748WZQqDc2w8r3Sg9lPLjPS0yp1KFePqL2Xpag"

var data = {}

$(document).ready(function () {
    console.log("ready!");
    renderTable();
});


function renderTable() {
    GetTelemetry();
    setTimeout(renderTable, 3000);
}

function GetTelemetry() {
    var settings = {
        "url": "https://thingsboard.cloud:443/api/plugins/telemetry/DEVICE/f9439460-d8fb-11ed-ab36-91b88e4188de/values/timeseries",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${tocken}`
        },
    };

    $.ajax(settings).done(function (response) {
        data = response;

        $("#temperature-val").text(data.temperature[0].value);
        $("#temperature-set-val").val(data.temperature[0].value);
        $("#temperature-ts").text(parseFecha(data.temperature[0].ts));

        $("#humidity-val").text(data.humidity[0].value);
        $("#humidity-set-val").val(data.humidity[0].value);
        $("#humidity-ts").text(parseFecha(data.humidity[0].ts));

        $("#power-val").text(data.power[0].value);
        $("#power-set-val").val(data.power[0].value);
        $("#power-ts").text(parseFecha(data.power[0].ts));

        $("#voltage-val").text(data.voltage[0].value);
        $("#voltage-set-val").val(data.voltage[0].value);
        $("#voltage-ts").text(parseFecha(data.voltage[0].ts));

        $("#battery-val").text(data.battery[0].value);
        $("#battery-set-val").val(data.battery[0].value);
        $("#battery-ts").text(parseFecha(data.battery[0].ts));

        $("#rssi-val").text(data.rssi[0].value);
        $("#rssi-set-val").val(data.rssi[0].value);
        $("#rssi-ts").text(parseFecha(data.rssi[0].ts));

        $("#snr-val").text(data.snr[0].value);
        $("#snr-set-val").val(data.snr[0].value);
        $("#snr-ts").text(parseFecha(data.snr[0].ts));

        $("#energy-val").text(data.energy[0].value);
        $("#energy-set-val").val(data.energy[0].value);
        $("#energy-ts").text(parseFecha(data.energy[0].ts));

        $("#power_facto-val").text(data.power_factor[0].value);
        $("#power_facto-set-val").val(data.power_factor[0].value);
        $("#power_facto-ts").text(parseFecha(data.power_factor[0].ts));

        $("#current-val").text(data.current[0].value);
        $("#current-set-val").val(data.current[0].value);
        $("#current-ts").text(parseFecha(data.current[0].ts));

        $("#frequency-val").text(data.frequency[0].value);
        $("#frequency-set-val").val(data.frequency[0].value);
        $("#frequency-ts").text(parseFecha(data.frequency[0].ts));

        $("#packet_type-val").text(data.packet_type[0].value);
        $("#packet_type-set-val").val(data.packet_type[0].value);
        $("#packet_type-ts").text(parseFecha(data.packet_type[0].ts));



    });
}

function parseFecha(params) {
    const result2 = new Date(params).toLocaleString('en-GB', {
        hour12: false,
    });
    return result2;
}