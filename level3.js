import test from 'tape'
import { map, filter, reduce, compose } from 'nanofp'
import capitalizeWords from './lib/capitalize'

const paintings = [
  {
    name: 'irises',
    movement: 'post-impressionism',
    artist: 'vincent van gogh',
    yearCreated: 1889,
    lastPriceSold: 53900000
  },
  {
    name: 'le grand canal',
    movement: 'impressionism',
    artist: 'claude monet',
    yearCreated: 1908,
    lastPriceSold: 35000000
  },
  {
    name: 'salvator mundi',
    movement: 'renaissance',
    artist: 'leonardo da vinci',
    yearCreated: 1490,
    lastPriceSold: 450000000
  },
  {
    name: 'a sunday afternoon on the island of la grande jatte',
    movement: 'post-impressionism',
    artist: 'georges seurat',
    yearCreated: 1884,
    lastPriceSold: 35200000
  },
  {
    name: 'guernica',
    movement: 'surrealism',
    artist: 'pablo picasso',
    yearCreated: 1937,
    lastPriceSold: 200000000
  },
  {
    name: 'umbrellas',
    movement: 'impressionism',
    artist: 'pierre-auguste renoires',
    yearCreated: 1886,
    lastPriceSold: 450000
  }
]

/* Level 3 - Paintings */
export default function() {
  const ex1 =
    'Use map to transform the list of painting names to uppercase the first letter of each word'
  const exercise1 = _ => {
    return paintings.map(p => capitalizeWords(p.name))
  }

  const ex2 = 'Use filter to return a list of paintings done in the 1800s'
  const exercise2 = _ => {
    return paintings.filter(p => p.yearCreated >= 1800 && p.yearCreated < 1900)
  }

  const ex3 =
    'Use reduce to count the number of paintings that were done in the 1800s'
  const exercise3 = _ => {
    return paintings.reduce(
      (acc, p) =>
        p.yearCreated >= 1800 && p.yearCreated < 1900 ? acc + 1 : acc,
      0
    )
  }

  const ex4 =
    'Use map, filter and reduce with compose to return the price of the the most expensive painting from the 1800s '
  const exercise4 = _ => {
    return compose(
      reduce((acc, v) => (acc > v ? acc : v), 0),
      map(p => p.lastPriceSold),
      filter(p => p.yearCreated < 1900 && p.yearCreated >= 1800)
    )(paintings)
  }

  const ex5 = `Use map to transform the lastPriceSold to USD currency format (ex: $400,000.00)

    ** Hint: Check MDN for the toLocaleString method on the Number Object **
    `
  const exercise5 = _ => {
    return paintings.map(p =>
      p.lastPriceSold.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    )
  }

  const ex6 = `Use compose and filter to return impressionism paintings, map over them and return the names of the paintings with the first letter capitalized.`

  const exercise6 = _ => {
    return compose(
      map(p => capitalizeWords(p.name)),
      filter(p => p.movement === 'impressionism')
    )(paintings)
  }

  /* tests to validate exercises go here */
  test('test', assert => {
    assert.plan(6)
    assert.same(
      exercise1(),
      [
        'Irises',
        'Le Grand Canal',
        'Salvator Mundi',
        'A Sunday Afternoon On The Island Of La Grande Jatte',
        'Guernica',
        'Umbrellas'
      ],
      ex1
    )

    assert.same(
      exercise2(),
      [
        {
          name: 'irises',
          movement: 'post-impressionism',
          artist: 'vincent van gogh',
          yearCreated: 1889,
          lastPriceSold: 53900000
        },
        {
          name: 'a sunday afternoon on the island of la grande jatte',
          movement: 'post-impressionism',
          artist: 'georges seurat',
          yearCreated: 1884,
          lastPriceSold: 35200000
        },
        {
          name: 'umbrellas',
          movement: 'impressionism',
          artist: 'pierre-auguste renoires',
          yearCreated: 1886,
          lastPriceSold: 450000
        }
      ],
      ex2
    )
    assert.equals(exercise3(), 3, ex3)
    assert.same(exercise4(), 53900000, ex4)
    assert.same(exercise5(), [
      '$53,900,000.00',
      '$35,000,000.00',
      '$450,000,000.00',
      '$35,200,000.00',
      '$200,000,000.00',
      '$450,000.00'
    ])
    assert.same(exercise6(), ['Le Grand Canal', 'Umbrellas'], ex6)
  })
}
