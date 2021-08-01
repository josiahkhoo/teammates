import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StatusMessageService } from '../../../../../services/status-message.service';

/**
 * Dropdown component
 */
@Component({
  selector: 'tm-dropdown-field',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {

  @Input()
  isEditable: boolean = false;

  @Input()
  numberOfDropdownChoices: number = 1;

  @Input()
  text: string = '';

  @Input()
  index: number = 0;

  @Output()
  elementDeleted: EventEmitter<any> = new EventEmitter();

  @Output()
  dropdownText: EventEmitter<any> = new EventEmitter();

  constructor(private statusMessageService: StatusMessageService) {
  }

  deleteDropdownOption(): void {
    if (this.numberOfDropdownChoices > 2) {
      this.elementDeleted.emit(this.index);
    } else {
      this.statusMessageService.showErrorToast('There must be at least two dropdown options.');
    }
  }

  onDropdownOptionEntered(text: string): void {
    this.dropdownText.emit(text);
  }
}
