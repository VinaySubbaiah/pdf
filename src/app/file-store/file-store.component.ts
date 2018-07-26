
import { Component, ViewChild, ElementRef, AfterViewInit,EventEmitter } from '@angular/core';
import { Observable, fromEvent, observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators'
import { switchMap } from 'rxjs/operators';
import { pairwise } from 'rxjs/operators';
import { interpolation1 } from '@angular/core/src/render3/instructions';

declare const SVG: any;
@Component({
  selector: 'app-file-store',
  templateUrl: './file-store.component.html',
  styleUrls: ['./file-store.component.css']
})
export class FileStoreComponent implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;

  private ctx : CanvasRenderingContext2D;
  private mousedrag = new EventEmitter();
  private mouseup   = new EventEmitter<MouseEvent>();
  private mousedown = new EventEmitter<MouseEvent>();
  private mousemove = new EventEmitter<MouseEvent>();

  constructor() { }

  ngAfterViewInit() {

    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d');


    

 }

  CanvasClick(){
    this.ctx.beginPath();
    this.ctx.moveTo(25, 25);
    this.ctx.lineTo(105, 25);
    this.ctx.lineTo(25, 105);
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(125, 125);
    this.ctx.lineTo(125, 45);
    this.ctx.lineTo(45, 125);
    this.ctx.closePath();
    this.ctx.stroke();
  }

 captureEvents(){
    document.getElementById('canvasSVG').style.height = '100vh';
    var drawing = new SVG('canvasSVG').size('100%', '100%');
    var rect = drawing.rect();

    drawing.on('mousedown', function(e){
        rect.draw(e);
    }, true);

    drawing.on('mouseup', function(e){
        rect.draw(e);
    }, true);
    rect.on('drawstop', function(e){
      rect.draw('stop');
    });
 }
 
 captureEventsS(){  
    document.getElementById('canvasSVGS').style.height = '100vh';
    var drawing = new SVG('canvasSVGS').size('100%', '100%');
    var rect = drawing.rect();
  
    drawing.on('mousedown', function(e){
        rect.draw(e);
    }, true);
  
    drawing.on('mouseup', function(e){
        rect.draw(e);
    }, true);
    rect.on('drawstop', function(){
      rect.draw('stop');
    });
    return this;
   }

captureEventsL(){
  document.getElementById('canvasSVGL').style.height = '100vh';
  var drawing = new SVG('canvasSVGL').size('100%', '100%');
  var rect = drawing.rect();

  drawing.on('mousedown', function(e){
      rect.draw(e);
  }, false);

  drawing.on('mouseup', function(e){
      rect.draw(e);
  }, false);
  rect.on('drawstop', function(){
    rect.draw('stop');
    });
 }

 captureEventsX(){
    document.getElementById('canvasSVGXL').style.height = '100vh';
    var drawing = new SVG('canvasSVGXL').size('100%', '100%');
    var rect = drawing.rect();

    drawing.on('mousedown', function(e){
        rect.draw(e);
    }, true);

    drawing.on('mouseup', function(e){
        rect.draw(e);
    }, true);
    rect.on('drawstop', function(){});
 }
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

  onClick( ev : MouseEvent ) {
    console.log("x:" + ev.clientX);
    console.log(ev.pageX);
  }

  onPrint(){
    window.print();
  }
}