exports.handler = async (event) => {
  const { intent, parameters } = JSON.parse(event.body);

  if (intent === 'Calcular IMC') {
    const { peso, altura } = parameters;

    // Cálculo do IMC
    const imc = // Cálculo do IMC com base no peso e altura

    const response = {
      fulfillmentText: `Seu IMC é ${imc}.`,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  }
};
