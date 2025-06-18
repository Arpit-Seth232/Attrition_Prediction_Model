const predictController = async (req, res) => {
  const data = req.body;

  const input_data = {
    "data" : data
  }

  try {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input_data),
    });

    const result = await response.json();
    console.log("Prediction Result:", result);

    res.status(200).json({
      prediction: result,
    });
  } catch (error) {
    console.error("Prediction Error:", error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  predictController,
};
