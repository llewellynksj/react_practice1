import React from 'react'
import Book from './Book'

function RenderingLists() {
    const boookList = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye',
    ]

    const book = [
        {
            title: 'to kill a mockingbird',
            author: 'harper lee',
            pages: 281
        },
        {
            title: 'the great gatsby',
            author: 'f. scott fitzgerald',
            pages: 218
        },
        {
            title: 'the catcher in the rye',
            author: 'j.d. salinger',
            pages: 234
        }
    ]
    return (
    <div>
        {boookList.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <hr />
        {
            book.map(book => {
                return <Book key={book.title} book={book} />
            })
        }
    </div>
  )
}

export default RenderingLists
