function StereoController($state, $stateParams, $filter, components, stereo, DataService) {

  var ctrl = this

  ctrl.components = components.data

  var receiver = ctrl.components.filter(function(x) { return x.category === "receiver" });
  var speaker = ctrl.components.filter(function(x) { return x.category === "speaker" });
  var turntable = ctrl.components.filter(function(x) { return x.category === "turntable" });

  ctrl.list = [ receiver, speaker, turntable ]

  loadStereo()

  function loadStereo() {
    if (stereo == "") { ctrl.stereo = { component_attributes:
                        [ {price: "", category: "receiver"},
                          {price: "", category: "speaker"},
                          {price: "", category: "turntable"}
                        ]
                      }
                    }
    else ctrl.stereo = stereo.data
  }

  ctrl.atLeastOne = function(){
    if ( ctrl.stereo.component_attributes.filter(function(c){return c.price != ""}).length > 0 )
    { return false }
    else
    { return true  }
  }

  ctrl.submit = function(){
    ctrl.stereo.id? ctrl.updateStereo() : ctrl.addStereo()
  }

  ctrl.addStereo = function() {
    DataService.postStereo(ctrl.stereo)
    .then(function(result){
      $state.go('home.show', { id: result.data.id });
      alert("stereo created!")
    });
  }

  ctrl.updateStereo = function() {
    DataService.updateStereo(ctrl.stereo)
    .then(function(result){
      $state.go($state.$current, null, { reload: true });
      alert("stereo updated!")
    })
  }

  ctrl.deleteStereo = function(){
    DataService.deleteStereo(ctrl.stereo.id)
    .then(function(result){
      alert("stereo deleted");
      $state.go('home.stereoindex');
    })
  }

};

angular
  .module('app')
  .controller('StereoController', StereoController);
