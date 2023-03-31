let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 263, 318];
let carVelocities = [3, 3.5, 4.2, 3.8, 5.5, 2.8];
let carLength = 50;
let carHeight = 40;

function showsCar()
{
    for (let i = 0; i < carImages.length; i++)
    {
        image(carImages[i], xCars[i], yCars[i], carLength, carHeight);
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