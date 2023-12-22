export function formatElapsedTime(dateString: string): string {
    const currentDate: Date = new Date();
    const givenDate: Date = new Date(dateString);
    const elapsedMilliseconds: number = currentDate.getTime() - givenDate.getTime();

    const elapsedSeconds: number = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes: number = Math.floor(elapsedSeconds / 60);
    const elapsedHours: number = Math.floor(elapsedMinutes / 60);
    const elapsedDays: number = Math.floor(elapsedHours / 24);
    const elapsedMonths: number = Math.floor(elapsedDays / 30);
    const elapsedYears: number = Math.floor(elapsedDays / 365);

    const formatDate = (date: Date): string => {
        const day: number = date.getDate();
        const month: number = date.getMonth() + 1; // Months are zero-based
        const year: number = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    if (elapsedSeconds < 60) {
        return `${elapsedSeconds} s ago`;
    } else if (elapsedMinutes < 60) {
        return `${elapsedMinutes} min ago`;
    } else if (elapsedHours < 24) {
        return `${elapsedHours} h ago`;
    } else if (elapsedDays < 30) {
        return `${elapsedDays} d ago`;
    } else if (elapsedMonths < 12) {
        const formattedDate: string = formatDate(givenDate);
        return `${formattedDate} - ${elapsedMonths} month(s) ago`;
    } else {
        const formattedDate: string = formatDate(givenDate);
        return `${formattedDate} - ${elapsedYears} year(s) ago`;
    }
}
