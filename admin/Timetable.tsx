import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const courses = [
  {
    title: '자료구조',
    days: ['월', '수', '금'],
    startDate: '2025-04-01',
    endDate: '2025-06-30',
    startTime: [10, 0],
    endTime: [11, 0],
    color: '#1f77b4', // 파란색
  },
  {
    title: '알고리즘',
    days: ['화', '목', '토'],
    startDate: '2025-04-15',
    endDate: '2025-06-30',
    startTime: [10, 30],
    endTime: [11, 30],
    color: '#2ca02c', // 초록색
  },
  {
    title: '빅데이터',
    days: ['화', '목', '월', '수', '금'],
    startDate: '2025-04-07',
    endDate: '2025-06-30',
    startTime: [12, 30],
    endTime: [1, 30],
    color: 'red', // 초록색
  },
  // 더 추가 가능
];

const dayMap = {
  '일': 0,
  '월': 1,
  '화': 2,
  '수': 3,
  '목': 4,
  '금': 5,
  '토': 6,
};

const CustomEvent = ({ event }) => {
  const start = new Date(event.start);
  const starttimeStr = `${start.getHours().toString().padStart(2, '0')}:${start.getMinutes().toString().padStart(2, '0')}`;
  const end = new Date(event.end);
  const endtimeStr = `${end.getHours().toString().padStart(2, '0')}:${end.getMinutes().toString().padStart(2, '0')}`;
  const timeStr = `${starttimeStr} ~ ${endtimeStr}`;


  return (
    <span style={{
      height: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
    }}>
      <strong>{timeStr}</strong> - {event.title}
    </span>
  );
};

function generateAllEventsWithOverlapCheck(courses) {
  const events = [];
  const conflicts = [];

  const isOverlap = (a, b) =>
    a.start < b.end && b.start < a.end;

  for (const course of courses) {
    const {
      title, days, startDate, endDate,
      startTime, endTime, color,
    } = course;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const dayNumbers = days.map(day => dayMap[day]);

    let current = new Date(start);
    while (current <= end) {
      const currentDay = current.getDay();
      if (dayNumbers.includes(currentDay)) {
        const startDateTime = new Date(
          current.getFullYear(),
          current.getMonth(),
          current.getDate(),
          startTime[0],
          startTime[1]
        );
        const endDateTime = new Date(
          current.getFullYear(),
          current.getMonth(),
          current.getDate(),
          endTime[0],
          endTime[1]
        );

        const newEvent = {
          title,
          start: startDateTime,
          end: endDateTime,
          color,
        };

        // 겹침 체크
        const conflict = events.find(existing => isOverlap(existing, newEvent));
        if (conflict) {
          conflicts.push({ with: conflict, conflict: newEvent });
        } else {
          events.push(newEvent);
        }
      }

      current.setDate(current.getDate() + 1);
    }
  }

  return { events, conflicts };
}

const { events: myEventsList, conflicts } = generateAllEventsWithOverlapCheck(courses);

if (conflicts.length > 0) {
  console.warn("수업 시간 겹침 감지됨:");
  conflicts.forEach(({ conflict, with: conflictWith }) => {
    console.log(`"${conflict.title}" 수업과 "${conflictWith.title}" 수업이 겹칩니다.`);
  });
}



const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      views={['month']} // ['month', 'week', 'day']
      //defaultView="month"
      style={{ height: 700 }}
      popup
      components={{
        event: CustomEvent,
      }}
      eventPropGetter={(event) => ({
        style: {
          backgroundColor: event.color || '#3174ad',
          color: 'white',
          borderRadius: '4px',
          border: 'none',
        },
      })}
    />
  </div>



);

function Timetable() {
  return (
    <div>
      <MyCalendar />
      {conflicts.length > 0 && (
        <div style={{ color: 'red', padding: '1rem' }}>
          ⚠️ 겹치는 수업이 {conflicts.length}개 존재합니다!
          "{conflicts[0].conflict.title}" 수업과 겹칩니다.
        </div>
      )}
    </div>

      

  );
}

export default Timetable;
