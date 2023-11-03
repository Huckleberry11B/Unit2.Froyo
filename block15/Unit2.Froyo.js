const userInputString = prompt(
    "Please enter some Froyo flavors separated by commas.",
    "vanilla,chocolate chip mint,vanilla,strawberry,coffee,coffee"
  );

  const stringArray = userInputString.split(",");

  const flavors = [];

for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const flavors = count(str);
  flavors.push(flavors);
}

