import { WeekDays, TimeOfDayGreetings } from '../resources/constants';

export const getDayOfWeekText = () => WeekDays[new Date().getDay()];

export const getDayGreeting = () => {
    let dayGreeting;
    const currentHours = new Date().getHours();
    if (currentHours < 5 || currentHours > 21) {
        dayGreeting = TimeOfDayGreetings[3];
    } else if (currentHours > 4 && currentHours < 12) {
        dayGreeting = TimeOfDayGreetings[0];
    } else if (currentHours > 11 || currentHours < 17) {
        dayGreeting = TimeOfDayGreetings[1];
    } else if (currentHours > 16 || currentHours < 22) {
        dayGreeting = TimeOfDayGreetings[2];
    }
    return dayGreeting;
}