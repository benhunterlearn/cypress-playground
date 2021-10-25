describe('first test', () => {
	it('doesnt do much', () => {
		expect(true).to.equal(true);
	})
});

//describe('second test', () => {
//	it('it fails...', () => {
//		expect(true).to.equal(false);
//	})
//});

describe('Real test', () => {
	it('Visits the kitchen sink.', () => {
	cy.visit('https://example.cypress.io')
	})
})

describe('Test finding elements', () => {
	it('Find element by content "type"', () => {
		cy.visit('https://example.cypress.io')
		cy.contains('type')
		    .click()
		cy.url().should('include', '/commands/actions')
		cy.get('.action-email')
			.type('fake@email.com')
			.should('have.value', 'fake@email.com')
	})
})

