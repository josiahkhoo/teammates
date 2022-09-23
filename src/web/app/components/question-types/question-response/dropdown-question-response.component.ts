import { Component } from '@angular/core';
import { FeedbackDropdownQuestionDetails, FeedbackDropdownResponseDetails } from '../../../../types/api-output';
import {
  DEFAULT_DROPDOWN_QUESTION_DETAILS,
  DEFAULT_DROPDOWN_RESPONSE_DETAILS,
} from '../../../../types/default-question-structs';
import { QuestionResponse } from './question-response';

/**
 * Dropdown question response component
 */
@Component({
  selector: 'tm-dropdown-question-response',
  templateUrl: 'dropdown-question-response.component.html',
  styleUrls: ['./dropdown-question-response.component.scss'],
})
export class DropdownQuestionResponseComponent
    extends QuestionResponse<FeedbackDropdownResponseDetails, FeedbackDropdownQuestionDetails> {

  constructor() {
    super(DEFAULT_DROPDOWN_RESPONSE_DETAILS(), DEFAULT_DROPDOWN_QUESTION_DETAILS());
  }
}
