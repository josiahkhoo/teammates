import { Component } from '@angular/core';
import { FeedbackDropdownQuestionDetails } from '../../../../types/api-output';
import { DEFAULT_DROPDOWN_QUESTION_DETAILS } from '../../../../types/default-question-structs';
import { QuestionAdditionalInfo } from './question-additional-info';

/**
 * Dropdown additional info
 */
@Component({
  selector: 'tm-dropdown-question-additional-info',
  templateUrl: './dropdown-question-additional-info.component.html',
  styleUrls: ['./dropdown-question-additional-info.component.scss'],
})
export class DropdownQuestionAdditionalInfoComponent extends QuestionAdditionalInfo<FeedbackDropdownQuestionDetails> {
  constructor() {
    super(DEFAULT_DROPDOWN_QUESTION_DETAILS());
  }
}
