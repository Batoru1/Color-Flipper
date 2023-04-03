# Color-Flipper

Try n make.

Finished this simple color-flipper app :)

Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).

This number is then multiplied by 16777215, which is the decimal equivalent of the highest possible value in a six-digit hexadecimal color code (FFFFFF). This generates a random number between 0 and 16777215.

Math.floor() rounds down this random number to the nearest integer.

.toString(16) converts the rounded number to a string in base-16 (hexadecimal) format.

"#" + concatenates the "#" symbol with the hexadecimal string to create a valid hexadecimal color code.
