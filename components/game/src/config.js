const options = {
    numberOfStars: 30,
    starSize: 1,
    
    startingGameSpeed: 1000,
    speedMultiplier: 0.08,
    rocketSpeed: 1600,
    rocketCoolDown: 800, // Intervallo di tempo tra un missile e l'altro
    explosionDuration: 400,

    aliensInit: [5, 5, 5], // 3 file, ciascuna con 5 alieni; l'index + 1 è il tipo di alieno
    aliensHorDistance: 20,
    aliensVerDistance: 20,
    aliensHorStep: 20,
    aliensVerStep: 30,
    shootingProbability: 0.25,
    
    maxRocketsOnScreen: 4,
    numberOfLives: 3,

    cannonSize: 50,
    alienSize: 40,
    

    mainColor: '#322BB3' // solo testi e missile
    
}

// Tutte le sprite devono essere quadrate!
export const sprites = {
    cannon: require('../assets/511/cannon.png'),
    explosion1: require('../assets/511/explosion1.gif'),
    explosion2: require('../assets/511/explosion1.gif'),
    alien1_1: require('../assets/511/alien1.png'),
    alien1_2: require('../assets/511/alien1.png'),
    alien2_1: require('../assets/511/alien1.png'),
    alien2_2: require('../assets/511/alien1.png'),
    alien3_1: require('../assets/511/alien1.png'),
    alien3_2: require('../assets/511/alien1.png')
}

export default options