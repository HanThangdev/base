export function convertToRawNumber(value: any) {
  return value.replace(/,/g, '')
}

export function roundDown(value: string | number, number: number) {
  return `${Math.floor(+value * 10 ** number) / 10 ** number}`
}

export const convertTimeToNumber = (time = '00:00:00') => {
  const arrTime = time.split(':').map((item) => parseInt(item))
  const [hour, minutes, seconds] = arrTime
  return (hour * 3600) + (minutes * 60) + seconds
}