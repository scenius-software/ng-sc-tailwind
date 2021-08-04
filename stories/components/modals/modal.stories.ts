// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ScTailwindModule } from '../../../projects/sc-tailwind/src/lib/sc-tailwind.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ModalComponent from './modal.component';

export default {
  title: 'Example/Modal',
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [ScTailwindModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: {},
} as Meta;

const Template: Story<ModalComponent> = (args: ModalComponent) => ({
  props: args,
});

export const Modal = Template.bind({});
Modal.args = {};
