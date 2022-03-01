import React from 'react';
import ClayForm from '@clayui/form';

const ErrorFeedback = (error) => {
	return (
		<ClayForm.FeedbackGroup>
			<ClayForm.FeedbackItem>
				{error}
			</ClayForm.FeedbackItem>
		</ClayForm.FeedbackGroup>
	);
};

export default ErrorFeedback;
