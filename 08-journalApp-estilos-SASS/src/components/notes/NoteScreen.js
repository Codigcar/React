import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input className="notes__title-input" type="text" placeholder="Some awsome title" />
                <textarea className="notes__textarea" placeholder="What happend today">                </textarea>
                <div className="notes__img">
                    <img src="https://as.com/meristation/imagenes/2019/08/05/noticias/1565010078_514445_1565010136_noticia_normal.jpg" alt="img" />
                </div>
            </div>

        </div>
    )
}
