function StereoController($filter, components, DataService) {

  var ctrl = this

  ctrl.components = components.data
  ctrl.receivers = ctrl.components.filter(function(x) { return x.category === "receiver" });
  ctrl.speakers = ctrl.components.filter(function(x) { return x.category === "speaker" });
  ctrl.media_players = ctrl.components.filter(function(x) { return x.category === "media player" });


  ctrl.stereo = {
    name: "",
    component_attributes:
      [
          {
            brand: "",
            name: "",
            price: "",
            category: "receiver",
            list: ctrl.receivers
          },
          {
            brand: "",
            name: "",
            price: "",
            category: "speaker",
            list: ctrl.speakers
          },
          {
            brand: "",
            name: "",
            price: "",
            category: "media player",
            list: ctrl.media_players
          }
      ]
  }

  ctrl.addStereo = function() {
    ctrl.stereo.component_attributes.forEach(function(x) {delete x.list});
    DataService.postStereo(ctrl.stereo)
    .then(function(result){
      ctrl.stereo.id = result.data.id
      // $state.go('stereos.show', { id: result.data.id });
      alert("stereo created!")
    });
  };

};


angular
  .module('app')
  .controller('StereoController', StereoController);
