import QuoteWidget from "./widgets/QuoteWidget";
import TimeWidget from "./widgets/TimeWidget";
import TodoWidget from "./widgets/TodoWidget";
import WeatherWidget from "./widgets/WeatherWidget";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="text-4xl">My Personal Dashboard</h1>
      <div className="widgets-grid">
        <TimeWidget />
        <QuoteWidget />
        <TodoWidget />
        <WeatherWidget />
      </div>
      
    </div>
  )
}