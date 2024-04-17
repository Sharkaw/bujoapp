import LayoutGrid from './components/LayoutGrid';
import DayColumn from './components/DayColumn';

const Page = () => {
  return (
    <LayoutGrid>
      <DayColumn>Monday</DayColumn>
      <DayColumn>Tuesday</DayColumn>
      <DayColumn>Wednesday</DayColumn>
      <DayColumn>Thursday</DayColumn>
      <DayColumn>Friday</DayColumn>
      <DayColumn>Saturday</DayColumn>
      <DayColumn>Sunday</DayColumn>
    </LayoutGrid>
  );
};

export default Page;