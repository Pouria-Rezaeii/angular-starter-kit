const sampleKey = "sample-key";

export const localSt = {
  sample: {
    set: (value: string) => cy.setLocalStorage(sampleKey, value),
    get: () => cy.getLocalStorage(sampleKey),
    remove: () => cy.removeLocalStorage(sampleKey),
  },
};
