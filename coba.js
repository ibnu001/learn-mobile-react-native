const product = [
    {
      name: 'Ayam Bakar',
      category: 'Makanan',
      price: 25000
    },
    {
      name: 'Nasi Goreng',
      category: 'Makanan',
      price: 100000
    },
    {
      name: 'Teh Manis',
      category: 'Minuman',
      price: 8000000
    },
  ]

  const groupedProducts = product.reduce((emptObj, product) => {
    // console.log(product);
    if(!emptObj[product.category]) {
      emptObj[product.category] = []
    } 

    emptObj[product.category].push(product)
    return emptObj
  }, {})

  console.log(groupedProducts);