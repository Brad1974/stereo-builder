function StereoController($state, $stateParams, $filter, components, DataService) {

  var ctrl = this

  ctrl.components = components.data

  var receiver = ctrl.components.filter(function(x) { return x.category === "receiver" });
  var speaker = ctrl.components.filter(function(x) { return x.category === "speaker" });
  var media_player = ctrl.components.filter(function(x) { return x.category === "media_player" });

  ctrl.list = [ receiver, speaker, media_player ]

  ctrl.stereo = { component_attributes:
                  [ {price: "", category: "receiver"},
                    {price: "", category: "speaker"},
                    {price: "", category: "media_player"}
                  ]
                }

  ctrl.atLeastOne = function(){
    if ( ctrl.stereo.component_attributes.filter(function(c){return c.name != ""}).length > 0 )
    { return false }
    else
    { return true  }
  }

  ctrl.addStereo = function() {
    DataService.postStereo(ctrl.stereo)
    .then(function(result){
      $state.go('home.show', { id: result.data.id });
      alert("stereo created!")
    });
  }

};

angular
  .module('app')
  .controller('StereoController', StereoController);
