import React, { useState, useEffect } from "react"
import moment from 'moment'
import { useQuery } from 'react-query'
import { Link } from "react-router-dom"

import { StyledTable,
    LoadingState,
    PagingContainer,
    FilterContainer,
    StateLabel,
    SearchContainer,
    TableContainer,
} from "./styled"


export default function IssuesList(props) {
    const [page, setPage] = useState(1)
    const [dataList, setDataList] = useState([])
    const [status, setStatus] = useState('all')
    const [hasFetchingError, setHasFetchingError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [searchText, setSearchText] = useState('')

    const { isLoading, error, data } = useQuery(`${page}${status}${searchText}`, () =>
        fetch(`https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=10&state=${status}${(searchText) && `&labels=${searchText}`}`).then(res => {
            if (!res.ok) {
                setDataList([])
                setHasFetchingError(true)
            } else {
                return res.json()
            }
        }).catch((err) => {
            setHasFetchingError(true)
            setErrorMessage(err)
        })
    )


    useEffect(() => {
        if (Array.isArray(data)) {
            setDataList(data)
            setHasFetchingError(false)
        }
    }, [data])

    const handleStatus = (status) => {
        setPage(1)
        setStatus(status)
    }

    const handleSearch = (e) => {
        setTimeout(() => {
            setPage(1)
            setSearchText(e.target.value)
        }, 700)
    }

    const renderList = () => {
        if (dataList) {
            return (
                <tbody>
                {
                    dataList.map(({ title, id, updated_at, state }) => {
                        return (
                            <tr id={id}>
                                <td><Link to={`issues/${id}`}>{title}</Link></td>
                                <td>{moment(updated_at).fromNow()}</td>
                                <td><StateLabel type={state}>{state}</StateLabel></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            )
        }
    }

    const renderSearch = () => {
        return (
            <SearchContainer>
                <input type="search" data-testid="search"  placeholder="Search with issues labels..." onChange={handleSearch} />
            </SearchContainer>
        )
    }

    const renderErrorMessage = () => {
        if (hasFetchingError) {
            return (
                <tbody>
                    <tr>
                        <td data-testid="errorMessage" colSpan={3} style={{ textAlign: 'center', color: 'red' }}>
                            Something went wrong please try again later! 😞
                        </td>
                    </tr>
                    </tbody>
            )
        }
    }

    const renderLoadingState = () => {
        if (isLoading) {
           return (
               <LoadingState data-testid="loadingState">
                   <div/>
               </LoadingState>
           )
        }
    }

    const renderDataTable = () => {
        return (
            <TableContainer>
                {renderLoadingState()}
                <StyledTable isDimmed={isLoading}>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Updated at</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    {renderList()}
                    {renderErrorMessage()}
                </StyledTable>
            </TableContainer>
        )
    }

    return (
        <>
            {renderSearch()}
            <PagingContainer>
                <button disabled={page === 1 || dataList.length <= 0} onClick={() => setPage(page - 1)}>prev</button>
                <button disabled={dataList.length <= 0} onClick={() => setPage(page + 1)}>next</button>
            </PagingContainer>
            <FilterContainer>
                <span>Filters: </span>
                <button data-testid="allStatusFilter" disabled={status === 'all'} onClick={() => handleStatus('all')}>All</button>
                <button disabled={status === 'open'} onClick={() => handleStatus('open')}>Open</button>
                <button disabled={status === 'closed'} onClick={() => handleStatus('closed')}>Closed</button>
            </FilterContainer>
            {renderDataTable()}
        </>
    )
}
