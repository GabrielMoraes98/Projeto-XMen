const largeCharacterImage = document.getElementById("large-character-image");
const characterName = document.getElementById("character-name");
const characters = document.querySelectorAll(".character");

characters.forEach((character) => {
  character.addEventListener("mouseenter", () => {
    removeSelectedCharacter();

    character.classList.add("selected");

    const { characterAddress, idValue } = changeCharacterName(character);
    changeCharacterImage(characterAddress, idValue);
    changeCharacterDescription(character);
  });
});

function changeCharacterDescription(character) {
  const description = document.getElementById("description");
  const descriptionValue = character.attributes[2].value;
  description.innerText = descriptionValue;
}
function changeCharacterImage(characterAddress, idValue) {
  largeCharacterImage.src = characterAddress;
  characterName.innerText = idValue;
}
function changeCharacterName(character) {
  const idValue = character.attributes.id.value;
  const characterAddress = `src/imagens/card-${idValue}.png`;
  return { characterAddress, idValue };
}
function removeSelectedCharacter() {
  const selectedCharacter = document.querySelector(".selected");
  selectedCharacter.classList.remove("selected");
}
