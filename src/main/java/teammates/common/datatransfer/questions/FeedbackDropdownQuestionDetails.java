package teammates.common.datatransfer.questions;

import java.util.ArrayList;
import java.util.List;

import teammates.common.datatransfer.attributes.FeedbackQuestionAttributes;

@SuppressWarnings({"PMD.UnusedPrivateField"})
public class FeedbackDropdownQuestionDetails extends FeedbackQuestionDetails {

    static final String QUESTION_TYPE_NAME = "Dropdown question";

    static final int DROPDOWN_MIN_NUM_OF_CHOICES = 2;

    static final String DROPDOWN_ERROR_NOT_ENOUGH_CHOICES =
            "Too little choices for " + QUESTION_TYPE_NAME + ". Minimum number of options is: ";

    static final String DROPDOWN_ERROR_INVALID_OPTION =
            " is not a valid option for the " + QUESTION_TYPE_NAME + ".";

    private List<String> dropdownChoices;

    private int numOfDropdownChoices;

    public FeedbackDropdownQuestionDetails(String questionText) {
        super(FeedbackQuestionType.DROPDOWN, questionText);
        this.dropdownChoices = new ArrayList<>();
    }

    @Override
    public boolean shouldChangesRequireResponseDeletion(FeedbackQuestionDetails newDetails) {
        return false;
    }

    @Override
    public List<String> validateQuestionDetails() {
        List<String> errors = new ArrayList<>();
        if (dropdownChoices.size() < DROPDOWN_MIN_NUM_OF_CHOICES) {
            errors.add(DROPDOWN_ERROR_NOT_ENOUGH_CHOICES
                    + DROPDOWN_MIN_NUM_OF_CHOICES + ".");
        }
        return errors;
    }

    @Override
    public List<String> validateResponsesDetails(List<FeedbackResponseDetails> responses, int numRecipients) {
        List<String> errors = new ArrayList<>();
        for (FeedbackResponseDetails response : responses) {
            FeedbackDropdownResponseDetails details = (FeedbackDropdownResponseDetails) response;
            if (!dropdownChoices.contains(details.getAnswerString())) {
                errors.add(details.getAnswerString() + " " + DROPDOWN_ERROR_INVALID_OPTION);
                errors.add(details.getAnswerString() + " " + DROPDOWN_ERROR_INVALID_OPTION);
            }
        }
        return errors;
    }

    @Override
    public String validateGiverRecipientVisibility(FeedbackQuestionAttributes feedbackQuestionAttributes) {
        return "";
    }

    @Override
    public boolean isFeedbackParticipantCommentsOnResponsesAllowed() {
        return true;
    }

    public List<String> getDropdownChoices() {
        return dropdownChoices;
    }

}
