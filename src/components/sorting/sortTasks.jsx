export const sortTasks = (tasks, startIndex, endIndex, sortOrder, sortBy) => {
    let sorted = [...tasks];

    if (sortBy === "username") {
        sorted.sort((a, b) =>
            sortOrder === "asc" ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username)
        );
    } else if (sortBy === "email") {
        sorted.sort((a, b) =>
            sortOrder === "asc" ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email)
        );
    } else if (sortBy === "status") {
        sorted.sort((a, b) => (sortOrder === "asc" ? a.status - b.status : b.status - a.status));
    }
    return sorted.slice(startIndex, endIndex);
};