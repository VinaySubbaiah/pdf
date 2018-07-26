import { Component, OnInit } from '@angular/core';

import { isGeneratedFile } from '@angular/compiler/src/aot/util';

import { PDFDocumentFactory, PDFDocumentWriter, drawText } from 'pdf-lib';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  pdfSrc: string;

  pf: boolean=false;

  onFileSelected() {
    this.pf=true;
    let $img: any = document.querySelector('#file');
   
    if (typeof (FileReader) !== 'undefined') {

      let reader = new FileReader();

      reader.onload = (e: any) => {

        this.pdfSrc = e.target.result;
        

      };
      reader.readAsArrayBuffer($img.files[0]);
    }
  }
 
  FileModification(){


  }

  ngOnInit() {

  }

}




  // draw1(canvas){
  //   //ev : MouseEvent;
  //     var mouse : any = {
  //       x: 0,
  //       y: 0,
  //       startX: 0,
  //       startY: 0
  //   };
  //    let setMousePosition = function(e : MouseEvent) {
  //     var ev = e;
  //     if (ev.pageX) { //Moz
  //         mouse.x = ev.pageX + ev.clientX;
  //         mouse.y = ev.pageY + ev.clientY;
  //       } 
  //     };
  //     var element = null;    
  //     canvas.onmousemove = function (e) {
  //         setMousePosition(e);
  //         if (element !== null) {
  //             element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
  //             element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
  //             element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
  //             element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
  //         }
  //     }
  //     canvas.click = function (e) {
  //       if (element !== null) {
  //           element = null;
  //           canvas.style.cursor = "default";
  //           console.log("finsihed.");
  //       } else {
  //           console.log("begun.");
  //           mouse.startX = mouse.x;
  //           mouse.startY = mouse.y;
  //           element = document.createElement('div');
  //           element.className = 'rectangle'
  //           element.style.left = mouse.x + 'px';
  //           element.style.top = mouse.y + 'px';
  //           canvas.appendChild(element)
  //           canvas.style.cursor = "crosshair";
  //       }
  //     }
  //   }
  // }


//   private captureEvents(canvasEl: HTMLCanvasElement) {
//     observable
//       fromEvent(canvasEl, 'mousedown')
//       switchMap((e) => {
//         return Observable.throw(Error)
//           fromEvent(canvasEl, 'mousemove')
//           takeUntil(fromEvent(canvasEl, 'mouseup'))
//           pairwise()
//       })
//       .subscribe((res: [MouseEvent, MouseEvent]) =>  {

//         const rect = canvasEl.getBoundingClientRect();

//         const prevPos = {
//           x: res[0].clientX - rect.left,
//           y: res[0].clientY - rect.top
//         };

//         const currentPos = {
//           x: res[1].clientX - rect.left,
//           y: res[1].clientY - rect.top
//         };
        
//         this.drawOnCanvas(prevPos, currentPos);
//         }
//       );
//   }
//   private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
//     if (!this.cx) { return; }
//     this.cx.beginPath();
//     if (prevPos) {
//       this.cx.moveTo(prevPos.x, prevPos.y); 
//       this.cx.lineTo(currentPos.x, currentPos.y);
//       this.cx.stroke();
//     }
//   }
// }

    //return this.captureEvents;

    // const drawSVG = SVG('canvasSVG').size(400, 400);
    // const rectSVG = drawSVG.rect(500, 500);
    // rectSVG.draggable();

  //  const drawSVG = new SVG('canvasSVG').size('100%', '100%')
  // // drawSVG.rect().draw();
  // let rect = drawSVG.rect().attr({fill: '#fff', stroke: '#000', 'stroke-width': 1});





  // draw12(){ 
  //   //   this.cx.rect(20, 20, 150, 100);
  //   //   if(this.cx.isPointInPath(20, 50)){
  //   //   this.cx.stroke();
  //   // };
  // }



  // var drawing = new SVG('rectNoClick').size('100%', '100%');
  //       var rect = drawing.rect();

  //       drawing.on('mousedown', function(e){
  //           rect.draw(e);
  //       }, false);

  //       drawing.on('mouseup', function(e){
  //           rect.draw('stop', e);
  //       }, false);
        
  //       rect.on('drawstop', function(){
  //           // remove listener
  //       });