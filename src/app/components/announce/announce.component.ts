import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Announce } from 'src/app/models/announce';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.scss']
})
export class AnnounceComponent implements OnInit {

  @Input() announce: Announce;

  constructor() { }

  ngOnInit(): void {
  }

}
