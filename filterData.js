// Function to filter the dataset based on a given pattern
export function filterData(data, pattern) {
  return data
    .map((country) => {
      // For each person in the country, filter their animals
      const filteredPeople = country.people
        .map((person) => {
          // Keep only the animals whose name includes the pattern (case-insensitive)
          const filteredAnimals = person.animals.filter((animal) =>
            animal.name.toLowerCase().includes(pattern.toLowerCase())
          );
          // If the person has any animals left after filtering, return them
          return filteredAnimals.length > 0
            ? {
                name: person.name,
                animals: filteredAnimals,
              }
            : null; // Otherwise, return null to remove them later
        })
        .filter(Boolean); // Remove null values (people without matching animals)

      // If the country has any people left after filtering, return it
      return filteredPeople.length > 0
        ? {
            name: country.name,
            people: filteredPeople,
          }
        : null; // return null to remove the country
    })
    .filter(Boolean); // Remove null values (countries without people)
}
