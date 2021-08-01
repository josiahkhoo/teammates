import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FeedbackDropdownQuestionDetails, FeedbackDropdownResponseDetails } from '../../../../types/api-output';
import {
  DEFAULT_DROPDOWN_QUESTION_DETAILS,
  DEFAULT_DROPDOWN_RESPONSE_DETAILS,
} from '../../../../types/default-question-structs';
import { QuestionEditAnswerFormComponent } from './question-edit-answer-form';

/**
 * Dropdown question edit answer form
 */
@Component({
  selector: 'tm-dropdown-question-edit-answer-form',
  templateUrl: './dropdown-question-edit-answer-form.component.html',
  styleUrls: ['./dropdown-question-edit-answer-form.component.scss'],
})
export class DropdownQuestionEditAnswerFormComponent extends
    QuestionEditAnswerFormComponent<FeedbackDropdownQuestionDetails, FeedbackDropdownResponseDetails>
    implements OnInit, OnChanges {

  @Input()
  id: string = '';

  isDropdownOptionSelected: boolean[] = [];

  constructor() {
    super(DEFAULT_DROPDOWN_QUESTION_DETAILS(), DEFAULT_DROPDOWN_RESPONSE_DETAILS());
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.isDropdownOptionSelected = Array(this.questionDetails.numOfDropdownChoices).fill(false);
    if (this.responseDetails.answer !== '') {
      const indexOfAnswerInPreviousSubmission: number = this.questionDetails.dropdownChoices.indexOf(
          this.responseDetails.answer,
      );
      this.isDropdownOptionSelected[indexOfAnswerInPreviousSubmission] = true;
    }
  }

  updateSelectedDropdownOption(index: number): void {
    const answer: string = this.questionDetails.dropdownChoices[index];
    this.triggerResponseDetailsChangeBatch({
      answer,
    });
  }

}
