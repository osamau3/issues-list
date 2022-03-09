import styled from 'styled-components'


export const TableContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`
export const StyledTable = styled.table`
    margin-top: 10px;
    border: 1px solid #b9b9b9;
    border-radius: 5px;
    width: 100%;
    position: relative;
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 320px;
  thead tr {
    text-align: left;
    background: #f5f5f5;
    border-bottom: 1px solid #c9c9c9;
  }
  th, td {
    padding: 12px 15px;
  }
    td button {
  text-transform: uppercase;
  outline: 0;
  border: 0;
  padding: 15px;
  margin-bottom: 0;
  min-width: 30%;
  border-radius: 4px;
  background-color: white;
  color: black;
  font-size: 14px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  }

  td button:hover {
  background-color: #e7e7e7;
  }

  tbody tr {
  border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
  background-color: var(--table-snd-color);
  }

  div {
  display: none;
  }
  ::after {
   display: ${({ isDimmed }) => isDimmed ? 'block' : 'none'};
   content: "";
   position: absolute;
   width: 100%;
   height: 100%;
   background: #000;
   opacity: .2;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
  }

  @media only screen and (max-width: 768px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
    display: block;
  }

    thead tr {
    position: absolute;
    display: none;
  }

    tr {
    border: 1px solid #ccc;
  }

    td {
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    text-align: left;
  }

    td button {
    width: auto;
  }

    div {
    display: block;
  }
}
`

export const LoadingState = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
 div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 4px;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
  }
 div:nth-child(1) {
  animation-delay: -0.45s;
  }
 div:nth-child(2) {
  animation-delay: -0.3s;
  }
 div:nth-child(3) {
  animation-delay: -0.15s;
  }
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

export const PagingContainer = styled.div`
  float: right;
  margin-bottom: 10px;
  button {
    border: 1px solid #b9b9b9;
    border-radius: 3px;
    background: #fbfbfb;
    box-shadow: none;
    color: #2c2c2c;
    margin-left: 5px;
    padding: 7px 20px;
    font-weight: bold;
    cursor: pointer;
     &:disabled {
      opacity: .5;
      cursor: not-allowed;
    }
  }
`

export const FilterContainer = styled.div`
  float: left;
  margin-bottom: 10px;
  button {
    border: 1px solid #b9b9b9;
    border-radius: 3px;
    background: #fbfbfb;
    box-shadow: none;
    color: #2c2c2c;
    margin-left: 5px;
    padding: 7px 20px;
    font-weight: bold;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      background: #dddddd;
    }
  }
`

export const StateLabel = styled.span`
  display: inline-block;
  background: ${({ type }) => type === 'open' ? 'green' : 'red'};
  padding: 4px 10px;
  border-radius: 3px;
  text-align: center;
  font-size: 13px;
  color: #fff;
  font-weight: bold;
`

export const SearchContainer = styled.div`
  width: 50%;
  margin: 15px 0;
   @media only screen and (max-width: 768px) {
    width: 100%;
   }
   input {
    height: 40px;
    width: 100%;
    padding: 0 10px;
    border: 1px solid #b9b9b9;
    border-radius: 3px;
   }
`
export const DetailsContainer = styled.div`
    margin-top: 30px;
    border: 1px solid #b9b9b9;
    border-radius: 5px;
    width: 100%;
    position: relative;
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 320px;
    padding: 20px;
    ::after {
       display: ${({ isDimmed }) => isDimmed ? 'block' : 'none'};
       content: "";
       position: absolute;
       width: 100%;
       height: 100%;
       background: #000;
       opacity: .2;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;
    }
`

export const BackBtn = styled.span`
  font-size: 24px;
  margin-right: 10px;
`
