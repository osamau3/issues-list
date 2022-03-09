import * as React from "react";
import { IssuesList } from "../Issues";
import { Container } from "../styled"

export default function LandingPage(props) {
    return (
        <Container>
            <h1 data-testid="landingPageTitle">Issues List</h1>
            <p data-testid="landingPageDesc">This is the issues list for rails app.</p>
            <IssuesList />
        </Container>
    )
}
