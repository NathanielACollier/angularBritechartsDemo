
// from: https://stackoverflow.com/questions/41317473/bootstrap-4-in-angular-2-dropdown-not-working

import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';


@Directive({
    selector: '[bootstrap4-menu-dropdown]'
})
export class Bootstrap4MenuDropDownDirective {
    isOpen: boolean = false;

    constructor(private element: ElementRef) { }

    @HostBinding('class.show') get opened() {
        return this.isOpen;
    }

    @HostListener('click') open() {
        this.isOpen = true;
        this.element.nativeElement.querySelector('.dropdown-menu').classList.add('show')
    }

    @HostListener('document:click', ['$event.target']) close(targetElement) {
        let inside: boolean = this.element.nativeElement.contains(targetElement);
        if (!inside) {
            this.isOpen = false;
            this.element.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
        }
    }

    /*
    @HostListener('mouseover') onHover() {
        window.alert("Hover worked");
    }
    */
}