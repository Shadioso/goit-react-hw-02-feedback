import { Title } from './Statistics.styled';
import { StatsBox } from './Statistics.styled';
import { StatList } from './Statistics.styled';
import { StatItem } from './Statistics.styled';
const StatsToRend = ({ positivePercentage, good, bad, neutral, total }) => {
  return (
    <>
      <StatsBox>
        <Title>Statistics</Title>
        <StatList>
          <StatItem>Good: {good} </StatItem>
          <StatItem>Neutral: {neutral}</StatItem>
          <StatItem>Bad: {bad}</StatItem>
          <StatItem>Total: {total}</StatItem>
          <StatItem>
            Positive feedback: {positivePercentage ? positivePercentage : `0`}{' '}
            {`%`}
          </StatItem>
        </StatList>
      </StatsBox>
    </>
  );
};

export { StatsToRend };
