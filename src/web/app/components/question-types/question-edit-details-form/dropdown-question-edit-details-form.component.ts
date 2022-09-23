import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FeedbackDropdownQuestionDetails } from '../../../../types/api-output';
import { DEFAULT_DROPDOWN_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionEditDetailsFormComponent } from './question-edit-details-form.component';

/**
 * Dropdown question edit details form component
 */
@Component({
  selector: 'tm-dropdown-question-edit-details-form',
  templateUrl: './dropdown-question-edit-details-form.component.html',
  styleUrls: ['./dropdown-question-edit-details-form.component.scss', './cdk-drag-drop.scss'],
})
export class DropdownQuestionEditDetailsFormComponent
    extends QuestionEditDetailsFormComponent<FeedbackDropdownQuestionDetails> {

  constructor() {
    super(DEFAULT_DROPDOWN_QUESTION_DETAILS());
  }

  onDropdownOptionDropped(event: CdkDragDrop<string[]>): void {
    if (!this.isEditable) {
      return;
    }
    const newOptions: string[] = this.model.dropdownChoices.slice();
    moveItemInArray(newOptions, event.previousIndex, event.currentIndex);
    const fieldsToUpdate: any = {};
    fieldsToUpdate.dropdownChoices = newOptions;
    this.triggerModelChangeBatch(fieldsToUpdate);
  }

  increaseNumberOfOptions(): void {
    const fieldsToUpdate: any = {};
    fieldsToUpdate.numOfDropdownChoices = this.model.numOfDropdownChoices + 1;
    const newOptions: string[] = this.model.dropdownChoices.slice();
    newOptions.push('');
    fieldsToUpdate.dropdownChoices = newOptions;
    this.triggerModelChangeBatch(fieldsToUpdate);
  }

  onDropdownOptionDeleted(event: number): void {
    const fieldsToUpdate: any = {};
    fieldsToUpdate.numOfDropdownChoices = this.model.numOfDropdownChoices - 1;
    const newOptions: string[] = this.model.dropdownChoices.slice();
    newOptions.splice(event, 1);
    fieldsToUpdate.dropdownChoices = newOptions;
    this.triggerModelChangeBatch(fieldsToUpdate);
  }

  onDropdownOptionEntered(event: string, index: number): void {
    const newOptions: string[] = this.model.dropdownChoices.slice();
    newOptions[index] = event;
    this.triggerModelChange('dropdownChoices', newOptions);
  }

  trackDropdownOption(index: number): string {
    return index.toString();
  }
}
