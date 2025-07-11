export type CalendarEvent ={ 
    id: number
    title: string
    start: Date
    end: Date
    isFocusBlock: boolean
    notes?: string
}