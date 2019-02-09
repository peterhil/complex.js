/**
 * Cartesian Coordinate type definition
 */
type Cartesian = {
  x: number;
  y: number;
};

/**
 * An helper function that checks if an object is a Cartesian coordinate.
 */
function isCartesian(x: any): x is Cartesian {
  if (x === undefined) return false;
  return !!x.x && !!x.y && typeof x.x === 'number' && typeof x.y === 'number';
}

/**
 * Polar coordinate type definition
 */
type Polar = {
  r: number;
  p: number;
};

/**
 * An helper function that checks if an object is a Polar coordinate.
 */
function isPolar(x: any): x is Polar {
  if (x === undefined) return false;
  return !!x.r && !!x.p && typeof x.r === 'number' && typeof x.p === 'number';
}

export { Cartesian, isCartesian, Polar, isPolar };
