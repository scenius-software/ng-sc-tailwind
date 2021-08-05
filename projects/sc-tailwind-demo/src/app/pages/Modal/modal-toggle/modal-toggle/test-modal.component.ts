import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Modal } from 'projects/sc-tailwind/src/lib/services/modal-service-modals/modal.model';
// sc-tw-modal animateInCss="opacity-100 translate-y-0 sm:scale-100"
@Component({
  template: `
    <div [ngClass]="{'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95': !isOpen,
  'opacity-100 translate-y-0 sm:scale-100' : isOpen}" class="sm:translate-y-0 sm:scale-95 inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
      <div>
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <!-- Heroicon name: outline/check -->
          <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
            Payment successful
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-5 sm:mt-6">
        <button (click)="cancel()" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
          Go back to dashboard
        </button>
      </div>
    </div>
  `,
})
export class MyModalComponent extends Modal {

  title!: string;
  message!: string;

  onInjectInputs(inputs: any): void {
    this.title = inputs.title;
    this.message = inputs.message;
  }

  save(): void {
    this.close('saving');
  }

  cancel(): void {
    this.dismiss('canceling');
  }

}