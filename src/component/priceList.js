const prices = [ 1, 500, 1000, 1500, 2000, 2500 ];

const minPrice = Math.min( ...prices );
const maxPrice = Math.max( ...prices );

const rangeSize = 500;
const numberOfRanges = Math.ceil( ( maxPrice - minPrice ) / rangeSize );
export const priceRanges = Array.from( { length: numberOfRanges }, ( _, index ) => ( {
  min: minPrice + index * rangeSize,
  max: minPrice + ( index + 1 ) * rangeSize,
} ) );