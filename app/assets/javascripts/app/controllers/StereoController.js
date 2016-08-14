function StereoController($filter, components, DataService) {

  var ctrl = this

  ctrl.components = components.data
  ctrl.receivers = ctrl.components.filter(function(x) { return x.category === "receiver" });
  ctrl.speakers = ctrl.components.filter(function(x) { return x.category === "speaker" });
  ctrl.media_players = ctrl.components.filter(function(x) { return x.category === "media player" });


  ctrl.stereo = {
    name: "2nd trial stereo",
    component_attributes:
      [
          {
            brand: "2nd trial rec brand",
            name: "2nd trial rec name",
            price: "1000",
            category: "receiver",
            list: ctrl.receivers
          },
          {
            brand: "2nd trial speaker brand",
            name: "2nd trial speaker name",
            price: "2000",
            category: "speaker",
            list: ctrl.speakers
          },
          {
            brand: "2nd trial media brand",
            name: "2nd trial media name",
            price: "500",
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

debugger;

};


angular
  .module('app')
  .controller('StereoController', StereoController);
