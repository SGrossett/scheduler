import React from 'react';
import PropTypes from 'prop-types';
import InterviewerListItem from './InterviewerListItem';
import 'components/InterviewerList.scss';

export default function InterviewList(props) {
  const { interviewers, onChange, value } = props;
  const interviewList = interviewers.map((interviewer) => (
    <InterviewerListItem
      key={interviewer.id}
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === value}
      setInterviewer={() => onChange(interviewer.id)}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewList}</ul>
    </section>
  );
}

InterviewList.propTypes = {
  onChange: PropTypes.func.isRequired,
  interviewers: PropTypes.array.isRequired,
};
