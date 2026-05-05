// Simple chatbot responses
export const getBotReply = (input) => {
  const responses = {
    hello: "Hello! How can I help you today?",
    hi: "Hi there! What can I assist you with?",
    help: "I'm here to help with information about our construction materials and tools. What do you need?",
    products: "We have a wide range of power tools, hand tools, building materials, plumbing, electrical, and safety gear. Check out our products section!",
    contact: "You can contact us through our support chat or visit our store.",
    default: "I'm sorry, I didn't understand that. Can you please rephrase?"
  };

  const lowerInput = input.toLowerCase();
  for (const key in responses) {
    if (lowerInput.includes(key)) {
      return responses[key];
    }
  }
  return responses.default;
};