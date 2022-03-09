import React, { useState, useEffect } from "react"
import { useQuery } from "react-query"
import moment from "moment"
import {Link, useParams} from 'react-router-dom'

import {DetailsContainer, StateLabel, BackBtn, LoadingState} from './styled'
import { Container } from "../styled"

export default function IssueDetails(props) {
    const params = useParams()
    const [issueDetails, setIssueDetails] = useState({})

    const [hasFetchingError, setHasFetchingError] = useState(false)

    const { isLoading, error, data } = useQuery(`${params.id}`, () =>
        fetch(`https://api.github.com/issues/${params.id}`).then(res => {
            if (!res.ok) {
                setIssueDetails({})
                setHasFetchingError(true)
            } else {
                res.json()
            }
        }).catch((err) => {
            setHasFetchingError(true)
        })
    )

    useEffect(() => {
        if (data) {
           setIssueDetails(data)
        }
    }, [data])

    const renderDetails = () => {
        if (Object.keys(issueDetails).length > 0) {
            return (
                <>
                    <h1>
                        <Link to='/' style={{ textDecoration: 'none', color: '#c1c1c1' }}><BackBtn>←</BackBtn></Link>
                        {issueDetails.title}
                        <StateLabel type={issueDetails.state} style={{ marginLeft: '10px' }}>{issueDetails.state}</StateLabel>
                    </h1>
                    <hr/>
                    <p style={{ color: '#5b5b5b' }}>{moment(issueDetails.updated_at).format('DD MM YYYY hh:mm:ss')}</p>
                    <p>{issueDetails.body}</p>
                </>
            )
        }
    }

    const renderErrorMessage = () => {
        if (hasFetchingError || !data || !params.id) {
            return (
                <div>
                    <p style={{ textAlign: 'center', color: 'red' }}>
                      Something went wrong please try again later! 😞
                    </p>
                </div>
            )
        }
    }

    const renderLoadingState = () => {
        if (isLoading) {
            return (
                <LoadingState>
                    <div/>
                </LoadingState>
            )
        }
    }

    return (
        <Container>
            <DetailsContainer isDimmed={isLoading}>
                {renderDetails()}
                {renderLoadingState()}
                {renderErrorMessage()}
            </DetailsContainer>
        </Container>
    )
}
