var app = angular.module('myApp', []);
app.controller('MyCtrl', function($scope, $http) {
  $http.get("TP53.json").then(function (response) {
      $scope.myVariants = response.data.TP53;
      var trace1 = {
         x: [],
         y: [],
         text: [],
         // initial text -->text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
         mode: [],
         marker: {
           color:'',
           size: 0
         }
       };
       for (var i in $scope.variants)
       {
         trace1.x[i]= i;
         trace1.y[i]=i;
         trace1.text[i]=i.'CDS Mutation'+" "+i.'Mutation ID (COSM)';
         trace1.mode[i]= 'markers';
         trace1.marker[i]={color:['rgb(93, 164, 214)'],size:i.'Count'});
       }
  });
});


 /*var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
    // initial text -->text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      size: [40, 60, 80, 100]
    }
  };

  var data = [trace1];

  var layout = {
    title: 'TP53 Variants',
    showlegend: false,
    height: 600,
    width:600 };
*/
$(document).ready(function(){

Plotly.plot(document.getElementById("tester"), data, layout); })});
