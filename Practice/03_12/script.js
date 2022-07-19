/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import LegoStarwars from "./Legostarwars";

const newLego = new LegoStarwars(
    2,
    1,
    8,
    false,
    10,
    90
);

console.log("Aca esta el nuevo lego",newLego);