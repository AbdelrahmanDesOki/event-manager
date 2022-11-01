import React from 'react'
import "rsuite/dist/rsuite.min.css";
import { Button, ButtonToolbar, ButtonGroup } from "rsuite";


export default function Information() {
  return (
    <center>
    <div>
        <h2>EVENT NAME</h2>
        <h4 style={{ color: "green" }}>    
            Event Details Page</h4>

        <div style={{ marginTop: 60, width: 600 }}>
            <ButtonToolbar>
                <ButtonGroup>
                    <Button style={{ marginRight: 30 }}>
                        Information</Button>
                    <Button style={{ marginRight: 30 }}>
                        Registerations</Button>
                    <Button style={{ marginRight: 30 }}>
                        Schedule</Button>
                    <Button style={{ marginRight: 30 }}>
                        Results</Button>
                    <Button style={{ marginRight: 30 }}>
                        Location</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    </div>
</center>
  )
}
