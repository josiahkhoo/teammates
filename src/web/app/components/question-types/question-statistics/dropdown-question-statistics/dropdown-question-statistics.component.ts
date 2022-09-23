import { Component, OnChanges, OnInit } from '@angular/core';
import { DEFAULT_DROPDOWN_QUESTION_DETAILS } from '../../../../../types/default-question-structs';
import { SortBy } from '../../../../../types/sort-properties';
import { ColumnData, SortableTableCellData } from '../../../sortable-table/sortable-table.component';
import { DropdownQuestionStatisticsCalculation } from './dropdown-question-statistics-calculation';

/**
 * Dropdown question stats component
 */
@Component({
  selector: 'tm-dropdown-question-statistics',
  templateUrl: './dropdown-question-statistics.component.html',
  styleUrls: ['./dropdown-question-statistics.component.scss'],
})
export class DropdownQuestionStatisticsComponent extends
    DropdownQuestionStatisticsCalculation implements OnInit, OnChanges {

    // enum
  SortBy: typeof SortBy = SortBy;

  summaryColumnsData: ColumnData[] = [];
  summaryRowsData: SortableTableCellData[][] = [];
  perRecipientColumnsData: ColumnData[] = [];
  perRecipientRowsData: SortableTableCellData[][] = [];

  constructor() {
    super(DEFAULT_DROPDOWN_QUESTION_DETAILS());
  }

  ngOnInit(): void {
    this.calculateStatistics();
    this.getTableData();
  }

  ngOnChanges(): void {
    this.calculateStatistics();
    this.getTableData();
  }

  private getTableData(): void {
    this.summaryColumnsData = [
            { header: 'Choice', sortBy: SortBy.MSQ_CHOICE },
            { header: 'Response Count', sortBy: SortBy.MSQ_RESPONSE_COUNT },
            { header: 'Percentage (%)', sortBy: SortBy.MSQ_PERCENTAGE },
    ];

    this.summaryRowsData = Object.keys(this.answerFrequency).map((key: string) => {
      return [
                { value: key },
                { value: this.answerFrequency[key] },
                { value: this.percentagePerOption[key] },
      ];
    });

    this.perRecipientColumnsData = [
            { header: 'Team', sortBy: SortBy.MSQ_TEAM },
            { header: 'Recipient Name', sortBy: SortBy.MSQ_RECIPIENT_NAME },
            { header: 'Total', sortBy: SortBy.MSQ_WEIGHT_TOTAL },
            { header: 'Average', sortBy: SortBy.MSQ_WEIGHT_AVERAGE },
    ];

    this.perRecipientRowsData = Object.keys(this.perRecipientResponses).map((key: string) => {
      return [
                { value: this.perRecipientResponses[key].recipientTeam },
                { value: this.perRecipientResponses[key].recipient },
                { value: this.perRecipientResponses[key].total },
                { value: this.perRecipientResponses[key].average },
      ];
    });
  }
}
