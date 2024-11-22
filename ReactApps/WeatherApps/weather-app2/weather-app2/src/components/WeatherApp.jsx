import  { useState } from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    const { city } = data;
    setLoading(true);
    setError('');
    setWeatherData(null);

    const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiURL);
      const weather = await response.json();

      if (weather.cod === 200) {
        setWeatherData(weather);
      } else {
        setError(weather.message);
      }
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError('Unable to fetch weather data.');
    }
    

    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter city"
          {...register('city', { required: true })}
        />
        {errors.city && <p style={{ color: 'red' }}>City is required</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div style={{ marginTop: '20px' }}>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default App;
