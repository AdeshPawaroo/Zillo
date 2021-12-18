export const fetchSaves = () => (
    $.ajax({
        method: "GET",
        url: "/api/saves"
    })
)

export const fetchSave = (saveId) => (
    $.ajax({
        method: "GET",
        url: `/api/saves/${saveId}`
    })
)

export const createSave = (save) => (
    $.ajax({
        method: "POST",
        url: "/api/saves",
        data: {
            save
        }
    })
)

export const deleteSave = (saveId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/saves/${saveId}`
    })
) 