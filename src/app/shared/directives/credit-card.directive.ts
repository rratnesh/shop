import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor() { }

  @HostBinding('style.backgroundColor')
  border: string;

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    const parts = [];

    for (let i = 0; i < trimmed.length; i += 4) {
      parts.push(trimmed.substr(i, 4));
    }

    input.value = parts.join(' ');

    this.border = '';

    if (/[^\d]/.test(trimmed)) {
      this.border = 'red';
    }
  }
}
