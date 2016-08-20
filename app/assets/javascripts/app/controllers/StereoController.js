function StereoController($state, $stateParams, $filter, components, DataService) {

  var ctrl = this

  ctrl.components = components.data

  var receiver = ctrl.components.filter(function(x) { return x.category === "receiver" });
  var speaker = ctrl.components.filter(function(x) { return x.category === "speaker" });
  var media_player = ctrl.components.filter(function(x) { return x.category === "media_player" });

  ctrl.list = [ receiver, speaker, media_player ]

  ctrl.stereo = {
       component_attributes:
         [
             {
               brand: "",
               name: "",
               price: "",
               category: "receiver",
             },
             {
               brand: "",
               name: "",
               price: "",
               category: "speaker",
             },
             {
               brand: "",
               name: "",
               price: "",
               category: "media_player",

             }
         ]
     }

     ctrl.atLeastOne = function(){
       if ( ctrl.stereo.component_attributes.filter(function(c){return c.name != ""}).length > 0 )
         { return false }
       else
         { return true  }
      }

  ctrl.addStereo = function() {
    debugger;
    DataService.postStereo(ctrl.stereo)
    .then(function(result){
      $state.go('home.show', { id: result.data.id });
      alert("stereo created!")
    });
  }

  // ctrl.deleteStereo = function(){
  //   DataService.deleteStereo(ctrl.stereo.id)
  //   .then(function(result){
  //     alert("stereo deleted");
  //     $state.go('home.stereoindex');
  //   })
  // }

};


angular
  .module('app')
  .controller('StereoController', StereoController);
