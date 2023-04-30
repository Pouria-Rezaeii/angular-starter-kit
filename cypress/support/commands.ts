import Loggable = Cypress.Loggable;
import Timeoutable = Cypress.Timeoutable;
import Withinable = Cypress.Withinable;
import Shadow = Cypress.Shadow;
import RequestOptions = Cypress.RequestOptions;

/* eslint-disable-next-line */
const {getRandomNumber, generateUniqueIdBasedOnTime} = require("./utils");
const testIdSelector = "ng-reflect-dhl-data-test-id";

/* eslint-disable-next-line @typescript-eslint/no-namespace */
declare namespace Cypress {
  interface Chainable<Subject = any> {
    getByTestIdAtr(
      testId: string,
      options?: GetByTestIdAtrOptionParam
    ): ReturnType<typeof getByTestIdAtr>;

    login(username: string, password: string): ReturnType<typeof login>;

    loginAsAdmin(): ReturnType<typeof loginAsAdmin>;

    /** picks year and month randomly but the day is not (to help assertion) */
    openAndSelectRandomDate(
      testId: string,
      dayIndex?: number
    ): ReturnType<typeof openAndSelectRandomDate>;

    openAndSelectSpecificOption(
      testId: string,
      index: number | "last"
    ): ReturnType<typeof openAndSelectSpecificOption>;

    /** reserves last item for edit apis */
    openAndSelectRandomOption(
      testId: string
    ): ReturnType<typeof openAndSelectRandomOption>;

    /** last numbers are always static (default is 123456), you can change them for edit apis */
    openAndSelectRandomPhone(
      testId: string,
      staticLastNumbers?: number
    ): ReturnType<typeof openAndSelectRandomPhone>;

    /** last items can be ignored and reserved for edit apis */
    pickRandomOption(params?: {
      ignoreLastItem: boolean;
    }): ReturnType<typeof pickRandomOption>;

    pickSpecificOption(index: number): ReturnType<typeof pickSpecificOption>;

    makeRequest(params: RequestParams): ReturnType<typeof makeRequest>;

    clickTableFirstItem(): ReturnType<typeof clickTableFirstItem>;

    clickTableItem(itemIndex: number): ReturnType<typeof clickTableItem>;
  }
}

function getByTestIdAtr(
  dataTestId: string,
  options?: GetByTestIdAtrOptionParam
) {
  return cy.get(
    `[${testIdSelector}=${dataTestId}]`.concat(
      options?.childrenPath ? ` ${options.childrenPath}` : ""
    ),
    options
  );
}

function login(username: string, password: string) {
  // specifically for keycloak
  // cy.visit("/");
  // cy.intercept({method: "POST", url: "**/token"}).as("token");
  // cy.get("input#username", {timeout: 40 * 1000}).type(username);
  // cy.get("input#password").type(password);
  // cy.get("input#kc-login").click();
  // cy.get("mat-drawer-content", {timeout: 20 * 1000}).should("be.visible");
  // cy.wait("@token").then((xhr) => {
  //   localStorage.setItem("kc-token", xhr.response!.body.access_token);
  // });
  // cy.wait(50);
}

function loginAsAdmin() {
  // login("admin@gmail.com", "123456");
}

/** picks year and month randomly but the day is not (to help assertion) */
function openAndSelectRandomDate(testId: string, dayIndex = 4) {
  // cy.get(`[${testIdSelector}=${testId}] input`)
  //   .next("mat-icon")
  //   .click({force: true});
  // cy.getByTestIdAtr(testId)
  //   .find("label")
  //   .then((labels) => {
  //     cy.wrap(labels.eq(1)).click({force: true});
  //     pickRandomOption()
  //       .then(() => {
  //         cy.wrap(labels.eq(2)).click({force: true});
  //         return pickRandomOption();
  //       })
  //       .then(() => {
  //         cy.wrap(labels.eq(3)).click({force: true});
  //         pickSpecificOption(dayIndex).then(() => {
  //           cy.get(
  //             `[${testIdSelector}=${testId}] [${testIdSelector}=${"datepicker-submit"}]`
  //           ).click({
  //             force: true,
  //           });
  //         });
  //       });
  //   });
}

/** reserves last item for edit apis */
function openAndSelectRandomOption(testId: string) {
  // return cy
  //   .getByTestIdAtr(testId)
  //   .click({force: true})
  //   .then(() => {
  //     pickRandomOption({ignoreLastItem: true});
  //   });
}

function openAndSelectSpecificOption(testId: string, index: number | "last") {
  // return cy
  //   .getByTestIdAtr(testId)
  //   .click({force: true})
  //   .then(() => {
  //     pickSpecificOption(index);
  //   });
}

/** last numbers are always static (default is 123456), you can change them for edit apis */
function openAndSelectRandomPhone() {
  return "";
}

// function openAndSelectRandomPhone(
//   testId: string,
//   staticLastNumbers = 123456
// ): Cypress.Chainable<JQuery<HTMLElement>> {
//   cy.getByTestIdAtr(testId)
//     .prev("button").click();
//   return pickRandomOption().then(() => {
//     cy.getByTestIdAtr(testId).type(
//       String(generateUniqueIdBasedOnTime()).concat(staticLastNumbers.toString())
//     );
//   });
// }

/** last items can be ignored and reserved for edit apis */
function pickRandomOption(params?: {ignoreLastItem: boolean}) {
  // return cy.get("mat-option").then((options) => {
  //   cy.wrap(options)
  //     .eq(
  //       getRandomNumber(
  //         0,
  //         // check if select field has more than 1 item, before calling options.length - 2
  //         params?.ignoreLastItem && options.length > 1
  //           ? options.length - 2
  //           : options.length - 1
  //       )
  //     )
  //     .click();
  // });
}

function pickSpecificOption(index: number | "last") {
  // return cy.get("mat-option").then((options) => {
  //   cy.wrap(options)
  //     .eq(index === "last" ? options.length - 1 : index)
  //     .click({force: true});
  // });
}

function makeRequest({url, alias, token, ...rest}: RequestParams) {
  // return cy.getAllLocalStorage().then((res) => {
  //   const _token = res[Object.keys(res)[0]]?.["kc-token"];
  //   cy.request({
  //     url: `http://api.dana.net:8081/${url.scope}/api/v1/${url.path}`,
  //     headers: {Authorization: `Bearer ${token || _token}`},
  //     ...rest,
  //   }).as(alias);
  // });
}

function clickTableFirstItem() {
  // return cy
  //   .getByTestIdAtr("content-table", {childrenPath: "tbody tr"})
  //   .eq(0)
  //   .find("button")
  //   .eq(0)
  //   .click();
}

function clickTableItem(itemIndex: number) {
  // return cy
  //   .getByTestIdAtr("content-table", {childrenPath: "tbody tr"})
  //   .eq(itemIndex)
  //   .find("button")
  //   .eq(0)
  //   .click();
}

Cypress.Commands.addAll({
  getByTestIdAtr,
  login,
  loginAsAdmin,
  openAndSelectRandomDate,
  openAndSelectRandomOption,
  openAndSelectSpecificOption,
  openAndSelectRandomPhone,
  pickRandomOption,
  pickSpecificOption,
  makeRequest,
  clickTableFirstItem,
  clickTableItem,
});

// ============================================================================================
type GetByTestIdAtrOptionParam = Partial<
  Loggable & Timeoutable & Withinable & Shadow
> & {
  childrenPath?: string;
};

type RequestParams = Partial<Omit<RequestOptions, "headers">> & {
  alias: string;
  token?: string;
};

//
// ***********************************************
// This example commands.js shows you how to create various custom commands and overwrite existing commands.
//
// For more comprehensive examples of custom commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
