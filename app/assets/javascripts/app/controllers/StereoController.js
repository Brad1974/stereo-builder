function StereoController($state, $stateParams, $filter, components, stereo, DataService) {

  var ctrl = this

  ctrl.components = components.data
  ctrl.receivers = ctrl.components.filter(function(x) { return x.category === "receiver" });
  ctrl.speakers = ctrl.components.filter(function(x) { return x.category === "speaker" });
  ctrl.media_players = ctrl.components.filter(function(x) { return x.category === "media_player" });


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
               category: "media_player",
               list: ctrl.media_players
             }
         ]
     }


  if ($stateParams.id)


        {
          // debugger;
          ctrl.stereo.name = stereo.data.name
          ctrl.stereo.id = stereo.data.id
          ctrl.stereo.component_attributes.forEach(function(c){
              if (stereo.data.component_attributes.filter(function(x){return x.category == c.category}).length > 0)

              {   c.brand = stereo.data.component_attributes.filter(function(x){return x.category == c.category})[0].brand;
                  c.name = stereo.data.component_attributes.filter(function(x){return x.category == c.category})[0].name;
                  c.price = stereo.data.component_attributes.filter(function(x){return x.category == c.category})[0].price;
                  c.id = stereo.data.component_attributes.filter(function(x){return x.category == c.category})[0].id;
              }
          });
        }
        // else { debugger; }


  ctrl.addStereo = function() {

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

      else

        {

            DataService.updateStereo(ctrl.stereo, ctrl.stereo.id)
            .then(function(result){
              debugger;
              // $state.go('home.show', {id: result.data.id });
              $state.go('home.stereoindex');
              // debugger;
              alert("stereo updated")
            });

        };
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
