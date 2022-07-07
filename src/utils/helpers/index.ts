export const getItemImage = (icon: string, big = false): string => {
  const imageSize = big ? '4x' : '2x';

  return `https://openweathermap.org/img/wn/${icon}@${imageSize}.png`;
};

export const getItemTemp = (temp: number): string => {
  return `${temp.toFixed(1)}°C`;
};
