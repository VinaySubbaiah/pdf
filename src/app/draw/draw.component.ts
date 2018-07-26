import { Component, OnInit } from '@angular/core';

declare const L;

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  constructor() { }

  pdfSrc: string;
  pf: boolean = false;

  onFileSelected() {
    this.pf = true;
    let $img: any = document.querySelector('#file');
    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
      reader.readAsArrayBuffer($img.files[0]);
    }
  }



  // L.featureGroup([marker1, marker2, polyline])
  // .bindPopup('Hello world!')
  // .on('click', function() { alert('Clicked on a member of the group!'); })
  // .addTo(map);




  ma: any;
  ngOnInit() {
    this.ma = L.map('map').setView([43.64701, 79.39425], 15);
    L.tileLayer(' ',
      {
        attribution: '&copy;<a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
      }).addTo(this.ma);
      
    var drawnItems = new L.FeatureGroup().bindPopup('hello world.')
    .on('click', function(){
      //alert('clicked on a member group!');
    });
    this.ma.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems
      }
    });
    this.ma.addControl(drawControl);



    this.ma.on('draw:created', function (e) {
      var type = e.layerType,
        layer = e.layer;
      drawnItems.addLayer(layer);
    });

    this.ma.on('draw:editstart', function () {
      console.log('edit start');
    });

    this.ma.on('draw:edited', function (e) {
      var layers = e.layers;
      layers.eachLayer(function (layer) {
        console.log('draw edited');
      });
    });

    this.ma.on('draw:editstop', function () {
      console.log('edit stop');
    });
  }
  print12() {
    window.print();
  }
  rectangle :any;
  
  // draw(){
  //   this.rectangle = L.rectangle([[37.767202, -122.456709], 
  //     [37.766560, -122.455316]]).addTo(this.ma);


  //   var drawnItems = new L.FeatureGroup().bindPopup('hello world.')
  //   .on('click', function(){
  //     //alert('clicked on a member group!');
  //   });

  //   this.rectangle.addLayer(drawnItems);
  //     this.ma.on('draw:created', function (e) {
  //       var type = e.layerType,
  //         layer = e.layer;
  //       drawnItems.addLayer(layer);
  //     });
  // }
}
