import data from "./data.js";
import { filterData } from "./filterData.js";
import { countData } from "./countData.js";

const arg = process.argv[2];

// Check if the argument starts with "--filter="
if (arg?.startsWith("--filter=")) {
  // Extract the pattern from the argument (everything after '=')
  const pattern = arg.split("=")[1];

  // Filter the data using the pattern
  const result = filterData(data, pattern);

  // Print the result in a readable JSON format
  console.log(JSON.stringify(result, null, 2));
}

// If the argument is exactly "--count"
else if (arg === "--count") {
  // Count and annotate the data
  const result = countData(data);

  // Print the result in a readable JSON format
  console.log(JSON.stringify(result, null, 2));
}

// If the argument is not valid, show usage instructions
else {
  console.log("Usage:");
  console.log("  node app.js --filter=pattern");
  console.log("  node app.js --count");
}
