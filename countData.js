// Function to count and label the data
export function countData(data) {
  return data.map((country) => {
    // For each person, add the number of animals to their name
    const countedPeople = country.people.map((person) => {
      const animalCount = person.animals.length;
      return {
        name: `${person.name} [${animalCount}]`,
        animals: person.animals,
      };
    });

    // Add the number of people to the country's name
    return {
      name: `${country.name} [${countedPeople.length}]`,
      people: countedPeople,
    };
  });
}
