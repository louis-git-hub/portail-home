document.getElementById('toggleGate').addEventListener('click', function() {
    fetch('https://php.databeam.eu/tuya/garage.php/on')
});




document.getElementById('toggleGateOff').addEventListener('click', function() {
    fetch('https://php.databeam.eu/tuya/garage.php/off')
});