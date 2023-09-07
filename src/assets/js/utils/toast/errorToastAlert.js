import { ToastAlert } from './index.js'

export class ErrorToastAlert extends ToastAlert {
  constructor(text) {
    super(text, "linear-gradient(to right, #b30000, #ff4d4d)")
  }
}