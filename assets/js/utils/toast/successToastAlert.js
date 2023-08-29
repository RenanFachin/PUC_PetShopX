import { ToastAlert } from './index.js'

export class SuccessToastAlert extends ToastAlert {
  constructor(text) {
    super(text, "linear-gradient(to right, #6633cc, #a64dff)")
  }
}