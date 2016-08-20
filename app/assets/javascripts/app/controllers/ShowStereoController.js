function ShowStereoController($state, $stateParams, $filter, stereo, DataService) {

  var ctrl = this
  ctrl.stereo = stereo.data


};


angular
  .module('app')
  .controller('ShowStereoController', ShowStereoController);
