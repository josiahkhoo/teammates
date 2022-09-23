package teammates.common.datatransfer.questions;

public class FeedbackDropdownResponseDetails extends FeedbackResponseDetails {
    private String answer;

    public FeedbackDropdownResponseDetails() {
        super(FeedbackQuestionType.DROPDOWN);
        this.answer = "";
    }

    @Override
    public String getAnswerString() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getAnswer() {
        return answer;
    }
}
