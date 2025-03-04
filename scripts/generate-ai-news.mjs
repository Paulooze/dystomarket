async function generateAINewsArticle() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL + "/api/news"; // Use environment variable
  console.log(`Calling ${apiUrl}`); // Log the URL for debugging

  try {
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
        `Failed to generate AI news: ${response.status} - ${errorText}`
      );
    }

    const data = await response.json();
    console.log(data.message); // Log success message
  } catch (error) {
    console.error("Generation failed:", error);
    process.exit(1); // Exit with an error code on failure
  }
}

generateAINewsArticle()
  .then(() => {
    console.log("Generation completed.");
    process.exit(0); // Exit successfully
  })
  .catch((error) => {
    // This catch is likely redundant now, but good practice
    console.error("Generation failed:", error);
    process.exit(1);
  });
