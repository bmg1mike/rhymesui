

export const COLUMNS = [
    {
        Header: " ",
        accessor:  "id"
    },
    {
        Header: "Book Title",
        accessor: "title"
    },
    {
        Header: "Author",
        accessor: "authorName"
    },
    {
        Header: "Date Uploaded",
        accessor: "createdDate",
        Cell: ({ cell: { value } }: Record< string, any>) => { 
            const date = value.split('T')[0]
            return (
                <>
                    {date} 
                </>
            )
        }
    },
    {
        Header: "Quantity Available",
        accessor: "numberOfPages"
    },
    {
        Header: "Price in Naira",
        accessor: "price"
    },
    {
        Header: " ",
        accessor: "phone"
    }
]

