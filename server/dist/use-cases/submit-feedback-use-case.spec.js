"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const creatFeebackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({
    create: creatFeebackSpy
}, {
    sendMail: sendMailSpy
});
describe('Submit Feedback', () => {
    it('Should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: "data:image/png;base64;aubqo832u832u"
        })).resolves.not.toThrow();
        expect(creatFeebackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('Shouldnt be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: "data:image/png;base64;aubqo832u832u"
        })).rejects.not.toThrow();
    });
    it('Shouldnt be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: '',
            screenshot: "data:image/png;base64;aubqo832u832u"
        })).rejects.not.toThrow();
    });
    it('Shouldnt be able to submit a feedback without invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: 'sddsds',
            screenshot: "image.jpg"
        })).rejects.not.toThrow();
    });
});
