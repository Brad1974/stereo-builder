function StereoController($state, $stateParams, $filter, components, stereo, DataService) {

  var ctrl = this

  ctrl.components = components.data
  ctrl.receivers = ctrl.components.filter(function(x) { return x.category === "receiver" });
  ctrl.speakers = ctrl.components.filter(function(x) { return x.category === "speaker" });
  ctrl.media_players = ctrl.components.filter(function(x) { return x.category === "media player" });


  if ($stateParams.id)

    { ctrl.stereo = stereo.data;}

  else {

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
  };

  ctrl.addStereo = function() {

    var filled = ctrl.stereo.component_attributes.filter(function(c){return c.name != ""}).length

    if (filled === 0) { alert ("need to add at least one component") }

    else {

      ctrl.stereo.component_attributes.forEach(function(x) {delete x.list});

      if (!ctrl.stereo.id)

      {

        DataService.postStereo(ctrl.stereo)
        .then(function(result){
          ctrl.stereo.id = result.data.id
          $state.go('home.show', { id: result.data.id });
          alert("stereo created!")
        });
      }

      else {

        DataService.updateStereo(ctrl.stereo, ctrl.stereo.id)
        .then(function(result){
          $state.go('home.show', {id: result.data.id });
          alert("stereo updated")
        });

      }
    }
  };

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
