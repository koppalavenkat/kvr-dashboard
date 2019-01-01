import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  public modalRef: BsModalRef;
  public userDetails: any ;
  public resetUrl: String ;

  constructor(
    private router: Router) { }

  public imageChangedEvent: any = '';
  public croppedImage: any = 'assets/img/user2-160x160.jpg';
  public error: any;

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('user_info'));
  }
  onLogout(){
    this.router.navigate(['/signin']);
  }

}
