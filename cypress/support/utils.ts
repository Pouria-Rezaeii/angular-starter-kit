export function getRandomNumber(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/** generates the shorter possible unique id */
export function generateUniqueIdBasedOnTime() {
  return Number(String(new Date().getTime()).slice(1, -3));
}

export function createUser(params: {
  email: string;
  uniqueId: number | string;
  alias: string;
}) {
  return cy.makeRequest({
    url: "",
    method: "POST",
    body: {
      // removing "@gmail.com"
      name: params.email.slice(0, -10),
      familyName: "Doe",
      email: params.email,
      phoneNumber: `+32${params.uniqueId}123456`,
    },
    alias: params.alias,
  });
  cy.get(`@${params.alias}`);
}
