'use strict';

const moveOnePoint = (point, dx, dy, points) => {
    if (typeof point === 'object') {
      point.x += dx;
      point.y += dy;
    } else {
      const i = points.indexOf(point);
      points[i] = JSON.parse(point);
      points[i].x += dx;
      points[i].y += dy;
    }
}

const movePoints = ({x: dx, y: dy}, points) => {
  points.forEach((point) => {
    moveOnePoint(point, dx, dy, points)
  });
  return points;
};

const polyline = [
  { x: 0, y: 0 },
  { x: 10, y: 10 },
  '{ "x": 20, "y": 20 }',
  { x: 30, y: 30 },
];

movePoints({ x: 10, y: -5 }, polyline);
console.log({ polyline });