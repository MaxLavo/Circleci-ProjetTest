import BingoDB from "../database/BingoDB.mjs";

const getCardById = async (cardId) => {
  let card = await BingoDB.findById(cardId);
  console.log(card);
  return card;
};
const Bingo = { getCardById };

export default Bingo;
