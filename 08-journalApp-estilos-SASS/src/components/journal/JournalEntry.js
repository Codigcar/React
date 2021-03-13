import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture" 
                style={{ backgroundImage:'url(https://cdn3.f-cdn.com/contestentries/1727436/15405317/5e33dd619a3ea_thumb900.jpg)',
                        backgroundSize: 'cover'  }}>
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">Mascota</p>
                <p className="journal__entry-content">Esse ut sunt quis excepteur occaecat voluptate exercitation.</p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
            

        </div>
    )
}
