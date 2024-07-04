function solution(bandage, health, attacks) {
    const MAX_HEALTH = health
    const attackTimeList = attacks.map(attack => attack[0])
    const attackDamageList = attacks.map(attack => attack[1])
    let count = 0;
    for (let t = 1; t <= attackTimeList.at(-1); t++) {
       if (attackTimeList.includes(t)) {
           health -= attackDamageList[attackTimeList.indexOf(t)]
           count = 0;
           if (health <= 0) {
               return -1
           }
       } else {
           if (count < bandage[0]) {
               health = getHealth(health + bandage[1], MAX_HEALTH)
               count += 1;
           }
           if (count === bandage[0]) {
               health = getHealth(health + bandage[2], MAX_HEALTH)
               count = 0;
           }
       }
        console.log(health)
    }
    return health
}

const getHealth = (hp, max) => {
    if (hp >= max) {
        return max
    }
    return hp
}