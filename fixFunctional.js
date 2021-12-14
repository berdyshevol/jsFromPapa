'use strict';

const conditionalParsing = (point) => 
  typeof point !== 'object' 
    ? JSON.parse(point) 
    : point

const shiftPoint = ({x: dx, y: dy}, {x, y}) => ({
  x: x + dx,
  y: y + dy 
})

const moveOnePoint = (offset) => 
  (point) => shiftPoint(offset, conditionalParsing(point) )

const movePoints = (offset, points) => 
  points.map( moveOnePoint(offset) )
  
const polyline = [
  { x: 0, y: 0 },
  { x: 10, y: 10 },
  '{ "x": 20, "y": 20 }',
  { x: 30, y: 30 }
];

const newShiftedPolyline = movePoints({ x: 10, y: -5 }, polyline);
console.log({ newShiftedPolyline });

