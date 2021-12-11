'use strict';

const parseIfNotObject = (i, points) => {
  if (typeof points[i] !== 'object') {
    points[i] = JSON.parse(points[i]);
  }
}

const shiftXY = (i, {x: dx, y: dy}, points) => {
  points[i].x += dx;
  points[i].y += dy;
}

const moveOnePoint = (i, offset, points) => {
  parseIfNotObject(i, points);
  shiftXY(i, offset, points);  
}

const movePoints = (offset, points) => 
  points.forEach(( _,i) => {
    moveOnePoint(i, offset, points)
  });


const polyline = [
  { x: 0, y: 0 },
  { x: 10, y: 10 },
  '{ "x": 20, "y": 20 }',
  { x: 30, y: 30 },
];

movePoints({ x: 10, y: -5 }, polyline);
console.log({ polyline });