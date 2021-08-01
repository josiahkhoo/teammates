import { StringHelper } from '../../services/string-helper';
import { FeedbackDropdownQuestionDetails, FeedbackDropdownResponseDetails, FeedbackQuestionType } from '../api-output';
import { AbstractFeedbackResponseDetails } from './abstract-feedback-response-details';

/**
 * Feedback dropdown response details
 */
export class FeedbackDropdownResponseDetailsImpl
    extends AbstractFeedbackResponseDetails<FeedbackDropdownQuestionDetails>
    implements FeedbackDropdownResponseDetails {

  answer: string = '';
  questionType: FeedbackQuestionType = FeedbackQuestionType.DROPDOWN;

  constructor(apiOutput: FeedbackDropdownResponseDetails) {
    super();
    this.answer = apiOutput.answer;
  }

  getResponseCsvAnswers(_: FeedbackDropdownQuestionDetails): string[][] {
    return [[StringHelper.getTextFromHtml(this.answer)]];
  }
}
