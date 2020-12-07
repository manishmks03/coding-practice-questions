var request = [
  "Anna",
  "Civic",
  "Kayak",
  "Don't nod .",
  "I did, did I?",
  "My gym",
  "Red rum, sir, is murder",
  "Step on no pets",
  "Top spot",
  "Was it a cat I saw?",
  "Eva, can I see bees in a cave?",
  "No lemon, no melon"
];

for (let index = 0; index < request.length; index++) {
  const element = request[index];
  const stringConcat = element.toLowerCase().replace(/[^a-zA-Z]/g, "");
  console.log(isPallindrome(stringConcat));
}

function isPallindrome(string) {
  if (string.length === 1) return s;
  let result = true;
  const length = string.length;
  for (let index = 0; index < length; index++) {
    const element = string[index];
    if (element !== string[length - 1 - index]) {
      result = false;
      break;
    }
  }
  return result;
}
