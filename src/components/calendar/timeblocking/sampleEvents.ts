import type { CalendarEvent } from "./types"

export const sampleEvents: CalendarEvent[] = [
  {
    id: 1,
    title: 'Deep Work Session',
    start: new Date(2025, 6, 11, 9, 0),  // July is month 6 (0-indexed)
    end: new Date(2025, 6, 11, 10, 0),
    isFocusBlock: true,
    notes: 'Working on time blocking UI',
    color: '#E7F1DC'
  }
]