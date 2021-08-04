import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-toggle',
  template: `
    <div class="flex">
      <sc-tw-toggle
        containerClass="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <span
          aria-hidden="true"
          class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          sc-tw-toggle-handle
        ></span>
      </sc-tw-toggle>
      <span class="ml-3" id="annual-billing-label">
        <span class="text-sm font-medium text-gray-900">Annual billing </span>
        <span class="text-sm text-gray-500">(Save 10%)</span>
      </span>
    </div>
  `,
})
export default class ToggleComponent {}
