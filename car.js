let xCars = [600, 600, 600];
let yCars = [40, 96, 150];
let carVelocities = [2.5, 3, 3.7];

function showsCar()
{
    for (let i = 0; i < carImages.length; i++)
    {
        image(carImages[i], xCars[i], yCars[i], 50, 40);
    }
}

function movesCar()
{
    for (let i = 0; i < carImages.length; i++)
    {
        xCars[i] -= carVelocities[i];
    }
}

function resetCarPositionToInitial()
{
    for (let i = 0; i < carImages.length; i++)
    {
        if (passedWholeScreen(xCars[i]))
        {
            xCars[i] = 600;
        }
    }
}

function passedWholeScreen(xCars)
{
    return xCars < - 50;
}