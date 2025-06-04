describe('Carrinho de Compras - API DummyJSON', () => {
  it('Deve adicionar um novo carrinho com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/carts/add',
      headers: { 'Content-Type': 'application/json' },
      body: {
        userId: 1,
        products: [
          { id: 144, quantity: 4 },
          { id: 98, quantity: 1 }
        ]
      }
    }).then((response) => {
      expect(response.status).to.eq(201); 
      expect(response.body.products).to.have.length.greaterThan(0);
      expect(response.body.userId).to.eq(1);
    });
  });
});

describe('Carrinho de Compras - API DummyJSON', () => {
  it('Deve atualizar um carrinho existente', () => {
    cy.request({
      method: 'PUT',
      url: 'https://dummyjson.com/carts/1',
      headers: { 'Content-Type': 'application/json' },
      body: {
        merge: true,
        products: [
          { id: 1, quantity: 2 }
        ]
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.products.some(p => p.id === 1)).to.be.true;
    });
  });
});

describe('Carrinho de Compras - API DummyJSON', () => {
  it('Deve remover um carrinho corretamente', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://dummyjson.com/carts/1'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.isDeleted).to.be.true;
    });
  });
});

