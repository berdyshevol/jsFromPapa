'use strict';

const parsers = {
   object: obj => obj,
   string: s => JSON.parse(s)
}

const move = (offset, point) => ({x, y}) => ({
   x: x + offset.x, 
   y: y + offset.y
})

const parse = (item) => {
   const parser = parsers[typeof item]
   return parser(item)
}

const parseAndMove = (point) => {
   const dot = parse(point); 
   return move(offset, dot)
}

const shift = (offset, points) => {
   const parsed = points.map(parse)
   return parsed.map(move(offset));
}

const polyline = [
   {x: 0, y: 0},
   {x: 10, y: 10},
   '{"x": 20, "y": 20}',
   {x: 30, y: 30},
]

const res = shift({x: 10, y: -5}, polyline); 
console.log({ res })

 
