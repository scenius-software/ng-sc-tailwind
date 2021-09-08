import { Component, OnInit } from '@angular/core';
import { MyModalComponent } from 'projects/sc-tailwind-demo/src/app/pages/Modal/modal-toggle/modal-toggle/test-modal.component';
import { ScTailwindModalService } from 'projects/sc-tailwind/src/public-api';
import { ScTailwindNotificationService } from 'projects/sc-tailwind/src/public-api';

@Component({
  selector: 'app-modal-toggle',
  templateUrl: './modal-toggle.component.html',
  styleUrls: ['./modal-toggle.component.scss']
})
export class ModalToggleComponent implements OnInit {

  constructor(private modalService: ScTailwindModalService, private toastService: ScTailwindNotificationService) { }

  ngOnInit(): void {
  }

  showModal() {
    const modalRef = this.modalService.open(MyModalComponent, { title: 'My dynamic title', message: 'My dynamic message' });
  }

  showToast() {
    const toastRef = this.toastService.info('test', 'test2');
  }

}
