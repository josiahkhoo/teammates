import { DropdownQuestionStatisticsCalculation } from '../../app/components/question-types/question-statistics/dropdown-question-statistics/dropdown-question-statistics-calculation';
import { FeedbackDropdownQuestionDetails, FeedbackQuestionType, QuestionOutput } from '../api-output';
import { AbstractFeedbackQuestionDetails } from './abstract-feedback-question-details';

/**
 * Feedback dropdown question details implementation
 */
export class FeedbackDropdownQuestionDetailsImpl
    extends AbstractFeedbackQuestionDetails implements FeedbackDropdownQuestionDetails {
  dropdownChoices: string[] = [];
  numOfDropdownChoices: number = 0;
  questionText: string = '';
  questionType: FeedbackQuestionType = FeedbackQuestionType.DROPDOWN;

  constructor(apiOutput: FeedbackDropdownQuestionDetails) {
    super();
    this.dropdownChoices = apiOutput.dropdownChoices;
    this.numOfDropdownChoices = apiOutput.numOfDropdownChoices;
    this.questionText = apiOutput.questionText;
    this.questionType = apiOutput.questionType;
  }

  getQuestionCsvStats(question: QuestionOutput): string[][] {
    const statsRows: string[][] = [];
    const statsCalculation: DropdownQuestionStatisticsCalculation = new DropdownQuestionStatisticsCalculation(this);
    this.populateQuestionStatistics(statsCalculation, question);
    if (statsCalculation.responses.length === 0) {
      return [];
    }
    statsCalculation.calculateStatistics();
    statsRows.push(['Choice', 'Response Count', 'Percentage (%)']);

    Object.keys(statsCalculation.answerFrequency).sort().forEach(
        (answer: string) => statsRows.push([
          answer,
          String(statsCalculation.answerFrequency[answer]),
          String(statsCalculation.percentagePerOption[answer]),
        ]));

    // generate per recipient stats
    statsRows.push([], ['Per Recipient Statistics']);

    statsRows.push([
      'Team', 'Recipient Name',
      ...Object.keys(statsCalculation.answerFrequency),
      'Total', 'Average']);

    Object.keys(statsCalculation.perRecipientResponses).sort().forEach((recipient: string) => {
      const recipientResponses: any = statsCalculation.perRecipientResponses[recipient];
      statsRows.push([
        recipientResponses.recipientTeam,
        recipientResponses.recipient,
        ...Object.keys(statsCalculation.answerFrequency)
            .map((choice: string) => String(recipientResponses.responses[choice])),
        String(recipientResponses.total),
        String(recipientResponses.average),
      ]);
    });

    return statsRows;
  }

  isParticipantCommentsOnResponsesAllowed(): boolean {
    return false;
  }

  isInstructorCommentsOnResponsesAllowed(): boolean {
    return true;
  }
}
