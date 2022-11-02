const hobbies = ["jogging", "cooking", "diving", "swimming", "reading", "breadmaking", "c++"];

exports.getHobbies = () => {
    return hobbies;
}

exports.getHobby = id => {
    if (id < 1 || id > hobbies.length)
        return null;
    return hobbies[id-1];
}

exports.getHobbyLength = id => {
    if (id < 1 || id > hobbies.length)
        return null;
    return hobbies[id-1].length;
}

exports.getHobbyOfLongestName = () => {
    let longest = hobbies[0];
    for (let i = 1; i < hobbies.length; i++){
        if (hobbies[i].length > longest.length)
            longest = hobbies[i];
    }
    return longest;
}
exports.getHobbyOfShortestName = () => {
    let shortest = hobbies[0];
    for (let i = 1; i < hobbies.length; i++){
        if (hobbies[i].length < shortest.length)
            shortest = hobbies[i];
    }
    return shortest;
}