// Open-Meteo 무료 API를 통해 날씨 데이터를 비동기로 가져옵니다.[cite: 1]
export async function fetchWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`; //[cite: 1]
    
    const response = await fetch(url); //[cite: 1]
    if (!response.ok) {
        throw new Error("날씨 데이터를 가져오는데 실패했습니다.");
    }
    const data = await response.json();
    return data.current; // 현재 온도와 습도 데이터 반환
}