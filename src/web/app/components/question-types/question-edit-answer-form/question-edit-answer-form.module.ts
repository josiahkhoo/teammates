import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RichTextEditorModule } from '../../rich-text-editor/rich-text-editor.module';
import { TeammatesCommonModule } from '../../teammates-common/teammates-common.module';
import { ConstsumOptionsQuestionEditAnswerFormComponent } from './constsum-options-question-edit-answer-form.component';
import {
  ConstsumRecipientsQuestionEditAnswerFormComponent,
} from './constsum-recipients-question-edit-answer-form.component';
import { ContributionPointDescriptionPipe } from './contribution-point-description.pipe';
import { ContributionQuestionEditAnswerFormComponent } from './contribution-question-edit-answer-form.component';
import { DropdownQuestionEditAnswerFormComponent } from './dropdown-question-edit-answer-form.component';
import { McqQuestionEditAnswerFormComponent } from './mcq-question-edit-answer-form.component';
import { MsqQuestionEditAnswerFormComponent } from './msq-question-edit-answer-form.component';
import { NumScaleQuestionEditAnswerFormComponent } from './num-scale-question-edit-answer-form.component';
import { RankOptionsQuestionEditAnswerFormComponent } from './rank-options-question-edit-answer-form.component';
import { RankRecipientsQuestionEditAnswerFormComponent } from './rank-recipients-question-edit-answer-form.component';
import { RubricQuestionEditAnswerFormComponent } from './rubric-question-edit-answer-form.component';
import { TextQuestionEditAnswerFormComponent } from './text-question-edit-answer-form.component';

/**
 * Module for all different types of question edit answer forms.
 */
@NgModule({
  declarations: [
    ContributionQuestionEditAnswerFormComponent,
    TextQuestionEditAnswerFormComponent,
    McqQuestionEditAnswerFormComponent,
    NumScaleQuestionEditAnswerFormComponent,
    ContributionPointDescriptionPipe,
    MsqQuestionEditAnswerFormComponent,
    RankOptionsQuestionEditAnswerFormComponent,
    RankRecipientsQuestionEditAnswerFormComponent,
    RubricQuestionEditAnswerFormComponent,
    ConstsumOptionsQuestionEditAnswerFormComponent,
    ConstsumRecipientsQuestionEditAnswerFormComponent,
    DropdownQuestionEditAnswerFormComponent,
  ],
  exports: [
    ContributionQuestionEditAnswerFormComponent,
    TextQuestionEditAnswerFormComponent,
    McqQuestionEditAnswerFormComponent,
    NumScaleQuestionEditAnswerFormComponent,
    ContributionPointDescriptionPipe,
    MsqQuestionEditAnswerFormComponent,
    RankOptionsQuestionEditAnswerFormComponent,
    RankRecipientsQuestionEditAnswerFormComponent,
    RubricQuestionEditAnswerFormComponent,
    ConstsumOptionsQuestionEditAnswerFormComponent,
    ConstsumRecipientsQuestionEditAnswerFormComponent,
    DropdownQuestionEditAnswerFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RichTextEditorModule,
    TeammatesCommonModule,
    NgbDropdownModule,
  ],
})
export class QuestionEditAnswerFormModule {
}
