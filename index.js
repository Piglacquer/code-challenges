const { stringifyJSON } = require('./stringifyJSON')

console.log(stringifyJSON({
  hi: 2,
  hello: {
    object: 2
  },
  hey: function () {},
  why: undefined,
  heresAnArray: [1, 2, 3, 4, 5]
})
)
