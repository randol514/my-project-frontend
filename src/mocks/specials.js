import greekSaladImage from 'assets/greek-salad.jpg'
import bruschettaImage from 'assets/bruschetta.jpg'
import lemonDessertImage from 'assets/lemon-dessert.jpg'

export const specials = [
  {
    id: 1,
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$12.99',
    description: `The famous greek salad of crispy lettuce, peppers, olives and
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary.`,
  },
  {
    id: 2,
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$13.99',
    description: `Our Bruschetta is made from grilled bread that has been
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$9.00',
    description: `This comes straight from grandma's recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];