async function simulatePrices() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + "/api/simulate";
  console.log(`Calling ${apiUrl}`);
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Important for POST requests
    },
    // No body needed for this request
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to simulate prices: ${response.status} - ${errorText}`,
    );
  }

  const data = await response.json();
  console.log(data.message);
}

simulatePrices()
  .then(() => {
    console.log("Simulation completed.");
    process.exit(0); // Exit successfully
  })
  .catch((error) => {
    console.error("Simulation failed:", error);
    process.exit(1); // Exit with an error code
  });
