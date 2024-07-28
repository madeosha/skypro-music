export const formatSeconds = (seconds : number) : string => {
    // Округляем до ближайшего меньшего целого
    const flooredSeconds = Math.floor(seconds);
    // Получаем количество минут
    const minutes = Math.floor(flooredSeconds / 60);
    // Получаем оставшиеся секунды
    const remainingSeconds = flooredSeconds % 60;
    // Форматируем так, чтобы у оставшихся секунд было два знака (например, 08 вместо 8)
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
}