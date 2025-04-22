import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-logger',
  standalone: true,
  imports: [],
  templateUrl: './logger.component.html',
  styleUrl: './logger.component.css'
})
export class LoggerComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() data: string = '';

  constructor() {
    console.log('Constructor 🔧');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges 🔁', changes);
  }

  ngOnInit() {
    console.log('ngOnInit ✅');
  }

  ngDoCheck() {
    console.log('ngDoCheck 🔍');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit 📦');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked ✅📦');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit 👁️');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked 👁️✅');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy 💣');
  }

}
