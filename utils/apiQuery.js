import openai from "./openAi";

const query = async (prompt, model) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      maxTokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
    })
    .then((res) => {
      return res.data.choices[0].text;
    })
    .catch((err) => {
      console.log(err);
    });

  return res;
};

export default query;
