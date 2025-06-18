const CHUNK_SIZE = 100;

const trainController = async (req, res) => {
  const records = req.body;

  if (!Array.isArray(records) || records.length === 0) {
    return res.status(400).json({ message: "Invalid or empty training data" });
  }

  let allResponses = [];

  try {
    for (let i = 0; i < records.length; i += CHUNK_SIZE) {
      const chunk = records.slice(i, i + CHUNK_SIZE);

      console.log(`Sending chunk ${i / CHUNK_SIZE + 1} with ${chunk.length} records`);

      const response = await fetch("http://localhost:5000/train", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ records: chunk }),
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(`Chunk ${i / CHUNK_SIZE + 1} failed: ${err}`);
      }

      const result = await response.json();
      allResponses.push({
        chunk: i / CHUNK_SIZE + 1,
        message: result.message || "Success",
      });
    }

    res.status(200).json({
      message: "Training completed successfully",
      chunks_trained: allResponses.length,
      details: allResponses,
    });
  } catch (error) {
    console.error("Training Error:", error.message);
    res.status(500).json({
      message: "Error during training",
      error: error.message,
    });
  }
};

module.exports = {
  trainController,
};