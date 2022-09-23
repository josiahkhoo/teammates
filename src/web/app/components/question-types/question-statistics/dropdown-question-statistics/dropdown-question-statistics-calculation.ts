import { Directive } from '@angular/core';
import {
  FeedbackDropdownQuestionDetails, FeedbackDropdownResponseDetails,
} from '../../../../../types/api-output';
import { QuestionStatistics } from '../question-statistics';

/**
 * Class to calculate stats for mcq question.
 */
@Directive()
// tslint:disable-next-line:directive-class-suffix
export class DropdownQuestionStatisticsCalculation
    extends QuestionStatistics<FeedbackDropdownQuestionDetails, FeedbackDropdownResponseDetails> {

  answerFrequency: Record<string, number> = {};
  percentagePerOption: Record<string, number> = {};
  perRecipientResponses: Record<string, any> = {};

  constructor(question: FeedbackDropdownQuestionDetails) {
    super(question);
  }

  calculateStatistics(): void {
    this.answerFrequency = {};
    this.percentagePerOption = {};
    this.perRecipientResponses = {};

    for (const answer of this.question.dropdownChoices) {
      this.answerFrequency[answer] = 0;
    }
    for (const response of this.responses) {
      const key: string = response.responseDetails.answer;
      this.answerFrequency[key] = (this.answerFrequency[key] || 0) + 1;
    }

    for (const answer of Object.keys(this.answerFrequency)) {
      const percentage: number = 100 * this.answerFrequency[answer] / this.responses.length;
      this.percentagePerOption[answer] = +percentage.toFixed(2);
    }
  }
}
