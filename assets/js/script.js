const char = createKnight('Hudson');
const monster = createBigMonster();

stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);