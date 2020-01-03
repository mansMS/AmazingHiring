import { getVacanciesDataURL } from '../services/sourceURLs';

export const getVacanciesData = async () => {
  try {
    const response = await fetch(getVacanciesDataURL);
    if (!response.ok) {
      throw new Error(`Ошибка загрузки ${response.status}`)
    } else {
      return await response.json();
    }
  } catch (error) {
    console.error('Ошибка:', error);
    return ('Ошибка при загрузке');
  }
}