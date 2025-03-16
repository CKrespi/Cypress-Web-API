/// <reference types="cypress"/>

describe("Buscar dispositivos", () => {
    it("Buscar dispositivos específicos", () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/7',
        }).then((response) => {
           expect(response.status).to.equal(200);
           expect(response.body.id).to.equal("7");
        });     
    });

    it("Buscar dispositivo inexistente", () => {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/testeerro123456',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body.error).to.equal("Oject with id=testeerro123456 was not found.");
        });
    });

    it("Cadastrar dispositivo", () => {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                name: "Celular Cauê",
                data: {
                    year: 2019,
                    price: 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    cor: "verde",
                    },
                },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal("Celular Cauê");
        });
    });
});