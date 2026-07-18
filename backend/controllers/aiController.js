const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const generateDescription = async (req, res) => {
  try {
    const { productName, category, features } = req.body;

    if (!productName || !category || !features) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const prompt = `
You are an expert e-commerce copywriter.

Generate a professional product description for the following product.

Product Name: ${productName}
Category: ${category}
Features: ${features}

Return the response in this format:

Title:
<catchy title>

Description:
<120-150 words>

Key Features:
- Point 1
- Point 2
- Point 3
- Point 4
- Point 5

Call To Action:
<one persuasive sentence>
`;

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a professional e-commerce content writer.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 500,
    });

    res.status(200).json({
      success: true,
      description: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Groq Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate product description.",
    });
  }
};

module.exports = {
  generateDescription,
};