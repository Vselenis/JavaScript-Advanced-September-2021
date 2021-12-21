function solve(area, vol, input) {
    const cubes = JSON.parse(input);
    const cube = cubes[0]

    const result = [];

    for (let cube of cubes){
        const cubeArea = area.apply(cube);
        const cubeVolume = vol.apply(cube);

        result.push({
            area: cubeArea,
            volume: cubeVolume
        })
    }


    return result
}

