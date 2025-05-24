
export default {
    listarProdutos: async () => {
      //const response = await api.get("/api/v1/produtos/")

      const response = {
        produtos: [
            {
                id: 1,
                nome: 'Cafe Badilico',
                descricao: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
                imagem: 'https://i.pinimg.com/736x/1f/c8/85/1fc885056246e9ed5c020383cdb9fa3b.jpg',
                titulo: 'Local Favorite',
                complemento: 'Italian, Cafe',
              
              },
              {
                id: 2,
                nome: 'Box Sandubão',
                descricao: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
                imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_729130-MLA82199720415_012025-F.webp',
                titulo: 'Local Favorite',
                complemento: 'Italian, Cafe',
              
              },
              {
                id: 3,
                nome: 'Origami Box',
                descricao: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
                imagem: 'https://i.pinimg.com/736x/52/5d/4d/525d4dbb2fdd6e973e422d53db7655aa.jpg',
                titulo: 'Local Favorite',
                complemento: 'Italian, Cafe',
              
              },
              {
                id: 4,
                nome: 'Picnic Box Fork',
                descricao: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
                imagem: 'https://i.pinimg.com/736x/bc/67/93/bc6793b45efc262e649c5e4a1ccf5f7f.jpg',
                titulo: 'Local Favorite',
                complemento: 'Italian, Cafe',
              
              }
        ]
      }
      return response
    },

  }