export interface EventData {
    id: number;
    event_type: string;
    start_date: string;
    end_date: string;
    learning_outcomes: string;
}

export interface EventIF {
    data: EventData;
}