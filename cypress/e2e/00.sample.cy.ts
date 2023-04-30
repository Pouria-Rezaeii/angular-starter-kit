import {localSt} from "../support/localStorage";
import {generateUniqueIdBasedOnTime} from "../support/utils";

enum GenderEnum {
  Female = "FEMALE",
  Male = "MALE",
}

describe("My Example File", function () {
  let randomNumber = generateUniqueIdBasedOnTime();

  beforeEach(function () {
    cy.restoreLocalStorage();
    cy.fixture("mock").then(function (data) {
      this["mock"] = data;
    });
  });

  afterEach(function () {
    randomNumber++;
    cy.saveLocalStorage();
  });

  it.only("", function () {
    cy.visit("/");
  });

  it("", function () {
    // reading from localStorage
    localSt.sample.get().then((value) => {
      cy.visit("/");
      cy.getByTestIdAtr("main-container").should("be.visible");
      cy.getByTestIdAtr("sidebar-button-test").should("be.visible");
      cy.getByTestIdAtr("sidebar-button-test").click();
      cy.url().should("includes", "sample");
      // upload sonography file
      cy.fixture("files/mock.jpg", null).then((file) => {
        cy.getByTestIdAtr("upload-field").selectFile(file, {
          force: true,
        });
        // before calling api
        cy.intercept({method: "POST", url: "**/upload**"}).as("uploadFile");
        cy.wait("@uploadFile").then(() => {
          cy.get("app-add-button").click();
          cy.url().should("includes", "create");

          // filling out the form
          cy.getByTestIdAtr("firstName").type(`test_${randomNumber}`);
          cy.getByTestIdAtr("lastName").type("Doe");
          cy.openAndSelectRandomOption("genderType");
          cy.getByTestIdAtr("description").type((this as any).description);

          cy.intercept({method: "POST", url: "**/createSample**"});
          // calling api
          cy.getByTestIdAtr("submit-form").click();
          cy.wait("@createSample").then((xhr) => {
            // request assertions
            const body = xhr.request.body;
            expect(body.firstName).contains(`test_${randomNumber}`);
            expect(body.lastName).equal("Doe");
            expect(body.genderType).oneOf(Object.values(GenderEnum));
            expect(body.description).equal((this as any).description);

            // response assertions
            cy.wrap(xhr.response).should("have.property", "statusCode", 201);
          });
        });
      });
    });
  });
});
