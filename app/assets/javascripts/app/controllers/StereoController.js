function StereoController($state, $stateParams, $filter, components, stereo, comments, DataService) {

  var ctrl = this

  ctrl.components = components.data
  ctrl.comments = comments.data
  ctrl.newcomment = ""

  var receiver = ctrl.components.filter(function(x) { return x.category === "receiver" });
  var speaker = ctrl.components.filter(function(x) { return x.category === "speaker" });
  var turntable = ctrl.components.filter(function(x) { return x.category === "turntable" });

  ctrl.list = [ receiver, speaker, turntable ]

  ctrl.stereo = { component_attributes: [ {price: "", category: "receiver"},
                                          {price: "", category: "speaker"},
                                          {price: "", category: "turntable"}
                                        ]}

  loadStereo();


// if we are on a stereo show view this function will copy info frorm the stereo json object that we resolved in through app.js
  function loadStereo(){
    if ($stateParams.id) {
    ctrl.stereo.name = stereo.data.name
    ctrl.stereo.id = stereo.data.id
    ctrl.stereo.user = stereo.data.user
    ctrl.stereo.component_attributes.forEach(function(c){
      if (stereo.data.component_attributes.filter(function(x){return x.category == c.category}).length > 0) {
        c.brand = stereo.data.component_attributes.filter(function(x){return x.category == c.category})[0].brand;
        c.name = stereo.data.component_attributes.filter(function(x){return x.category == c.category})[0].name;
        c.price = stereo.data.component_attributes.filter(function(x){return x.category == c.category})[0].price;
        c.id = stereo.data.component_attributes.filter(function(x){return x.category == c.category})[0].id;
      }
    });
  }
};


  ctrl.atLeastOne = function(){
    if ( ctrl.stereo.component_attributes.filter(function(c){return c.price != ""}).length > 0 )
    { return false }
    else
    { return true  }
  }

  ctrl.submit = function(){
    ctrl.stereo.id? ctrl.updateStereo() : ctrl.addStereo()
  }

  ctrl.submitComment = function(){
    DataService.postComment(ctrl.stereo.id, ctrl.newcomment)
    .then(function(){
      $state.go($state.$current, null, { reload: true });
      alert("comment posted!");
    })

  };

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
    }, function(error){alert("not authorized")})
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
