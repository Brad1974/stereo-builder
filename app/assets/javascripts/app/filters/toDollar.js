function ToDollar($filter) {
  return function (str) {
    return $filter('currency')(str / 100);
  }

}

angular
  .module('app')
  .filter('toDollar', ToDollar);
