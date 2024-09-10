function random_number_generator(){
    return Math.floor(Math.random()*100) + 1;
}

function celcius_to_kelvin(degree){
    return degree + 273;
}

module.exports = {random_number_generator,celcius_to_kelvin,};