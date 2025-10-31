type WidgetType = 'time' | 'weather' | 'todo' | 'quote'

export interface Widget {
  id: string;
  title: string;
  type: WidgetType;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface WeatherData {
  temp: number;
  condition: string;
  location: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface Time {
  hour: number;
  minute: number;
  second: number;
}