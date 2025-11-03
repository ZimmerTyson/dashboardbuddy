export default function QuoteWidget() {
  // Quote widget code here

  async function fetchData() {
    try {
      const response = await fetch('');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }


  }
  return (

    <div>
      
    </div>
  )
}