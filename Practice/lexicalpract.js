

// First fullName variable defined in the global scope:
const fullName = "Vishakha";

// Nested functions containing two more fullName variables:
function profile() {
  const fullName = "Vaibhav";
  function sayName() {
    const fullName = "Ramesh";
    function writeName() {
      return fullName;
    }
    return writeName();
  }
  return sayName();
}

sayName()
